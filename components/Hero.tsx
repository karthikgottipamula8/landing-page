"use client";

import React from "react";
import Image from "next/image";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import { ArrowRight, Lock, Zap, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const handleCta = () => {
    trackEvent("hero_cta_click", { location: "hero_primary" });
    onOpenCheckout();
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#FAF9F5] border-b border-editorial-border overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-[#FF2A6D]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ======================================================== */}
          {/* LEFT COLUMN: EXACT RECREATION OF POSTER COPY & OFFER     */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* 1. Yellow Pill Badge (Matching image) */}
            <div className="inline-block bg-[#FDE047] text-charcoal font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5 shadow-xs border border-amber-300/60">
              A Step-by-Step Guide for Telugu IT Professionals
            </div>

            {/* 2. Bold Condensed Headline (Matching image) */}
            <h1 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-charcoal leading-[0.88] font-black uppercase mb-5">
              GET YOUR NEXT <br />
              JOB HIKE. YOU <br />
              <span className="text-charcoal underline decoration-[#FF2A6D] decoration-wavy decoration-2">
                DESERVE!
              </span>
            </h1>

            {/* Mobile-Only Portrait Placement (Shown right after headline on mobile for immediate visual punch) */}
            <div className="w-full lg:hidden my-4 relative flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[480/650] drop-shadow-xl cursor-pointer" onClick={handleCta}>
                <Image
                  src="/assets/bhargavi-hero-graphic.png"
                  alt="Bhargavi Papolu - Salary Worth & Negotiation Playbook"
                  fill
                  priority
                  sizes="(max-width: 768px) 340px, 480px"
                  className="object-contain"
                />
                {/* Real CSS 3D Sticky Note Overlay */}
                <div className="absolute bottom-6 left-2 bg-paper-white border border-gray-200 shadow-xl p-2.5 rounded-sm transform -rotate-6 z-20 pointer-events-none">
                  <span className="font-mono text-[10px] font-black text-charcoal uppercase leading-tight block">
                    YOUR<br />NEXT<br />MOVE
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Subheading (Matching image) */}
            <p className="text-base sm:text-lg text-charcoal/85 font-medium leading-relaxed max-w-lg mb-7">
              A practical guide for Telugu IT professionals navigating appraisals, salary conversations, job switches and career growth.
            </p>

            {/* 4. Price Block: ₹299 ONE-TIME PAYMENT (Matching image) */}
            <div className="flex items-center gap-4 mb-7 p-3 sm:p-4 rounded-2xl bg-paper-cream border border-editorial-border w-fit">
              <div className="flex items-baseline gap-2">
                <span className="line-through text-editorial-grey font-mono text-sm font-bold">₹699</span>
                <span className="text-4xl sm:text-5xl font-black font-mono text-charcoal leading-none">
                  ₹299
                </span>
              </div>
              <div className="border-l-2 border-charcoal/20 pl-3 flex flex-col justify-center">
                <span className="text-[11px] font-black uppercase tracking-wider text-charcoal leading-tight">
                  ONE-TIME
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-charcoal leading-tight">
                  PAYMENT
                </span>
              </div>
              <span className="ml-1 bg-emerald-100 text-emerald-800 text-[10px] font-mono font-black px-2 py-0.5 rounded border border-emerald-300">
                57% OFF
              </span>
            </div>

            {/* 5. Primary CTA Button (Coral-red pill button matching image) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={handleCta}
                className="btn-coral-gradient py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg font-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>GET THE PLAYBOOK</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 6. Social Media Icons Bar (Matching bottom of image) */}
            <div className="flex items-center gap-4 text-charcoal/70 pt-2 border-t border-editorial-border/60 w-full sm:w-auto">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-editorial-grey">
                Follow Bhargavi:
              </span>
              <div className="flex items-center gap-3 text-charcoal hover:text-[#FF2A6D] transition-colors">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  aria-label="Twitter / X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.942z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: DESKTOP SHOWCASE (Matching image layout)   */}
          {/* ======================================================== */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center relative">
            <div className="relative w-full max-w-[480px] aspect-[480/650] drop-shadow-2xl">
              <Image
                src="/assets/bhargavi-hero-graphic.png"
                alt="Bhargavi Papolu - Career Educator & Tech Mentor"
                fill
                priority
                sizes="(max-width: 1200px) 480px, 500px"
                className="object-contain"
              />

              {/* Real CSS 3D Sticky Note Overlay (Sharp, crisp text) */}
              <div className="absolute bottom-6 -left-4 bg-paper-white border border-gray-200 shadow-2xl p-3.5 rounded-sm transform -rotate-6 z-20 hover:rotate-0 transition-transform duration-300">
                <span className="font-mono text-xs font-black text-charcoal uppercase leading-tight block">
                  YOUR<br />NEXT<br />MOVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
