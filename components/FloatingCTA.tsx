"use client";

import React, { useState, useEffect } from "react";
import { PRODUCT } from "@/config/product";
import { handlePayNow } from "@/config/analytics";
import { ArrowUpRight, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* DESKTOP FLOATING BAR (Bottom Right or Centered Bottom) */}
      {!isDismissed && (
        <aside
          aria-label="Quick purchase bar"
          className="hidden md:flex fixed bottom-6 right-8 z-40 items-center space-x-4 bg-white/95 backdrop-blur-md border border-black/10 rounded-full px-5 py-3 shadow-floating animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-grey">
              {PRODUCT.name}
            </span>
            <span className="font-editorial-condensed text-xl text-coral tracking-tight font-bold">
              {PRODUCT.price}
            </span>
          </div>

          <button
            onClick={() => handlePayNow("desktop_floating_bar")}
            className="inline-flex items-center space-x-2 bg-coral hover:bg-coral-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>GET THE GUIDE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="text-charcoal/40 hover:text-charcoal p-1 transition-colors rounded-full"
            aria-label="Dismiss purchase bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* MOBILE FIXED BOTTOM BAR (Optimized for Instagram traffic) */}
      <aside
        aria-label="Mobile purchase bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-black/10 px-4 py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.08)] flex items-center justify-between"
      >
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/60 leading-none">
            {PRODUCT.name}
          </span>
          <span className="font-editorial-condensed text-2xl text-coral tracking-tight font-bold leading-tight mt-0.5">
            {PRODUCT.price}
          </span>
        </div>

        <button
          onClick={() => handlePayNow("mobile_sticky_bottom")}
          className="inline-flex items-center justify-center space-x-2 bg-coral active:bg-coral-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md shadow-coral/30"
        >
          <span>GET THE GUIDE</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </aside>
    </>
  );
}
