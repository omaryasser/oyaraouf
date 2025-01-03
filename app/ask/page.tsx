import Image from "next/image";
import Link from "next/link";
import QuestionForm from "./questionForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Me Anything",
  description: "Ask me anything about software engineering, career, or people.",
  keywords: [
    "Omar Yasser Morsi",
    "software engineering",
    "Q&A",
    "answers",
    "posts",
    "career",
  ],
  authors: [{ name: "Omar Yasser Morsi" }],
  creator: "Omar Yasser Morsi",
  publisher: "Omar Yasser Morsi",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://oyaraouf.com/ask",
    title: "Ask Me Anything",
    description:
      "Ask me anything about software engineering, career, or people.",
    siteName: "oyaraouf.com",
    images: [
      {
        url: "https://oyaraouf.com/favicon.png",
        width: 512,
        height: 512,
        alt: "Omar Yasser Morsi favicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask Me Anything",
    description:
      "Ask me anything about software engineering, career, or people.",
    images: ["https://oyaraouf.com/favicon.png"],
    creator: "@oyaraouf",
  },
};

export default function Ask() {
  return (
    <div className="max-w">
      {/* Main content container */}
      <main className="bg-white py-8 px-4 max-w w-full text-center">
        <section className="flex flex-col w-full items-center">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/favicon.png"
                alt="Omar's avatar"
                fill
                className="rounded-full object-cover"
              />
            </Link>
          </div>

          <h2 className="flex-1 font-bold text-2xl px-4 text-center  py-4">
            Ask Me Anything 🤔
          </h2>
        </section>

        <QuestionForm />
      </main>
    </div>
  );
}
