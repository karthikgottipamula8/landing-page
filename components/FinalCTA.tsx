"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenCheckout: () => void;
}

export default function FinalCTA({ onOpenCheckout }: FinalCTAProps) {
  const { finalCta } = CONTENT;

  return (
    <section className="py-20 md:py-32 bg-charcoal text-paper relative overflow-hidden border-b border-charcoal/20">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-coral/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-coral font-bold block mb-4">
          YOUR NEXT SALARY DECISION
        </span>

        <h2 className="font-editorial-condensed text-3xl sm:text-4xl md:text-5xl text-white/90 tracking-wide mb-3">
          {finalCta.headline}
        </h2>

        {/* Large Statement */}
        <div className="font-editorial-condensed text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none mb-8">
          {finalCta.bigStatement}
        </div>

        {/* 5 Core Steps Checklist */}
        <div className="max-w-md mx-auto mb-10 space-y-2.5 text-left bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          {finalCta.steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
              <span className="text-sm font-semibold text-white/90 font-sans">
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing Block & Call to Action */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-mono uppercase text-white/60">Launch Price:</span>
            <span className="font-mono text-3xl font-black text-coral">{finalCta.price}</span>
            <span className="text-xs text-white/60">One-Time Access</span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="btn-coral px-10 py-5 rounded-2xl text-lg sm:text-xl font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl group w-full sm:w-auto"
          >
            <span>{finalCta.cta}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <p className="text-xs text-white/60 mt-3 font-medium flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-coral shrink-0" />
            <span>{finalCta.microcopy}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
