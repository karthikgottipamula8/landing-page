"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Timer, ArrowRight, Zap } from "lucide-react";

interface AnnouncementBarProps {
  onOpenCheckout: () => void;
}

export default function AnnouncementBar({ onOpenCheckout }: AnnouncementBarProps) {
  // Live ticking 7-hour countdown timer
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 6,
    minutes: 48,
    seconds: 25,
  });

  useEffect(() => {
    // 7 hours in seconds
    const storageKey = "sp_timer_target";
    let target = 0;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        target = parseInt(stored, 10);
      } else {
        target = Date.now() + 6 * 3600 * 1000 + 48 * 60 * 1000 + 25 * 1000;
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

      if (diff <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format2 = (n: number) => n.toString().padStart(2, "0");

  return (
    <aside aria-label="Limited Time Offer" className="bg-gradient-to-r from-[#181818] via-[#222222] to-[#181818] text-paper py-2.5 px-4 text-xs border-b border-white/10 relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
        {/* Launch Pill */}
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-coral to-amber-500 text-white px-2.5 py-0.5 rounded-full shadow-xs">
          <Zap className="w-3 h-3 fill-current" />
          FLASH LAUNCH
        </span>

        {/* Price Cut Offer */}
        <div className="flex items-center gap-2 font-medium">
          <span className="text-white/80">Only for today:</span>
          <span className="line-through text-white/50 text-[11px] font-mono">₹699</span>
          <span className="text-coral font-black font-mono text-sm">₹299</span>
          <span className="hidden md:inline-block bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-1.5 py-0.2 rounded font-mono">
            SAVE ₹400 (57% OFF)
          </span>
        </div>

        {/* 7-Hour Live Ticking Timer */}
        <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full font-mono text-[11px] text-amber-300 font-bold">
          <Timer className="w-3 h-3 text-amber-400 animate-pulse" />
          <span>Expires in {format2(timeLeft.hours)}h : {format2(timeLeft.minutes)}m : {format2(timeLeft.seconds)}s</span>
        </div>

        {/* Claim Action Button */}
        <button
          onClick={onOpenCheckout}
          className="bg-gradient-to-r from-coral via-[#FF5F60] to-coral-600 text-white px-3 py-1 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_8px_rgba(244,81,82,0.4)] hover:brightness-110 transition-all inline-flex items-center gap-1"
        >
          <span>Claim ₹299 Deal</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
}
