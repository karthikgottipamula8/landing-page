"use client";

import React from "react";
import { PRODUCT } from "@/config/product";
import { CONTENT } from "@/config/content";
import { handlePayNow } from "@/config/analytics";
import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Pricing() {
  const { pricingSection } = CONTENT;

  return (
    <section id="pricing" className="py-20 md:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral bg-white/10 px-3.5 py-1 rounded-full inline-block mb-4">
            {pricingSection.eyebrow}
          </span>

          <h2 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.88] tracking-tight mb-4">
            READY FOR YOUR <br />
            <span className="text-coral">NEXT MOVE?</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            {pricingSection.subtitle}
          </p>
        </div>

        {/* Dramatic Pricing Hero Card */}
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#222222] to-[#181818] rounded-3xl border border-white/15 p-8 sm:p-12 shadow-2xl relative">
          
          {/* Top Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-coral block mb-1">
                DIGITAL EDITION
              </span>
              <h3 className="font-editorial-condensed text-4xl sm:text-5xl text-white tracking-wide uppercase">
                {PRODUCT.name}
              </h3>
            </div>

            {/* Price Display using central config */}
            <div className="text-left sm:text-right">
              <div className="font-editorial-condensed text-6xl sm:text-7xl text-coral tracking-tight leading-none">
                {PRODUCT.price}
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-white/60 mt-1">
                {PRODUCT.paymentBadge}
              </div>
            </div>
          </div>

          {/* Included Features List */}
          <div className="py-8 space-y-4">
            {pricingSection.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-coral/20 text-coral flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-white/90">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Primary Action Button (White background, Black text as specified) */}
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <button
              onClick={() => handlePayNow("pricing_section")}
              className="group w-full py-5 px-8 rounded-full bg-white hover:bg-gray-100 text-charcoal font-editorial-condensed text-2xl uppercase tracking-wider flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>{pricingSection.ctaText}</span>
              <ArrowRight className="w-6 h-6 text-coral transition-transform group-hover:translate-x-1.5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 font-medium tracking-wide space-y-2 sm:space-y-0 pt-2">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Secured via Razorpay Payment Page</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Instant redirect & download</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
