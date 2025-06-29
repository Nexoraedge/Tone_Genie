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
        <div className="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
       
        {children}
      </body>
    </html>
  );
}
