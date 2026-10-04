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
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Download,
  Zap,
  Target,
  BarChart3,
  Layers,
  ChevronDown,
  ChevronUp,
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
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = ["All", "Calculators & Grids", "Scripts & Playbooks", "Frameworks"];

  const filteredModules = inside.modules.filter((item) => {
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

  // Display only 3 modules by default; show all when showAll is true or category is filtered
  const displayedModules = showAll || selectedCategory !== "All"
    ? filteredModules
    : filteredModules.slice(0, 3);

  return (
    <section id="whats-inside" className="py-16 sm:py-24 bg-paper-cream border-b border-editorial-border relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-coral/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
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

        {/* 1. ZOOMED 3D BOOK & FLOATING MODULES VISUAL (Centerpiece without master bundle box or badge) */}
        <div className="mb-14 sm:mb-20 flex justify-center">
          <div className="relative w-full max-w-3xl group">
            {/* Soft Ambient Radial Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-coral/20 via-amber-400/15 to-coral/20 opacity-70 blur-2xl group-hover:opacity-100 transition duration-700 pointer-events-none" />

            {/* Crisp Zoomed Visual Container */}
            <div className="relative rounded-3xl overflow-hidden border border-editorial-border bg-paper-white shadow-floating hover:shadow-2xl transition-all duration-300">
              <Image
                src="/assets/book-modules-mockup.jpg"
                alt="Job Hike Guide Hardcover Playbook & Floating Module Cards by Bhargavi Papolu"
                width={1200}
                height={896}
                className="w-full h-auto object-cover block"
                priority
              />
            </div>
          </div>
        </div>

        {/* 2. EXPLORE THE 9 STRATEGIC MODULES (Shows 3 by default with View All down arrow) */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-coral font-bold tracking-widest block">
                IN-DEPTH BREAKDOWN
              </span>
              <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-charcoal">
                Explore The 9 Strategic Modules
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (cat !== "All") setShowAll(true);
                  }}
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
            {displayedModules.map((item) => {
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

                  {/* Card Bottom */}
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

          {/* 3. VIEW ALL (9 MODULES) DOWN ARROW TOGGLE BUTTON */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-paper-white hover:bg-paper-cream border-2 border-editorial-border hover:border-coral text-charcoal font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <span>{showAll ? "Show Less" : "View All (9 Modules)"}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-coral group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-coral group-hover:translate-y-0.5 transition-transform animate-bounce" />
              )}
            </button>
          </div>
        </div>

        {/* 4. BOTTOM GUARANTEE & INSTANT ACTION STRIP */}
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
              <span>Download All 9 Modules — ₹299</span>
              <ArrowRight className="w-4 h-4 text-coral" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
