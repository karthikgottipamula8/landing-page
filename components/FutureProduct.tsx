"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { Sparkles, Cpu, Clock, Layers, ArrowUpRight } from "lucide-react";

export default function FutureProduct() {
  const { futureProduct } = CONTENT;

  return (
    <section className="py-20 md:py-24 bg-paper border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-paper-cream rounded-3xl p-8 sm:p-12 border border-editorial-border shadow-sm relative overflow-hidden">
          {/* Subtle Coming Soon Ribbon */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal text-paper text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{futureProduct.badge}</span>
          </div>

          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-coral font-bold block mb-1">
              {futureProduct.headline}
            </span>
            <h2 className="font-editorial-condensed text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-none mb-4">
              {futureProduct.title}
            </h2>
            <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
              {futureProduct.desc}
            </p>
          </div>

          {/* Planned Inputs & Outputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Inputs Box */}
            <div className="p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-sm">
              <span className="text-xs font-mono font-bold uppercase text-editorial-grey block mb-3">
                {futureProduct.inputsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {futureProduct.inputs.map((inp, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-paper-cream border border-editorial-border text-xs font-semibold text-charcoal"
                  >
                    {inp}
                  </span>
                ))}
              </div>
            </div>

            {/* Outputs Box */}
            <div className="p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-sm">
              <span className="text-xs font-mono font-bold uppercase text-coral block mb-3">
                {futureProduct.outputsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {futureProduct.outputs.map((out, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-coral/10 border border-coral/20 text-xs font-semibold text-coral"
                  >
                    {out}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Transparent Development Note */}
          <div className="p-4 bg-paper-white/80 rounded-xl border border-editorial-border text-xs text-charcoal-light font-medium italic">
            * {futureProduct.note}
          </div>
        </div>
      </div>
    </section>
  );
}
