// app/privacy/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Omar Yasser Morsi",
  description:
    "Privacy Policy for Omar Yasser Morsi's personal website. Learn about my data collection practices and how I protect your information.",
  keywords: [
    "Privacy Policy",
    "Omar Yasser Morsi",
    "Data Protection",
    "Personal Website",
    "Email Collection",
    "Unsubscribe",
  ],
  authors: [{ name: "Omar Yasser Morsi" }],
  creator: "Omar Yasser Morsi",
  publisher: "Omar Yasser Morsi",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://oyaraouf.com/privacy",
    title: "Privacy Policy - Omar Yasser Morsi",
    description:
      "Understand the privacy practices of Omar Yasser Morsi's personal website, including data collection and user rights.",
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
    title: "Privacy Policy - Omar Yasser Morsi",
    description:
      "Learn about the privacy practices of Omar Yasser Morsi's personal website, including how I handle your data.",
    images: ["https://oyaraouf.com/favicon.png"],
    creator: "@oyaraouf",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/favicon.png"
              alt="Omar's avatar"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </Link>
          <h1 className="ml-4 text-3xl font-bold">Privacy Policy</h1>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-3xl mx-auto">
        <section className="mb-6">
          <p className="mb-4">
            Welcome to <strong>oyaraouf.com</strong>. I am committed to
            protecting your privacy and ensuring that your personal information
            is handled in a safe and responsible manner.
          </p>
          <p className="mb-4">
            This Privacy Policy outlines my practices regarding the collection,
            use, and disclosure of your information when you use my website. By
            accessing or using my site, you agree to the terms of this Privacy
            Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Information I Collect</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Email Address:</strong> I collect your email address when
              you voluntarily provide it through my contact forms or
              subscription services.
            </li>
            <li>
              <strong>Questions:</strong> I collect your questions when you
              voluntarily ask it.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            How I Use Your Information
          </h2>
          <p className="mb-4">
            The email addresses I collect are used solely for the purpose of
            sending you responses to your questions, updates, and other related
            communications.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Communication:</strong> Responding to your inquiries and
              sending updates or newsletters.
            </li>
            <li>
              <strong>Unsubscribe Requests:</strong> Processing your requests to
              unsubscribe from my mailing list.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete the personal
            information I have about you. If you wish to unsubscribe from my
            communications or request the deletion of your email address from my
            records, please use the unsubscribe link provided in any of my
            emails.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            I may update my Privacy Policy from time to time. Any changes will
            be reflected on this page.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or
            my data practices, please feel free to contact us through my{" "}
            <Link className="text-blue-500 underline" href="/ask">
              Ask Me Anything
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Optional Footer Link */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Omar Yasser Morsi. All rights
          reserved.
        </footer>
      </main>
    </div>
  );
}
