"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import { Thought } from "@/lib/thoughtsRetriever";
import "./animations.css";

type ThoughtsListingProps = {
  thoughts: Thought[];
};

// Helper function to clean content for preview
function getCleanPreview(content: string, maxLength: number = 150): string {
  // Remove HTML tags
  const withoutTags = content.replace(/<[^>]*>/g, '');
  
  // Remove markdown frontmatter if it exists
  const withoutFrontmatter = withoutTags.replace(/^---[\s\S]*?---\s*/, '');
  
  // Trim whitespace and normalize spaces
  const trimmed = withoutFrontmatter.trim().replace(/\s+/g, ' ');
  
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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 text-black flex flex-col items-center">
      {/* Header section */}
      <section className="flex flex-col w-full items-center mb-8 animate-fade-in">
        <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 mb-6 group">
          <Link href="/" passHref>
            <Image
              src="/favicon.png"
              alt="Omar's avatar"
              fill
              className="rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
            />
          </Link>
        </div>

        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 leading-tight py-2">
          Thoughts 💭
        </h1>
        <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl">
          Explore articles, posts, and answers on software engineering, career advice, and life insights.
        </p>
      </section>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 p-4">
        <button
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            filter === "" 
              ? "bg-gray-800 text-white shadow-lg hover:bg-gray-700 focus:ring-gray-500" 
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 focus:ring-gray-300"
          }`}
          onClick={() => handleFilter("")}
        >
          All
        </button>
        <button
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            filter === "Article" 
              ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:ring-blue-500" 
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 focus:ring-blue-300"
          }`}
          onClick={() => handleFilter("Article")}
        >
          📚 Articles
        </button>
        <button
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            filter === "Post" 
              ? "bg-green-600 text-white shadow-lg hover:bg-green-700 focus:ring-green-500" 
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 focus:ring-green-300"
          }`}
          onClick={() => handleFilter("Post")}
        >
          ✍️ Posts
        </button>
        <button
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            filter === "Answer" 
              ? "bg-purple-600 text-white shadow-lg hover:bg-purple-700 focus:ring-purple-500" 
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 focus:ring-purple-300"
          }`}
          onClick={() => handleFilter("Answer")}
        >
          💡 Answers
        </button>
      </div>

      {/* List of thoughts */}
      <div className="grid gap-6 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {filteredThoughts.slice(0, visibleCount).map((thought, index) => (
          <article
            key={thought.slug}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    thought.type === 'Article' ? 'bg-blue-100 text-blue-800' :
                    thought.type === 'Post' ? 'bg-green-100 text-green-800' :
                    thought.type === 'Answer' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {thought.type === 'Article' ? '📚' : thought.type === 'Post' ? '✍️' : thought.type === 'Answer' ? '💡' : '📄'} {thought.type}
                  </span>
                </div>
                <time className="text-sm text-gray-500 font-medium">
                  {new Date(thought.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200">
                {thought.title}
              </h2>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {thought.summary ? (
                    <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                      <ReactMarkdown>{thought.summary}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">
                      {getCleanPreview(thought.content, 150)}
                    </p>
                  )}
                </div>
                
                <div className="flex-shrink-0 lg:ml-6">
                  <Link href={`/thoughts/${thought.slug}`}>
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-xl hover:from-gray-700 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                      Read More
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {visibleCount < filteredThoughts.length && (
        <div className="mt-12 mb-8">
          <button
            onClick={showMore}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
          >
            <span className="mr-2">Load More</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      )}
    </main>
  );
}
