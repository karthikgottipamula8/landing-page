"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { PRODUCT } from "@/config/product";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Lock,
} from "lucide-react";

interface ValueStackProps {
  onOpenCheckout: () => void;
}

export default function ValueStack({ onOpenCheckout }: ValueStackProps) {
  const { valueStack } = CONTENT;

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            HONEST INVESTMENT
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {valueStack.headline}
          </h2>
          <p className="text-base text-charcoal-light leading-relaxed">
            {valueStack.subheadline}
          </p>
        </div>

        {/* Pricing & Stack Box */}
        <div className="bg-paper-white rounded-3xl border-2 border-charcoal/10 shadow-floating p-6 sm:p-10 relative overflow-hidden">
          {/* Top category ribbon */}
          <div className="flex items-center justify-between pb-6 border-b border-editorial-border/60 mb-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-coral font-bold block">
                COMPLETE DIGITAL ACCESS
              </span>
              <h3 className="font-editorial-condensed text-3xl text-charcoal">
                SALARY WORTH & NEGOTIATION PLAYBOOK
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase bg-coral text-white px-2.5 py-1 rounded-md font-bold tracking-wider">
                {valueStack.pricing.tag}
              </span>
            </div>
          </div>

          {/* Itemized Stack List */}
          <div className="space-y-3 mb-10">
            {valueStack.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-charcoal leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Price & Checkout Area */}
          <div className="p-6 bg-paper-cream rounded-2xl border border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-charcoal-light">
                One-Time Payment
              </div>
              <div className="text-4xl sm:text-5xl font-black font-mono text-charcoal mt-0.5">
                {valueStack.pricing.price}
              </div>
              <div className="text-xs text-charcoal-muted mt-1 font-medium">
                {valueStack.pricing.subtext}
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="btn-coral w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg group shrink-0"
            >
              <span>{valueStack.pricing.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Transparent Pricing Policy Note */}
          <div className="mt-6 pt-4 border-t border-editorial-border/60 flex items-start gap-2 text-xs text-charcoal-light">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {valueStack.transparencyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
