"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import { Eye, CheckCircle2, Lock, Sparkles, Layers } from "lucide-react";

export default function ProductPreview() {
  const { preview } = CONTENT;
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeDoc = preview.previews[activeIdx];

  return (
    <section id="preview" className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {preview.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {preview.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {preview.subheadline}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {preview.previews.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeIdx === idx
                  ? "bg-charcoal text-paper shadow-md"
                  : "bg-paper-white text-charcoal-light border border-editorial-border hover:border-coral/50"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Tangible Document Preview Frame */}
        <div className="max-w-4xl mx-auto bg-paper-white rounded-3xl border border-editorial-border shadow-paper overflow-hidden">
          {/* Top Bar */}
          <div className="bg-charcoal text-paper px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 text-xs font-mono uppercase text-white/70">
                {activeDoc.subtitle}: {activeDoc.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-coral font-bold">
              <Eye className="w-3.5 h-3.5" />
              <span>PREVIEW MODE</span>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-6 sm:p-10">
            <div className="mb-6 pb-4 border-b border-editorial-border">
              <div className="text-[10px] font-mono text-coral font-bold uppercase tracking-wider mb-1">
                SYSTEM TEMPLATE
              </div>
              <h3 className="font-editorial-condensed text-3xl text-charcoal mb-2">
                {activeDoc.title}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed font-sans">
                {activeDoc.description}
              </p>
            </div>

            {/* Simulated Fillable Form / Table */}
            <div className="bg-paper-cream rounded-2xl border border-editorial-border overflow-hidden mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-px bg-editorial-border text-center font-mono text-[10px] sm:text-[11px] font-bold uppercase text-charcoal-light">
                {activeDoc.previewFields.map((field, fIdx) => (
                  <div key={fIdx} className="bg-paper-cream/90 p-3">
                    {field}
                  </div>
                ))}
              </div>

              {/* Sample Rows with subtle blur/tangibility */}
              <div className="p-4 sm:p-6 space-y-3 bg-paper-white text-xs">
                <div className="p-3 bg-paper-cream/60 rounded-xl border border-editorial-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
                  <span className="font-semibold text-charcoal">
                    Input Entry #01: Verified Peer Benchmark
                  </span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start sm:self-auto">
                    Confidence: High
                  </span>
                </div>

                <div className="p-3 bg-paper-cream/60 rounded-xl border border-editorial-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
                  <span className="font-semibold text-charcoal">
                    Calculated Result: Quantified Business Value
                  </span>
                  <span className="text-coral font-bold bg-coral-50 px-2 py-0.5 rounded border border-coral-200 self-start sm:self-auto">
                    3-Proof Verified
                  </span>
                </div>

                {/* Subtle blurred locked preview line */}
                <div className="relative p-4 rounded-xl bg-paper-cream/30 border border-dashed border-editorial-border flex items-center justify-center text-center">
                  <div className="flex items-center gap-2 text-xs font-mono text-charcoal-light">
                    <Lock className="w-3.5 h-3.5 text-coral" />
                    <span>Full formula & editable cells unlocked upon purchase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom confirmation */}
            <div className="flex items-center justify-between text-xs text-charcoal-light font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Included with the Salary Worth & Negotiation Playbook bundle
              </span>
              <span className="font-mono text-coral font-bold">₹299 One-Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
