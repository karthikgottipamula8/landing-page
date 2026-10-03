"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { XCircle, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

export default function WhoItsNotFor() {
  const { whoItsNotFor } = CONTENT;

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 mb-3 inline-block">
            RADICAL TRANSPARENCY
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {whoItsNotFor.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {whoItsNotFor.subheadline}
          </p>
        </div>

        {/* 2-Column Honest Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Left: What This Is NOT For (5 Red Crosses) */}
          <div className="md:col-span-6 p-6 sm:p-8 bg-paper-cream rounded-3xl border border-rose-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider mb-5">
                <XCircle className="w-4 h-4 text-rose-600" />
                This Playbook Is NOT For:
              </div>

              <div className="space-y-3.5">
                {whoItsNotFor.notForList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-base text-rose-600 shrink-0 select-none">❌</span>
                    <span className="text-sm font-medium text-charcoal-muted leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-rose-200/60 text-xs text-rose-900 font-medium italic">
              We do not sell sensational shortcuts or bluffing gimmicks.
            </p>
          </div>

          {/* Right: Who It IS For Instead */}
          <div className="md:col-span-6 p-6 sm:p-8 bg-charcoal text-paper rounded-3xl border border-charcoal/20 shadow-paper flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Who It IS Built For Instead:
              </div>

              <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-white mb-4 leading-snug">
                SERIOUS PROFESSIONALS SEEKING PREPARATION & CLARITY.
              </h3>

              <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
                {whoItsNotFor.forInstead}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Built for long-term career credibility and respect.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
