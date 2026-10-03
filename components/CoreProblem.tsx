"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { HelpCircle, AlertTriangle, ArrowRight, ShieldAlert } from "lucide-react";

export default function CoreProblem() {
  const { coreProblem } = CONTENT;

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {coreProblem.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {coreProblem.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {coreProblem.lead}
          </p>
        </div>

        {/* 6 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-12">
          {coreProblem.painPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-sm hover:border-coral/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-rose-700 text-xs font-mono font-bold uppercase mb-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Uncertainty #{idx + 1}</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-charcoal mb-2 leading-snug">
                  {item.quote}
                </h3>
              </div>
              <div className="pt-3 border-t border-editorial-border/60 flex items-start gap-2 text-xs text-charcoal-light">
                <span className="font-semibold text-charcoal">The Consequence:</span>
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Climax Statement */}
        <div className="p-6 sm:p-8 rounded-3xl bg-paper-cream border border-editorial-border text-center max-w-3xl mx-auto shadow-card">
          <p className="font-editorial-condensed text-2xl sm:text-3xl md:text-4xl text-charcoal leading-snug">
            {coreProblem.takeaway}
          </p>
        </div>
      </div>
    </section>
  );
}
