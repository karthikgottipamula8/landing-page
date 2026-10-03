"use client";

import React from "react";
import Image from "next/image";
import { CONTENT } from "@/config/content";
import { ShieldCheck, Award, Users, CheckCircle2, Sparkles, Star } from "lucide-react";

export default function ImmediateTrust() {
  const { immediateProof } = CONTENT;

  return (
    <section className="bg-gradient-to-b from-paper-cream to-paper border-b border-editorial-border py-10 sm:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BIG Prominent Creator & Verified Mentor Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-paper-white border-2 border-coral/40 shadow-paper relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* BIG Face-Visible Photo Container */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-coral/30 group shrink-0">
                <Image
                  src={immediateProof.creator.image}
                  alt="Bhargavi Papolu - Career Educator and Mentor"
                  fill
                  sizes="(max-width: 640px) 176px, 224px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Live Speaking Pill Overlay */}
                <div className="absolute bottom-2.5 inset-x-2.5 bg-charcoal/90 backdrop-blur-md py-1.5 px-2.5 rounded-xl text-center text-paper shadow-md">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    LIVE ON STAGE
                  </span>
                </div>
              </div>
            </div>

            {/* Highlighted "Created & Presented by Verified Mentor" Content */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
              {/* Highlighted Verified Mentor Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-mono text-xs font-black uppercase tracking-wider shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-200 fill-emerald-200/20" />
                  <span>CREATED & PRESENTED BY VERIFIED MENTOR</span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold font-mono">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>Trusted Career Authority</span>
                </div>
              </div>

              {/* Creator Name & Title */}
              <div>
                <h3 className="font-editorial-condensed text-3xl sm:text-4xl md:text-5xl text-charcoal leading-none">
                  {immediateProof.creator.name}
                </h3>
                <p className="text-sm sm:text-base font-bold text-coral mt-1">
                  {immediateProof.creator.title}
                </p>
              </div>

              {/* Mission Statement */}
              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed font-sans max-w-2xl">
                “I created this system because I was tired of watching talented Indian professionals walk into appraisal and offer conversations with anxiety and random guesses. When you know your market number and have documented proofs, negotiation ceases to be awkward—it becomes an objective business decision.”
              </p>

              {/* Quick Credibility Numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {immediateProof.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-paper-cream border border-editorial-border/80 text-center sm:text-left shadow-xs">
                    <div className="text-2xl sm:text-3xl font-black font-mono text-charcoal leading-none">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-editorial-grey uppercase mt-1 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
