"use client";

import React, { useState, useEffect, useRef } from "react";
import { BrainCircuit, Play, Pause, RotateCcw, Activity, Database, CheckCircle2, Sliders, Terminal, Award } from "lucide-react";

export default function MultimodalTrainingStudio() {
  const [isTraining, setIsTraining] = useState(false);
  const [currentStep, setCurrentStep] = useState(120);
  const [maxSteps] = useState(500);
  const [selectedModel, setSelectedModel] = useState("qwen2_vl");
  const [learningRate, setLearningRate] = useState("2e-4");
  const [loraRank, setLoraRank] = useState(16);
  const [lossHistory, setLossHistory] = useState<number[]>([
    2.85, 2.62, 2.39, 2.18, 1.95, 1.78, 1.62, 1.51, 1.42, 1.35, 1.28, 1.22
  ]);
  const [logs, setLogs] = useState<string[]>([
    "✓ [Metal 3] Metal Performance Shaders backend initialized on Apple M3 Max (40 cores)",
    "✓ [Data Loader] Loaded 24,000 multimodal pairs (COCO Vision + DocVQA)",
    "✓ [LoRA] Attached 33.5M trainable adapter parameters to projection matrices",
    "✓ Step 120/500 | Loss: 1.224 | Perplexity: 3.40 | Throughput: 146 tokens/sec"
  ]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTraining) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= maxSteps) {
            setIsTraining(false);
            return maxSteps;
          }
          const nextStep = prev + 5;
          const lastLoss = lossHistory[lossHistory.length - 1];
          const newLoss = Math.max(0.42, Math.round((lastLoss - Math.random() * 0.04) * 1000) / 1000);
          
          setLossHistory((lh) => [...lh.slice(-25), newLoss]);
          setLogs((l) => [
            ...l.slice(-6),
            `✓ Step ${nextStep}/${maxSteps} | Loss: ${newLoss.toFixed(3)} | Perplexity: ${(Math.exp(newLoss)).toFixed(2)} | MPS VRAM: 32.4 GB`
          ]);

          return nextStep;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTraining, lossHistory, maxSteps]);

  const resetTraining = () => {
    setIsTraining(false);
    setCurrentStep(0);
    setLossHistory([3.10, 2.95, 2.80]);
    setLogs([
      "✓ [Metal 3] Resetting MPS graph and clearing unified memory pool",
      "✓ Ready to start multimodal LoRA fine-tuning run on Apple Silicon"
    ]);
  };

  // SVG Chart path calculation
  const chartW = 400;
  const chartH = 120;
  const maxLoss = 3.2;
  const minLoss = 0.3;
  const points = lossHistory.map((val, idx) => {
    const x = (idx / (lossHistory.length - 1 || 1)) * chartW;
    const y = chartH - ((val - minLoss) / (maxLoss - minLoss)) * chartH;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  return (
    <section id="studio" className="py-12 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-2">
          <BrainCircuit className="h-3.5 w-3.5" />
          <span>Specialized Role: LLM &amp; Multimodal AI Model Training</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Interactive Multimodal Model Training Studio
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          Simulated live training environment showcasing Vision-Language alignment, PEFT LoRA parameter updates, and real-time loss convergence on the MacBook Pro M3 Max.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls & Configuration */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl">
            <h3 className="font-semibold text-sm text-white flex items-center gap-2 mb-4">
              <Sliders className="h-4 w-4 text-indigo-400" />
              <span>Training Hyperparameters</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Target Vision-Language Model:</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                >
                  <option value="qwen2_vl">Qwen2-VL-7B-Instruct (Vision-Causal LM)</option>
                  <option value="llava_next">LLaVA-NeXT-13B (Clip-ViT + Vicuna)</option>
                  <option value="llama_vision">Llama-3.2-11B-Vision (Cross-Attention)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">LoRA Rank (r):</label>
                  <select
                    value={loraRank}
                    onChange={(e) => setLoraRank(parseInt(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  >
                    <option value={8}>r = 8 (Lightweight)</option>
                    <option value={16}>r = 16 (Standard)</option>
                    <option value={32}>r = 32 (High Expressivity)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Learning Rate:</label>
                  <select
                    value={learningRate}
                    onChange={(e) => setLearningRate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  >
                    <option value="1e-4">1e-4 (Cosine Decay)</option>
                    <option value="2e-4">2e-4 (Default AdamW)</option>
                    <option value="5e-5">5e-5 (Fine Alignment)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Compute Precision &amp; Engine:</label>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-indigo-300">PyTorch MPS • bfloat16</span>
                  <span className="text-emerald-400 font-bold">400 GB/s Bus</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setIsTraining(!isTraining)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold shadow-lg transition-all ${
                    isTraining
                      ? "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30"
                  }`}
                >
                  {isTraining ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  <span>{isTraining ? "Pause Training Run" : "Start Live LoRA Training"}</span>
                </button>
                <button
                  onClick={resetTraining}
                  className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors"
                  title="Reset"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dataset Card */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl text-xs">
            <h4 className="font-semibold text-sm text-white flex items-center gap-2 mb-3">
              <Database className="h-4 w-4 text-indigo-400" />
              <span>Multimodal Training Sample Inspection</span>
            </h4>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2">
              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                <span>Sample ID: #84920</span>
                <span className="text-indigo-400">Resolution: 384 × 384</span>
              </div>
              <p className="text-slate-300 font-mono text-[11px]">
                <strong className="text-purple-300">User:</strong> Locate all commercial trucks and report their container cargo labels.
              </p>
              <p className="text-emerald-300 font-mono text-[11px]">
                <strong className="text-emerald-400">Assistant:</strong> [bbox: 0.12, 0.34, 0.58, 0.89] &apos;Evergreen Maritime&apos;.
              </p>
            </div>
          </div>
        </div>

        {/* Live Graphs & Telemetry */}
        <div className="lg:col-span-7 space-y-4">
          {/* Real-time Loss Curve */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-sm text-white flex items-center gap-2">
                  <Activity className="h-4 w-4 text-emerald-400" />
                  <span>Real-Time Cross-Entropy Loss Curve</span>
                </h3>
                <span className="text-xs text-slate-400">Monitoring Vision-Language convergence</span>
              </div>
              <div className="text-right font-mono">
                <span className="text-xs text-slate-400">Current Loss: </span>
                <span className="text-base font-bold text-emerald-400">
                  {lossHistory[lossHistory.length - 1]?.toFixed(3) || "1.224"}
                </span>
              </div>
            </div>

            {/* SVG Graph */}
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 relative">
              <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-32 overflow-visible">
                {/* Horizontal grid lines */}
                <line x1="0" y1="0" x2={chartW} y2="0" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="0" y1="40" x2={chartW} y2="40" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="0" y1="80" x2={chartW} y2="80" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="0" y1={chartH} x2={chartW} y2={chartH} stroke="#334155" />

                {/* Polyline curve */}
                <polyline
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={points}
                />
              </svg>

              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2">
                <span>Epoch 1 (Loss ~3.1)</span>
                <span>Epoch 2 (Convergence ~1.2)</span>
                <span className="text-emerald-400">Step {currentStep} / {maxSteps}</span>
              </div>
            </div>
          </div>

          {/* Real-time Hardware Telemetry */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Throughput</span>
              <div className="text-base font-bold text-white font-mono mt-0.5">146 tok/s</div>
              <span className="text-[10px] text-emerald-400">MPS Parallel</span>
            </div>
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Unified RAM</span>
              <div className="text-base font-bold text-indigo-400 font-mono mt-0.5">32.4 GB</div>
              <span className="text-[10px] text-slate-400">of 64 GB</span>
            </div>
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Perplexity</span>
              <div className="text-base font-bold text-purple-400 font-mono mt-0.5">
                {(Math.exp(lossHistory[lossHistory.length - 1] || 1.224)).toFixed(2)}
              </div>
              <span className="text-[10px] text-emerald-400">Optimal</span>
            </div>
          </div>

          {/* Terminal Console */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-[11px] space-y-1 shadow-inner">
            <div className="flex items-center gap-2 text-slate-400 pb-2 mb-2 border-b border-slate-800/80">
              <Terminal className="h-3.5 w-3.5 text-indigo-400" />
              <span>Training Output Stream (STDOUT)</span>
            </div>
            {logs.map((line, idx) => (
              <div key={idx} className="text-slate-300 leading-relaxed font-mono">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
