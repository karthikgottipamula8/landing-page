"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { ArrowRight, Compass, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";

export default function ReframeProblem() {
  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            THE STRATEGIC REFRAME
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-6">
            {CONTENT.reframe.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            Most people start a salary conversation by picking a random percentage out of thin air:
          </p>
        </div>

        {/* The Random Percentage Trap vs The Better Way */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: The Guesswork Way */}
          <div className="md:col-span-5 bg-paper-white p-6 sm:p-8 rounded-2xl border border-rose-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                The Flawed Approach
              </div>
              <h3 className="font-editorial-condensed text-2xl text-charcoal mb-4">
                THE RANDOM PERCENTAGE GUESS
              </h3>
              <div className="space-y-3 font-mono text-sm text-charcoal-light mb-6">
                <div className="p-2.5 bg-rose-50/50 rounded-lg border border-rose-100 line-through text-rose-900/70">
                  “I'll just ask for 20%...”
                </div>
                <div className="p-2.5 bg-rose-50/50 rounded-lg border border-rose-100 line-through text-rose-900/70">
                  “Maybe 30% if they seem happy...”
                </div>
                <div className="p-2.5 bg-rose-50/50 rounded-lg border border-rose-100 line-through text-rose-900/70">
                  “My friend got 40%, why not me?”
                </div>
              </div>
            </div>
            <p className="text-xs text-rose-800/80 font-medium italic border-t border-rose-100 pt-3">
              When HR challenges this number, you have zero objective defense and quickly fold.
            </p>
          </div>

          {/* Right: The Structured Preparation Way */}
          <div className="md:col-span-7 bg-charcoal text-paper p-6 sm:p-8 rounded-2xl border border-charcoal/20 shadow-paper flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                The Playbook Architecture
              </div>
              <h3 className="font-editorial-condensed text-3xl text-white mb-2">
                EVIDENCE BEATS EMOTION.
              </h3>
              <p className="text-sm text-white/80 mb-6">
                A professional negotiation doesn't ask for a random guess. It is anchored on four defensible foundations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {CONTENT.reframe.formula.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="text-[11px] font-mono font-bold uppercase text-coral mb-0.5">
                      {idx + 1}. {item.step}
                    </div>
                    <div className="text-xs font-bold text-white mb-1">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-white/60 leading-tight">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Don't negotiate from a guess. Negotiate from information.</span>
            </div>
          </div>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="bg-paper-white p-6 rounded-2xl border border-editorial-border shadow-card text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-editorial-grey block mb-3">
            THE PREPARATION PIPELINE
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-base font-extrabold tracking-wider font-editorial-condensed">
            <span className="px-3 py-1.5 rounded-lg bg-paper-cream border border-editorial-border text-charcoal">
              MARKET
            </span>
            <ArrowRight className="w-4 h-4 text-coral shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-paper-cream border border-editorial-border text-charcoal">
              VALUE
            </span>
            <ArrowRight className="w-4 h-4 text-coral shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-paper-cream border border-editorial-border text-charcoal">
              EVIDENCE
            </span>
            <ArrowRight className="w-4 h-4 text-coral shrink-0" />
            <span className="px-4 py-1.5 rounded-lg bg-coral text-white shadow-sm">
              NEGOTIATION
            </span>
          </div>
          <p className="mt-4 text-sm font-semibold text-charcoal-muted max-w-xl mx-auto">
            {CONTENT.reframe.takeaway}
          </p>
        </div>
      </div>
    </section>
  );
}
