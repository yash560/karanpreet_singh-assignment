"use client";

import React from "react";
import { Play, Sparkles, Cpu, Code2, BrainCircuit, ExternalLink, ShieldCheck } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const navItems = [
    { id: "video", label: "Video Demonstration", icon: Play },
    { id: "specs", label: "Mac Hardware Specs", icon: Cpu },
    { id: "tips", label: "Software Tips & Tricks", icon: Code2 },
    { id: "studio", label: "Multimodal Training Lab", icon: BrainCircuit },
    { id: "dossier", label: "Candidate Dossier", icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#070b14]/90 backdrop-blur-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 px-4 py-1.5 text-xs text-indigo-200 border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white tracking-wide uppercase">
              Official Technical Assignment Submission
            </span>
            <span className="text-slate-400">|</span>
            <span>Target Recruiter: <strong className="text-white">Karanpreet Singh</strong></span>
            <span className="text-slate-400">|</span>
            <span>Role: <strong className="text-indigo-300">LLM &amp; Multimodal AI Model Training</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded font-mono text-[11px]">
              Candidate: Yash Jain (MCA AI, 81%)
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg text-white tracking-tight">MacStudio AI</h1>
              <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-semibold text-indigo-300 border border-indigo-500/30">
                M3 Max • 64GB
              </span>
            </div>
            <p className="text-xs text-slate-400">
              macOS Screen Recording &amp; Multimodal AI Training Suite
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Link */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/yash560/karanpreet_singh-assignment"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
