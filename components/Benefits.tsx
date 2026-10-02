"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { Check, Sparkles } from "lucide-react";

export default function Benefits() {
  const { benefitsSection } = CONTENT;

  return (
    <section className="py-20 md:py-32 bg-coral text-white relative overflow-hidden">
      {/* Decorative oversized background circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-black/5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white/80 bg-white/10 px-3.5 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{benefitsSection.eyebrow}</span>
          </div>
          
          <h2 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.88] tracking-tight mb-6">
            WHAT THIS GUIDE <br />
            HELPS YOU DO.
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            {benefitsSection.subtitle}
          </p>
        </div>

        {/* 6 Editorial Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitsSection.benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/40 transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-white text-coral flex items-center justify-center font-bold mb-6 shadow-sm">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>

              <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-white uppercase tracking-wide mb-3">
                {benefit.title}
              </h3>

              <p className="text-sm md:text-base text-white/85 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs tracking-wider uppercase font-semibold text-white/80 space-y-2 sm:space-y-0">
          <span>PRACTICAL EXECUTION • NO FLUFF</span>
          <span>CURATED SPECIFICALLY FOR TELUGU TECH CAREERS</span>
        </div>

      </div>
    </section>
  );
}
