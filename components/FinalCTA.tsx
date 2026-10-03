"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Timer } from "lucide-react";

interface FinalCTAProps {
  onOpenCheckout: () => void;
}

export default function FinalCTA({ onOpenCheckout }: FinalCTAProps) {
  const { finalCta } = CONTENT;

  const handleCta = () => {
    trackEvent("pricing_cta_click", { location: "final_cta" });
    onOpenCheckout();
  };

  return (
    <section className="py-20 md:py-32 bg-charcoal text-paper relative overflow-hidden border-b border-charcoal/20">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-coral/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
          <Timer className="w-3.5 h-3.5 text-amber-400" />
          <span>7-Hour Launch Window Active</span>
        </div>

        <h2 className="font-editorial-condensed text-3xl sm:text-4xl md:text-5xl text-white/90 tracking-wide mb-3">
          {finalCta.headline}
        </h2>

        {/* Large Statement with BEFORE HR emphasis */}
        <div className="font-editorial-condensed text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none mb-8">
          {finalCta.bigStatement}
        </div>

        <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          {finalCta.body}
        </p>

        {/* Price Strike-Through & Primary CTA */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-baseline gap-3 mb-1">
            <span className="text-xs font-mono uppercase text-white/60">Regular:</span>
            <span className="line-through text-white/50 font-mono text-xl font-bold">
              {PRODUCT.originalPrice}
            </span>
            <span className="font-mono text-4xl sm:text-5xl font-black text-coral">
              {PRODUCT.price}
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs px-2 py-0.5 rounded font-mono font-bold">
              {PRODUCT.discountPercent}
            </span>
          </div>

          <button
            onClick={handleCta}
            className="btn-coral-gradient px-10 py-5 rounded-2xl text-lg sm:text-xl font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl group w-full sm:w-auto"
          >
            <span>GET THE SALARY PLAYBOOK — ₹299</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <p className="text-xs text-white/60 mt-3 font-medium flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-coral shrink-0" />
            <span>{finalCta.microcopy}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
