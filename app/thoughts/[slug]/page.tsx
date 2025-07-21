import React from "react";
import { getAllThoughts, getThoughtBySlug } from "@/lib/thoughtsRetriever";
import ReactMarkdown from "react-markdown";
import "./markdown.css";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import ShareButtons from "./shareButtons";
import Link from "next/link";
import Image from "next/image";
import FeedbackForm from "./feedbackForm";
import type { Metadata } from "next";
import TranslateButton from "./translateButton";
import { Suspense } from "react";

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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Header section */}
        <header className="text-center mb-12">
          <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 group">
            <Link href="/" passHref>
              <Image
                src="/favicon.png"
                alt="Omar's avatar"
                fill
                className="rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
              />
            </Link>
          </div>

          <div className="mb-6">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
              thought.type === 'Article' ? 'bg-blue-100 text-blue-800' :
              thought.type === 'Post' ? 'bg-green-100 text-green-800' :
              thought.type === 'Answer' ? 'bg-purple-100 text-purple-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {thought.type === 'Article' ? '📚' : thought.type === 'Post' ? '✍️' : thought.type === 'Answer' ? '💡' : '📄'} {thought.type}
            </span>
          </div>

          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            {thought.title}
          </h1>

          <time className="text-gray-600 text-lg font-medium">
            {new Date(thought.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>

          {thought.translate && (
            <div className="mt-6">
              <Suspense>
                <TranslateButton slug={thought.slug}></TranslateButton>
              </Suspense>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div id="react-markdown" className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {thought.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <ShareButtons
            title={thought.title}
            summary={thought.summary}
            slug={thought.slug}
          />

          <div className="mt-8 pt-8 border-t border-gray-200">
            <FeedbackForm />
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {thought.previousSlug ? (
              <Link
                href={`/thoughts/${thought.previousSlug}`}
                className="group flex-1 p-4 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div>
                    <span className="text-sm text-gray-500 block">Previous</span>
                    <span className="text-gray-900 font-medium group-hover:text-gray-700 transition-colors">
                      {thought.previousTitle}
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
            
            {thought.nextSlug ? (
              <Link
                href={`/thoughts/${thought.nextSlug}`}
                className="group flex-1 p-4 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-center justify-end">
                  <div className="text-right">
                    <span className="text-sm text-gray-500 block">Next</span>
                    <span className="text-gray-900 font-medium group-hover:text-gray-700 transition-colors">
                      {thought.nextTitle}
                    </span>
                  </div>
                  <svg className="w-5 h-5 ml-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </nav>
      </article>
    </main>
  );
}
