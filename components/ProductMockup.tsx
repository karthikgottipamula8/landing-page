"use client";

import React from "react";
import { PRODUCT } from "@/config/product";
import { CONTENT } from "@/config/content";
import { handlePayNow } from "@/config/analytics";
import { ArrowUpRight, BookOpen, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function ProductMockup() {
  const { productVisual } = CONTENT;

  return (
    <section id="guide" className="py-20 md:py-32 bg-[#F6F5EE] border-t border-black/[0.06] relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none text-[20vw] font-editorial-condensed font-extrabold text-black/[0.02] leading-none"
        aria-hidden="true"
      >
        EDITION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Art-Directed Editorial Book Artifact */}
          <div className="lg:col-span-6 flex justify-center items-center py-6">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[1/1.35] perspective-1000">
              
              {/* Back Page Layer (Offset Paper Spread) */}
              <div
                className="absolute inset-0 bg-white/90 rounded-2xl border border-black/10 shadow-lg transform translate-x-4 translate-y-3 rotate-3 pointer-events-none"
                aria-hidden="true"
              >
                <div className="p-6 border-b border-black/[0.05] flex justify-between items-center text-[10px] uppercase font-bold text-coral tracking-widest">
                  <span>WORKSHEET 02</span>
                  <span>SALARY AUDIT MATRIX</span>
                </div>
              </div>

              {/* Front Book Cover Artifact */}
              <div className="relative w-full h-full bg-[#FAF9F5] rounded-2xl border-2 border-black/15 shadow-2xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden transform hover:-translate-y-1 hover:rotate-[-0.5deg] transition-all duration-300">
                
                {/* Book Spine Edge Effect */}
                <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-black/15 via-black/5 to-transparent pointer-events-none" />

                {/* Top Header of Cover */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-6">
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral">
                      DIGITAL MANUAL
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-charcoal/60">
                      TELUGU IT
                    </span>
                  </div>

                  {/* Main Book Title */}
                  <div className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl text-charcoal uppercase leading-[0.85] tracking-tight">
                    <span>JOB</span> <br />
                    <span className="text-coral">HIKE</span> <br />
                    <span>GUIDE.</span>
                  </div>
                </div>

                {/* Middle Career Growth Graph Artifact on Cover */}
                <div className="my-6 p-4 bg-white/70 rounded-xl border border-black/10 relative">
                  <div className="flex justify-between text-[9px] font-bold uppercase text-charcoal/70 tracking-wider mb-2">
                    <span>ANNUAL VALUATION TRAJECTORY</span>
                    <span className="text-coral">↑ +GROWTH</span>
                  </div>
                  {/* Stylized vector chart */}
                  <svg className="w-full h-12" viewBox="0 0 200 40" fill="none">
                    <path
                      d="M5 34 C40 32, 70 28, 110 16 C145 5, 175 10, 195 4"
                      stroke="#F45152"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="195" cy="4" r="3.5" fill="#181818" />
                  </svg>
                  <div className="text-[8px] font-medium text-editorial-grey uppercase tracking-widest mt-1 text-center">
                    Quantified Appraisal & Switch Strategy
                  </div>
                </div>

                {/* Cover Bottom: Author & Stamp */}
                <div className="border-t border-black/10 pt-4 flex items-end justify-between relative z-10">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-charcoal/50 block">
                      BY CREATOR
                    </span>
                    <span className="font-editorial-condensed text-2xl text-charcoal tracking-wide uppercase">
                      {productVisual.author}
                    </span>
                  </div>

                  {/* Official Stamp */}
                  <div className="border-2 border-coral rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase text-coral tracking-widest -rotate-6">
                    OFFICIAL
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT: Editorial Product Details & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral block mb-3">
              {productVisual.eyebrow}
            </span>

            <h2 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl text-charcoal uppercase leading-[0.9] tracking-tight mb-6">
              DESIGNED FOR ACTION, <br />
              <span className="text-coral">NOT SHELFWARE.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed mb-8">
              {productVisual.tagline}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-charcoal/80">
                  <strong className="text-charcoal font-semibold">Immediate PDF Delivery:</strong> Instant download on screen plus an automated copy sent to your email inbox.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-charcoal/80">
                  <strong className="text-charcoal font-semibold">Action-Oriented Templates:</strong> Includes appraisal worksheets, email scripts, and counter-offer checklists.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-charcoal/80">
                  <strong className="text-charcoal font-semibold">One-Time Ownership:</strong> No subscription lock-in. Pay {PRODUCT.price} once and keep the reference forever.
                </span>
              </div>
            </div>

            {/* Price & Primary CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
              <button
                onClick={() => handlePayNow("product_mockup_cta")}
                className="inline-flex items-center justify-center space-x-3 bg-coral hover:bg-coral-600 text-white font-bold text-sm md:text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-coral/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>GET THE GUIDE — {PRODUCT.price}</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <span className="text-xs font-semibold text-editorial-grey uppercase tracking-widest text-center sm:text-left">
                DIGITAL PDF • INSTANT DOWNLOAD
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
