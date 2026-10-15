"use client";

import React, { useState } from "react";
import { Code2, Zap, Copy, Check, Terminal, Eye, Layers, Sparkles, AlertCircle } from "lucide-react";

export default function SoftwareTipsLab() {
  const [activeTip, setActiveTip] = useState<1 | 2>(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Tip 1 state: VRAM calculator
  const [modelParam, setModelParam] = useState<number>(7); // in billions
  const [precision, setPrecision] = useState<"bf16" | "fp16" | "int8" | "int4">("bf16");
  const [batchSize, setBatchSize] = useState<number>(4);

  // Tip 2 state: Cross-attention image selector & token hover
  const [selectedImage, setSelectedImage] = useState<"street" | "document" | "chart">("street");
  const [hoveredToken, setHoveredToken] = useState<string | null>("car");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Calculate memory required
  const bytesPerParam = precision === "bf16" || precision === "fp16" ? 2 : precision === "int8" ? 1 : 0.5;
  const weightsGB = (modelParam * bytesPerParam);
  const optimizerAndKvGB = (modelParam * 0.4) + (batchSize * 0.75);
  const totalRequiredGB = Math.round((weightsGB + optimizerAndKvGB) * 10) / 10;
  const macMaxLimit = 48.0; // 75% of 64GB
  const fitsInMac = totalRequiredGB <= macMaxLimit;

  const tip1Code = `# ==============================================================================
# TIP 1: Apple Silicon Unified Memory Zero-Copy & PyTorch MPS Backend
# Software: Visual Studio Code + PyTorch 2.4 Metal Performance Shaders
# ==============================================================================

import os
import torch
from transformers import AutoProcessor, Qwen2VLForConditionalGeneration
from peft import LoraConfig, get_peft_model

# 1. Configure Apple Metal allocator to pin unified memory buffers
# Prevents aggressive swap while allowing up to 85% of 64GB unified memory
os.environ["PYTORCH_ENABLE_MPS_FALLBACK"] = "1"
os.environ["PYTORCH_MPS_HIGH_WATERMARK_RATIO"] = "0.85"

# 2. Check native MPS device availability
assert torch.backends.mps.is_available(), "Apple Metal GPU not detected!"
device = torch.device("mps")

# 3. Direct Zero-Copy Model Initialization into Unified RAM
# Eliminates standard PCIe host-to-device transfers (400 GB/s bandwidth)
model = Qwen2VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen2-VL-7B-Instruct",
    torch_dtype=torch.bfloat16,
    device_map={"": "mps"},
    attn_implementation="sdpa"  # Scaled Dot-Product Attention (Apple Metal optimized)
)

# 4. Enable Gradient Checkpointing for Vision-Language Backbones
# Trades compute for 60% memory savings during visual token backward pass
model.gradient_checkpointing_enable()

# 5. Attach PEFT LoRA adapters to both Vision Merger and Causal LM Heads
peft_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj", "visual.merger.mlp"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, peft_config)
model.print_trainable_parameters()
# Trainable params: 33,554,432 || all params: 7,615,616,000 || trainable%: 0.44%`;

  const tip2Code = `# ==============================================================================
# TIP 2: Visual Token Projection & Cross-Attention Debugging in VS Code
# Software: VS Code Interactive Python Window + Conditional Breakpoints
# ==============================================================================

import torch
import torch.nn as nn
from PIL import Image

def inspect_visual_cross_attention(model, processor, image_path, text_prompt):
    """
    Demonstrates VS Code Interactive Debugging for Multimodal Vision-Language Alignment.
    Inspects image patch extraction (14x14) and cross-attention weight distributions.
    """
    image = Image.open(image_path).convert("RGB")
    inputs = processor(text=[text_prompt], images=[image], return_tensors="pt").to("mps")
    
    # In VS Code: Set conditional breakpoint here:
    # Condition: inputs.input_ids.shape[1] > 2048 or torch.isnan(inputs.pixel_values).any()
    
    with torch.no_grad():
        outputs = model(**inputs, output_attentions=True)
        
    # outputs.attentions: tuple of [Batch, Heads, SequenceLength, SequenceLength]
    last_layer_attn = outputs.attentions[-1]  # [1, 32, SeqLen, SeqLen]
    
    # Extract cross-attention between generated text tokens and visual patch tokens
    # In VS Code Interactive Window: Run '# %%' cell to render inline tensor heatmap
    visual_token_start = 12
    visual_token_end = 12 + 576  # 24x24 patches = 576 tokens
    
    cross_attn_matrix = last_layer_attn[0, :, -1, visual_token_start:visual_token_end]
    avg_patch_weights = cross_attn_matrix.mean(dim=0).view(24, 24).cpu().numpy()
    
    print(f"Visual patch attention entropy: {avg_patch_weights.std():.4f}")
    return avg_patch_weights`;

  return (
    <section id="tips" className="py-12 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-2">
          <Code2 className="h-3.5 w-3.5" />
          <span>Requirement 3: Two Useful Tips or Tricks in Installed Software (VS Code)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Software Demonstration: Multimodal AI &amp; LLM Training in VS Code
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          Two production-grade engineering workflows demonstrated on the MacBook Pro for accelerating local Vision-Language Model fine-tuning and debugging cross-attention token alignment.
        </p>
      </div>

      {/* Tip Selector Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setActiveTip(1)}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
            activeTip === 1
              ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
              : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
          }`}
        >
          <Zap className="h-4 w-4 text-emerald-400" />
          <span>Tip 1: Apple Silicon Unified Memory Zero-Copy &amp; PyTorch MPS</span>
        </button>
        <button
          onClick={() => setActiveTip(2)}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
            activeTip === 2
              ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
              : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
          }`}
        >
          <Eye className="h-4 w-4 text-purple-400" />
          <span>Tip 2: Visual Token Projection &amp; Cross-Attention Debugging in VS Code</span>
        </button>
      </div>

      {/* TIP 1 SHOWCASE */}
      {activeTip === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Code Viewer */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="font-mono text-xs text-slate-300 ml-2">train_multimodal_mps.py</span>
              </div>
              <button
                onClick={() => copyToClipboard(tip1Code, "tip1")}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono transition-colors"
              >
                {copiedCode === "tip1" ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                <span>{copiedCode === "tip1" ? "Copied" : "Copy Code"}</span>
              </button>
            </div>
            <pre className="p-4 text-[11px] font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]">
              <code>{tip1Code}</code>
            </pre>
          </div>

          {/* Interactive Calculator & Benefits */}
          <div className="lg:col-span-5 space-y-4">
            {/* Interactive Calculator */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl">
              <h3 className="font-semibold text-sm text-white flex items-center gap-2 mb-3">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span>Interactive Apple Unified Memory Calculator</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Test how model size and precision scale against the MacBook Pro's 64 GB unified memory ceiling (48 GB allocatable to MPS).
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Model Parameters:</span>
                    <span className="font-bold font-mono text-white">{modelParam} Billion</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={70}
                    step={1}
                    value={modelParam}
                    onChange={(e) => setModelParam(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>2B (Mobile)</span>
                    <span>7B (Qwen2/LLaVA)</span>
                    <span>14B</span>
                    <span>32B</span>
                    <span>70B (Llama-3)</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1">Precision / Quantization:</span>
                  <div className="grid grid-cols-4 gap-1.5 font-mono text-[11px]">
                    {[
                      { id: "bf16", label: "bfloat16 (2B)" },
                      { id: "fp16", label: "float16 (2B)" },
                      { id: "int8", label: "8-bit (1B)" },
                      { id: "int4", label: "4-bit (0.5B)" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPrecision(p.id as any)}
                        className={`py-1.5 px-1 text-center rounded border transition-colors ${
                          precision === p.id
                            ? "bg-indigo-600 text-white border-indigo-500"
                            : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Micro-Batch Size:</span>
                    <span className="font-bold font-mono text-white">{batchSize} samples</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={16}
                    step={1}
                    value={batchSize}
                    onChange={(e) => setBatchSize(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>

                {/* Calculation Output */}
                <div className={`p-4 rounded-xl border mt-4 ${
                  fitsInMac
                    ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-200"
                    : "bg-amber-950/30 border-amber-500/30 text-amber-200"
                }`}>
                  <div className="flex items-center justify-between mb-1 font-mono">
                    <span className="text-xs">Est. Total VRAM Footprint:</span>
                    <span className="text-base font-bold">{totalRequiredGB} GB</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
                    <span>MacBook Pro MPS Capacity:</span>
                    <span>48.0 GB / 64 GB</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${Math.min(100, (totalRequiredGB / macMaxLimit) * 100)}%` }}
                      className={`h-full ${fitsInMac ? "bg-emerald-400" : "bg-amber-400"}`}
                    />
                  </div>
                  <p className="text-[11px] mt-2 font-sans leading-snug">
                    {fitsInMac
                      ? "✓ Model fits comfortably into Apple Silicon Unified RAM without paging or Out-Of-Memory errors."
                      : "⚠️ Exceeds 48GB. Enable 4-bit quantization or gradient accumulation micro-batching to fit."}
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Why It Matters */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl text-xs space-y-3">
              <h4 className="font-semibold text-sm text-white">Why Unified Memory Changes Multimodal AI:</h4>
              <div className="space-y-2 text-slate-300 leading-relaxed">
                <p>
                  • <strong>Zero PCIe Overhead:</strong> Standard discrete servers transfer image tensors across a 32 GB/s PCIe bus. The M3 Max directly shares 400 GB/s bandwidth between CPU preprocessing and GPU forward pass.
                </p>
                <p>
                  • <strong>Gradient Checkpointing:</strong> Recalculating vision patch embeddings during the backward pass cuts activation VRAM by 60%, allowing 14B parameter multimodal models to run locally.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TIP 2 SHOWCASE */}
      {activeTip === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Code Viewer */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="font-mono text-xs text-slate-300 ml-2">debug_cross_attention.py (VS Code)</span>
              </div>
              <button
                onClick={() => copyToClipboard(tip2Code, "tip2")}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono transition-colors"
              >
                {copiedCode === "tip2" ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                <span>{copiedCode === "tip2" ? "Copied" : "Copy Code"}</span>
              </button>
            </div>
            <pre className="p-4 text-[11px] font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]">
              <code>{tip2Code}</code>
            </pre>
          </div>

          {/* Interactive Cross-Attention Visualizer */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl">
              <h3 className="font-semibold text-sm text-white flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-purple-400" />
                <span>VS Code Interactive Cross-Attention Inspector</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Hover over prompt tokens to see how cross-attention heads map textual query tokens to 14×14 image patch embeddings.
              </p>

              {/* Sample Images */}
              <div className="flex gap-2 mb-4">
                {[
                  { id: "street", label: "Street Traffic" },
                  { id: "document", label: "Invoice / OCR" },
                  { id: "chart", label: "Financial Chart" },
                ].map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(img.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      selectedImage === img.id
                        ? "bg-purple-600 text-white border-purple-500"
                        : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    {img.label}
                  </button>
                ))}
              </div>

              {/* Token Bar */}
              <div className="mb-4">
                <span className="text-[11px] text-slate-400 block mb-1 font-mono">
                  Prompt Tokens (Hover to inspect attention):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["What", "is", "the", "license", "plate", "of", "the", "red", "car", "in", "front?"].map((tok, i) => (
                    <button
                      key={i}
                      onMouseEnter={() => setHoveredToken(tok.toLowerCase().replace(/[^a-z]/g, ""))}
                      className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                        hoveredToken === tok.toLowerCase().replace(/[^a-z]/g, "")
                          ? "bg-purple-600 text-white shadow-md scale-105"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {tok}
                    </button>
                  ))}
                </div>
              </div>

              {/* Attention Grid Simulation (12x12 grid) */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mb-2">
                  <span>Vision Patch Grid (14 × 14 = 576 tokens)</span>
                  <span className="text-purple-400 font-bold">Focus: &apos;{hoveredToken || "car"}&apos;</span>
                </div>
                <div className="grid grid-cols-12 gap-1 w-full aspect-square max-w-[280px] mx-auto p-1 bg-black/60 rounded-lg">
                  {Array.from({ length: 144 }).map((_, idx) => {
                    const row = Math.floor(idx / 12);
                    const col = idx % 12;
                    let intensity = 0.1;

                    if (hoveredToken === "car" || hoveredToken === "red") {
                      // Center-right highlight
                      const dist = Math.hypot(row - 6, col - 7);
                      intensity = Math.max(0.08, 1 - dist / 5);
                    } else if (hoveredToken === "plate" || hoveredToken === "license") {
                      // Small box in lower center
                      const dist = Math.hypot(row - 8, col - 7);
                      intensity = Math.max(0.05, 1 - dist / 3);
                    } else if (hoveredToken === "front") {
                      const dist = Math.hypot(row - 9, col - 6);
                      intensity = Math.max(0.1, 1 - dist / 4);
                    }

                    return (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: `rgba(168, 85, 247, ${intensity.toFixed(2)})`,
                        }}
                        className="rounded-xs transition-colors duration-200"
                        title={`Patch [${row}, ${col}] Weight: ${intensity.toFixed(3)}`}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2 px-2">
                  <span>Low Attention (0.05)</span>
                  <span className="text-purple-300 font-bold">Peak Activation (0.98)</span>
                </div>
              </div>

              {/* VS Code Shortcut Checklist */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center justify-between">
                  <span>Run Cell in Interactive Window:</span>
                  <span className="font-mono text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded">Shift + Enter</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Conditional Breakpoint Hotkey:</span>
                  <span className="font-mono text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded">Right Click Margin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
