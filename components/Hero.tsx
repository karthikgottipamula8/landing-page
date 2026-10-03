"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  FileSpreadsheet,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Layers,
  Timer,
  Zap,
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const handleCta = () => {
    trackEvent("hero_cta_click", { location: "hero_primary" });
    onOpenCheckout();
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-editorial-border">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-coral/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Direct Response Copy, 3D Highlights & Primary CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Launch Urgency Badge with Gradient */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-coral/10 via-amber-500/10 to-coral/10 border border-coral/30 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal">
                PRACTICAL SALARY DECISION SYSTEM • 2026 EDITION
              </span>
            </div>

            {/* Main Headline with Highlighted "BEFORE HR" */}
            <h1 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-charcoal leading-[0.92] mb-5">
              KNOW YOUR NUMBER <br className="hidden sm:inline" />
              <span className="relative inline-block text-white px-3 py-0.5 rounded-xl bg-gradient-to-r from-[#F45152] via-[#FF5F60] to-[#E0383A] shadow-md transform -rotate-1">
                BEFORE HR
              </span>{" "}
              GIVES YOU THEIRS.
            </h1>

            {/* Nice, Polished, High-Converting Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal-light max-w-2xl font-normal leading-relaxed mb-8">
              Stop guessing what number to ask in your appraisal or job switch. A battle-tested preparation framework for Indian professionals to benchmark their true market CTC, calculate a defensible negotiation range, document undeniable business proof, and speak with complete composure.
            </p>

            {/* Price Cut & High-Converting CTA Box */}
            <div className="w-full sm:w-auto p-5 sm:p-6 rounded-3xl bg-paper-cream border border-editorial-border shadow-paper mb-6 relative overflow-hidden">
              {/* Background subtle sheen */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-full blur-2xl pointer-events-none" />

              {/* Price Strike-Through Row */}
              <div className="flex flex-wrap items-baseline gap-3 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono uppercase text-editorial-grey font-bold">Regular:</span>
                  <span className="line-through text-editorial-grey font-mono text-base font-bold">
                    {PRODUCT.originalPrice}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono uppercase text-coral font-bold">Today:</span>
                  <span className="text-3xl sm:text-4xl font-black font-mono text-charcoal leading-none">
                    {PRODUCT.price}
                  </span>
                </div>

                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-md font-mono shadow-xs">
                  {PRODUCT.discountPercent} ({PRODUCT.savingsAmount})
                </span>

                <span className="text-[11px] font-mono text-amber-700 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-md font-bold">
                  ⏳ 7-Hour Launch Window
                </span>
              </div>

              {/* Enhanced Gradient Button with White Sheen */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleCta}
                  className="btn-coral-gradient px-8 py-4 rounded-2xl text-base sm:text-lg font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl group"
                >
                  <span>GET THE SALARY PLAYBOOK — ₹299</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Supporting Microcopy */}
              <p className="mt-3.5 text-xs text-charcoal-light font-medium flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-coral shrink-0" />
                <span>Instant digital access • 15 practical worksheets • Complete script pack included</span>
              </p>
            </div>

            {/* Subtle Trust Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-charcoal-muted">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Engineered specifically for Indian tech & corporate salary dynamics.</span>
            </div>
          </div>

          {/* Right Column: 3D Digital Product Visual with Depth */}
          <div className="lg:col-span-5 relative perspective-card">
            <div className="relative mx-auto max-w-md lg:max-w-none tilt-3d">
              {/* Outer 3D-styled Container with layered glass & shadow */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#1F1F1F] via-[#161616] to-[#0F0F0F] text-paper p-6 sm:p-8 shadow-2xl border-2 border-white/10 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* 3D Glass Light Reflection */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none" />

                {/* Header ribbon */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-coral inline-block shadow-[0_0_8px_#F45152]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white/80 font-bold">
                      EXECUTIVE SYSTEM • 2026
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-coral/20 text-coral border border-coral/40 px-2 py-0.5 rounded shadow-xs">
                    MASTER EDITION
                  </span>
                </div>

                {/* Ebook Cover Mockup Header */}
                <div className="mb-6 relative z-10">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                    COMPLETE WORKBOOK & SCRIPT SYSTEM
                  </span>
                  <h3 className="font-editorial-condensed text-3xl sm:text-4xl text-white tracking-wide leading-none">
                    SALARY WORTH & NEGOTIATION
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 font-light">
                    The 5-Number Method & Evidence-Based Compensation Framework
                  </p>
                </div>

                {/* 3D Tool Mockup 1: Range Bar Graphic with Float */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-4 backdrop-blur-md relative z-10 shadow-lg">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-white/60 font-medium">Current Baseline CTC:</span>
                    <span className="font-bold text-white font-mono bg-white/10 px-2 py-0.5 rounded">₹6.0 LPA</span>
                  </div>

                  {/* Range visual with layered 3D glow */}
                  <div className="relative w-full h-3.5 bg-white/10 rounded-full my-3 overflow-hidden shadow-inner">
                    <div className="absolute left-[25%] right-[15%] h-full bg-gradient-to-r from-coral via-rose-500 to-amber-400 rounded-full shadow-sm" />
                    <div className="absolute left-[70%] top-0 bottom-0 w-1.5 bg-white shadow-md" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/80">
                    <span>Floor: ₹7.8L</span>
                    <span className="text-coral font-bold bg-coral/20 px-1.5 py-0.5 rounded">Target: ₹9.6L</span>
                    <span>Anchor: ₹10.4L</span>
                  </div>
                </div>

                {/* 3D Tool Mockup 2: Mini Metric Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
                  <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 backdrop-blur-md">
                    <div className="text-[10px] text-white/60 uppercase font-mono mb-1 flex items-center gap-1">
                      <BarChart3 className="w-3 h-3 text-coral" />
                      Calculated Gap
                    </div>
                    <div className="text-xl font-black text-white font-mono leading-tight">
                      +₹3.6 LPA
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                      60% Market Deficit
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 backdrop-blur-md">
                    <div className="text-[10px] text-white/60 uppercase font-mono mb-1 flex items-center gap-1">
                      <FileSpreadsheet className="w-3 h-3 text-amber-400" />
                      Evidence Bank
                    </div>
                    <div className="text-xl font-black text-white font-mono leading-tight">
                      3 Proofs
                    </div>
                    <div className="text-[10px] text-white/80 font-mono mt-0.5">
                      ROI Documented
                    </div>
                  </div>
                </div>

                {/* 3D Tool Mockup 3: Script Snippet Card */}
                <div className="bg-paper-warm text-charcoal rounded-2xl p-3.5 border-2 border-coral/40 shadow-xl relative z-10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-coral flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      HR Script Card #04
                    </span>
                    <span className="text-[10px] font-mono text-charcoal-light bg-black/5 px-1.5 py-0.2 rounded font-bold">
                      VERBATIM
                    </span>
                  </div>
                  <p className="text-xs text-charcoal font-medium leading-relaxed italic">
                    “My expectation is based on the scope of the role, the results I've delivered, and the verified market range…”
                  </p>
                </div>

                {/* Bottom interactive confirmation */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70 relative z-10">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Practical Salary Decision Tool
                  </span>
                  <span className="font-mono text-coral font-bold">100% Prepared</span>
                </div>
              </div>

              {/* Floating 3D Accent Pill */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-paper-white text-charcoal px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-coral/30 flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  ₹
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase text-charcoal-light line-through font-mono">₹699</div>
                  <div className="text-base font-black text-coral font-mono leading-none">₹299 Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
