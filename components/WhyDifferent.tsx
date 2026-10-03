"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { Cpu, ShieldCheck, Compass, MessageSquareCode } from "lucide-react";

export default function WhyDifferent() {
  const { differentiation } = CONTENT;
  const icons = [
    <Compass key={0} className="w-5 h-5 text-coral" />,
    <ShieldCheck key={1} className="w-5 h-5 text-coral" />,
    <Cpu key={2} className="w-5 h-5 text-coral" />,
    <MessageSquareCode key={3} className="w-5 h-5 text-coral" />,
  ];

  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {differentiation.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {differentiation.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {differentiation.subheadline}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentiation.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-card hover:border-coral/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-coral-50 flex items-center justify-center mb-4">
                  {icons[idx]}
                </div>
                <h3 className="font-editorial-condensed text-2xl text-charcoal mb-2 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-editorial-border/60 text-[10px] font-mono uppercase text-editorial-grey font-bold">
                Pillar 0{idx + 1} • Tested
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
