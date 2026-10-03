"use client";

import React from "react";
import Image from "next/image";
import { CONTENT } from "@/config/content";
import { ShieldCheck, Award, Users, CheckCircle2, Sparkles } from "lucide-react";

export default function ImmediateTrust() {
  const { immediateProof } = CONTENT;

  return (
    <section className="bg-paper-cream border-b border-editorial-border py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Creator Authority Badge with Authenticated Photo */}
          <div className="md:col-span-6 flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-coral shadow-md shrink-0">
              <Image
                src={immediateProof.creator.image}
                alt={immediateProof.creator.name}
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-mono font-bold uppercase text-coral">
                  CREATED & PRESENTED BY
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified Mentor
                </span>
              </div>
              <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-charcoal leading-none">
                {immediateProof.creator.name}
              </h3>
              <p className="text-xs text-charcoal-light font-medium mt-1 leading-snug">
                {immediateProof.creator.highlight}
              </p>
            </div>
          </div>

          {/* Quick Credibility Numbers */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left border-t md:border-t-0 md:border-l border-editorial-border/60 pt-4 md:pt-0 md:pl-6">
            {immediateProof.metrics.map((metric, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-paper-white border border-editorial-border/60 shadow-xs">
                <div className="text-xl sm:text-2xl font-black font-mono text-charcoal leading-none">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-editorial-grey uppercase mt-1 leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
