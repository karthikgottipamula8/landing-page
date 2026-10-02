"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { testimonialsSection } = CONTENT;

  return (
    <section className="py-20 md:py-32 bg-white border-t border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral block mb-3">
            {testimonialsSection.eyebrow}
          </span>

          <h2 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal uppercase leading-[0.88] tracking-tight mb-4">
            REAL PEOPLE. <br />
            <span className="text-coral">REAL EXPERIENCES.</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
            {testimonialsSection.subtitle}
          </p>
        </div>

        {/* 3 Editorial Cards with Clear Placeholders for Real Customer Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsSection.testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF9F5] rounded-2xl p-8 border border-black/[0.08] shadow-card flex flex-col justify-between card-editorial relative"
            >
              <div>
                <Quote className="w-8 h-8 text-coral/40 mb-4" />
                <p className="text-base text-charcoal/80 font-normal leading-relaxed italic mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-charcoal">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-editorial-grey">
                    {item.role}
                  </div>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-wider text-coral bg-coral-100/60 px-2.5 py-1 rounded-full">
                  VERIFIED
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note indicating easily editable testimonials */}
        <div className="mt-8 text-center text-xs text-editorial-grey">
          Client testimonials are populated from <code className="bg-black/[0.04] px-1.5 py-0.5 rounded font-mono text-[11px]">/config/content.ts</code>
        </div>

      </div>
    </section>
  );
}
