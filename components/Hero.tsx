"use client";

import React from "react";
import Image from "next/image";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Timer, Sparkles, Download, Lock } from "lucide-react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const { formattedHours, formattedMinutes, formattedSeconds, isMounted } = useCountdownTimer();

  const handleCta = () => {
    trackEvent("hero_cta_click", { location: "hero_primary_banner" });
    onOpenCheckout();
  };

  return (
    <section className="relative pt-4 pb-12 sm:pt-8 sm:pb-16 bg-paper border-b border-editorial-border overflow-hidden">
      {/* Soft warm ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF2A6D]/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. THE HERO BANNER GRAPHIC (FIRST IN HOME PAGE AS REQUESTED) */}
        <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-editorial-border bg-paper-white group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(244,81,82,0.18)]">
          {/* Main Visual Asset: The complete approved hero graphic */}
          <div className="relative w-full aspect-square sm:aspect-[1.08/1] cursor-pointer" onClick={handleCta}>
            <Image
              src="/assets/bhargavi-hero-banner.jpg"
              alt="Get Your Next Job Hike. You Deserve! By Bhargavi Papolu"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              className="object-contain sm:object-cover w-full h-full"
            />

            {/* Subtle Interactive Click Overlay Indicator */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden xs:flex items-center gap-2 bg-charcoal/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-lg border border-white/20 hover:scale-105 transition-transform pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#FF2A6D] animate-ping" />
              <span>Tap to Get Playbook — ₹299</span>
            </div>
          </div>
        </div>

        {/* 2. INSTANT CONVERSION ACTION BOX (Optimized for Mobile & Fast Conversions) */}
        <div className="mt-6 sm:mt-8 p-5 sm:p-7 rounded-3xl bg-paper-white border border-editorial-border shadow-paper">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            {/* Left: Price Breakdown & Live Urgency Timer */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#FF2A6D] to-[#FF8C42] text-white px-2.5 py-0.5 rounded-full shadow-xs">
                  <Zap className="w-3 h-3 fill-current" />
                  LAUNCH SPECIAL
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.2 rounded font-mono">
                  SAVE ₹400 (57% OFF)
                </span>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-2.5">
                <span className="text-xs font-mono uppercase text-editorial-grey font-bold">Was:</span>
                <span className="line-through text-editorial-grey font-mono text-base font-bold">
                  {PRODUCT.originalPrice}
                </span>
                <span className="line-through text-editorial-grey/70 font-mono text-sm hidden xs:inline">
                  {PRODUCT.originalPriceAlt}
                </span>
                <span className="text-3xl sm:text-4xl font-black font-mono text-charcoal leading-none">
                  {PRODUCT.price}
                </span>
                <span className="text-xs font-bold text-editorial-grey uppercase tracking-wider">
                  ONE-TIME PAYMENT
                </span>
              </div>

              {/* Synchronized 7-Hour Live Ticking Timer */}
              <div className="flex items-center gap-2 mt-2 font-mono text-xs text-amber-800 font-bold">
                <Timer className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>Price increases when timer ends:</span>
                <span className="bg-amber-100 border border-amber-300 text-amber-900 px-2 py-0.5 rounded tabular-nums font-black">
                  {isMounted ? `${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s` : "06h : 48m : 20s"}
                </span>
              </div>
            </div>

            {/* Right: Giant Radiant Gradient CTA Button */}
            <div className="flex flex-col sm:items-end">
              <button
                onClick={handleCta}
                className="w-full sm:w-auto btn-coral-gradient py-4 px-8 rounded-2xl text-base sm:text-lg font-black uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>GET THE PLAYBOOK — ₹299</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-[11px] text-editorial-grey mt-2 font-semibold">
                <Lock className="w-3 h-3 text-[#FF2A6D]" />
                <span>Instant PDF + 15 Worksheets • 100% Safe Checkout</span>
              </div>
            </div>
          </div>

          {/* Value Micro-Features Bar */}
          <div className="mt-5 pt-4 border-t border-editorial-border/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Master Playbook (PDF)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>15 Fillable Worksheets</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>HR Script Pack (Verbatim)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>For Appraisals & Switches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
