"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { CheckCircle2, UserCheck } from "lucide-react";

export default function WhoItsFor() {
  const { whoItsFor } = CONTENT;

  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            IDEAL FIT
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {whoItsFor.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {whoItsFor.subheadline}
          </p>
        </div>

        {/* 10 Checkboxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {whoItsFor.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-paper-white rounded-2xl border border-editorial-border shadow-sm flex items-start gap-3.5 hover:border-coral/40 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm font-semibold text-charcoal leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
