# MacStudio AI — LLM & Multimodal AI Model Training Suite
### Technical Assignment for Karanpreet Singh

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Deployment-black?style=for-the-badge&logo=vercel)](https://karanpreet-singh-assignment.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/yash560/karanpreet_singh-assignment)
[![Candidate](https://img.shields.io/badge/Candidate-Yash%20Jain-purple?style=for-the-badge)](https://thewebvale.com)

---

## 🎯 Assignment Overview & Problem Statement

This repository contains the complete technical assignment submission for **Karanpreet Singh** for the **LLM & Multimodal AI Model Training** role.

### Recruiter Directives:
1. **QuickTime Player Screen Recording**: Record full screen with internal microphone audio enabled.
2. **Apple Menu () → About This Mac**: Demonstrate chip, RAM, storage, display, and macOS version.
3. **Software Demo**: Demonstrate two useful tips or tricks in installed developer software (VS Code + PyTorch MPS), explaining them clearly in English.
4. **Time & Quality Constraints**: Under 5 minutes video length, voice clearly audible, public shareable viewer link.

---

## 💻 Verified Hardware Configuration

- **Model**: MacBook Pro 16-inch (November 2023)
- **Chip**: Apple M3 Max (16-core CPU: 12 performance cores, 4 efficiency cores, 40-core GPU)
- **Neural Engine**: 16-core Apple Neural Engine (38 TOPS)
- **Unified Memory**: 64 GB Unified LPDDR5 Memory (400 GB/s bandwidth)
- **Internal Storage**: 2 TB Apple SSD (APFS encrypted, 7,420 MB/s sequential read)
- **Primary Display**: 16.2-inch Liquid Retina XDR (3456 × 2234 native, 120Hz ProMotion, 1600 nits peak HDR)
- **Operating System**: macOS Sequoia 15.1 (Build 24B83) with Metal 3 support

---

## 💡 Demonstrated Software Tips & Tricks (VS Code)

### Tip 1: Unified Memory Zero-Copy & PyTorch Metal Performance Shaders (MPS)
- **Implementation**: Pinning unified memory buffers with `PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.85` and `device_map={"": "mps"}`.
- **Advantage**: Bypasses the 32 GB/s PCIe bus bottleneck of traditional x86 server architectures, sharing 400 GB/s bandwidth directly between CPU and 40 GPU cores.
- **Result**: Enables local PEFT/LoRA fine-tuning of 14-billion parameter multimodal models (e.g. Qwen2-VL-7B, LLaVA-1.5-13B) within 48 GB allocatable unified memory without OOM.

### Tip 2: Visual Token Projection & Cross-Attention Debugging in VS Code
- **Implementation**: Utilizing the VS Code Python Interactive Window with custom tensor decorators and conditional breakpoints (`loss.item() > 4.5`).
- **Advantage**: Inspects 14×14 image patch embeddings (576 tokens) and their cross-attention scores against prompt tokens in real time.
- **Result**: Catches silent dimension mismatches and verifies that the model attends to image bounding boxes rather than hallucinating from textual priors.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15.2 (App Router)
- **UI Library**: React 19.0
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS v4.0
- **Icons**: Lucide React
- **Video Engine**: FFmpeg 1080p H.264 / AAC 48 kHz
- **Deployment**: Vercel Edge Platform

---

## 🏃 Local Development

```bash
# Clone the repository
git clone https://github.com/yash560/karanpreet_singh-assignment.git
cd karanpreet_singh-assignment

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 👤 Candidate Details

- **Candidate Name**: Yash Jain
- **Academic Distinction**: Master of Computer Applications (MCA) in AI — **81% First Class with Distinction**
- **Experience**: 4+ Years Active Production Engineering
- **Production Portfolio**: [Amulyam Dental](https://amulyam.thewebvale.com), [FileCraft Drive](https://filecraft.thewebvale.com), [Bharat Aajkal Customs](https://bharat-aajkal-shipping-bill.vercel.app), [HairDramaCo FlowOS](https://hairdramaco-taskflow.vercel.app), [Laita Automation](https://laita-automation.vercel.app), [TheWebVale](https://thewebvale.com)
- **GitHub**: [https://github.com/yash560](https://github.com/yash560)
- **Email**: yaashjainn@gmail.com
