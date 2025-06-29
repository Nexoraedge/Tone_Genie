import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToneGenie | AI-Powered Text Enhancer & Rewriter Tool",
  description: "Transform your writing with ToneGenie's AI text enhancement. Instantly improve, rewrite, and optimize content for emails, social media, academic papers, and creative writing. Free online text editor with AI assistance.",
  keywords: ["AI text enhancer", "rewrite text online", "AI writing assistant", "text improvement tool", "content rewriter", "academic writing help", "professional writing", "social media content generator", "creative writing assistant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
