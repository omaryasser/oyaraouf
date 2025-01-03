import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


export const metadata: Metadata = {
  title: "Omar Yasser Morsi - Personal Website",
  description:
    "Personal website of Omar Yasser Morsi. Ask me anything about software engineering, career, and life. Read articles, answers, and posts.",
  keywords: [
    "Omar Yasser Morsi",
    "software engineering",
    "Q&A",
    "articles",
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
    url: "https://oyaraouf.com",
    title: "Omar Yasser Morsi - Personal Website",
    description:
      "Ask me anything about software engineering, read articles, answers, and posts by Omar Yasser Morsi.",
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
    title: "Omar Yasser Morsi - Personal Website",
    description:
      "Ask me anything about software engineering, career, and life. Read articles, answers, and posts.",
    images: ["https://oyaraouf.com/favicon.png"],
    // e.g. your Twitter handle if you have one
    creator: "@oyaraouf",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-grey text-black">
        <main>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
