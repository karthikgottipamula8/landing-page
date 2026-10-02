"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { handlePayNow } from "@/config/analytics";
import { ArrowUpRight } from "lucide-react";

export default function WhatsInside() {
  const { whatsInsideSection } = CONTENT;

  return (
    <section id="inside" className="py-20 md:py-32 bg-[#FAF9F5] border-t border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral block mb-3">
              {whatsInsideSection.eyebrow}
            </span>
            <h2 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal uppercase leading-[0.88] tracking-tight">
              WHAT'S <br />
              <span className="text-coral">INSIDE?</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
              {whatsInsideSection.subtitle}
            </p>
          </div>
        </div>

        {/* Editorial Cards Grid with Subtle Rotations and Hover Straightening */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {whatsInsideSection.modules.map((module) => (
            <div
              key={module.number}
              className={`bg-white rounded-2xl p-7 border border-black/[0.08] shadow-card transition-all duration-300 card-editorial flex flex-col justify-between group md:${module.rotation}`}
            >
              <div>
                {/* Header: Module Number & Coral Accent */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-editorial-condensed text-4xl text-coral tracking-tight">
                    {module.number}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-charcoal/40 group-hover:text-coral transition-colors">
                    MODULE
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial-condensed text-2xl text-charcoal tracking-wide uppercase leading-tight mb-3">
                  {module.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Bottom Tag / Indicator */}
              <div className="pt-6 mt-6 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-bold text-coral/80 uppercase tracking-wider">
                <span>INCLUDED</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center p-2 sm:p-2.5 bg-white border border-black/[0.08] rounded-2xl sm:rounded-full shadow-card space-y-3 sm:space-y-0 sm:space-x-4">
            <span className="text-xs sm:text-sm font-semibold text-charcoal/80 px-4">
              All 8 modules included in the digital edition
            </span>
            <button
              onClick={() => handlePayNow("whats_inside_cta")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-coral hover:bg-coral-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm transition-all"
            >
              <span>GET THE GUIDE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
