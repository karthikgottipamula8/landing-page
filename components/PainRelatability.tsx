"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { HelpCircle, AlertTriangle, ArrowDown } from "lucide-react";

export default function PainRelatability() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow / Headline */}
        <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
          THE UNCOMFORTABLE DILEMMA
        </span>
        <h2 className="font-editorial-condensed text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight max-w-3xl mx-auto leading-tight mb-4">
          {CONTENT.pain.headline}
        </h2>

        {/* Large Statement Quote */}
        <div className="my-8 py-6 px-4 sm:px-8 bg-paper-cream border-y-2 border-coral/30 rounded-xl max-w-3xl mx-auto shadow-sm">
          <p className="font-editorial-condensed text-3xl sm:text-4xl md:text-5xl text-charcoal italic tracking-wide">
            {CONTENT.pain.largeQuestion}
          </p>
        </div>

        {/* Concrete Relatable Scenario: Earning ₹6 LPA */}
        <div className="max-w-2xl mx-auto mb-12 p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-card text-left">
          <div className="flex items-center justify-between pb-4 border-b border-editorial-border/60 mb-5">
            <span className="text-xs uppercase font-bold tracking-wider text-editorial-grey">
              The Reality of Most Professionals
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
              <AlertTriangle className="w-3 h-3 text-amber-600" />
              The Guesswork Trap
            </span>
          </div>

          <div className="mb-4">
            <span className="text-xs text-charcoal-light font-medium block">
              {CONTENT.pain.scenario.earningLabel}
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-charcoal font-mono mt-1">
              {CONTENT.pain.scenario.earningAmount}
            </div>
          </div>

          {/* Quick thought loops */}
          <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-paper-cream rounded-xl border border-editorial-border text-center mb-5">
            <div className="p-2 rounded bg-paper-white border border-editorial-border/40 font-mono text-xs sm:text-sm font-bold text-charcoal">
              “Should I ask for ₹7L?”
            </div>
            <div className="p-2 rounded bg-paper-white border border-editorial-border/40 font-mono text-xs sm:text-sm font-bold text-charcoal">
              “₹8L?”
            </div>
            <div className="p-2 rounded bg-paper-white border border-editorial-border/40 font-mono text-xs sm:text-sm font-bold text-charcoal">
              “₹9L?”
            </div>
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-charcoal-light mb-3">
            {CONTENT.pain.scenario.thoughtLabel}
          </p>

          {/* Internal Questions Grid */}
          <div className="space-y-2.5">
            {CONTENT.pain.internalQuestions.map((q, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-paper-cream/60 border border-editorial-border/40 hover:border-coral/40 transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-charcoal leading-snug">
                  {q}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Climax Statement */}
        <div className="pt-4 max-w-xl mx-auto">
          <p className="text-xl sm:text-2xl text-charcoal-light font-normal mb-1">
            {CONTENT.pain.punchlineLead}
          </p>
          <p className="font-editorial-condensed text-3xl sm:text-4xl md:text-5xl text-coral tracking-tight font-extrabold">
            {CONTENT.pain.punchlineHighlight}
          </p>
        </div>
      </div>
    </section>
  );
}
