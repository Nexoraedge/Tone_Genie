import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToneGenie | AI-Powered Text Enhancer & Smart Rewriting Tool",
  description:
    "Enhance your writing with ToneGenie—your smart AI assistant to rewrite, refine, and perfect content for emails, social posts, freelance proposals, academic writing, and more.",
  keywords: [
    "AI text enhancer",
    "rewrite text online",
    "AI writing assistant",
    "text rewriter tool",
    "writing improvement tool",
    "freelance writing help",
    "email content generator",
    "academic writing assistant",
    "tone changer",
    "content creator tools",
    "AI productivity tools",
    "AI text rewriter"
  ],
  openGraph: {
    title: "ToneGenie | Instantly Enhance and Rewrite Any Text",
    description: "ToneGenie is your AI-powered writing partner that helps you rewrite, enhance, and transform text instantly. Whether you're writing emails, social media captions, product descriptions, or professional messages — ToneGenie improves tone, clarity, and creativity in seconds. Perfect for freelancers, creators, and marketers looking to boost impact without the burnout.",
    url: "https://tone-genie.vercel.app", // Replace with your actual domain
    siteName: "ToneGenie",
    images: [
      {
        url: "https://tone-genie.vercel.app/cover.png", // recommended Open Graph image (1200x630)
        width: 1200,
        height: 630,
        alt: "ToneGenie - AI Writing Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToneGenie | Enhance & Rewrite Text with AI",
    description:
      "Need better writing? ToneGenie is your AI-powered text enhancer—rewrite content with the perfect tone for any platform. Free to use!",
    images: ["https://tone-genie.vercel.app/cover.png"], // same as above
    creator: "@DhoniAi", // optional, your X (Twitter) handle
  },
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
        <Analytics />
        <div className="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
       
        {children}
      </body>
    </html>
  );
}
