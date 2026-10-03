"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import {
  CheckSquare,
  FileSpreadsheet,
  FileText,
  Calculator,
  MessageSquare,
  Mail,
  ListOrdered,
  Layers,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function WhatsInside() {
  const { inside } = CONTENT;

  return (
    <section id="inside" className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {inside.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {inside.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {inside.subheadline}
          </p>
        </div>

        {/* Master Ebook Core Feature Card */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-charcoal text-paper shadow-floating border border-charcoal/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-coral/20 border border-coral/30 text-coral flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-coral font-bold tracking-widest block">
                  CORE ASSET
                </span>
                <h3 className="font-editorial-condensed text-3xl sm:text-4xl text-white">
                  Salary Worth and Negotiation Playbook (Master Edition)
                </h3>
              </div>
            </div>
            <span className="font-mono text-xs font-bold uppercase bg-white/10 text-white/90 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
              Master PDF + 15 Companion Sheets
            </span>
          </div>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            A comprehensive, art-directed reference manual designed to be read in 45–60 minutes.
            Zero motivational fluff: pure market research protocols, psychological negotiation mechanics, and decision matrices.
          </p>
        </div>

        {/* 9 Structured Sub-Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {inside.modules.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-paper-white rounded-2xl border border-editorial-border shadow-sm hover:border-coral/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase bg-charcoal/5 px-2 py-0.5 rounded text-charcoal-light font-bold">
                    MODULE 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-bold text-coral uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <h3 className="font-editorial-condensed text-xl text-charcoal leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-charcoal-light leading-relaxed pl-6.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Usability Guarantee Note */}
        <div className="bg-paper-white p-6 rounded-2xl border border-editorial-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-charcoal">
                Practical Worksheets & Execution Checklists
              </div>
              <div className="text-xs text-charcoal-light">
                Fillable digitally on your computer or phone, or print them for your desk.
              </div>
            </div>
          </div>
          <span className="text-xs font-mono font-bold uppercase bg-charcoal text-paper px-3 py-1.5 rounded-lg shrink-0">
            100% READY TO USE
          </span>
        </div>
      </div>
    </section>
  );
}
