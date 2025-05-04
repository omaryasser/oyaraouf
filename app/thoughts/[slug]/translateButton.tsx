"use client";
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
import { useSearchParams } from "next/navigation";

type TranslateButtonProps = {
  slug: string;
};
export default function TranslateButton({ slug }: TranslateButtonProps) {
  const searchParams = useSearchParams(); // This gives you access to query parameters

  const inTranslatedPage =
    searchParams.has("_x_tr_hist") ||
    searchParams.has("_x_tr_hl") ||
    searchParams.has("_x_tr_tl") ||
    searchParams.has("_x_tr_sl");

  if (inTranslatedPage) {
    return null;
  }

  return (
    <div>
      {
        <div className="flex justify-center">
          <a
            href={`https://translate.google.com/translate?sl=ar&tl=en&u=${encodeURIComponent(
              `https://oyaraouf.com/thoughts/${slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors"
          >
            Translate to English
          </a>
        </div>
      }
    </div>
  );
}
