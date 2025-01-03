"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import { Thought } from "@/lib/thoughtsRetriever";

type ThoughtsListingProps = {
  thoughts: Thought[];
};

export default function ThoughtsList({ thoughts }: ThoughtsListingProps) {
  const [visibleCount, setVisibleCount] = useState(5);

  const showMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

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

      {/* List of thoughts */}
      <div className="space-y-4 max-w-3xl pb-8 px-8">
        {thoughts.slice(0, visibleCount).map((thought) => (
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

            {thought.summary && (
              <div className="prose max-w-none mt-4 text-center">
                <ReactMarkdown>{thought.summary}</ReactMarkdown>
              </div>
            )}

            <div className="mt-4 max-w flex flex-row items-center justify-center">
              <Link className=" max-w" href={`/thoughts/${thought.slug}`}>
                <button className="mt-2 px-16 py-2 border border-grey rounded hover:bg-grey hover:text-white transition-colors">
                  Read
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
      {visibleCount < thoughts.length && (
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
