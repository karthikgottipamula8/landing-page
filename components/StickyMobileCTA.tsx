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
      className={`fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#0D0D10] via-[#14141A] to-[#0D0D10] text-paper border-t-2 border-[#FF2A6D]/40 shadow-[0_-12px_40px_rgba(0,0,0,0.7)] transition-all duration-300 ease-in-out py-2 sm:py-3 px-3 sm:px-6 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-6">
        {/* Left Side: Product Identity in Vibrant Pink Gradient */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
          {/* Logo Monogram */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1F1F24] via-[#2A2A35] to-[#1F1F24] text-paper flex items-center justify-center font-bold text-xs shrink-0 shadow-sm border border-white/20 hidden xs:flex">
            <Zap className="w-4 h-4 text-[#FF2A6D] fill-[#FF2A6D]/30" />
          </div>

          <div className="flex flex-col min-w-0">
            {/* Top Left Title: Vibrant Pink Gradient with High Contrast */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-base font-black tracking-tight bg-gradient-to-r from-[#FF2A6D] via-[#FF5E7E] to-[#FF8C66] bg-clip-text text-transparent drop-shadow-sm truncate">
                Salary Worth Playbook
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono font-black uppercase bg-gradient-to-r from-[#FF2A6D]/25 to-[#FF8C66]/25 text-[#FF5E7E] border border-[#FF2A6D]/40 px-1.5 py-0.2 rounded shadow-xs">
                SYSTEM
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
              <span className="text-sm sm:text-lg font-black text-[#FF4A70] font-mono leading-none">
                ₹299
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                SAVE ₹400
              </span>
            </div>
          </div>
        </div>

        {/* Center: Live Running Ticking Countdown Timer WITH SECONDS */}
        <div className="flex items-center gap-1 sm:gap-2 bg-black/60 border border-white/15 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-mono text-[11px] sm:text-xs text-amber-300 font-bold shadow-inner shrink-0">
          <Timer className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 animate-pulse shrink-0" />
          <span className="hidden lg:inline text-white/60 text-[10px] uppercase font-bold tracking-wider">Ends In:</span>
          <span className="tabular-nums tracking-wide font-mono font-black flex items-center gap-0.5">
            {isMounted ? (
              <>
                <span className="text-white bg-white/10 px-1 py-0.2 rounded text-[10px] sm:text-xs">{formattedHours}h</span>
                <span className="text-white/40">:</span>
                <span className="text-white bg-white/10 px-1 py-0.2 rounded text-[10px] sm:text-xs">{formattedMinutes}m</span>
                <span className="text-[#FF5E7E] animate-pulse">:</span>
                <span className="bg-gradient-to-r from-[#FF2A6D] to-[#FF7043] text-white px-1 sm:px-1.5 py-0.2 rounded font-black text-[11px] sm:text-xs shadow-xs">
                  {formattedSeconds}s
                </span>
              </>
            ) : (
              "06h : 48m : 20s"
            )}
          </span>
        </div>

        {/* Right Side: High-Converting Radiant Multi-Stop Gradient Button */}
        <div className="shrink-0 flex items-center">
          <button
            onClick={handleCta}
            className="btn-coral-gradient py-2 sm:py-2.5 px-3 sm:px-5 md:px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg group shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden xs:inline">GET PLAYBOOK NOW — </span>
            <span>₹299</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </aside>
  );
}
