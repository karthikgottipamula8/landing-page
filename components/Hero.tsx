"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import { ArrowRight, CheckCircle2, Zap, Timer, Lock } from "lucide-react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const { formattedHours, formattedMinutes, formattedSeconds, isMounted } = useCountdownTimer();
  const [btnHovered, setBtnHovered] = useState(false);

  const handleCta = () => {
    trackEvent("hero_cta_click", { location: "hero_16_9_banner" });
    onOpenCheckout();
  };

  return (
    <section className="relative pt-4 pb-12 sm:pt-6 sm:pb-16 bg-[#FAF9F5] border-b border-editorial-border overflow-hidden">
      {/* Subtle warm ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#FF2A6D]/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 1. NATIVE 16:9 FORMAT HERO BANNER WITH INTERACTIVE OVERLAYS               */}
        {/* ========================================================================= */}
        <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-editorial-border bg-[#FAF9F5] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(244,81,82,0.18)]">
          {/* Complete 16:9 Banner in 100% Native Clarity */}
          <Image
            src="/assets/bhargavi-hero-banner-16-9.jpg"
            alt="Get Your Next Job Hike. You Deserve! By Bhargavi Papolu"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1152px"
            className="object-contain w-full h-full select-none"
          />

          {/* ------------------------------------------------------------------- */}
          {/* OVERLAY 1: Interactive CTA Button over "GET THE PLAYBOOK →"         */}
          {/* ------------------------------------------------------------------- */}
          <div
            className="absolute left-[25.2%] top-[76.8%] w-[21.5%] h-[8.5%] z-30 cursor-pointer"
            onClick={handleCta}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            role="button"
            tabIndex={0}
            aria-label="Get The Playbook — ₹299"
          >
            {/* Luminous Glow highlight on hover */}
            <div
              className={`w-full h-full rounded-full transition-all duration-300 border-2 ${
                btnHovered
                  ? "bg-white/20 border-white shadow-[0_0_30px_rgba(255,255,255,0.8)] scale-[1.03]"
                  : "bg-transparent border-transparent hover:border-white/40"
              }`}
            />
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* OVERLAY 2: Navigation Links Overlays                                */}
          {/* ------------------------------------------------------------------- */}
          <a
            href="#whats-inside"
            className="absolute left-[46.2%] top-[3%] w-[8%] h-[5%] z-30 cursor-pointer rounded hover:bg-black/5 transition-colors"
            title="What's Inside"
            aria-label="Navigate to What's Inside"
          />
          <a
            href="#benefits"
            className="absolute left-[55.2%] top-[3%] w-[6%] h-[5%] z-30 cursor-pointer rounded hover:bg-black/5 transition-colors"
            title="Benefits"
            aria-label="Navigate to Benefits"
          />
          <a
            href="#testimonials"
            className="absolute left-[62%] top-[3%] w-[8.2%] h-[5%] z-30 cursor-pointer rounded hover:bg-black/5 transition-colors"
            title="Testimonials"
            aria-label="Navigate to Testimonials"
          />
          <a
            href="#faq"
            className="absolute left-[71%] top-[3%] w-[4.5%] h-[5%] z-30 cursor-pointer rounded hover:bg-black/5 transition-colors"
            title="FAQ"
            aria-label="Navigate to FAQ"
          />

          {/* ------------------------------------------------------------------- */}
          {/* OVERLAY 3: Social Media Links Overlays                              */}
          {/* ------------------------------------------------------------------- */}
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[25.2%] top-[92.5%] w-[2.8%] h-[5.5%] z-30 cursor-pointer rounded hover:bg-black/10 transition-colors"
            aria-label="Instagram"
          />
          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[28.5%] top-[92.5%] w-[2.8%] h-[5.5%] z-30 cursor-pointer rounded hover:bg-black/10 transition-colors"
            aria-label="Twitter / X"
          />
          {/* Telegram */}
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[31.6%] top-[92.5%] w-[2.8%] h-[5.5%] z-30 cursor-pointer rounded hover:bg-black/10 transition-colors"
            aria-label="Telegram"
          />
          {/* YouTube (Right side) */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[71.5%] top-[92.5%] w-[3.2%] h-[5.5%] z-30 cursor-pointer rounded hover:bg-black/10 transition-colors"
            aria-label="YouTube"
          />

          {/* ------------------------------------------------------------------- */}
          {/* OVERLAY 4: Floating Live 7-Hour Urgency Timer Badge                 */}
          {/* ------------------------------------------------------------------- */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 bg-black/75 backdrop-blur-md text-amber-300 px-2.5 sm:px-3 py-1 rounded-full font-mono text-[10px] sm:text-xs font-black shadow-lg border border-white/15 pointer-events-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-white/80 hidden xs:inline font-bold">7-Hr Special:</span>
            <span className="tabular-nums font-mono font-black text-amber-300">
              {isMounted ? `${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s` : "06h : 48m : 20s"}
            </span>
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* OVERLAY 5: Verified Career Mentor Badge                             */}
          {/* ------------------------------------------------------------------- */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 hidden xs:flex items-center gap-1.5 bg-paper-white/95 backdrop-blur-md text-charcoal px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold shadow-md border border-editorial-border pointer-events-none">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Career Mentor</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. FAST ACTION CONVERSION STRIP (Mobile Optimized Touch Target)          */}
        {/* ========================================================================= */}
        <div className="mt-5 sm:mt-7 p-4 sm:p-6 rounded-3xl bg-paper-white border border-editorial-border shadow-paper">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Price & Savings */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase text-editorial-grey font-bold">Regular:</span>
                  <span className="line-through text-editorial-grey font-mono text-xs font-bold">₹699</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#FF2A6D] leading-none">
                    ₹299
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-extrabold px-1.5 py-0.2 rounded border border-emerald-300">
                    57% OFF
                  </span>
                </div>
                <span className="text-[11px] text-charcoal/70 font-semibold mt-0.5">
                  Instant PDF Access • 15 Fillable Worksheets • Complete Script Pack
                </span>
              </div>
            </div>

            {/* Radiant Action Button */}
            <button
              onClick={handleCta}
              className="w-full sm:w-auto btn-coral-gradient py-3.5 px-8 rounded-2xl text-sm sm:text-base font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all group shrink-0"
            >
              <span>GET THE PLAYBOOK — ₹299</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Guarantee line */}
          <div className="mt-3.5 pt-3 border-t border-editorial-border/60 flex items-center justify-between text-[11px] text-editorial-grey font-semibold">
            <span className="flex items-center gap-1.5 text-charcoal">
              <Lock className="w-3.5 h-3.5 text-[#FF2A6D]" />
              Safe 256-bit Encrypted Checkout
            </span>
            <span className="text-emerald-700 font-bold hidden xs:inline">
              ✓ Direct Download & Email Confirmation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
