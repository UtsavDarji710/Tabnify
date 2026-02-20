import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://tabnify.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tabnify – Smart Tab Manager Chrome Extension | Organize & Group Browser Tabs",
    template: "%s | Tabnify",
  },

  description:
    "Tabnify is a free Chrome extension that helps you organize browser tabs. Group tabs by domain, save sessions, enable focus mode, search history, and boost productivity. No data collected.",

  keywords: [
    "Tabnify",
    "Tabnify extension",
    "Tabnify Chrome extension",
    "tab manager",
    "tab manager extension",
    "Chrome tab manager",
    "browser tab organizer",
    "tab grouping",
    "group tabs by domain",
    "save browser sessions",
    "session manager extension",
    "focus mode extension",
    "browsing history search",
    "tab productivity",
    "organize browser tabs",
    "free Chrome extension",
    "tab management tool",
    "close all tabs extension",
    "restore tabs Chrome",
    "browser productivity extension",
    "utsav darji",
    "utsav extension"
  ],

  authors: [{ name: "Utsav Darji" }],
  creator: "Utsav Darji",
  publisher: "Tabnify",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tabnify",
    title: "Tabnify – Smart Tab Manager Chrome Extension",
    description:
      "Organize your browser tabs effortlessly. Group by domain, save sessions, focus mode, history search & more. 100% free, no data collected.",

  },

  twitter: {
    card: "summary_large_image",
    title: "Tabnify – Smart Tab Manager Chrome Extension",
    description:
      "Organize your browser tabs effortlessly. Group by domain, save sessions, focus mode & more. 100% free!",
    creator: "@tabnify",
  },

  alternates: {
    canonical: siteUrl,
  },

  category: "Productivity",

  verification: {
    google: "pHkDrqsueZKapriM4krJku7KXBxwQPlwMasSYTvm31A",
  },

  other: {
    "application-name": "Tabnify",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
