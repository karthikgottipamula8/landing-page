"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function BeforeAfterSection() {
  const { transformation } = CONTENT;

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {transformation.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {transformation.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {transformation.subheadline}
          </p>
        </div>

        {/* 2-Column Comparative Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* BEFORE */}
          <div className="p-6 sm:p-8 bg-paper-cream rounded-3xl border border-rose-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-rose-200/80 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800">
                  WITHOUT A SYSTEM (BEFORE)
                </span>
                <span className="text-xs font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded">
                  High Anxiety
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {transformation.before.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-charcoal-light leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-100 text-xs text-rose-900 font-medium italic">
              Result: Constant second-guessing and feeling undervalued for the entire year.
            </div>
          </div>

          {/* AFTER */}
          <div className="p-6 sm:p-8 bg-charcoal text-paper rounded-3xl border border-charcoal/20 shadow-paper flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  WITH THE PLAYBOOK (AFTER)
                </span>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Total Preparedness
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {transformation.after.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-white/90 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-emerald-950/60 rounded-xl border border-emerald-500/30 text-xs text-emerald-200 font-medium">
              Result: Objective numbers, documented proofs, and zero awkward pauses.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
