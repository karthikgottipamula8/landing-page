"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import {
  MessageSquare,
  Shield,
  Copy,
  Check,
  Sparkles,
  User,
  Building,
} from "lucide-react";

export default function HRObjections() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="scripts" className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            CALM OBJECTION HANDLING
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {CONTENT.objections.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed mb-4">
            {CONTENT.objections.subheadline}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-white border border-editorial-border text-xs font-mono font-bold text-coral">
            <Sparkles className="w-3.5 h-3.5" />
            {CONTENT.objections.toneNote}
          </div>
        </div>

        {/* 4 Objection Response Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTENT.objections.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-paper-white rounded-3xl border border-editorial-border shadow-card hover:border-coral/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* HR Prompt */}
                <div className="mb-4 pb-4 border-b border-editorial-border/60">
                  <div className="flex items-center justify-between text-xs text-editorial-grey uppercase font-mono mb-1.5">
                    <span className="flex items-center gap-1.5 font-bold text-rose-700">
                      <Building className="w-3.5 h-3.5" />
                      HR SAYS:
                    </span>
                    <span className="text-[10px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">
                      {card.context}
                    </span>
                  </div>
                  <h3 className="font-editorial-condensed text-2xl text-charcoal tracking-wide">
                    {card.hrSays}
                  </h3>
                </div>

                {/* Candidate Response */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs uppercase font-mono text-emerald-700 font-bold mb-2">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      YOU CAN SAY:
                    </span>
                    <button
                      onClick={() => handleCopy(card.youSay, idx)}
                      className="text-[11px] text-charcoal-light hover:text-coral transition-colors flex items-center gap-1"
                      title="Copy script"
                    >
                      {copiedIdx === idx ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 bg-paper-cream rounded-xl border border-editorial-border text-sm text-charcoal leading-relaxed font-sans">
                    {card.youSay}
                  </div>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-charcoal-light">
                <span>Playbook Script #{idx + 1}</span>
                <span className="text-emerald-700 font-semibold">Calm & Assertive</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
