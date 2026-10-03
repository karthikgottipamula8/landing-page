"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import {
  ArrowRight,
  XCircle,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  Cpu,
  Sparkles,
} from "lucide-react";

interface EvidenceProps {
  onOpenCheckout: () => void;
}

export default function EvidenceSection({ onOpenCheckout }: EvidenceProps) {
  const iconPillars = [
    <TrendingUp key={0} className="w-6 h-6 text-coral" />,
    <Briefcase key={1} className="w-6 h-6 text-coral" />,
    <Cpu key={2} className="w-6 h-6 text-coral" />,
  ];

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            CONVERSATIONAL LEVERAGE
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-3">
            {CONTENT.evidence.headline}
          </h2>
          <p className="font-editorial-condensed text-3xl sm:text-4xl text-coral tracking-tight font-extrabold mb-5">
            {CONTENT.evidence.headlineSecond}
          </p>
          <p className="text-base text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {CONTENT.evidence.intro}
          </p>
        </div>

        {/* 3 Weak vs Stronger Comparisons */}
        <div className="mb-20 space-y-4 max-w-4xl mx-auto">
          {CONTENT.evidence.comparisons.map((comp, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-card grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              {/* Weak Side */}
              <div className="md:col-span-5 p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/60">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-1">
                  <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  Weak Argument
                </div>
                <p className="text-sm font-medium text-rose-950 italic">
                  {comp.weak}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="md:col-span-2 flex justify-center">
                <div className="w-8 h-8 rounded-full bg-paper-cream border border-editorial-border flex items-center justify-center text-coral shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Stronger Side */}
              <div className="md:col-span-5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {comp.label} (Stronger)
                </div>
                <p className="text-sm font-semibold text-emerald-950">
                  {comp.stronger}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The 3-Proof Rule Container */}
        <div className="bg-charcoal text-paper rounded-3xl p-8 sm:p-12 shadow-floating border border-charcoal/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-coral font-bold block mb-1">
              THE CORE POSITIONING FORMULA
            </span>
            <h3 className="font-editorial-condensed text-3xl sm:text-4xl text-white mb-2">
              {CONTENT.evidence.ruleTitle}
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              {CONTENT.evidence.ruleSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {CONTENT.evidence.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-coral/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-coral/20 border border-coral/30 flex items-center justify-center mb-4">
                    {iconPillars[idx]}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-coral font-bold tracking-wider block mb-1">
                    PILLAR 0{idx + 1}
                  </span>
                  <h4 className="font-editorial-condensed text-2xl text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-semibold text-white/90 mb-2 italic">
                    “{pillar.question}”
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center pt-2">
            <button
              onClick={onOpenCheckout}
              className="btn-coral px-8 py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg group"
            >
              <span>{CONTENT.evidence.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[11px] text-white/60 mt-2.5 font-mono">
              Includes the complete pre-formatted Evidence Bank worksheet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
