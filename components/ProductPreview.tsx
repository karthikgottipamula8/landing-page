"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import {
  FileSpreadsheet,
  FileCheck2,
  Table,
  Sliders,
  CheckCircle,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";

export default function ProductPreview() {
  const { preview } = CONTENT;
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeSheet = preview.tabs[activeTab];

  return (
    <section className="py-20 md:py-28 bg-paper-cream border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            TACTILE WORKSHEET PREVIEW
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {preview.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {preview.subheadline}
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {preview.tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === idx
                  ? "bg-charcoal text-paper shadow-md"
                  : "bg-paper-white text-charcoal-light border border-editorial-border hover:border-coral/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Realistic Interactive Document Mockup */}
        <div className="max-w-4xl mx-auto bg-paper-white rounded-3xl border border-editorial-border shadow-paper overflow-hidden">
          {/* Mock Document Top Bar */}
          <div className="bg-charcoal text-paper px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 text-xs font-mono uppercase text-white/70">
                {activeSheet.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-coral font-bold">
              <Eye className="w-3.5 h-3.5" />
              <span>LIVE WORKSHEET PREVIEW</span>
            </div>
          </div>

          {/* Mock Document Body */}
          <div className="p-6 sm:p-10">
            <div className="mb-6 pb-4 border-b border-editorial-border">
              <div className="text-[11px] font-mono text-coral font-bold uppercase tracking-wider mb-1">
                SYSTEM TEMPLATE
              </div>
              <h3 className="font-editorial-condensed text-3xl text-charcoal mb-2">
                {activeSheet.title}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {activeSheet.desc}
              </p>
            </div>

            {/* Realistic Mock Table / Fillable Grid */}
            <div className="bg-paper-cream rounded-2xl border border-editorial-border overflow-hidden mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-editorial-border text-center font-mono text-[11px] font-bold uppercase text-charcoal-light">
                {activeSheet.fields.map((field, fIdx) => (
                  <div key={fIdx} className="bg-paper-cream/90 p-3">
                    {field}
                  </div>
                ))}
              </div>

              {/* Sample Data Rows */}
              <div className="p-4 sm:p-6 space-y-3 bg-paper-white text-xs">
                <div className="p-3 bg-paper-cream/60 rounded-xl border border-editorial-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
                  <span className="font-semibold text-charcoal">
                    Sample Entry #01: Verified Benchmark
                  </span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start sm:self-auto">
                    Status: Validated Data Point
                  </span>
                </div>

                <div className="p-3 bg-paper-cream/60 rounded-xl border border-editorial-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
                  <span className="font-semibold text-charcoal">
                    Sample Entry #02: Documented Business Metric
                  </span>
                  <span className="text-coral font-bold bg-coral-50 px-2 py-0.5 rounded border border-coral-200 self-start sm:self-auto">
                    ROI Factor: 3.2x
                  </span>
                </div>
              </div>
            </div>

            {/* Document Explanatory Note */}
            <div className="flex items-center justify-between text-xs text-charcoal-light font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Fillable template provided in the digital bundle
              </span>
              <span className="font-mono text-coral font-bold">Included in ₹299</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
