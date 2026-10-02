"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { Check, CheckCircle2 } from "lucide-react";

export default function WhoItsFor() {
  const { whoItsForSection } = CONTENT;

  return (
    <section id="who" className="py-20 md:py-32 bg-white relative border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Asymmetrical Oversized Editorial Heading */}
          <div className="lg:col-span-5 sticky top-28">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral block mb-3">
              {whoItsForSection.eyebrow}
            </span>

            <h2 className="font-editorial-condensed text-6xl sm:text-7xl md:text-8xl text-charcoal uppercase leading-[0.85] tracking-tight mb-6">
              IS THIS <br />
              <span className="text-coral">FOR YOU?</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed mb-8">
              {whoItsForSection.subtitle}
            </p>

            {/* Editorial Note Box */}
            <div className="p-6 bg-[#FAF9F5] rounded-2xl border border-black/[0.08] relative">
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                WHO SHOULD SKIP THIS?
              </div>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                If you are looking for overnight shortcuts, fake experience hacks, or guaranteed job placements without putting in real effort, this guide is not for you.
              </p>
            </div>
          </div>

          {/* RIGHT: Checklist Cards in Asymmetrical Rhythm */}
          <div className="lg:col-span-7 space-y-4">
            {whoItsForSection.criteria.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-[#FAF9F5] border border-black/[0.06] hover:border-coral/40 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-card flex items-start space-x-4 sm:space-x-5"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-coral/10 text-coral flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-coral group-hover:text-white transition-colors">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-charcoal font-semibold leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
