import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MacStudio AI — LLM & Multimodal AI Training Suite | Karanpreet Singh",
  description:
    "Interactive Mac Screen Recording Demonstration, Hardware Specs Inspector, and Multimodal LLM Fine-Tuning Studio engineered by Yash Jain for Karanpreet Singh.",
  authors: [{ name: "Yash Jain", url: "https://thewebvale.com" }],
  openGraph: {
    title: "MacStudio AI — LLM & Multimodal AI Training Suite",
    description:
      "Interactive Mac Screen Recording Demonstration, Hardware Specs Inspector, and Multimodal LLM Fine-Tuning Studio.",
    siteName: "MacStudio AI Suite",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#070b14] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
