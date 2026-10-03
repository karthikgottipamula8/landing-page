"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { ShieldCheck, Download, Mail, Headphones, HeartHandshake } from "lucide-react";

export default function TrustSection() {
  const { trust } = CONTENT;
  const icons = [
    <Download key={0} className="w-5 h-5 text-coral" />,
    <ShieldCheck key={1} className="w-5 h-5 text-coral" />,
    <Headphones key={2} className="w-5 h-5 text-coral" />,
    <HeartHandshake key={3} className="w-5 h-5 text-coral" />,
  ];

  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3 inline-block">
            PEACE OF MIND
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {trust.headline}
          </h2>
          <p className="text-base text-charcoal-light leading-relaxed">
            We operate with complete clarity on digital fulfillment and customer support.
          </p>
        </div>

        {/* 4 Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trust.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0 mt-0.5">
                {icons[idx]}
              </div>
              <div>
                <h3 className="font-editorial-condensed text-2xl text-charcoal mb-1">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-sans">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
