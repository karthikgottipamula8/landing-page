"use client";

import React from "react";
import { Zap, Timer, ArrowRight, ShoppingBag } from "lucide-react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import { trackEvent } from "@/config/analytics";

interface AnnouncementBarProps {
  onOpenCheckout: () => void;
}

export default function AnnouncementBar({ onOpenCheckout }: AnnouncementBarProps) {
  const { formattedHours, formattedMinutes, formattedSeconds, isMounted } = useCountdownTimer();

  const handleCta = () => {
    trackEvent("pricing_cta_click", { location: "top_announcement_cart" });
    onOpenCheckout();
  };

  return (
    <aside
      aria-label="Limited Time Launch Offer"
      className="relative z-30 w-full bg-gradient-to-r from-[#0F0F12] via-[#1A1A1F] to-[#0F0F12] text-paper border-b border-white/10 shadow-md py-2 px-3 sm:px-6 text-xs transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 w-full">
        {/* Left Side: Offer Badge + Strikethrough Pricing + Live Seconds Countdown */}
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-3.5">
          {/* Flash Launch Pill */}
          <span className="inline-flex items-center gap-1 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#FF2A6D] via-[#FF5F60] to-[#FF8C42] text-white px-2 sm:px-2.5 py-0.5 rounded-full shadow-xs shrink-0">
            <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current animate-pulse" />
            7-HR FLASH
          </span>

          {/* Strikethrough Pricing */}
          <div className="flex items-center gap-1 sm:gap-1.5 font-medium shrink-0">
            <span className="line-through text-white/40 text-[11px] sm:text-xs font-mono font-bold" title="Original List Price">
              ₹699
            </span>
            <span className="line-through text-white/30 text-[10px] sm:text-[11px] font-mono hidden xs:inline" title="Retail MRP">
              ₹599
            </span>
            <span className="text-[#FF4A70] font-black font-mono text-xs sm:text-sm leading-none drop-shadow-xs">
              ₹299
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] sm:text-[10px] font-mono font-extrabold px-1.5 py-0.2 rounded hidden sm:inline">
              57% OFF
            </span>
          </div>

          {/* Running Countdown Timer with Seconds */}
          <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-black/50 border border-white/15 px-2 sm:px-2.5 py-0.5 rounded-full font-mono text-[10px] sm:text-[11px] text-amber-300 font-bold shadow-inner shrink-0">
            <Timer className="w-3 h-3 text-amber-400 animate-pulse shrink-0" />
            <span className="hidden md:inline text-white/60 text-[9px] uppercase font-bold tracking-wider">Ends In:</span>
            <span className="tabular-nums tracking-wide flex items-center gap-0.5">
              {isMounted ? (
                <>
                  <span className="text-white">{formattedHours}h</span>
                  <span className="text-white/40">:</span>
                  <span className="text-white">{formattedMinutes}m</span>
                  <span className="text-[#FF5F60] animate-pulse">:</span>
                  <span className="bg-gradient-to-r from-[#FF2A6D] to-[#FF7043] text-white px-1 py-0.2 rounded font-black text-[10px] sm:text-[11px]">
                    {formattedSeconds}s
                  </span>
                </>
              ) : (
                "06h : 48m : 20s"
              )}
            </span>
          </div>
        </div>

        {/* Right Side: Claim Button PINNED FIRMLY TO THE RIGHT */}
        <div className="ml-auto shrink-0 flex items-center">
          <button
            onClick={handleCta}
            className="btn-coral-gradient px-3 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md hover:brightness-110 transition-all inline-flex items-center gap-1.5 group shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Claim ₹299 Deal</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </aside>
  );
}
