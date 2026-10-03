"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import {
  PieChart,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function TotalCompensation() {
  const { totalComp } = CONTENT;

  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            COMPENSATION ARCHITECTURE
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {totalComp.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {totalComp.subheadline}
          </p>
        </div>

        {/* Visual Offer A vs Offer B Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* OFFER A */}
          <div className="p-6 sm:p-8 bg-paper-white rounded-3xl border border-editorial-border shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-editorial-border/60 mb-5">
                <span className="text-xs font-mono font-bold uppercase text-editorial-grey">
                  {totalComp.offerA.name}
                </span>
                <span className="text-xs font-mono font-bold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded border border-amber-200">
                  {totalComp.offerA.riskLevel}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xs text-charcoal-light uppercase font-mono block">
                  Headline CTC
                </span>
                <div className="text-4xl font-black text-charcoal font-mono mt-0.5">
                  {totalComp.offerA.total}
                </div>
              </div>

              {/* Breakdown Bars */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold text-charcoal mb-1">
                    <span>{totalComp.offerA.fixed}</span>
                    <span className="text-editorial-grey">75%</span>
                  </div>
                  <div className="w-full h-3 bg-paper-cream rounded-full overflow-hidden border border-editorial-border/60">
                    <div className="h-full bg-charcoal rounded-full w-[75%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-coral mb-1">
                    <span>{totalComp.offerA.variable}</span>
                    <span className="text-editorial-grey">25%</span>
                  </div>
                  <div className="w-full h-3 bg-paper-cream rounded-full overflow-hidden border border-editorial-border/60">
                    <div className="h-full bg-coral rounded-full w-[25%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-paper-cream rounded-xl border border-editorial-border text-xs text-charcoal-light font-medium italic">
              {totalComp.offerA.takeHomeNote}
            </div>
          </div>

          {/* OFFER B */}
          <div className="p-6 sm:p-8 bg-paper-white rounded-3xl border border-editorial-border shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-editorial-border/60 mb-5">
                <span className="text-xs font-mono font-bold uppercase text-editorial-grey">
                  {totalComp.offerB.name}
                </span>
                <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded border border-emerald-200">
                  {totalComp.offerB.riskLevel}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xs text-charcoal-light uppercase font-mono block">
                  Headline CTC
                </span>
                <div className="text-4xl font-black text-charcoal font-mono mt-0.5">
                  {totalComp.offerB.total}
                </div>
              </div>

              {/* Breakdown Bars */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold text-charcoal mb-1">
                    <span>{totalComp.offerB.fixed}</span>
                    <span className="text-editorial-grey">95%</span>
                  </div>
                  <div className="w-full h-3 bg-paper-cream rounded-full overflow-hidden border border-editorial-border/60">
                    <div className="h-full bg-charcoal rounded-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-coral mb-1">
                    <span>{totalComp.offerB.variable}</span>
                    <span className="text-editorial-grey">5%</span>
                  </div>
                  <div className="w-full h-3 bg-paper-cream rounded-full overflow-hidden border border-editorial-border/60">
                    <div className="h-full bg-coral rounded-full w-[5%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-paper-cream rounded-xl border border-editorial-border text-xs text-charcoal-light font-medium italic">
              {totalComp.offerB.takeHomeNote}
            </div>
          </div>
        </div>

        {/* Detailed Component Breakdown Framework */}
        <div className="p-6 sm:p-8 bg-paper-white rounded-3xl border border-editorial-border shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-coral" />
            <h3 className="font-editorial-condensed text-2xl text-charcoal">
              THE TOTAL COMPENSATION COMPARISON WORKSHEET
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-light mb-6">
            The playbook provides a structured model to audit every single component of your package:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {totalComp.components.map((comp, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-paper-cream border border-editorial-border text-xs font-semibold text-charcoal flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Non-biased Evaluation Reminder */}
        <div className="p-4 rounded-xl bg-charcoal/5 border border-editorial-border text-xs text-charcoal-light text-center leading-relaxed">
          <span className="font-bold text-charcoal">Important Notice: </span>
          {totalComp.closingNote}
        </div>
      </div>
    </section>
  );
}
