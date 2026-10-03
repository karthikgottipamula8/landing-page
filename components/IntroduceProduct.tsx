"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import {
  Compass,
  GitCompare,
  Sliders,
  ShieldCheck,
  MessageSquareQuote,
  BookOpen,
  Check,
} from "lucide-react";

export default function IntroduceProduct() {
  const iconMap = [
    <Compass key={0} className="w-5 h-5 text-coral" />,
    <GitCompare key={1} className="w-5 h-5 text-coral" />,
    <Sliders key={2} className="w-5 h-5 text-coral" />,
    <ShieldCheck key={3} className="w-5 h-5 text-coral" />,
    <MessageSquareQuote key={4} className="w-5 h-5 text-coral" />,
  ];

  return (
    <section id="inside" className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            THE PRACTICAL SYSTEM
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-5">
            {CONTENT.productIntro.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {CONTENT.productIntro.subheadline}
          </p>
        </div>

        {/* Product Visual Banner */}
        <div className="mb-16 bg-charcoal text-paper rounded-3xl p-8 sm:p-12 shadow-floating relative overflow-hidden border border-charcoal/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Book Cover Representation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 sm:w-72 aspect-[3/4] bg-gradient-to-br from-charcoal-muted to-charcoal rounded-2xl p-6 border-2 border-coral/40 shadow-2xl relative flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-coral">
                    OFFICIAL EDITION
                  </span>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/80">
                    2026
                  </span>
                </div>

                <div className="my-auto py-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/60 block mb-1">
                    PLAYBOOK & WORKBOOK
                  </span>
                  <h3 className="font-editorial-condensed text-4xl text-white tracking-wide leading-none">
                    SALARY WORTH & NEGOTIATION
                  </h3>
                  <div className="w-12 h-1 bg-coral mt-3 mb-2" />
                  <p className="text-[11px] text-white/70 font-sans">
                    Know your number before HR gives you theirs.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span>15 WORKSHEETS</span>
                  <span>10 HR SCRIPTS</span>
                </div>
              </div>
            </div>

            {/* Core Overview Points */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-coral font-bold block">
                BUILT FOR THE INDIAN WORKPLACE
              </span>
              <h3 className="font-editorial-condensed text-3xl sm:text-4xl text-white leading-tight">
                AN ACTION-ORIENTED MANUAL. <br />
                NOT 200 PAGES OF THEORETICAL FLUFF.
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                Designed to be opened on your screen 7 days before your appraisal or interview.
                Every worksheet directly answers a question HR will ask you.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-white mb-0.5">Direct Download</div>
                  <div className="text-[11px] text-white/60">Instant PDF & Sheet access</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-white mb-0.5">Indian Market Context</div>
                  <div className="text-[11px] text-white/60">CTC, LPA, Fixed vs Variable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Distinct Cards: What You'll Walk Away With */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-editorial-grey block mb-1">
              THE 5 PILLARS
            </span>
            <h3 className="font-editorial-condensed text-3xl sm:text-4xl text-charcoal">
              {CONTENT.productIntro.walkAwayHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTENT.productIntro.cards.map((card, idx) => (
              <div
                key={card.number}
                className={`p-6 sm:p-7 rounded-2xl bg-paper-white border border-editorial-border shadow-card hover:border-coral/40 transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-coral">
                      {card.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-coral-50 flex items-center justify-center">
                      {iconMap[idx]}
                    </div>
                  </div>
                  <h4 className="font-editorial-condensed text-2xl text-charcoal mb-2.5">
                    {card.title}
                  </h4>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-editorial-border/60 flex items-center gap-1.5 text-xs font-bold text-charcoal-muted">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{card.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
