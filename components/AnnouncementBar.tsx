"use client";

import React, { useState, useEffect } from "react";
import { Zap, Timer, ArrowRight, ShoppingBag } from "lucide-react";
import { PRODUCT } from "@/config/product";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import { trackEvent } from "@/config/analytics";

interface AnnouncementBarProps {
  onOpenCheckout: () => void;
}

export default function AnnouncementBar({ onOpenCheckout }: AnnouncementBarProps) {
  const { formattedHours, formattedMinutes, formattedSeconds, isMounted } = useCountdownTimer();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out the top cart once user scrolls past 70px
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCta = () => {
    trackEvent("pricing_cta_click", { location: "top_announcement_cart" });
    onOpenCheckout();
  };

  return (
    <aside
      aria-label="Limited Time Launch Offer"
      className={`sticky top-0 z-50 w-full bg-gradient-to-r from-[#141414] via-[#1F1F1F] to-[#141414] text-paper border-b border-white/10 shadow-md transition-all duration-300 ease-in-out ${
        isScrolled
          ? "opacity-0 -translate-y-full pointer-events-none"
          : "opacity-100 translate-y-0 pointer-events-auto py-2.5 px-3 sm:px-4 text-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-center">
        {/* Left: Product & Flash Badge */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-coral to-amber-500 text-white px-2.5 py-0.5 rounded-full shadow-xs">
            <Zap className="w-3 h-3 fill-current animate-pulse" />
            7-HR FLASH LAUNCH
          </span>
          <span className="hidden lg:inline text-white/70 text-xs font-medium">
            Salary Worth & Negotiation Playbook
          </span>
        </div>

        {/* Center: Cut prices (₹699 and ₹599 to ₹299) + Live Running Countdown */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-4 mx-auto sm:mx-0">
          {/* Price cut display */}
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-white/60 text-[11px] uppercase font-semibold">Special:</span>
            <span className="line-through text-white/40 text-xs font-mono font-bold" title="Original List Price">
              ₹699
            </span>
            <span className="line-through text-white/30 text-[11px] font-mono hidden xs:inline" title="Retail MRP">
              ₹599
            </span>
            <span className="text-coral font-black font-mono text-sm sm:text-base leading-none drop-shadow-xs">
              ₹299
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-extrabold px-1.5 py-0.2 rounded">
              57% OFF
            </span>
          </div>

          {/* Running Countdown Timer in Top Bar */}
          <div className="inline-flex items-center gap-1.5 bg-black/40 border border-white/15 px-3 py-1 rounded-full font-mono text-[11px] text-amber-300 font-bold shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-white/70 text-[10px] uppercase font-bold tracking-wider">Ends In:</span>
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
        </div>

        {/* Right: Add to Cart / Claim Button */}
        <div className="mx-auto sm:mx-0">
          <button
            onClick={handleCta}
            className="btn-coral-gradient px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-md hover:brightness-110 transition-all inline-flex items-center gap-1.5 group shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Claim ₹299 Deal</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </aside>
  );
}
