"use client";

import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function QuestionForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const questionRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const QUESTION_APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzqNdQb90npRi2BRnBpXb1w0Rxq9rZbG5CZN19nP6KNLOiaFnNM4ija8-w2sQYmA6g/exec";

  const openQuestionForm = () => setIsFormOpen(true);
  const closeForm = () => {
    setIsFormOpen(false);
    setQuestion("");
    setEmail("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (question.trim().length === 0) {
        toast.error("Question cannot be empty");
        return;
      }
      if (question.trim().length > 10000) {
        toast.error("Question is too long");
        return;
      }

      setIsLoading(true);

      const origin = "oyaraouf.com Home Page";
      const response = await fetch(QUESTION_APPS_SCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ question, email, origin }),
      });

      const data = await response.json();

      if (!response.ok || !data.result || data.result !== "success") {
        throw new Error(data.message || "Request failed");
      }
      toast.success(
        "The question has been recorded successfully! Follow my updates to view the response!",
        {
          autoClose: 4000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: true,
        }
      );
      setQuestion("");
      setEmail("");
      closeForm();
    } catch (err: any) {
      toast.error("Something went wrong when adding your question/email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        onClick={openQuestionForm}
        className="m-4 px-8 py-2 border border-white bg-grey rounded hover:bg-white hover:text-grey transition-colors"
      >
        Ask Me Anything
      </button>
      {isFormOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black rounded-lg w-11/12 max-w-lg p-6 relative">
              <button
                onClick={closeForm}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close Question Form"
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-semibold mb-4">Ask Me Anything</h2>

              <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="feedback" className="mb-2">
                  Feel free to ask me anything! If I know the answer, I'll be
                  happy to respond.
                </label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-grey"
                  rows={4}
                  placeholder="Enter your question here..."
                  required
                  ref={questionRef}
                />

                <label htmlFor="question-email" className="mb-2">
                  <p className="max-w-xl pt-4 px-4">
                    <b>Optionally</b>, if you want me to notify you when I post
                    the answer (and for future updates), add your email here{" "}
                    <b>or</b> check my social channels for updates.
                  </p>
                </label>
                <input
                  type="email"
                  id="question-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-grey"
                  placeholder="you@example.com"
                />

                <button
                  type="submit"
                  className="m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Submit Question"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
