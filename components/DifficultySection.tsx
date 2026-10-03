"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { TrendingDown, ArrowRight, AlertTriangle, ShieldCheck, DollarSign } from "lucide-react";

export default function DifficultySection() {
  const { difficulty } = CONTENT;

  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {difficulty.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {difficulty.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {difficulty.explanation}
          </p>
        </div>

        {/* 2-Column Comparison Box: Compounding Cost vs Value Anchor */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-10">
          {/* Left: The Compounding Cost of Bad Negotiation */}
          <div className="md:col-span-6 p-6 sm:p-8 bg-paper-white rounded-3xl border border-rose-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <TrendingDown className="w-4 h-4 text-rose-600" />
                The Silent Loss
              </div>
              <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-charcoal mb-3">
                {difficulty.compoundingCostTitle}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-6 font-sans">
                {difficulty.compoundingCostBody}
              </p>
            </div>
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-xs text-rose-900 font-semibold italic">
              A 3% difference in starting CTC affects your increments for the next decade.
            </div>
          </div>

          {/* Right: The Value Anchor (₹299 vs Months of Income) */}
          <div className="md:col-span-6 p-6 sm:p-8 bg-charcoal text-paper rounded-3xl border border-charcoal/20 shadow-paper flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Asymmetric Risk-Reward
              </div>
              <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-white mb-3">
                {difficulty.valueAnchorTitle}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
                {difficulty.valueAnchorBody}
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-white/90 font-mono flex items-center justify-between">
              <span>Investment: ₹299</span>
              <span className="text-emerald-400 font-bold">Infinite Downside Protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
