"use client";

import React from "react";
import { PRODUCT } from "@/config/product";
import { CONTENT } from "@/config/content";
import { handlePayNow } from "@/config/analytics";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  const { finalCTA } = CONTENT;

  return (
    <section className="py-24 md:py-36 bg-coral text-white relative overflow-hidden text-center">
      {/* Decorative oversized background ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-white/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white/80 bg-white/10 px-4 py-1.5 rounded-full inline-block mb-6">
          TAKE ACTION TODAY
        </span>

        <h2 className="font-editorial-condensed text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase leading-[0.85] tracking-tight mb-8">
          YOUR NEXT <br />
          CAREER MOVE <br />
          <span className="text-white drop-shadow-sm underline decoration-white/30 underline-offset-8">
            STARTS HERE.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-white/90 max-w-xl mx-auto font-normal leading-relaxed mb-10">
          {finalCTA.subtitle}
        </p>

        {/* Product price & CTA box */}
        <div className="inline-flex flex-col items-center">
          <button
            onClick={() => handlePayNow("final_cta")}
            className="group inline-flex items-center justify-center space-x-3 bg-white hover:bg-paper-white text-charcoal font-editorial-condensed text-2xl sm:text-3xl uppercase tracking-wider px-10 py-5 rounded-full shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>{finalCTA.ctaText} — {PRODUCT.price}</span>
            <ArrowUpRight className="w-6 h-6 text-coral transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <span className="text-xs font-bold tracking-widest uppercase text-white/80 mt-4">
            {PRODUCT.paymentBadge}
          </span>
        </div>

      </div>
    </section>
  );
}
