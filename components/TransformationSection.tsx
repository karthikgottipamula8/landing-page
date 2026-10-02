"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { ArrowDown, MoveRight } from "lucide-react";

export default function TransformationSection() {
  const { transformationSection } = CONTENT;

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-black/[0.06]">
      {/* Subtle Background Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[22vw] font-editorial-condensed font-extrabold text-black/[0.015] leading-none"
        aria-hidden="true"
      >
        TRANSFORM
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral bg-coral-50 border border-coral-200/50 px-3.5 py-1 rounded-full">
            {transformationSection.eyebrow}
          </span>
        </div>

        {/* The Giant Editorial Shift: FROM -> TO */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-center max-w-5xl mx-auto">
          
          {/* FROM CARD */}
          <div className="lg:col-span-5 bg-[#FAF9F5] border border-black/[0.08] rounded-3xl p-8 sm:p-10 text-center shadow-card relative transform hover:-rotate-1 transition-transform">
            <span className="text-xs font-bold tracking-[0.2em] text-editorial-grey uppercase block mb-3">
              BEFORE
            </span>
            <div className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal/70 uppercase leading-none mb-4">
              {transformationSection.from}
            </div>
            <p className="text-xs sm:text-sm text-charcoal/60 leading-relaxed">
              Uncertainty, waiting on management decisions, anxiety before 1-on-1s, and guesswork during job switches.
            </p>
          </div>

          {/* GIANT CORAL ARROW DIVIDER */}
          <div className="lg:col-span-1 flex items-center justify-center py-2 lg:py-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-coral text-white flex items-center justify-center shadow-lg shadow-coral/30 transform hover:scale-110 transition-transform">
              <MoveRight className="hidden lg:block w-8 h-8 stroke-[2.5]" />
              <ArrowDown className="block lg:hidden w-8 h-8 stroke-[2.5]" />
            </div>
          </div>

          {/* TO CARD */}
          <div className="lg:col-span-5 bg-gradient-to-br from-coral-50 to-white border-2 border-coral/30 rounded-3xl p-8 sm:p-10 text-center shadow-paper relative transform hover:rotate-1 transition-transform">
            <span className="text-xs font-bold tracking-[0.2em] text-coral uppercase block mb-3">
              AFTER THE GUIDE
            </span>
            <div className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-coral uppercase leading-none mb-4">
              {transformationSection.to}
            </div>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium">
              Documented accomplishments, clear negotiation scripts, timed switch strategy, and a predictable 1-3 year career plan.
            </p>
          </div>

        </div>

        {/* Bottom narrative statement */}
        <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-charcoal/80 font-normal leading-relaxed">
            {transformationSection.description}
          </p>
        </div>

      </div>
    </section>
  );
}
