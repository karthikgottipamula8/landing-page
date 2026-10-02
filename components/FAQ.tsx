"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { faqSection } = CONTENT;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#FAF9F5] border-t border-black/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-coral block mb-3">
            {faqSection.eyebrow}
          </span>

          <h2 className="font-editorial-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal uppercase leading-[0.88] tracking-tight">
            QUESTIONS? <br />
            <span className="text-coral">LET'S CLEAR THEM UP.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/[0.08] shadow-sm transition-colors duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial-condensed text-xl sm:text-2xl text-charcoal tracking-wide uppercase">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-coral-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-coral text-white" : "text-coral"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-charcoal/75 leading-relaxed border-t border-black/[0.04]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
