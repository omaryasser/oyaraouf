"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

export default function Ask() {
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzqNdQb90npRi2BRnBpXb1w0Rxq9rZbG5CZN19nP6KNLOiaFnNM4ija8-w2sQYmA6g/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (question.trim().length === 0) {
        toast.error("The question cannot be empty");
        return;
      }
      if (question.trim().length > 10000) {
        toast.error("The question is too long");
        return;
      }

      // Start loading
      setIsLoading(true);

      const origin = "oyaraouf.com Ask Page";
      const response = await fetch(APPS_SCRIPT_URL, {
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
    } catch (err: any) {
      toast.error(`Something went wrong when adding your question/email`);
    } finally {
      // Stop loading regardless of success or error
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w">
      {/* Main content container */}
      <main className="max-w w-full text-center">
        <section className="flex w-full items-center bg-white p-8">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`}
                alt="Omar's avatar"
                fill
                className="rounded-full object-cover"
              />
            </Link>
          </div>

          <h2 className="flex-1 font-bold text-3xl text-center px-8 py-4">
            Ask me anything 🤔
          </h2>

          {/* Placeholder image on the right (hidden) to keep layout symmetrical */}
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`}
              alt="Omar's avatar"
              fill
              className="rounded-full object-cover"
              hidden={true}
            />
          </div>
        </section>

        {/* Ask Me Anything section */}
        <section className="flex max-w flex-col items-center bg-white text-black">
          <div className="flex flex-col items-center">
            <ToastContainer />
            <p className="max-w-3xl">
              Feel free to ask me anything! If I know the answer, I'll be happy
              to respond.
            </p>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              cols={50}
            />

            <p className="max-w-xl pt-4 px-4">
              <b>Optionally</b>, if you want me to notify you when I post the
              answer (and for future updates), add your email here <b>or</b>{" "}
              check my social channels for updates.
            </p>

            <textarea
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={1}
              cols={30}
            />

            {/* Conditionally render button or loading spinner */}
            {isLoading ? (
              /* Simple Tailwind spinner */
              <div className="m-4 px-8 py-2 border border-black rounded flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 mr-2"></div>
                Sending...
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                className="m-4 px-8 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors"
              >
                Send
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
