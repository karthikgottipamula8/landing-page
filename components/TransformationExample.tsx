"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  FileCheck,
  ShieldAlert,
} from "lucide-react";

export default function TransformationExample() {
  const { before, after } = CONTENT.example;

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            REAL-WORLD APPLICATION
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {CONTENT.example.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {CONTENT.example.subheadline}
          </p>

          {/* Prominent Required Badge */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal/5 border border-editorial-border text-xs font-bold uppercase text-charcoal-muted tracking-wider">
            <AlertCircle className="w-3.5 h-3.5 text-coral" />
            {CONTENT.example.badge}
          </div>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* BEFORE CARD */}
          <div className="bg-paper-cream p-6 sm:p-8 rounded-3xl border border-editorial-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-editorial-border mb-6">
                <span className="text-xs font-mono font-bold uppercase text-editorial-grey">
                  {before.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  <ShieldAlert className="w-3 h-3 text-rose-600" />
                  {before.status}
                </span>
              </div>

              <div className="mb-6">
                <span className="text-xs text-charcoal-light uppercase font-mono block">
                  Current CTC
                </span>
                <div className="text-3xl sm:text-4xl font-black text-charcoal font-mono mt-1">
                  {before.currentCTC}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-light block">
                  Internal Uncertainty:
                </span>
                {before.quotes.map((quote, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-paper-white rounded-xl border border-editorial-border text-xs sm:text-sm text-charcoal italic"
                  >
                    {quote}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 font-medium">
              {before.resultText}
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="bg-charcoal text-paper p-6 sm:p-8 rounded-3xl border border-charcoal/20 shadow-paper flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono font-bold uppercase text-coral">
                  {after.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  Calculated Strategy
                </span>
              </div>

              {/* Research Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-white/60 block">
                    Researched Range
                  </span>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">
                    {after.marketRange}
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-white/60 block">
                    Calculated Gap
                  </span>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">
                    +{after.salaryGap}
                  </div>
                </div>
              </div>

              {/* 3-Point Negotiation Plan */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block">
                  Executed Plan:
                </span>
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/70">Minimum:</span>
                  <span className="font-mono font-bold text-white">{after.negotiationPlan.minimum}</span>
                </div>
                <div className="p-2.5 bg-coral/20 rounded-lg border border-coral/40 flex items-center justify-between text-xs">
                  <span className="text-coral font-bold">Target:</span>
                  <span className="font-mono font-bold text-white">{after.negotiationPlan.target}</span>
                </div>
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/70">Opening Ask:</span>
                  <span className="font-mono font-bold text-white">{after.negotiationPlan.openingAsk}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-200 font-medium">
              {after.resultText}
            </div>
          </div>
        </div>

        {/* Required Explanatory Disclaimer */}
        <div className="p-4 bg-paper-cream rounded-xl border border-editorial-border text-xs text-charcoal-light leading-relaxed text-center">
          <p className="font-semibold text-charcoal mb-0.5">Context & Variable Notice:</p>
          <p>{CONTENT.example.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
