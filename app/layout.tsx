import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


export const metadata: Metadata = {
  title: "Omar Yasser Morsi",
  description: "Personal website of Omar Yasser Morsi",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-grey">
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
