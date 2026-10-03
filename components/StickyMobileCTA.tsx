"use client";

import React, { useState, useEffect } from "react";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import { ArrowRight, Timer, ShoppingBag, Zap, CheckCircle2 } from "lucide-react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
}

export default function StickyMobileCTA({ onOpenCheckout }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { formattedHours, formattedMinutes, formattedSeconds, isMounted } = useCountdownTimer();

  useEffect(() => {
    const handleScroll = () => {
      // Fade in the bottom cart once user scrolls past 70px (when top cart fades out)
      setIsVisible(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCta = () => {
    trackEvent("pricing_cta_click", { location: "sticky_bottom_cart" });
    onOpenCheckout();
  };

  return (
    <aside
      aria-label="Floating Purchase Bar"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#141414]/98 via-[#1C1C1C]/98 to-[#141414]/98 backdrop-blur-lg text-paper border-t border-white/15 shadow-[0_-8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out py-2.5 sm:py-3 px-3 sm:px-6 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Left Side: Product Identity & Badges */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Logo Monogram */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-charcoal via-[#2A2A2A] to-charcoal text-paper flex items-center justify-center font-bold text-xs shrink-0 shadow-sm border border-white/20 hidden xs:flex">
            <Zap className="w-4 h-4 text-coral fill-coral/30" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-extrabold text-white leading-tight truncate max-w-[140px] sm:max-w-none">
                Salary Worth Playbook
              </span>
              <span className="hidden lg:inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.2 rounded font-bold uppercase">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                Instant Delivery
              </span>
            </div>

            {/* Price Cut: 699 & 599 struck through, 299 active */}
            <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5">
              <span className="text-[10px] text-white/50 uppercase font-bold hidden sm:inline">Deal:</span>
              <span className="line-through text-white/40 font-mono text-[11px] sm:text-xs font-bold" title="Original Price">
                ₹699
              </span>
              <span className="line-through text-white/30 font-mono text-[10px] hidden md:inline" title="Retail MRP">
                ₹599
              </span>
              <span className="text-base sm:text-lg font-black text-coral font-mono leading-none">
                ₹299
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                SAVE ₹400
              </span>
            </div>
          </div>
        </div>

        {/* Center: Live Running Ticking Countdown Timer */}
        <div className="hidden md:flex items-center gap-2 bg-black/40 border border-white/15 px-3 py-1 rounded-full font-mono text-xs text-amber-300 font-bold shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-white/70 text-[10px] uppercase font-bold tracking-wider">7-Hr Special:</span>
          <span className="tabular-nums tracking-wide text-amber-300 text-xs font-black">
            {isMounted ? (
              <>
                <span className="bg-white/10 px-1 py-0.2 rounded text-white">{formattedHours}</span>h :{" "}
                <span className="bg-white/10 px-1 py-0.2 rounded text-white">{formattedMinutes}</span>m :{" "}
                <span className="bg-white/10 px-1 py-0.2 rounded text-amber-300 font-black">{formattedSeconds}</span>s
              </>
            ) : (
              "06h : 48m : 20s"
            )}
          </span>
        </div>

        {/* Right Side: High-Converting Gradient "Add to Cart / Get Playbook" Button */}
        <div className="flex items-center gap-2">
          {/* Mobile timer pill */}
          <div className="md:hidden flex items-center gap-1 font-mono text-[10px] text-amber-300 bg-black/40 px-2 py-1 rounded-lg border border-white/10">
            <Timer className="w-2.5 h-2.5 text-amber-400 animate-pulse" />
            <span>{formattedHours}h:{formattedMinutes}m</span>
          </div>

          <button
            onClick={handleCta}
            className="btn-coral-gradient py-2 sm:py-2.5 px-3.5 sm:px-6 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg group shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>GET PLAYBOOK NOW — ₹299</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </aside>
  );
}
