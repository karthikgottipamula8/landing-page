"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CONTENT } from "@/config/content";
import {
  BookOpen,
  Calculator,
  FileSpreadsheet,
  FileText,
  TrendingUp,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Download,
  Zap,
  Target,
  BarChart3,
  Layers,
  Check,
} from "lucide-react";

interface WhatsInsideProps {
  onOpenCheckout?: () => void;
}

const moduleIcons = [
  BarChart3,       // 01: Market Salary Estimation
  Calculator,      // 02: Salary Gap Analysis Worksheet
  Target,          // 03: Negotiation Range Calculation Grid
  FileText,        // 04: Evidence-Building Framework
  FileSpreadsheet, // 05: Total Compensation Audit Matrix
  TrendingUp,      // 06: Hike & Promotion Decision Guidance
  Zap,             // 07: Job-Switch Negotiation Playbook
  MessageSquare,   // 08: HR Conversation Preparation Sheet
  Layers,          // 09: 1-Page Executive Meeting Sheet
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Research: { bg: "bg-blue-50 text-blue-700", text: "text-blue-700", border: "border-blue-200" },
  Calculator: { bg: "bg-emerald-50 text-emerald-700", text: "text-emerald-700", border: "border-emerald-200" },
  Strategy: { bg: "bg-purple-50 text-purple-700", text: "text-purple-700", border: "border-purple-200" },
  Documentation: { bg: "bg-amber-50 text-amber-800", text: "text-amber-800", border: "border-amber-200" },
  Financials: { bg: "bg-indigo-50 text-indigo-700", text: "text-indigo-700", border: "border-indigo-200" },
  Reviews: { bg: "bg-rose-50 text-rose-700", text: "text-rose-700", border: "border-rose-200" },
  "Job Switch": { bg: "bg-coral-50 text-coral-700", text: "text-coral-700", border: "border-coral-200" },
  Preparation: { bg: "bg-cyan-50 text-cyan-700", text: "text-cyan-700", border: "border-cyan-200" },
  "Cheat Sheet": { bg: "bg-orange-50 text-orange-800", text: "text-orange-800", border: "border-orange-200" },
};

export default function WhatsInside({ onOpenCheckout }: WhatsInsideProps) {
  const { inside } = CONTENT;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Calculators & Grids", "Scripts & Playbooks", "Frameworks"];

  const filteredModules = inside.modules.filter((item, idx) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Calculators & Grids") {
      return ["Calculator", "Strategy", "Financials"].includes(item.tag);
    }
    if (selectedCategory === "Scripts & Playbooks") {
      return ["Job Switch", "Preparation", "Cheat Sheet"].includes(item.tag);
    }
    if (selectedCategory === "Frameworks") {
      return ["Research", "Documentation", "Reviews"].includes(item.tag);
    }
    return true;
  });

  return (
    <section id="whats-inside" className="py-16 sm:py-24 bg-paper-cream border-b border-editorial-border relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-coral/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral/10 border border-coral/20 text-coral text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{inside.eyebrow}</span>
          </div>
          <h2 className="font-editorial-condensed text-3xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-[1.08] mb-4">
            {inside.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {inside.subheadline}
          </p>
        </div>

        {/* 3D VISUAL SHOWCASE HERO CARD */}
        <div className="mb-14 sm:mb-20 rounded-3xl bg-charcoal text-paper overflow-hidden shadow-floating border border-charcoal/30 relative">
          
          {/* Subtle Ambient Backlight */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-coral/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-10 lg:p-12 relative z-10">
            
            {/* Left Column: 3D Visual Centerpiece */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[480px] group">
                
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-coral/40 via-amber-400/20 to-coral/40 opacity-75 blur-xl group-hover:opacity-100 transition duration-700" />
                
                {/* Visual Image Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-charcoal-muted shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/assets/book-modules-mockup.jpg"
                    alt="Job Hike Guide Hardcover Playbook & Floating Module Cards by Bhargavi Papolu"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover block"
                    priority
                  />
                  {/* Subtle reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating pill over image bottom */}
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-charcoal/95 border border-white/20 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                    3D Visual Preview • Master Bundle
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Value Stack & Direct Action */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-coral/20 border border-coral/30 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-4 w-fit">
                <BookOpen className="w-3.5 h-3.5" />
                <span>CORE MASTER ASSET</span>
              </div>

              <h3 className="font-editorial-condensed text-2xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
                Salary Worth & Negotiation Playbook
                <span className="block text-coral text-xl sm:text-2xl mt-1 font-sans font-semibold">
                  (Master Guide + 9 Companion Sheets)
                </span>
              </h3>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
                A structured, art-directed reference manual designed to be digested in 45–60 minutes.
                Zero motivational fluff: pure market research protocols, psychological negotiation mechanics, and decision matrices.
              </p>

              {/* Key Deliverables Bullet Points */}
              <div className="space-y-3 mb-8">
                {[
                  "Complete 45-60 min Master PDF Playbook (instant download)",
                  "9 Fillable Companion Worksheets & Calculation Grids",
                  "Word-for-word HR negotiation & counter-offer scripts",
                  "1-Page condensed cheat sheet you keep on your desk during calls",
                  "Lifetime access with all future version updates included",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-white/90 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Box with Pricing & Instant Claim */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">₹299</span>
                    <span className="text-xs text-white/50 line-through">₹2,499</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-coral text-white uppercase tracking-wider">
                      88% OFF
                    </span>
                  </div>
                  <span className="text-[11px] text-white/70 block mt-0.5">
                    Instant access delivered to your email right away
                  </span>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-coral to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-coral/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Claim Master Bundle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* 9 STRUCTURED SUB-COMPONENTS SECTION */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-coral font-bold tracking-widest block">
                IN-DEPTH BREAKDOWN
              </span>
              <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-charcoal">
                Explore The 9 Strategic Modules
              </h3>
            </div>

            {/* Filter Pills for Mobile & Desktop Navigation */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-charcoal text-paper shadow-sm"
                      : "bg-paper-white text-charcoal-light hover:text-charcoal border border-editorial-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredModules.map((item, idx) => {
              // Find the original module index
              const origIdx = inside.modules.findIndex((m) => m.title === item.title);
              const IconComponent = moduleIcons[origIdx] || BookOpen;
              const badgeStyle = categoryColors[item.tag] || {
                bg: "bg-charcoal/5 text-charcoal-light",
                text: "text-charcoal-light",
                border: "border-charcoal/10",
              };

              return (
                <div
                  key={origIdx}
                  className="group p-5 sm:p-6 bg-paper-white rounded-2xl border border-editorial-border hover:border-coral/40 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Card Top: Number & Category Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[10px] font-mono uppercase bg-charcoal/5 px-2.5 py-1 rounded text-charcoal-light font-bold">
                        MODULE 0{origIdx + 1}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badgeStyle.bg} ${badgeStyle.border}`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Title with Matching Module Icon */}
                    <div className="flex items-start gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-coral group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-editorial-condensed text-xl text-charcoal leading-tight group-hover:text-coral transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-charcoal-light leading-relaxed pl-11">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Bottom: Included indicator */}
                  <div className="mt-4 pt-3 border-t border-editorial-border/60 flex items-center justify-between text-[11px] text-charcoal-muted">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Included in ₹299
                    </span>
                    <span className="font-mono text-[10px] text-charcoal-light/70 uppercase">
                      Fillable Sheet
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM GUARANTEE & INSTANT ACTION STRIP */}
        <div className="bg-paper-white p-6 sm:p-8 rounded-3xl border border-editorial-border shadow-card flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-charcoal">
                Practical Worksheets & Execution Checklists
              </div>
              <div className="text-xs sm:text-sm text-charcoal-light">
                Fillable digitally on your computer, iPad, or mobile phone, or print them for your desk during reviews.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-charcoal hover:bg-charcoal-muted text-paper font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Download All 9 Modules</span>
              <ArrowRight className="w-4 h-4 text-coral" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
