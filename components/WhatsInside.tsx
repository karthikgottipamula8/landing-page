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
} from "lucide-react";

export default function WhatsInside() {
  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            COMPLETE ARSENAL
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {CONTENT.inside.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {CONTENT.inside.subheadline}
          </p>
        </div>

        {/* 15 Itemized Grid with Checkmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {CONTENT.inside.items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-paper-white rounded-2xl border border-editorial-border shadow-sm hover:border-coral/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase bg-charcoal/5 px-2 py-0.5 rounded text-charcoal-light font-bold">
                    ITEM #{idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-[10px] font-bold text-coral uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 group-hover:text-coral transition-colors" />
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

        {/* Value takeaway note */}
        <div className="bg-paper-white p-6 rounded-2xl border border-editorial-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-charcoal">
                All 15 Materials Formatted For Immediate Use
              </div>
              <div className="text-xs text-charcoal-light">
                Delivered in clean printable PDF + editable Google Sheets / Excel formats.
              </div>
            </div>
          </div>
          <span className="text-xs font-mono font-bold uppercase bg-charcoal text-paper px-3 py-1.5 rounded-lg shrink-0">
            100% READY TO EXECUTE
          </span>
        </div>
      </div>
    </section>
  );
}
