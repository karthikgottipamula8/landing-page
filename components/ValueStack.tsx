"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { trackEvent } from "@/config/analytics";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Clock,
  BookOpen,
} from "lucide-react";

interface ValueStackProps {
  onOpenCheckout: () => void;
}

export default function ValueStack({ onOpenCheckout }: ValueStackProps) {
  const { valueStack } = CONTENT;

  const handleCta = () => {
    trackEvent("pricing_cta_click", { location: "value_stack" });
    onOpenCheckout();
  };

  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {valueStack.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {valueStack.headline}
          </h2>
          <p className="text-base text-charcoal-light leading-relaxed">
            {valueStack.subheadline}
          </p>
        </div>

        {/* Master Offer Card */}
        <div className="bg-paper-white rounded-3xl border-2 border-charcoal/15 shadow-floating p-6 sm:p-10 relative overflow-hidden">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-editorial-border/60 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-coral text-white flex items-center justify-center font-bold text-sm shrink-0">
                SP
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-coral font-bold block">
                  ALL-IN-ONE BUNDLE
                </span>
                <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-charcoal">
                  Salary Worth & Negotiation System
                </h3>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase bg-coral text-white px-3 py-1 rounded-md font-bold tracking-wider self-start sm:self-auto">
              {valueStack.pricingCard.badge}
            </span>
          </div>

          {/* Core Master Product Callout */}
          <div className="p-4 bg-paper-cream rounded-2xl border border-editorial-border mb-6">
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-coral shrink-0" />
              <span className="text-xs font-bold uppercase text-charcoal">
                Core Foundation
              </span>
            </div>
            <div className="font-bold text-sm text-charcoal">
              {valueStack.coreProduct.name}
            </div>
            <div className="text-xs text-charcoal-light mt-0.5">
              {valueStack.coreProduct.desc}
            </div>
          </div>

          {/* Itemized Value Inclusions */}
          <div className="space-y-3 mb-8">
            {valueStack.inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-charcoal leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Transparent Pricing Block */}
          <div className="p-6 bg-charcoal text-paper rounded-2xl border border-charcoal/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-white/60">
                Transparent Launch Price
              </div>
              <div className="text-4xl sm:text-5xl font-black font-mono text-coral mt-0.5">
                {valueStack.pricingCard.price}
              </div>
              <div className="text-xs text-white/70 mt-1 font-medium">
                {valueStack.pricingCard.subtext}
              </div>
            </div>

            <button
              onClick={handleCta}
              className="btn-coral w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg group shrink-0"
            >
              <span>{valueStack.pricingCard.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Value Comparison Note */}
          <div className="mt-6 pt-4 border-t border-editorial-border/60 flex items-center justify-between text-xs text-charcoal-light">
            <span className="font-medium">{valueStack.pricingCard.valueComparison}</span>
            <span className="font-mono text-emerald-700 font-bold hidden sm:inline">Zero Recurring Cost</span>
          </div>
        </div>
      </div>
    </section>
  );
}
