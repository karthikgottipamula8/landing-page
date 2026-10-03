"use client";

import React from "react";
import Image from "next/image";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import { ArrowRight, CheckCircle2, Zap, Timer, Lock } from "lucide-react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const { formattedHours, formattedMinutes, formattedSeconds, isMounted } = useCountdownTimer();

  const handleCta = () => {
    trackEvent("hero_cta_click", { location: "hero_fullscreen_new_banner" });
    onOpenCheckout();
  };

  return (
    <section className="relative w-full min-h-[92vh] flex items-center bg-[#FAF9F5] border-b border-editorial-border overflow-hidden pt-6 pb-12 lg:py-6">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-[#FF2A6D]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[500px] bg-[#FF7A45]/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[85vh]">
          {/* ========================================================================= */}
          {/* LEFT SIDE: HIGH-IMPACT TEXT, PRICING & CALL-TO-ACTION                      */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
            {/* 1. Yellow Pill Badge (Matching image) */}
            <div className="inline-flex items-center gap-1.5 bg-[#FDE047] text-charcoal font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5 shadow-xs border border-amber-300">
              A Step-by-Step Guide for Telugu IT Professionals
            </div>

            {/* 2. Bold Condensed Display Headline (Matching image) */}
            <h1 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] tracking-tight text-charcoal leading-[0.88] font-black uppercase mb-5">
              GET YOUR NEXT <br />
              JOB HIKE. YOU <br />
              <span className="text-charcoal underline decoration-[#FF2A6D] decoration-wavy decoration-3">
                DESERVE!
              </span>
            </h1>

            {/* Mobile Visual Showcase (Visible only on mobile/tablet) */}
            <div className="w-full lg:hidden my-6 relative flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/5] flex items-end justify-center cursor-pointer" onClick={handleCta}>
                {/* Mobile Organic Blob Background */}
                <div className="absolute w-[280px] h-[330px] bg-gradient-to-br from-[#FCD5C8]/85 via-[#F8BCAD]/70 to-[#FCEAE5]/90 rounded-[48%_52%_58%_42%/42%_55%_45%_58%] shadow-inner -z-10 bottom-4" />

                {/* Mobile Bhargavi Cutout */}
                <div className="relative w-full h-[340px]">
                  <Image
                    src="/assets/bhargavi-cutout.png"
                    alt="Bhargavi Papolu - Salary Worth & Negotiation Playbook"
                    fill
                    priority
                    quality={100}
                    className="object-contain object-bottom select-none"
                  />
                </div>

                {/* Mobile 3D Sticky Note */}
                <div className="absolute bottom-6 left-2 bg-white border border-gray-200 shadow-xl p-2.5 rounded-sm transform -rotate-6 z-20 pointer-events-none">
                  <span className="font-mono text-[10px] font-black text-charcoal uppercase leading-tight block">
                    YOUR<br />NEXT<br />MOVE
                  </span>
                </div>

                {/* Mobile Signature */}
                <div className="absolute bottom-6 right-2 font-handwritten text-3xl text-[#FF2A6D] transform -rotate-3 select-none pointer-events-none drop-shadow-xs">
                  Bhargavi Papolu
                </div>
              </div>
            </div>

            {/* 3. Subheading Copy (Matching image) */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal/85 font-medium leading-relaxed max-w-xl mb-6">
              A practical guide for Telugu IT professionals navigating appraisals, salary conversations, job switches and career growth.
            </p>

            {/* 4. Price Block: ₹299 ONE-TIME PAYMENT (Matching image) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 p-3 sm:p-4 rounded-2xl bg-paper-cream border border-editorial-border w-fit shadow-xs">
              <div className="flex items-baseline gap-2">
                <span className="line-through text-editorial-grey font-mono text-sm sm:text-base font-bold">₹699</span>
                <span className="text-4xl sm:text-5xl font-black font-mono text-charcoal leading-none">
                  ₹299
                </span>
              </div>
              <div className="border-l-2 border-charcoal/20 pl-3 flex flex-col justify-center">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-charcoal leading-tight">
                  ONE-TIME
                </span>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-charcoal leading-tight">
                  PAYMENT
                </span>
              </div>
              <span className="ml-1 bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-mono font-black px-2.5 py-0.5 rounded border border-emerald-300">
                57% OFF
              </span>
            </div>

            {/* 5. Primary CTA Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6">
              <button
                onClick={handleCta}
                className="btn-coral-gradient py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg font-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>GET THE PLAYBOOK</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Live 7-Hour Ticking Urgency Strip */}
            <div className="flex items-center gap-2 mb-6 font-mono text-xs text-amber-800 font-bold bg-amber-50 border border-amber-200/80 px-3 py-1.5 rounded-full">
              <Timer className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>7-Hr Launch Price:</span>
              <span className="tabular-nums font-mono font-black text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded">
                {isMounted ? `${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s` : "06h : 48m : 20s"}
              </span>
            </div>

            {/* 6. Social Channels Bar (Matching bottom of image) */}
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

          {/* ========================================================================= */}
          {/* RIGHT SIDE: FULL-HEIGHT SPEAKER PICTURE WITH BLOB, DOODLES & SIGNATURE   */}
          {/* ========================================================================= */}
          <div className="hidden lg:flex lg:col-span-5 relative h-full min-h-[640px] xl:min-h-[720px] items-end justify-center select-none">
            {/* 1. Organic Blush/Peach Backdrop Blob */}
            <div className="absolute w-[440px] xl:w-[500px] h-[540px] xl:h-[600px] bg-gradient-to-br from-[#FCD5C8]/85 via-[#F8BCAD]/70 to-[#FCEAE5]/90 rounded-[48%_52%_58%_42%/42%_55%_45%_58%] shadow-inner -z-10 bottom-6" />

            {/* 2. Razor-Sharp Vector Doodle Charts (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 500 700" fill="none">
              {/* "GROWTH" / "MOVE" Top-Right Chart */}
              <g id="growth-chart">
                <text x="365" y="105" fontFamily="system-ui" fontSize="13" fontWeight="900" fill="#222" letterSpacing="1">GROWTH</text>
                <path d="M 445 110 L 485 70" stroke="#F43F5E" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M 465 70 L 485 70 L 485 90" stroke="#F43F5E" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Upward red line with nodes */}
                <path d="M 330 200 L 375 160 L 415 190 L 475 115" stroke="#F43F5E" strokeWidth="3" fill="none" />
                <circle cx="375" cy="160" r="5" fill="#222" />
                <circle cx="415" cy="190" r="5" fill="#222" />
                
                {/* Black arrow behind */}
                <path d="M 430 210 L 475 155" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 460 155 L 475 155 L 475 170" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="390" y="235" fontFamily="system-ui" fontSize="12" fontWeight="800" fill="#333" letterSpacing="1">MOVE</text>
              </g>

              {/* "HIKE" Curved Arrow */}
              <g id="hike-arrow">
                <text x="140" y="160" fontFamily="system-ui" fontSize="13" fontWeight="900" fill="#222" letterSpacing="1">HIKE</text>
                <path d="M 148 175 Q 140 195 158 190" stroke="#F43F5E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 150 185 L 158 190 L 155 198" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* "SKILLS" Left Chart */}
              <g id="skills-chart">
                <path d="M 30 380 L 80 320 L 125 355 L 160 300" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 148 300 L 160 300 L 160 312" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="320" r="4.5" fill="#222" />
                <circle cx="125" cy="355" r="4.5" fill="#222" />

                <path d="M 35 435 L 90 365 L 120 405" stroke="#F43F5E" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <circle cx="90" cy="365" r="5" fill="#222" />
                <circle cx="120" cy="405" r="5" fill="#222" />
                <text x="55" y="445" fontFamily="system-ui" fontSize="13" fontWeight="900" fill="#222" letterSpacing="1">SKILLS</text>
              </g>
            </svg>

            {/* 3. High-Resolution AI Transparent Cutout of Bhargavi */}
            <div className="relative w-full h-[580px] xl:h-[670px] flex items-end justify-center cursor-pointer" onClick={handleCta}>
              <Image
                src="/assets/bhargavi-cutout.png"
                alt="Bhargavi Papolu - Career Educator & Tech Mentor"
                fill
                priority
                quality={100}
                sizes="(max-width: 1200px) 450px, 550px"
                className="object-contain object-bottom select-none"
              />
            </div>

            {/* 4. Real 3D Rotated CSS Sticky Note */}
            <div className="absolute bottom-16 left-2 xl:left-4 bg-white border border-gray-200 shadow-2xl p-3.5 xl:p-4 rounded-sm transform -rotate-6 z-20 hover:rotate-0 transition-transform duration-300 pointer-events-none">
              <span className="font-mono text-xs font-black text-charcoal uppercase leading-tight block">
                YOUR<br />NEXT<br />MOVE
              </span>
            </div>

            {/* 5. Handwritten Red Signature: "Bhargavi Papolu" */}
            <div className="absolute bottom-14 right-4 xl:right-6 font-handwritten text-4xl xl:text-5xl text-[#FF2A6D] transform -rotate-3 select-none pointer-events-none drop-shadow-sm z-20">
              Bhargavi Papolu
            </div>
            <div className="absolute bottom-10 right-2 xl:right-4 flex gap-1 transform -rotate-3 select-none pointer-events-none z-20">
              <span className="w-4 h-1 bg-[#FF2A6D] rounded-full inline-block" />
              <span className="w-2.5 h-1 bg-[#FF2A6D] rounded-full inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
