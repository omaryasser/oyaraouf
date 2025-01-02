import React from "react";
import { getAllThoughts, getThoughtBySlug } from "@/lib/thoughtsRetriever";
import ReactMarkdown from "react-markdown";
import "./markdown.css";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import ShareButtons from "./shareButtons";
import Link from "next/link";
import Image from "next/image";

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
    <main className="mx-w py-8 px-4 bg-white flex flex-col items-center">
      <article className="max-w-3xl flex flex-col items-center">
        <section className="flex w-full items-center bg-white">
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

          <h2 className="flex-1 font-bold text-3xl text-center px-8 py-4">
            {thought.title}
          </h2>

          {/* Placeholder image on the right (hidden) to keep layout symmetrical */}
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src="/favicon.png"
              alt="Omar's avatar"
              fill
              className="rounded-full object-cover"
              hidden={true}
            />
          </div>
        </section>

        <p className="text-xs text-gray-600 mb-4 text-center">{thought.date}</p>

        <div id="react-markdown" className="prose max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
          >
            {thought.content}
          </ReactMarkdown>
        </div>
        <ShareButtons
          title={thought.title}
          summary={thought.summary}
          slug={thought.slug}
        />
        <div className="max-w w-full flex flex-row">
          <div className="flex-1">
            {thought.previousSlug && (
              <div className="text-left">
                <Link href={`/thoughts/${thought.previousSlug}`}>
                  <span>Previous Thought: </span>
                  <u>{thought.previousSlug}</u>
                </Link>
              </div>
            )}
          </div>
          <div className="flex-1">
            {thought.nextSlug && (
              <div className="text-right">
                <Link href={`/thoughts/${thought.nextSlug}`}>
                  <span>Next thought: </span>
                  <u>{thought.nextSlug}</u>
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
