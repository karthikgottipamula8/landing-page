"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import { trackEvent } from "@/config/analytics";
import {
  MessageSquareCode,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface BonusScriptPackProps {
  onOpenCheckout: () => void;
}

export default function BonusScriptPack({ onOpenCheckout }: BonusScriptPackProps) {
  const { bonus } = CONTENT;
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    trackEvent("script_copy", { script_index: idx });
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="scripts" className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/10 border border-coral/30 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{bonus.badge}</span>
          </div>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {bonus.title}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {bonus.subtitle}
          </p>
        </div>

        {/* 6 Script Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {bonus.scripts.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-sm hover:border-coral/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-editorial-border/60 mb-3">
                  <span className="text-[10px] font-mono uppercase bg-charcoal/5 px-2 py-0.5 rounded text-charcoal-light font-bold">
                    SCENARIO #{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-coral font-bold">
                    {item.when}
                  </span>
                </div>

                <h3 className="font-editorial-condensed text-2xl text-charcoal mb-3">
                  {item.scenario}
                </h3>

                <div className="p-4 bg-paper-cream rounded-xl border border-editorial-border/60 text-xs sm:text-sm text-charcoal font-sans leading-relaxed italic">
                  {item.script}
                </div>
              </div>

              <div className="pt-3.5 mt-3 border-t border-editorial-border/40 flex items-center justify-between">
                <span className="text-[11px] text-editorial-grey font-medium">
                  Calm • Professional • Assertive
                </span>
                <button
                  onClick={() => handleCopy(item.script, idx)}
                  className="text-xs text-charcoal-light hover:text-coral transition-colors flex items-center gap-1.5 font-semibold"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Script</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="text-center max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-paper-white border border-editorial-border shadow-paper">
          <span className="text-xs font-mono uppercase font-bold tracking-widest text-coral block mb-1">
            ALWAYS KNOW WHAT TO SAY
          </span>
          <h3 className="font-editorial-condensed text-3xl text-charcoal mb-2">
            NEVER FREEZE DURING A SALARY CALL AGAIN
          </h3>
          <p className="text-xs text-charcoal-light mb-6">
            The complete 10+ scenario script pack is included automatically when you get the playbook today for ₹299.
          </p>

          <button
            onClick={onOpenCheckout}
            className="btn-coral w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md group"
          >
            <span>Get The Complete Script Pack</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
