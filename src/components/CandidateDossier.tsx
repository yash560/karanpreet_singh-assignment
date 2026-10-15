"use client";

import React from "react";
import { ShieldCheck, GraduationCap, Briefcase, Globe, ExternalLink, Cpu, CheckCircle2, Award, Mail, MessageSquare } from "lucide-react";

export default function CandidateDossier() {
  const productionPlatforms = [
    {
      name: "Amulyam Dental Studio & Medical ERP",
      url: "https://amulyam.thewebvale.com",
      role: "Architect & Lead Full-Stack Builder",
      desc: "Full dental clinic management ERP, patient appointments, real-time tooth chart odontogram, and billing pipeline.",
      stack: "Next.js 15 • React 19 • TypeScript • Tailwind v4 • MongoDB",
    },
    {
      name: "FileCraft Drive BYOC Cloud Enterprise",
      url: "https://filecraft.thewebvale.com",
      role: "Founder & Cloud Architect",
      desc: "Bring-Your-Own-Cloud enterprise file system with zero-knowledge AES-256 client encryption and high-throughput streaming.",
      stack: "Next.js 15 • S3/R2 • Web Crypto • TypeScript • Vercel Edge",
    },
    {
      name: "Bharat Aajkal Shipping Bill Customs Suite",
      url: "https://bharat-aajkal-shipping-bill.vercel.app",
      role: "Front-End Systems Engineer",
      desc: "High-compliance Indian customs shipping bill generation suite with UN/LOCODE validation and dynamic valuation.",
      stack: "React 19 • TypeScript • TanStack Query • Tailwind v4 • Zustand",
    },
    {
      name: "HairDramaCo FlowOS Enterprise Kanban",
      url: "https://hairdramaco-taskflow.vercel.app",
      role: "Full-Stack Builder",
      desc: "Enterprise Kanban workflow platform managing manufacturing batches, SKU lifecycles, and team assignments.",
      stack: "Next.js 15 • React 19 • Tailwind CSS • MongoDB Atlas",
    },
    {
      name: "Laita Automation Smart Factory Suite",
      url: "https://laita-automation.vercel.app",
      role: "Full-Stack Engineer",
      desc: "Industrial telemetry and smart factory monitoring dashboard with WebSocket streaming and node diagnostics.",
      stack: "Node.js • Express • React 19 • Tailwind CSS • Vercel",
    },
    {
      name: "TheWebVale Digital Studio & Agency Portal",
      url: "https://thewebvale.com",
      role: "Founder & Lead Engineer",
      desc: "Flagship digital studio delivering world-class web applications, AI integrations, and high-performance digital products.",
      stack: "Next.js 15 • React 19 • Framer Motion • Tailwind v4",
    },
  ];

  return (
    <section id="dossier" className="py-12 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-2">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Verified Candidate Profile &amp; Production Track Record</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Candidate Dossier: Yash Jain
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          MCA in Artificial Intelligence (81% distinction) with 4+ years of active production engineering experience across full-stack and machine learning architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Education & Credentials */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl text-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                YJ
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Yash Jain</h3>
                <p className="text-indigo-300 font-medium">Full-Stack &amp; AI Systems Engineer</p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <GraduationCap className="h-4 w-4 text-indigo-400" />
                <span>Academic Distinction</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="font-bold text-white">Master of Computer Applications (MCA)</div>
                <div className="text-indigo-300 mt-0.5">Specialization: Artificial Intelligence &amp; ML</div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                  <span>Score: <strong className="text-emerald-400">81% First Class Distinction</strong></span>
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Briefcase className="h-4 w-4 text-purple-400" />
                <span>Industry Experience</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="font-bold text-white">4+ Years Active Production Engineering</div>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Extensive production experience shipping high-scale Next.js 15 apps, PyTorch training pipelines, and distributed cloud systems.
                </p>
              </div>
            </div>

            {/* AI Skills */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Cpu className="h-4 w-4 text-emerald-400" />
                <span>AI &amp; LLM Competency Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                {[
                  "PyTorch 2.4+",
                  "Metal Performance Shaders",
                  "Hugging Face",
                  "PEFT / LoRA",
                  "Vision-Language Models",
                  "Cross-Attention",
                  "Quantization (Q4/Q8)",
                  "vLLM & SGLang",
                  "DeepSpeed",
                  "FlashAttention",
                  "Next.js 15",
                  "React 19",
                  "TypeScript",
                  "Tailwind v4",
                ].map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 6 Production Websites */}
        <div className="lg:col-span-8 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <div>
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Globe className="h-4 w-4 text-indigo-400" />
                <span>6 Verified Live Production Deployments</span>
              </h3>
              <p className="text-xs text-slate-400">Zero synthetic boilerplate. All platforms actively hosted in production.</p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              100% Live
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productionPlatforms.map((p, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-950/70 rounded-xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-xs text-white leading-snug">{p.name}</h4>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-400 p-1 transition-colors"
                      title="Open Live Website"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <span className="text-[10px] text-indigo-300 font-mono block mt-0.5">{p.role}</span>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>{p.stack}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
