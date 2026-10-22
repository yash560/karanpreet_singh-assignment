"use client";

import React from "react";
import { Sparkles, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

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
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px]">
              <span>⚡ Powered by TheWebVale</span>
            </div>
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

          {/* Architecture */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-200 text-xs">Architecture</h4>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-[11px]">
              <span>⚡ Powered by TheWebVale</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Engineered with clean-room Next.js 15 standards, interactive video walkthroughs, and deterministic AI benchmarks.
            </p>
            <div className="pt-1">
              <a
                href="https://thewebvale.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>TheWebVale Platform</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 TheWebVale Architecture • MacStudio AI Suite for Karanpreet Singh.
          </div>
          <div className="flex items-center gap-3 text-slate-500 font-mono text-[10px]">
            <span className="text-emerald-400">⚡ Powered by TheWebVale</span>
            <span>•</span>
            <span>Deterministic 0-Error Build</span>
            <span>•</span>
            <span>Vercel Edge Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
