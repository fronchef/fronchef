import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fronchef - Open-Source UI Components & Website Building Services",
    template: "%s - Fronchef",
  },
  description:
    "Fronchef provides open-source UI components for Next.js, React, and static HTML, as well as affordable website building services for Wix, WordPress, Next.js, MERN, and static sites. Build your website with ease and flexibility.",
  keywords: [
    "UI components",
    "open-source",
    "Next.js components",
    "React components",
    "static HTML components",
    "website building services",
    "affordable website development",
    "Wix",
    "WordPress",
    "MERN stack",
    "static websites",
    "Fronchef",
  ],
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png", // Path to your favicon
  },
  metadataBase: new URL("https://www.fronchef.tech"), 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fronchef.tech" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
