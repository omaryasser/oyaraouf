import React from "react";
import { getAllThoughts, getThoughtBySlug } from "@/lib/thoughtsRetriever";
import ReactMarkdown from "react-markdown";
import "./markdown.css";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from 'rehype-raw'
import ShareButtons from "./shareButtons";
import Link from "next/link";
import Image from "next/image";
import FeedbackForm from "./feedbackForm";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const thoughts = getAllThoughts();
  return thoughts.map((thought) => ({
    slug: thought.slug,
  }));
}

type ThoughtDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ThoughtDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const thought = getThoughtBySlug(slug);
  if (!thought) {
    return {
      title: "Thought not found",
      description: "Sorry, this thought doesn’t exist or has been removed.",
    };
  }

  const fullUrl = `https://oyaraouf.com/thoughts/${slug}`;

  return {
    title: `${thought.title} - Omar Yasser Morsi`,
    description:
      thought.summary ||
      "Personal website of Omar Yasser Morsi. Read articles, answers, and posts about software engineering, career, and life.",
    keywords: [
      "Omar Yasser Morsi",
      "software engineering",
      "thoughts",
      "Q&A",
      "articles",
      "posts",
      "career",
    ],
    openGraph: {
      type: "article",
      url: fullUrl,
      title: `${thought.title} - Omar Yasser Morsi`,
      description:
        thought.summary ||
        "Personal website of Omar Yasser Morsi. Read articles, answers, and posts about software engineering, career, and life.",
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
      title: `${thought.title} - Omar Yasser Morsi`,
      description:
        thought.summary ||
        "Personal website of Omar Yasser Morsi. Read articles, answers, and posts about software engineering, career, and life.",
      images: ["https://oyaraouf.com/favicon.png"],
      creator: "@oyaraouf", // or your own Twitter handle
    },
  };
}

export default async function ThoughtDetailPage({
  params,
}: ThoughtDetailPageProps) {
  const { slug } = await params;
  const thought = getThoughtBySlug(slug);

  if (!thought) {
    return <div className="text-center py-10">Thought not found.</div>;
  }
  return (
    <main className="max-w-3xl mx-auto py-8 px-4 bg-white flex flex-col items-center">
      <article className="flex flex-col items-center w-full">
        <section className="flex flex-col w-full items-center bg-white mb-6">
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

          <h1 className="flex-1 font-bold text-3xl px-4 text-center py-4">
            {thought.title}
          </h1>
        </section>

        <p className="text-xs text-gray-600 mb-4 text-center">
          {thought.date}
        </p>


        {thought.translate && (
          <div className="flex justify-center">
            <a
              href={`https://translate.google.com/translate?sl=ar&tl=en&u=${encodeURIComponent(
                `https://oyaraouf.com/thoughts/${thought.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors"
            >
              Translate to English
            </a>
          </div>
        )}

        <div id="react-markdown" className="prose max-w-none text-black">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {thought.content}
          </ReactMarkdown>
        </div>

        <ShareButtons
          title={thought.title}
          summary={thought.summary}
          slug={thought.slug}
        />

        <FeedbackForm />


        <div className="w-full flex flex-row justify-between mt-8">
          {thought.previousSlug ? (
            <div className="flex flex-1 flex-col items-center">
              <span className="text-sm text-center">Previous</span>
              <Link
                href={`/thoughts/${thought.previousSlug}`}
                className="text-sm text-blue-500 hover:underline text-center"
              >
                {thought.previousTitle}
              </Link>
            </div>
          ) : (
            <div></div>
          )}
          {thought.nextSlug ? (
            <div className="flex flex-1 flex-col items-center">
              <span className="text-sm">Next</span>
              <Link
                href={`/thoughts/${thought.nextSlug}`}
                className="text-sm text-blue-500 hover:underline text-center"
              >
                {thought.nextTitle}
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </article>
    </main>
  );
}
