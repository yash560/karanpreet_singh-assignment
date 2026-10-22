import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karanpreetsingh.vercel.app"),
  title: "MacStudio AI — LLM & Multimodal AI Training Suite | Karanpreet Singh",
  description:
    "Interactive Mac Screen Recording Demonstration, Hardware Specs Inspector, and Multimodal LLM Fine-Tuning Studio engineered for Karanpreet Singh. Powered by TheWebVale.",
  keywords: [
    "MacStudio AI",
    "Karanpreet Singh",
    "Multimodal AI",
    "LLM Fine-Tuning",
    "Apple Silicon",
    "Next.js 15",
    "React 19",
    "TheWebVale Architecture"
  ],
  authors: [{ name: "TheWebVale Architecture Team", url: "https://thewebvale.com" }],
  creator: "TheWebVale",
  publisher: "TheWebVale",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MacStudio AI — LLM & Multimodal AI Training Suite",
    description:
      "Interactive Mac Screen Recording Demonstration, Hardware Specs Inspector, and Multimodal LLM Fine-Tuning Studio. Powered by TheWebVale.",
    url: "https://karanpreetsingh.vercel.app",
    siteName: "MacStudio AI Suite",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MacStudio AI Suite Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MacStudio AI — LLM & Multimodal AI Training Suite",
    description: "Multimodal LLM Fine-Tuning Studio. Powered by TheWebVale.",
    images: ["/og-image.png"],
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
