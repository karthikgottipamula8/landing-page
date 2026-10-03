"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const { faq } = CONTENT;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            OBJECTION HANDLING
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {faq.headline}
          </h2>
          <p className="text-base text-charcoal-light leading-relaxed">
            {faq.subheadline}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-paper-white rounded-2xl border border-editorial-border shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-editorial-condensed text-xl sm:text-2xl text-charcoal hover:text-coral transition-colors"
                >
                  <span className="leading-tight">{item.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-paper-cream border border-editorial-border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-coral text-white border-coral" : "text-charcoal"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-charcoal-light leading-relaxed border-t border-editorial-border/40 font-sans">
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
