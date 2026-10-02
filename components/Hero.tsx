"use client";

import React from "react";
import Image from "next/image";
import { PRODUCT } from "@/config/product";
import { CONTENT } from "@/config/content";
import { handlePayNow } from "@/config/analytics";
import { ArrowUpRight, TrendingUp, Sparkles, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden min-h-[92vh] flex flex-col justify-between">
      {/* Giant Faint Background Typography */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-editorial-condensed text-[20vw] font-bold text-black/[0.025] tracking-tighter leading-none block">
          CAREER HIKE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Editorial Poster Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-2.5 mb-5 md:mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-coral animate-ping" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-coral bg-coral-50 border border-coral-200/60 px-3.5 py-1 rounded-full">
                {CONTENT.eyebrow}
              </span>
            </div>

            {/* Main Stacked Editorial Headline */}
            <h1 className="font-editorial-condensed text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8rem] text-charcoal tracking-tight uppercase leading-[0.88] mb-6 md:mb-8">
              <span className="block text-charcoal">GET YOUR NEXT</span>
              <span className="block text-coral mt-1 relative inline-block">
                JOB HIKE.
                {/* Hand-drawn editorial underline SVG */}
                <svg
                  className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-coral/80 overflow-visible"
                  viewBox="0 0 280 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5C65 2.5 150 1.8 277 8.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Editorial Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 font-normal max-w-xl leading-relaxed mb-8 md:mb-10">
              {CONTENT.hero.subheading}
            </p>

            {/* Action Buttons & Micro-labels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 mb-8">
              <button
                onClick={() => handlePayNow("hero_primary_cta")}
                className="group relative inline-flex items-center justify-center space-x-3 bg-coral hover:bg-coral-600 text-white font-bold text-sm md:text-base tracking-wider uppercase px-8 py-4 sm:py-4.5 rounded-full shadow-lg shadow-coral/25 hover:shadow-xl hover:shadow-coral/35 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>{CONTENT.hero.ctaText}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs font-semibold tracking-wide text-charcoal/70 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{CONTENT.hero.priceNote}</span>
              </div>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-4 border-t border-black/[0.08] grid grid-cols-3 gap-3 max-w-lg">
              <div className="flex items-center space-x-1.5 text-xs text-charcoal/80 font-medium">
                <Check className="w-3.5 h-3.5 text-coral shrink-0" />
                <span>Appraisals</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-charcoal/80 font-medium">
                <Check className="w-3.5 h-3.5 text-coral shrink-0" />
                <span>Negotiations</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-charcoal/80 font-medium">
                <Check className="w-3.5 h-3.5 text-coral shrink-0" />
                <span>Job Switches</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Art-Directed Bhargavi Cutout & Layered Poster Elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none aspect-[4/5] sm:aspect-square lg:aspect-[4/5] flex items-end justify-center">
              
              {/* Layer 1: Giant Coral Circle Halo */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] sm:w-[78%] aspect-square rounded-full bg-gradient-to-tr from-coral-200/50 via-coral-100/40 to-transparent blur-xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68%] sm:w-[74%] aspect-square rounded-full border border-coral-300/40 pointer-events-none"
                aria-hidden="true"
              />

              {/* Layer 2: Graphic Salary Growth SVG Chart */}
              <div
                className="absolute -top-4 -right-4 sm:top-2 sm:right-2 w-36 h-28 sm:w-44 sm:h-32 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-black/[0.08] shadow-card transform rotate-3 pointer-events-none z-10"
                aria-hidden="true"
              >
                <div className="flex items-center justify-between text-[10px] font-bold tracking-wider text-charcoal/70 uppercase mb-2">
                  <span>MARKET VALUATION</span>
                  <TrendingUp className="w-3.5 h-3.5 text-coral" />
                </div>
                {/* SVG Curve */}
                <svg className="w-full h-12" viewBox="0 0 140 45" fill="none">
                  <path
                    d="M5 38C35 34 50 28 75 18C100 8 115 12 135 4"
                    stroke="#F45152"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="135" cy="4" r="3.5" fill="#F45152" />
                </svg>
                <div className="flex justify-between items-center text-[9px] text-editorial-grey font-semibold mt-1">
                  <span>CURRENT BAND</span>
                  <span className="text-coral font-bold">+TARGET HIKE</span>
                </div>
              </div>

              {/* Layer 3: Floating Stamp Badge ("CAREER ↑") */}
              <div className="absolute top-16 -left-3 sm:-left-6 bg-charcoal text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-lg transform -rotate-6 z-20 flex items-center space-x-1">
                <span>CAREER ↑</span>
              </div>

              {/* Layer 4: Floating Paper Card ("YOUR NEXT MOVE") */}
              <div className="absolute bottom-16 -left-2 sm:-left-8 bg-paper-white border border-black/10 rounded-xl p-3 sm:p-3.5 shadow-floating transform -rotate-3 z-20 max-w-[155px]">
                <div className="text-[10px] font-extrabold uppercase text-coral tracking-widest">
                  ACTION PLAN
                </div>
                <div className="text-xs font-bold text-charcoal leading-tight mt-0.5">
                  YOUR NEXT MOVE
                </div>
                <div className="text-[10px] text-editorial-grey mt-1 font-handwritten text-sm">
                  ✓ Step-by-step clarity
                </div>
              </div>

              {/* Layer 5: Floating Stamp Badge ("+SKILLS") */}
              <div className="absolute bottom-6 right-2 sm:-right-4 bg-coral text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md transform rotate-6 z-20 flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>+SKILLS</span>
              </div>

              {/* Layer 6: Main Bhargavi Cutout Portrait */}
              <div className="relative w-full h-full max-h-[500px] sm:max-h-[560px] lg:max-h-[620px] flex items-end justify-center z-10">
                <Image
                  src="/assets/bhargavi-cutout.png"
                  alt="Bhargavi Papolu - Job Hike Guide Creator"
                  width={600}
                  height={600}
                  priority
                  className="w-auto h-full max-h-[480px] sm:max-h-[540px] lg:max-h-[600px] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] filter"
                />
              </div>

              {/* Small Hand-drawn Arrow SVG Pointing to Bhargavi */}
              <div
                className="absolute top-28 -right-2 sm:-right-8 pointer-events-none z-20"
                aria-hidden="true"
              >
                <div className="font-handwritten text-coral text-lg sm:text-xl font-bold -rotate-12">
                  Bhargavi Papolu ✍︎
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom of Hero: Editorial Separator & Banner Tagline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 md:mt-16">
        <div className="border-t border-black/10 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-bold uppercase tracking-widest text-charcoal/60 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-coral rounded-full" />
            <span>BUILT EXCLUSIVELY FOR TELUGU IT PROFESSIONALS</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>DIGITAL PDF GUIDE</span>
            <span className="text-coral">•</span>
            <span>INSTANT ACCESS</span>
            <span className="text-coral">•</span>
            <span>LIFETIME REFERENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
