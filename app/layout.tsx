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
  title: {
    default: "mkat - every bit counts",
    template: "%s | mkat"
  },
  description: "mkat is a software company. We love the internet and want to make it a better, safer and more efficient place by designing beautiful apps that help people get things done.",
  keywords: ["mkat", "software", "web development", "app development", "digital solutions"],
  authors: [{ name: "mkat" }],
  creator: "mkat",
  publisher: "mkat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mkat.dev'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "mkat - every bit counts",
    description: "mkat is a software company. We love the internet and want to make it a better, safer and more efficient place by designing beautiful apps that help people get things done.",
    url: 'https://mkat.dev', // Update with your actual domain
    siteName: 'mkat',
    images: [
      {
        url: '/mkat_small.svg', // Consider creating a proper OG image (1200x630 PNG)
        width: 1200,
        height: 630,
        alt: 'mkat logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "mkat - every bit counts",
    description: "mkat is a software company. We love the internet and want to make it a better, safer and more efficient place by designing beautiful apps that help people get things done.",
    images: ['/mkat_small.svg'], // Consider creating a proper Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/mkat_small.svg",
    apple: "/mkat_small.svg",
    shortcut: "/mkat_small.svg",
  },
  manifest: "/manifest.json",
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
