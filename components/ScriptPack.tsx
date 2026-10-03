"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import {
  MessageSquareCode,
  ArrowRight,
  Copy,
  Check,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface ScriptPackProps {
  onOpenCheckout: () => void;
}

export default function ScriptPack({ onOpenCheckout }: ScriptPackProps) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            TACTICAL CONVERSATION PACK
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {CONTENT.scriptPack.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {CONTENT.scriptPack.subheadline}
          </p>
        </div>

        {/* 10 Script Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {CONTENT.scriptPack.scripts.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-sm hover:border-coral/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-editorial-border/60 mb-3">
                  <span className="text-[10px] font-mono uppercase bg-charcoal/5 px-2 py-0.5 rounded text-charcoal-light font-bold">
                    SCRIPT #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-coral font-bold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-editorial-condensed text-xl text-charcoal mb-3">
                  {item.scenario}
                </h3>

                <div className="p-3.5 bg-paper-cream rounded-xl border border-editorial-border/60 text-xs sm:text-sm text-charcoal font-sans leading-relaxed italic">
                  {item.script}
                </div>
              </div>

              <div className="pt-3.5 mt-3 border-t border-editorial-border/40 flex items-center justify-between">
                <span className="text-[11px] text-editorial-grey font-medium">
                  Field-tested phrasing
                </span>
                <button
                  onClick={() => handleCopy(item.script, idx)}
                  className="text-xs text-charcoal-light hover:text-coral transition-colors flex items-center gap-1 font-semibold"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
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

        {/* Call to Action Container */}
        <div className="text-center max-w-xl mx-auto p-8 rounded-3xl bg-paper-cream border border-editorial-border shadow-paper">
          <span className="text-xs font-mono uppercase font-bold tracking-widest text-coral block mb-2">
            INSTANT WORD-FOR-WORD ACCESS
          </span>
          <h3 className="font-editorial-condensed text-3xl text-charcoal mb-3">
            HAVE EXACT PHRASING READY BEFORE THE MEETING
          </h3>
          <p className="text-xs text-charcoal-light mb-6">
            Keep these scripts saved on your phone or printed on your desk for immediate reference.
          </p>

          <button
            onClick={onOpenCheckout}
            className="btn-coral w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md group"
          >
            <span>{CONTENT.scriptPack.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
