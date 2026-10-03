"use client";

import React from "react";
import Image from "next/image";
import { CONTENT } from "@/config/content";
import {
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  CheckCircle2,
  MessageSquare,
  Star,
} from "lucide-react";

export default function CreatorAuthority() {
  const { creatorSection } = CONTENT;

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-paper border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {creatorSection.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-3">
            {creatorSection.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light font-medium">
            {creatorSection.role}
          </p>
        </div>

        {/* Creator Showcase: BIG High-Impact Photograph + Authority Bio */}
        <div className="bg-paper-cream rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-coral/30 shadow-paper mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* BIG Speaking Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-paper-white group">
                <Image
                  src={creatorSection.image}
                  alt="Bhargavi Papolu speaking on salary negotiation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Overlay live speaker caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent p-5 text-paper">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-amber-300 font-extrabold mb-1">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    LIVE CAREER MASTERCLASS
                  </div>
                  <div className="text-xs sm:text-sm text-white/95 font-medium leading-tight">
                    Bhargavi Papolu speaking live on Indian tech appraisals & negotiation leverage
                  </div>
                </div>
              </div>
            </div>

            {/* Authority Bio & Direct Message */}
            <div className="lg:col-span-7 space-y-5">
              {/* Highlighted Verified Mentor Card */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-emerald-100/50 to-emerald-50 border-2 border-emerald-500/40 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-black uppercase text-emerald-900 block leading-tight">
                      CREATED & PRESENTED BY VERIFIED MENTOR
                    </span>
                    <span className="text-[11px] text-emerald-800 font-medium">
                      Specialist in Indian IT & Corporate Compensation
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-emerald-600 text-white px-2.5 py-0.5 rounded-full shadow-2xs hidden sm:inline-block">
                  Verified
                </span>
              </div>

              <h3 className="font-editorial-condensed text-3xl sm:text-4xl text-charcoal leading-tight">
                “WHY I BUILT THIS PLAYBOOK FOR YOU”
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-charcoal-light leading-relaxed font-sans">
                {creatorSection.bio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Creator Quote Box */}
              <div className="p-5 bg-paper-white rounded-2xl border-l-4 border-coral shadow-sm">
                <p className="font-editorial-condensed text-xl sm:text-2xl text-charcoal italic tracking-wide">
                  {creatorSection.quote}
                </p>
                <span className="text-xs font-extrabold text-coral uppercase tracking-wider block mt-2">
                  — Bhargavi Papolu
                </span>
              </div>

              {/* Badges */}
              <div className="pt-1 flex flex-wrap gap-2">
                {creatorSection.socialProofBadges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="text-[11px] font-bold bg-paper-white border border-editorial-border px-3 py-1.5 rounded-xl text-charcoal-muted shadow-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verified Community Feedback Cards */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-coral font-bold block mb-1">
              COMMUNITY IMPACT
            </span>
            <h3 className="font-editorial-condensed text-3xl sm:text-4xl text-charcoal">
              {creatorSection.communityVoicePlaceholder.title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-light mt-1">
              {creatorSection.communityVoicePlaceholder.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creatorSection.communityVoicePlaceholder.testimonials.map((test, tIdx) => (
              <div
                key={tIdx}
                className="p-6 bg-paper-white rounded-3xl border border-editorial-border shadow-card hover:border-coral/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase bg-coral-50 text-coral font-bold px-2 py-0.5 rounded border border-coral-200">
                      {test.tag}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans italic mb-4">
                    “{test.quote}”
                  </p>
                </div>
                <div className="pt-3 border-t border-editorial-border/60 text-xs font-bold text-charcoal-muted">
                  {test.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
