"use client";

import React from "react";
import Image from "next/image";
import { PRODUCT } from "@/config/product";
import { CONTENT } from "@/config/content";
import { trackEvent } from "@/config/analytics";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function BhargaviSection() {
  const { bhargaviSection } = CONTENT;

  const handleInstagramClick = () => {
    trackEvent("instagram_click", { handle: PRODUCT.instagramHandle });
    window.open(PRODUCT.instagramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 md:py-32 bg-[#FAF9F5] border-t border-black/[0.06] relative overflow-hidden">
      {/* Background Giant Text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[18vw] font-editorial-condensed font-extrabold text-black/[0.02] leading-none"
        aria-hidden="true"
      >
        BHARGAVI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Cutout in Editorial Frame with Layering */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-end justify-center">
              
              {/* Back Accent Shape */}
              <div
                className="absolute inset-x-4 inset-y-8 bg-coral-100/60 rounded-3xl border border-coral-200/50 -rotate-2 pointer-events-none"
                aria-hidden="true"
              />

              {/* Hand-drawn note */}
              <div className="absolute top-4 right-2 bg-white px-3.5 py-1.5 rounded-full border border-black/10 shadow-sm font-handwritten text-coral text-base font-bold rotate-6 z-20">
                Telugu IT Creator ★
              </div>

              {/* Cutout Portrait */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="/assets/bhargavi-cutout.png"
                  alt="Bhargavi Papolu"
                  width={500}
                  height={500}
                  className="w-auto h-full max-h-[520px] object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                />
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 bg-charcoal text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md z-20 shadow-md">
                {bhargaviSection.role}
              </div>
            </div>
          </div>

          {/* RIGHT: Typography & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral block mb-3">
              {bhargaviSection.eyebrow}
            </span>

            <h2 className="font-editorial-condensed text-6xl sm:text-7xl md:text-8xl text-charcoal uppercase leading-[0.88] tracking-tight mb-6">
              MEET <br />
              <span className="text-coral">BHARGAVI.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed font-normal mb-6">
              {bhargaviSection.description}
            </p>

            {/* Blockquote */}
            <div className="p-6 bg-white rounded-2xl border-l-4 border-coral border-y border-r border-black/[0.06] shadow-sm mb-8">
              <p className="text-base sm:text-lg text-charcoal font-medium italic leading-relaxed">
                {bhargaviSection.quote}
              </p>
            </div>

            {/* Social CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleInstagramClick}
                className="inline-flex items-center justify-center space-x-2.5 bg-charcoal hover:bg-black text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4 text-coral" />
                <span>{bhargaviSection.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 text-white/70" />
              </button>

              <span className="text-xs font-semibold text-editorial-grey uppercase tracking-wider text-center sm:text-left">
                {PRODUCT.instagramHandle}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
