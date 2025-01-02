"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

type ShareProps = {
  title: string;
  summary: string | null;
  slug: string;
};

export default function ShareButtons({ title, summary, slug }: ShareProps) {
  const pageUrl = `https://oyaraouf.com/thoughts/${slug}`;
  const shareText = `Check this post: ${title}\n\n${summary}\n\nRead more at: ${pageUrl}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    pageUrl
  )}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert("Copied!");
    } catch (error) {
      alert("Failed to copy!");
    }
  };

  return (
    <div className="flex gap-4 mt-4 mb-4">
      <div className="flex justify-center items-center pt-4 gap-6">
        <button onClick={handleCopy}>
          <IoMdShare
            className="text-2xl hover:text-black transition-colors border-white"
            size={20}
          />
        </button>
        <Link href={linkedInShareUrl} target="_blank">
          <FaLinkedinIn
            className="text-2xl hover:text-black transition-colors border-white"
            size={20}
          />
        </Link>
        <Link href={twitterShareUrl} target="_blank">
          <FaTwitter
            className="text-2xl hover:text-black transition-colors"
            size={20}
          />
        </Link>
      </div>
    </div>
  );
}
