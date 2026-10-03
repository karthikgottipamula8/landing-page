"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { trackEvent } from "@/config/analytics";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Lock,
} from "lucide-react";

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export default function PricingSection({ onOpenCheckout }: PricingSectionProps) {
  const { pricing } = CONTENT;

  const handleCta = () => {
    trackEvent("pricing_cta_click", { location: "pricing_card" });
    onOpenCheckout();
  };

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
          THE BUYING DECISION
        </span>
        <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
          {pricing.headline}
        </h2>
        <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto mb-12">
          {pricing.explanation}
        </p>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-paper-white rounded-3xl border-2 border-coral shadow-floating p-8 text-left relative overflow-hidden">
          {/* Badge */}
          <div className="flex items-center justify-between pb-4 border-b border-editorial-border/60 mb-6">
            <span className="text-xs font-mono font-bold uppercase text-coral">
              ALL-IN-ONE ACCESS
            </span>
            <span className="text-xs font-mono font-bold bg-coral text-white px-2.5 py-0.5 rounded">
              Launch Price
            </span>
          </div>

          <h3 className="font-editorial-condensed text-3xl text-charcoal mb-2">
            Salary Worth & Negotiation Playbook
          </h3>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="font-mono text-5xl font-black text-charcoal">₹299</span>
            <span className="text-xs font-semibold text-charcoal-light">One-time payment</span>
          </div>

          <ul className="space-y-3 mb-8 text-xs sm:text-sm font-semibold text-charcoal">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Master E-Book (PDF)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>15 Practical Fillable Worksheets</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>5-Number Salary Calculation Framework</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Negotiation Preparation & Mindset Matrix</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Complete 10-Scenario Script Pack</span>
            </li>
          </ul>

          <button
            onClick={handleCta}
            className="w-full btn-coral py-4 rounded-xl text-base font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg group mb-3"
          >
            <span>Get Instant Access — ₹299</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-[11px] text-editorial-grey font-medium flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-coral" />
            <span>Instant delivery to screen and email • 256-bit SSL</span>
          </p>
        </div>
      </div>
    </section>
  );
}
