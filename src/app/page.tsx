"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Header from "@/components/Header";
import VideoWalkthrough from "@/components/VideoWalkthrough";
import MacHardwareInspector from "@/components/MacHardwareInspector";
import SoftwareTipsLab from "@/components/SoftwareTipsLab";
import MultimodalTrainingStudio from "@/components/MultimodalTrainingStudio";
import CandidateDossier from "@/components/CandidateDossier";
import Footer from "@/components/Footer";
import { Sparkles, Play, Cpu, Code2, BrainCircuit, ShieldCheck, Download, ExternalLink, CheckCircle } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("video");

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#a855f7", "#10b981", "#3b82f6"],
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 border-b border-slate-800/80 bg-gradient-to-b from-[#0e1628] via-[#090e1b] to-[#070b14]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Karanpreet Singh Technical Assignment • Submitting In-Time</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            LLM &amp; Multimodal AI Model Training{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Mac Demonstration Suite
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Complete production-grade submission showcasing verified MacBook Pro hardware (Apple M3 Max, 64 GB Unified RAM, 2 TB SSD, Liquid Retina XDR display), high-fidelity QuickTime screen recording with microphone audio, and two advanced software tips for local multimodal model training in VS Code.
          </p>

          {/* Key Metric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[
              { label: "Hardware", val: "Apple M3 Max • 64GB Unified RAM", icon: Cpu },
              { label: "Video Duration", val: "02:52 (Under 5m Target)", icon: Play },
              { label: "Software Demo", val: "VS Code • PyTorch MPS Zero-Copy", icon: Code2 },
              { label: "Architecture", val: "TheWebVale Enterprise Suite", icon: ShieldCheck },
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300"
                >
                  <Icon className="h-3.5 w-3.5 text-indigo-400" />
                  <span>{badge.label}:</span>
                  <strong className="text-white font-mono">{badge.val}</strong>
                </div>
              );
            })}
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href="#video"
              onClick={fireConfetti}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <Play className="h-4 w-4" />
              <span>Watch Screen Recording</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1Karanpreet_Singh_Assignment_Yash_Jain_Demo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <ExternalLink className="h-4 w-4 text-indigo-400" />
              <span>Google Drive Video Link</span>
            </a>
            <a
              href="https://github.com/yash560/karanpreet_singh-assignment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-all"
            >
              <span>GitHub Source Code</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="flex-1 space-y-8">
        <VideoWalkthrough />
        <MacHardwareInspector />
        <SoftwareTipsLab />
        <MultimodalTrainingStudio />
        <CandidateDossier />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
