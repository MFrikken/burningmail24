import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "burningmail24",
  description: "A lightweight, privacy-first web-app dedicated exclusively to generating high-quality email subject lines using an advanced LLM. The tool is completely free, requires no account, and collects no data — your email stays yours and will never be stored or tracked. No ads, no tracking, no secondary features, no expansion beyond the single task of subject-line generation. Ideal for users who want quick, accurate, and secure subject-line generation with maximum simplicity.",
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
