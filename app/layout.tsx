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
  title: "mkat - Complete Digital Ecosystem Solutions",
  description: "From concept to digital dominance - we build, connect, and scale your entire business ecosystem. Digital Presence Management, Big Data Solutions, and Manufacturing Intelligence.",
  keywords: "digital transformation, big data analytics, manufacturing intelligence, web development, machine learning, IoT integration",
  authors: [{ name: "mkat" }],
  openGraph: {
    title: "mkat - Complete Digital Ecosystem Solutions",
    description: "From concept to digital dominance - we build, connect, and scale your entire business ecosystem.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
