"use client";

import React from "react";
import { Sparkles, Heart, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#050811] py-12 px-4 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xs">
                M
              </div>
              <span className="font-bold text-white text-sm">MacStudio AI</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Official Technical Assignment Solution engineered for <strong>Karanpreet Singh</strong> for the <em>LLM &amp; Multimodal AI Model Training</em> role.
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              Build: 2026.10.15-PROD • Node Unus
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-200 text-xs">Assignment Modules</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#video" className="hover:text-indigo-400 transition-colors">Mac Screen Recording Demo</a></li>
              <li><a href="#specs" className="hover:text-indigo-400 transition-colors">About This Mac Specs</a></li>
              <li><a href="#tips" className="hover:text-indigo-400 transition-colors">VS Code Tips &amp; Tricks</a></li>
              <li><a href="#studio" className="hover:text-indigo-400 transition-colors">Multimodal Training Studio</a></li>
              <li><a href="#dossier" className="hover:text-indigo-400 transition-colors">Candidate Verification Dossier</a></li>
            </ul>
          </div>

          {/* Verification Directives */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-200 text-xs">Compliance Checks</h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span>QuickTime Screen Recording (&lt; 5m)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span>Microphone Voice Clearly Audible</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span> About This Mac Verified</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span>2 Software Tips in VS Code Demonstrated</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span>Public Google Drive Viewer Shareable</span>
              </li>
            </ul>
          </div>

          {/* Candidate Bio */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-200 text-xs">Candidate Contact</h4>
            <p className="text-[11px] text-slate-300 font-semibold">Yash Jain</p>
            <p className="text-[11px] text-slate-400">MCA in AI (81%) • Full-Stack Builder</p>
            <p className="text-[11px] text-indigo-400 font-mono">yaashjainn@gmail.com</p>
            <div className="pt-2">
              <a
                href="https://github.com/yash560"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
              >
                <span>github.com/yash560</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 Yash Jain. Designed &amp; Engineered with Next.js 15, React 19 &amp; Tailwind CSS v4.
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px]">
            <span>Deterministic 0-Error Build</span>
            <span>•</span>
            <span>Vercel Edge Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
