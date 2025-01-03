"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

export default function FeedbackForm() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const FEEDBACK_APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwIJnQ63_bajZ95BBXVHJB3GP9PZo8-fthJSJrM-FVs7gbnti6cxP8Dx4ljWKea7__PDg/exec";

  const openFeedbackModal = () => setIsFeedbackOpen(true);
  const closeFeedbackModal = () => {
    setIsFeedbackOpen(false);
    setFeedback("");
    setEmail("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (feedback.trim().length === 0) {
        toast.error("Feedback cannot be empty");
        return;
      }
      if (feedback.trim().length > 10000) {
        toast.error("Feedback is too long");
        return;
      }

      // Start loading
      setIsLoading(true);

      const origin = pathname;
      const response = await fetch(FEEDBACK_APPS_SCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ feedback, email, origin }),
      });

      const data = await response.json();

      if (!response.ok || !data.result || data.result !== "success") {
        throw new Error(data.message || "Request failed");
      }
      toast.success("Thank you for your feedback!", {
        autoClose: 4000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: true,
      });
      setFeedback("");
      setEmail("");
      closeFeedbackModal();
    } catch (err: any) {
      toast.error("Something went wrong while submitting your feedback.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        onClick={openFeedbackModal}
        className="m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors"
      >
        Send Me Feedback
      </button>
      {isFeedbackOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black rounded-lg w-11/12 max-w-lg p-6 relative">
              <button
                onClick={closeFeedbackModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close Feedback Modal"
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-semibold mb-4">Send Me Feedback</h2>

              <form onSubmit={handleSubmit} className="flex flex-col">
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-grey"
                  rows={4}
                  placeholder="Enter your feedback here..."
                  required
                />

                <button
                  type="submit"
                  className="m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Submit Feedback"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
