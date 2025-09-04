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
  title: "Pierre-Louis Monnot | AI Leader & Founder",
  description: "AI Leader and founder using technology to solve real-world problems. Building the future through intelligent innovation.",
  keywords: ["Pierre-Louis Monnot", "AI", "Founder", "Technology", "Innovation", "Problem Solving"],
  authors: [{ name: "Pierre-Louis Monnot" }],
  openGraph: {
    title: "Pierre-Louis Monnot | AI Leader & Founder",
    description: "AI Leader and founder using technology to solve real-world problems. Building the future through intelligent innovation.",
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
