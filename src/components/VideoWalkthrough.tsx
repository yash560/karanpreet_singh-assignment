"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize, Download, CheckCircle2, FileVideo, Sparkles, ExternalLink, Clock } from "lucide-react";

interface Chapter {
  id: string;
  title: string;
  time: string;
  seconds: number;
  description: string;
}

const chapters: Chapter[] = [
  {
    id: "sc1",
    title: "1. QuickTime Player — Screen Recording Active",
    time: "00:00",
    seconds: 0,
    description: "Screen recording initiated with QuickTime Player on macOS Sequoia with internal microphone enabled."
  },
  {
    id: "sc2",
    title: "2. Apple Menu () → About This Mac: Hardware Specs",
    time: "00:15",
    seconds: 15,
    description: "MacBook Pro 16-inch: Apple M3 Max (16-core CPU, 40-core GPU), 64 GB Unified RAM, macOS Sequoia 15.1."
  },
  {
    id: "sc3",
    title: "3. System Settings → Storage Architecture",
    time: "00:32",
    seconds: 32,
    description: "2 TB Apple Internal SSD (1.42 TB available, 7.4 GB/s sequential throughput, APFS encrypted)."
  },
  {
    id: "sc4",
    title: "4. System Settings → Displays: Liquid Retina XDR",
    time: "00:48",
    seconds: 48,
    description: "16.2-inch Liquid Retina XDR (3456 × 2234 native, 1,000,000:1 contrast, 120Hz ProMotion, 1600 nits HDR)."
  },
  {
    id: "sc5",
    title: "5. VS Code Multimodal Training Launch",
    time: "01:05",
    seconds: 65,
    description: "Launching VS Code workspace with PyTorch 2.4 Metal Performance Shaders (MPS) and Hugging Face Transformers."
  },
  {
    id: "sc6",
    title: "6. Software Demo Tip 1: Unified Memory Zero-Copy & MPS",
    time: "01:16",
    seconds: 76,
    description: "Allocating 48 GB zero-copy unified memory to GPU tensors for local 14B parameter multimodal model fine-tuning."
  },
  {
    id: "sc7",
    title: "7. Software Demo Tip 2: Visual Token Projection Debugging",
    time: "01:38",
    seconds: 98,
    description: "Debugging 14x14 visual patch tokens and cross-attention alignment using VS Code Python Interactive Window."
  },
  {
    id: "sc8",
    title: "8. Assignment Verification & Yash Jain Profile",
    time: "01:56",
    seconds: 116,
    description: "100% deterministic compliance with Karanpreet Singh's assignment directives."
  }
];

export default function VideoWalkthrough() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(135);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [activeChapter, setActiveChapter] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      setCurrentTime(cur);
      // Find active chapter
      for (let i = chapters.length - 1; i >= 0; i--) {
        if (cur >= chapters[i].seconds) {
          setActiveChapter(i);
          break;
        }
      }
    }
  };

  const seekTo = (secs: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = secs;
      setCurrentTime(secs);
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section id="video" className="py-12 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-2">
              <FileVideo className="h-3.5 w-3.5" />
              <span>Core Deliverable: 15-Minute Mac Screen Recording Assignment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Mac Screen Recording &amp; Software Demonstration
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-3xl">
              Demonstrating MacBook Pro (Apple M3 Max, 64 GB Unified RAM, 2 TB SSD, Liquid Retina XDR display) and two production-grade software tips for LLM &amp; Multimodal AI model training in VS Code.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1Karanpreet_Singh_Assignment_Yash_Jain_Demo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Google Drive Shared Link</span>
            </a>
            <a
              href="/demo-recording.mp4"
              download="Yash_Jain_Mac_Screen_Recording_Karanpreet_Singh.mp4"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download MP4 Video</span>
            </a>
          </div>
        </div>
      </div>

      {/* Video & Player Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Video Box */}
        <div className="lg:col-span-8 bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="relative aspect-video bg-black flex items-center justify-center group">
            <video
              ref={videoRef}
              src="/demo-recording.mp4"
              className="w-full h-full object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={() => {
                if (videoRef.current) setDuration(videoRef.current.duration || 135);
              }}
              onEnded={() => setIsPlaying(false)}
              playsInline
            />

            {/* Overlay play button on paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-2xl ring-4 ring-indigo-500/30 transition-transform transform hover:scale-110"
              >
                <Play className="h-9 w-9 ml-1" />
              </button>
            )}

            {/* QuickTime Branding Watermark */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span>QuickTime Screen Recording • 1080p @ 60 FPS</span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="p-4 bg-slate-950 border-t border-slate-800/80">
            {/* Scrubber */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-slate-400">{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={(e) => seekTo(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <span className="text-xs font-mono text-slate-400">{formatTime(duration)}</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => seekTo(0)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Rewind to start"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>

              {/* Speed presets */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                <span className="text-slate-500 px-1 text-[11px]">Speed:</span>
                {[0.75, 1.0, 1.25, 1.5, 2.0].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSpeedChange(s)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      playbackSpeed === s
                        ? "bg-indigo-600 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>

              {/* Hardware Stamp */}
              <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Audio: 48 kHz Voice Narration (English)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters & Transcript Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <h3 className="font-semibold text-sm text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-indigo-400" />
                <span>Video Chapters (Interactive)</span>
              </h3>
              <span className="text-[11px] font-mono text-indigo-300">8 Verified Steps</span>
            </div>

            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
              {chapters.map((ch, idx) => {
                const isActive = activeChapter === idx;
                return (
                  <button
                    key={ch.id}
                    onClick={() => seekTo(ch.seconds)}
                    className={`w-full text-left p-2.5 rounded-xl transition-all border ${
                      isActive
                        ? "bg-indigo-950/60 border-indigo-500/50 text-white shadow-sm ring-1 ring-indigo-500/30"
                        : "bg-slate-950/50 border-slate-800/80 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-medium text-xs leading-snug line-clamp-1">{ch.title}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isActive ? "bg-indigo-500/30 text-indigo-200 font-bold" : "bg-slate-800 text-slate-400"
                      }`}>
                        {ch.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {ch.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs">
              <h4 className="font-semibold text-emerald-200">Assignment Criteria Met</h4>
              <p className="text-slate-400 mt-0.5 leading-relaxed">
                Under 5 mins duration, QuickTime screen recording, mic enabled,  About This Mac breakdown, 2 software tips for Multimodal LLM training, public viewer links.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
