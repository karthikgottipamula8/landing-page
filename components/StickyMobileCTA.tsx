"use client";

import React, { useState, useEffect } from "react";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import { ArrowRight, Sparkles, Timer, ShoppingBag, ShieldCheck } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
}

export default function StickyMobileCTA({ onOpenCheckout }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 6,
    minutes: 48,
    seconds: 25,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past the hero (~500px)
      setIsVisible(window.scrollY > 480);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storageKey = "sp_timer_target";
    let target = 0;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        target = parseInt(stored, 10);
      } else {
        target = Date.now() + 6 * 3600 * 1000 + 48 * 60 * 1000;
        localStorage.setItem(storageKey, target.toString());
      }
    } catch {
      target = Date.now() + 6 * 3600 * 1000 + 48 * 60 * 1000;
    }

    const interval = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const handleCta = () => {
    trackEvent("pricing_cta_click", { location: "sticky_bottom_cart" });
    onOpenCheckout();
  };

  const format2 = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2.5 sm:p-3 bg-paper-white/95 backdrop-blur-md border-t border-editorial-border shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Left Side: Product Mini Summary with Strikethrough Price */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-charcoal to-[#252525] text-paper flex items-center justify-center font-bold text-xs shrink-0 shadow-sm border border-white/10 hidden xs:flex">
            SP
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-extrabold text-charcoal leading-tight truncate max-w-[150px] sm:max-w-none">
                Salary Worth Playbook
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono text-amber-800 bg-amber-100 border border-amber-300 px-1.5 py-0.2 rounded font-bold">
                <Timer className="w-2.5 h-2.5 text-amber-600" />
                {format2(timeLeft.hours)}h:{format2(timeLeft.minutes)}m
              </span>
            </div>

            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="line-through text-editorial-grey font-mono text-xs font-bold">
                {PRODUCT.originalPrice}
              </span>
              <span className="text-base sm:text-lg font-black text-coral font-mono leading-none">
                {PRODUCT.price}
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 rounded hidden sm:inline">
                {PRODUCT.savingsAmount}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Gradient "Add to Cart / Get Playbook" Button */}
        <button
          onClick={handleCta}
          className="btn-coral-gradient py-2.5 px-4 sm:px-6 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg group shrink-0"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span>GET PLAYBOOK NOW — ₹299</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
