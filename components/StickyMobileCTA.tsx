"use client";

import React, { useState, useEffect } from "react";
import { CONTENT } from "@/config/content";
import { ArrowRight, Sparkles } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
}

export default function StickyMobileCTA({ onOpenCheckout }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past the hero (~500px)
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-paper-white/95 backdrop-blur-md border-t border-editorial-border shadow-floating sm:hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-coral font-bold leading-none">
            LAUNCH SPECIAL
          </span>
          <span className="text-sm font-extrabold text-charcoal font-mono leading-tight mt-0.5">
            ₹299 One-Time
          </span>
        </div>

        <button
          onClick={onOpenCheckout}
          className="btn-coral flex-1 py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>GET THE PLAYBOOK</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
