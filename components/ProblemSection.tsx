"use client";

import React from "react";
import { CONTENT } from "@/config/content";

export default function ProblemSection() {
  const { problemSection } = CONTENT;

  return (
    <section id="problem" className="py-20 md:py-32 bg-[#FAF9F5] border-t border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral mb-3">
            {problemSection.eyebrow}
          </div>
          <h2 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal uppercase leading-[0.9] tracking-tight mb-6">
            WORKING HARD <br className="hidden sm:inline" />
            <span className="text-coral">ISN'T THE WHOLE GAME.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
            {problemSection.description}
          </p>
        </div>

        {/* 5 Problem Cards with Oversized Coral Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problemSection.issues.map((issue, idx) => (
            <div
              key={issue.number}
              className={`bg-white rounded-2xl p-7 md:p-8 border border-black/[0.08] shadow-card card-editorial relative overflow-hidden flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Decorative top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral/20 via-coral to-coral/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Oversized Coral Number */}
                <div className="font-editorial-condensed text-5xl md:text-6xl text-coral tracking-tight mb-3">
                  {issue.number}
                </div>

                {/* Issue Title */}
                <h3 className="font-editorial-condensed text-2xl md:text-3xl text-charcoal tracking-wide uppercase mb-3">
                  {issue.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                  {issue.description}
                </p>
              </div>

              {/* Editorial bottom indicator */}
              <div className="pt-6 mt-6 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-bold text-coral uppercase tracking-wider">
                <span>IMPACT AREA</span>
                <span>→</span>
              </div>
            </div>
          ))}

          {/* Quick Summary Statement Card */}
          <div className="bg-coral rounded-2xl p-7 md:p-8 text-white flex flex-col justify-between shadow-paper">
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/80 mb-3">
                THE BOTTOM LINE
              </div>
              <h3 className="font-editorial-condensed text-3xl md:text-4xl text-white tracking-wide uppercase leading-tight mb-4">
                SILENCE & GUESSWORK COST LAKHS OVER TIME.
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                A single well-executed appraisal negotiation or properly timed job switch can redefine your entire career trajectory.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/20 text-[11px] font-bold uppercase tracking-wider text-white/80">
              SOLVED INSIDE THE GUIDE ↓
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
