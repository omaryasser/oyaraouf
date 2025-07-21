"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import { Thought } from "@/lib/thoughtsRetriever";

type ThoughtsListingProps = {
  thoughts: Thought[];
};

// Helper function to clean content for preview
function getCleanPreview(content: string, maxLength: number = 100): string {
  // Remove HTML tags
  const withoutTags = content.replace(/<[^>]*>/g, '');
  
  // Remove markdown frontmatter if it exists
  const withoutFrontmatter = withoutTags.replace(/^---[\s\S]*?---\s*/, '');
  
  // Trim whitespace
  const trimmed = withoutFrontmatter.trim();
  
  // Get substring and add ellipsis if needed
  return trimmed.length > maxLength 
    ? trimmed.substring(0, maxLength) + "..."
    : trimmed;
}

export default function ThoughtsList({ thoughts }: ThoughtsListingProps) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [filter, setFilter] = useState("");

  const showMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleFilter = (type: string) => {
    setFilter(type);
    setVisibleCount(5);
  };

  const filteredThoughts = thoughts.filter(
    (thought) => filter === "" || thought.type === filter
  );

  return (
    <main className="mx-w bg-white py-8 text-black flex flex-col items-center">
      {/* Header section */}
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
          Thoughts 💭
        </h2>
      </section>

      {/* Filter buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 border border-grey rounded ${
            filter === "" ? "bg-grey text-white" : ""
          }`}
          onClick={() => handleFilter("")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 border border-grey rounded ${
            filter === "Article" ? "bg-grey text-white" : ""
          }`}
          onClick={() => handleFilter("Article")}
        >
          Articles
        </button>
        <button
          className={`px-4 py-2 border border-grey rounded ${
            filter === "Post" ? "bg-grey text-white" : ""
          }`}
          onClick={() => handleFilter("Post")}
        >
          Posts
        </button>
        <button
          className={`px-4 py-2 border border-grey rounded ${
            filter === "Answer" ? "bg-grey text-white" : ""
          }`}
          onClick={() => handleFilter("Answer")}
        >
          Answers
        </button>
      </div>

      {/* List of thoughts */}
      <div className="space-y-4 max-w-3xl pb-8 px-8">
        {filteredThoughts.slice(0, visibleCount).map((thought) => (
          <article
            key={thought.slug}
            className="p-4 max-w-5xl border-4 border-grey rounded-xl bg-white"
          >
            <div className="flex items-center justify-center flex-row pb-4">
              <div className="flex justify-center">
                <span className="inline-block bg-grey text-white text-xs font-semibold mx-4 px-2 py-1 rounded">
                  {thought.type}
                </span>
              </div>
              <p className="text-center text-xs text-gray-600">
                {thought.date}
              </p>
            </div>
            <h2 className="text-center text-xl font-bold">{thought.title}</h2>
            <div className="flex flex-row items-center justify-between max-w">
              {thought.summary && (
                <div className="prose max-w-none text-lg mt-4 mr-4 text-left">
                  <ReactMarkdown>{thought.summary}</ReactMarkdown>
                </div>
              )}
              {!thought.summary && (
                <div className="prose max-w-none mt-4 text-lg mr-4 text-left">
                  {getCleanPreview(thought.content)}
                </div>
              )}
              <div className="mt-4 max-w justify-self-end	">
                <Link className=" max-w" href={`/thoughts/${thought.slug}`}>
                  <button className="mt-2 px-4 py-2 border border-grey rounded hover:bg-grey hover:text-white transition-colors">
                    Read
                  </button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {visibleCount < filteredThoughts.length && (
        <div className="m-4">
          <button
            onClick={showMore}
            className="px-8 py-2 text-center border border-grey rounded hover:bg-grey hover:text-white transition-colors animate-bounce"
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
}
