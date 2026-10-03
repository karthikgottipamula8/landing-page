"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { PRODUCT } from "@/config/product";
import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Lock,
  Sparkles,
  FileSpreadsheet,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-editorial-border">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-coral-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Direct Response Copy & Primary CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal/5 border border-editorial-border mb-6">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                {CONTENT.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-charcoal leading-[0.92] mb-6">
              KNOW YOUR NUMBER <br className="hidden sm:inline" />
              <span className="text-coral">BEFORE HR</span> GIVES YOU THEIRS.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl font-normal leading-relaxed mb-8">
              {CONTENT.hero.subheadline}
            </p>

            {/* Price Block & Primary CTA */}
            <div className="w-full sm:w-auto p-4 sm:p-5 rounded-2xl bg-paper-cream border border-editorial-border shadow-paper mb-6">
              <div className="flex flex-wrap items-baseline gap-3 mb-3">
                <span className="inline-block bg-coral text-white text-xs font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                  {CONTENT.hero.priceTag}
                </span>
                <span className="text-sm font-semibold text-charcoal-light">
                  {CONTENT.hero.purchaseType}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenCheckout}
                  className="btn-coral px-8 py-4 rounded-xl text-base sm:text-lg font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg group"
                >
                  <span>{CONTENT.hero.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Supporting Microcopy */}
              <p className="mt-3.5 text-xs text-charcoal-light font-medium flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-coral shrink-0" />
                <span>{CONTENT.hero.microcopy}</span>
              </p>
            </div>

            {/* Subtle Trust / Value Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-charcoal-muted">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{CONTENT.hero.trustLine}</span>
            </div>
          </div>

          {/* Right Column: Premium Realistic Editorial / Product Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl bg-charcoal text-paper p-6 sm:p-7 shadow-floating border border-charcoal/20 overflow-hidden">
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-coral/80 inline-block" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                      DECISION SYSTEM • V2.6
                    </span>
                  </div>
                  <span className="text-[11px] font-bold bg-white/10 px-2 py-0.5 rounded text-white/90">
                    PDF + 15 SHEETS
                  </span>
                </div>

                {/* Cover Header */}
                <div className="mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-coral mb-1">
                    EXECUTIVE PLAYBOOK
                  </div>
                  <h3 className="font-editorial-condensed text-3xl sm:text-4xl text-white tracking-wide leading-none">
                    SALARY WORTH & NEGOTIATION
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 font-light">
                    The 5-Number Method & Evidence Architecture
                  </p>
                </div>

                {/* Live Tool Mockup 1: Range Graphic */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-white/60 font-medium">Current Baseline:</span>
                    <span className="font-bold text-white font-mono">₹6.0 LPA</span>
                  </div>

                  {/* Visual Range Bar */}
                  <div className="relative w-full h-3 bg-white/10 rounded-full my-3 overflow-hidden">
                    <div className="absolute left-[30%] right-[15%] h-full bg-gradient-to-r from-coral to-amber-400 rounded-full" />
                    <div className="absolute left-[70%] top-0 bottom-0 w-1 bg-white shadow-sm" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                    <span>Floor: ₹7.8L</span>
                    <span className="text-coral font-bold">Target: ₹9.6L</span>
                    <span>Anchor: ₹10.4L</span>
                  </div>
                </div>

                {/* Live Tool Mockup 2: Mini Evidence Card */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="text-[10px] text-white/60 uppercase font-mono mb-1 flex items-center gap-1">
                      <BarChart3 className="w-3 h-3 text-coral" />
                      Calculated Gap
                    </div>
                    <div className="text-lg font-bold text-white font-mono leading-tight">
                      +₹3.6 LPA
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">
                      60% Market Deficit
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="text-[10px] text-white/60 uppercase font-mono mb-1 flex items-center gap-1">
                      <FileSpreadsheet className="w-3 h-3 text-amber-400" />
                      Evidence Bank
                    </div>
                    <div className="text-lg font-bold text-white font-mono leading-tight">
                      3 Proofs
                    </div>
                    <div className="text-[10px] text-white/70 mt-0.5">
                      Business Impact Logged
                    </div>
                  </div>
                </div>

                {/* Live Tool Mockup 3: Script Card Preview */}
                <div className="bg-paper-warm text-charcoal rounded-xl p-3.5 border border-coral/30 shadow-md">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-coral flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      HR Script Snippet
                    </span>
                    <span className="text-[10px] font-mono text-charcoal-light">Card #04</span>
                  </div>
                  <p className="text-xs text-charcoal font-medium leading-relaxed italic">
                    “My expectation is based on the scope of the role, the results I've delivered, and the verified market range…”
                  </p>
                </div>

                {/* Bottom interactive badge */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Practical Salary Decision Tool
                  </span>
                  <span className="font-mono text-coral font-bold">100% Prepared</span>
                </div>
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white text-charcoal px-3.5 py-2 rounded-xl shadow-card border border-editorial-border flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ₹
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase text-charcoal-light">Launch Special</div>
                  <div className="text-xs font-extrabold text-charcoal">₹299 Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
