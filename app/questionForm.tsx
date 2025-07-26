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

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      closeForm();
    }
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
        className="group relative inline-flex items-center mt-6 px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-grey transition-all duration-300"
      >
        <span className="mr-2">Ask Me Anything</span>
        <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      {isFormOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <div className="bg-white text-gray-900 rounded-2xl w-full max-w-2xl p-8 relative shadow-2xl transform transition-all duration-300 scale-100">
              <button
                onClick={closeForm}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Close Question Form"
              >
                <FaTimes size={20} />
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ask Me Anything 🤔</h2>
                <p className="text-gray-600">
                  Feel free to ask me anything! If I know the answer, I'll be happy to post it on one of my social channels.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="question" className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                    rows={5}
                    placeholder="What would you like to know? Ask about software engineering, career advice, or anything else..."
                    required
                    ref={questionRef}
                  />
                </div>

                <div>
                  <label htmlFor="question-email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="question-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="you@example.com"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Optional:</span> Get notified when I post the answer and receive future updates.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-green-500 hover:text-white hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Submit Question"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
