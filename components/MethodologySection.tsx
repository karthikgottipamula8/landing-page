"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import { trackEvent } from "@/config/analytics";
import {
  ArrowRight,
  Anchor,
  Calculator,
  Info,
  CheckCircle2,
} from "lucide-react";

export default function MethodologySection() {
  const { methodology } = CONTENT;
  const [testSalary, setTestSalary] = useState<number>(7);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setTestSalary(val);
    trackEvent("simulator_interaction", { ctc: val });
  };

  const calculatedFloor = (testSalary * 1.15).toFixed(1);
  const calculatedMid = (testSalary * 1.35).toFixed(1);
  const calculatedTarget = (testSalary * 1.4).toFixed(1);
  const calculatedMin = (testSalary * 1.25).toFixed(1);
  const calculatedAnchor = (testSalary * 1.5).toFixed(1);

  return (
    <section id="method" className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            {methodology.eyebrow}
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {methodology.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {methodology.subheadline}
          </p>
        </div>

        {/* 5-Step Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 mb-12">
          {methodology.steps.map((step) => (
            <div
              key={step.number}
              className="bg-paper-white p-5 rounded-2xl border border-editorial-border shadow-card flex flex-col justify-between hover:border-coral/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-full bg-charcoal text-paper flex items-center justify-center font-mono text-xs font-bold">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-editorial-grey">
                    PHASE
                  </span>
                </div>

                <h3 className="font-editorial-condensed text-2xl text-charcoal leading-none mb-1">
                  {step.name}
                </h3>
                <div className="text-[11px] font-semibold text-coral uppercase tracking-wider mb-2">
                  {step.subtitle}
                </div>
                <p className="text-xs text-charcoal-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Opening Anchor Concept Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-charcoal text-paper shadow-paper border border-charcoal/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-coral/20 border border-coral/40 flex items-center justify-center text-coral shrink-0">
                <Anchor className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-coral font-bold tracking-widest block">
                  TACTICAL TOOL
                </span>
                <h4 className="font-editorial-condensed text-3xl text-white">
                  {methodology.anchorConcept.title}
                </h4>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                {methodology.anchorConcept.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Live Interactive Simulator */}
        <div className="bg-paper-cream p-6 sm:p-8 rounded-3xl border border-editorial-border shadow-card mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-editorial-border/60 gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-coral" />
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Interactive Simulator
                </span>
              </div>
              <h4 className="font-editorial-condensed text-2xl sm:text-3xl text-charcoal mt-1">
                SEE HOW YOUR 5 NUMBERS CALCULATE
              </h4>
            </div>

            {/* Slider */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-charcoal-light">
                Current CTC:
              </span>
              <div className="flex items-center gap-2 bg-paper-white px-3 py-1.5 rounded-xl border border-editorial-border shadow-xs">
                <input
                  type="range"
                  min="3"
                  max="25"
                  step="0.5"
                  value={testSalary}
                  onChange={handleSliderChange}
                  className="w-28 accent-coral cursor-pointer"
                />
                <span className="font-mono font-bold text-sm text-charcoal w-16 text-right">
                  ₹{testSalary.toFixed(1)} LPA
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic 5-Number Map */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            <div className="p-3 rounded-xl bg-paper-white border border-editorial-border">
              <div className="text-[10px] font-mono uppercase text-editorial-grey">1. Current</div>
              <div className="text-base font-bold font-mono text-charcoal mt-0.5">₹{testSalary.toFixed(1)} LPA</div>
              <div className="text-[10px] text-charcoal-light mt-0.5">Baseline</div>
            </div>

            <div className="p-3 rounded-xl bg-paper-white border border-editorial-border">
              <div className="text-[10px] font-mono uppercase text-editorial-grey">2. Market Floor</div>
              <div className="text-base font-bold font-mono text-charcoal mt-0.5">₹{calculatedFloor} LPA</div>
              <div className="text-[10px] text-charcoal-light mt-0.5">Lower Bound</div>
            </div>

            <div className="p-3 rounded-xl bg-paper-white border border-editorial-border">
              <div className="text-[10px] font-mono uppercase text-editorial-grey">3. Market Range</div>
              <div className="text-base font-bold font-mono text-charcoal mt-0.5">~₹{calculatedMid} LPA</div>
              <div className="text-[10px] text-charcoal-light mt-0.5">Median Benchmark</div>
            </div>

            <div className="p-3 rounded-xl bg-paper-white border border-editorial-border">
              <div className="text-[10px] font-mono uppercase text-editorial-grey">4. Minimum</div>
              <div className="text-base font-bold font-mono text-charcoal mt-0.5">₹{calculatedMin} LPA</div>
              <div className="text-[10px] text-charcoal-light mt-0.5">Walkaway Floor</div>
            </div>

            <div className="p-3 rounded-xl bg-coral/10 border border-coral/30">
              <div className="text-[10px] font-mono uppercase text-coral font-bold">5. Target</div>
              <div className="text-base font-bold font-mono text-coral mt-0.5">₹{calculatedTarget} LPA</div>
              <div className="text-[10px] text-coral/80 font-medium mt-0.5">Core Objective</div>
            </div>

            <div className="p-3 rounded-xl bg-charcoal text-paper border border-charcoal">
              <div className="text-[10px] font-mono uppercase text-coral font-bold">Opening Anchor</div>
              <div className="text-base font-bold font-mono text-white mt-0.5">₹{calculatedAnchor} LPA</div>
              <div className="text-[10px] text-white/70 mt-0.5">Tactical Ask</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 p-4 rounded-xl bg-charcoal/5 border border-editorial-border text-xs text-charcoal-light">
          <Info className="w-4 h-4 text-editorial-grey shrink-0 mt-0.5" />
          <p>{methodology.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
