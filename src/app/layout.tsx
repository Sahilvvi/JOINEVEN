import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JoinEvents - Discover. Connect. Experience.",
  description:
    "JoinEvents helps you discover amazing events, meet like-minded people, and become part of thriving communities. India's most premium event discovery platform.",
  keywords: [
    "events",
    "networking",
    "startup events",
    "tech conferences",
    "workshops",
    "community",
    "India",
    "event discovery",
  ],
  openGraph: {
    title: "JoinEvents - Discover. Connect. Experience.",
    description:
      "India's most premium event discovery and marketplace platform.",
    url: "https://joinevents.in",
    siteName: "JoinEvents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JoinEvents - Discover. Connect. Experience.",
    description:
      "India's most premium event discovery and marketplace platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f]">
        {children}
      </body>
    </html>
  );
}
