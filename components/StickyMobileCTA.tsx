"use client";

import React, { useState, useEffect } from "react";
import { trackEvent } from "@/config/analytics";
import { ArrowRight, Sparkles } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
}

export default function StickyMobileCTA({ onOpenCheckout }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling past the first 450px
      const scrolled = window.scrollY > 450;
      setIsVisible(scrolled);

      // Track scroll depth roughly
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent === 25 || scrollPercent === 50 || scrollPercent === 75 || scrollPercent === 100) {
        trackEvent("scroll_depth", { percent: scrollPercent });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleCta = () => {
    trackEvent("pricing_cta_click", { location: "sticky_mobile" });
    onOpenCheckout();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-paper-white/95 backdrop-blur-md border-t border-editorial-border shadow-floating sm:hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-coral font-bold leading-none">
            SALARY PLAYBOOK
          </span>
          <span className="text-sm font-black text-charcoal font-mono leading-tight mt-0.5">
            ₹299 One-Time
          </span>
        </div>

        <button
          onClick={handleCta}
          className="btn-coral flex-1 py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>Get Instant Access</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
