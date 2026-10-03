"use client";

import React, { useState } from "react";
import { trackEvent } from "@/config/analytics";
import { XCircle, CheckCircle2, Calculator, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export default function BenefitsSection({ onOpenCheckout }: { onOpenCheckout: () => void }) {
  const [testSalary, setTestSalary] = useState<number>(8);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setTestSalary(val);
    trackEvent("simulator_interaction", { ctc: val });
  };

  const calculatedFloor = (testSalary * 1.15).toFixed(1);
  const calculatedMid = (testSalary * 1.3).toFixed(1);
  const calculatedTarget = (testSalary * 1.45).toFixed(1);
  const calculatedAnchor = (testSalary * 1.55).toFixed(1);
  const potentialGap = (parseFloat(calculatedTarget) - testSalary).toFixed(1);

  return (
    <section id="benefits" className="py-14 sm:py-20 bg-paper border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#FF2A6D] bg-[#FF2A6D]/10 border border-[#FF2A6D]/20 px-3 py-1 rounded-full mb-3 inline-block">
            THE TRANSFORMATION
          </span>
          <h2 className="font-editorial-condensed text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-none mb-3">
            Why Professionals Lose ₹2–4 Lakhs Without A System
          </h2>
          <p className="text-sm sm:text-base text-charcoal-light leading-relaxed font-normal">
            Walking into HR discussions with a guess guarantees you get whatever 8–10% standard increment is in their spreadsheet. Here is what changes with the playbook:
          </p>
        </div>

        {/* 1. Before vs After Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {/* Before */}
          <div className="p-5 sm:p-6 bg-paper-cream rounded-3xl border border-rose-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-rose-200/60 mb-4">
                <span className="text-xs font-mono font-black uppercase text-rose-800 tracking-wider">
                  WITHOUT A PREPARATION SYSTEM
                </span>
                <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                  High Anxiety
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-charcoal-light font-medium">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Asking for a random percentage hike because a friend got it.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Freezing when HR asks: "What is your expected CTC?"</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Arguing with emotions rather than documented business impact.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Accepting the first counter-offer or "no budget" excuse.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-200/50 text-[11px] text-rose-900 font-semibold italic">
              Result: Undervalued and stuck at the same baseline for another full year.
            </div>
          </div>

          {/* With Playbook */}
          <div className="p-5 sm:p-6 bg-charcoal text-paper rounded-3xl border border-charcoal/20 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-mono font-black uppercase text-coral tracking-wider">
                  WITH THE SALARY PLAYBOOK
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  100% Prepared
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/90 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Knowing your exact Floor, Target, and Anchor numbers before talking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Word-for-word scripts to answer expected CTC without underbidding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>A 1-page Evidence Bank proving your market return on investment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Confident counter-offer scripts if HR says "there is no budget".</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-emerald-300 font-semibold">
              Result: Walking out of the conversation with the compensation you deserve.
            </div>
          </div>
        </div>

        {/* 2. Interactive 5-Number CTC Calculator */}
        <div className="bg-paper-white rounded-3xl p-6 sm:p-8 border-2 border-[#FF2A6D]/20 shadow-paper">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-editorial-border mb-6">
            <div>
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#FF2A6D] block">
                INTERACTIVE PREVIEW TOOL
              </span>
              <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-charcoal">
                Simulate Your 5-Number Salary Architecture
              </h3>
            </div>
            <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full self-start sm:self-auto">
              Included In Worksheets
            </span>
          </div>

          {/* Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="ctc-slider" className="text-xs font-bold text-charcoal uppercase tracking-wider">
                Select Your Current Baseline CTC:
              </label>
              <span className="text-2xl font-black font-mono text-[#FF2A6D]">
                ₹{testSalary.toFixed(1)} LPA
              </span>
            </div>

            <input
              id="ctc-slider"
              type="range"
              min="3"
              max="35"
              step="0.5"
              value={testSalary}
              onChange={handleSliderChange}
              className="w-full h-3 bg-paper-cream rounded-lg appearance-none cursor-pointer accent-[#FF2A6D] border border-editorial-border"
            />
            <div className="flex justify-between text-[10px] font-mono text-editorial-grey mt-1">
              <span>₹3 LPA</span>
              <span>₹15 LPA</span>
              <span>₹35 LPA</span>
            </div>
          </div>

          {/* Output 3D Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-6">
            <div className="p-3.5 bg-paper-cream rounded-2xl border border-editorial-border">
              <span className="text-[10px] font-mono uppercase text-editorial-grey font-bold block">1. Walk-Away Floor</span>
              <span className="text-lg sm:text-xl font-black font-mono text-charcoal">₹{calculatedFloor}L</span>
              <span className="text-[9px] text-editorial-grey block mt-0.5">Absolute minimum</span>
            </div>
            <div className="p-3.5 bg-paper-cream rounded-2xl border border-editorial-border">
              <span className="text-[10px] font-mono uppercase text-editorial-grey font-bold block">2. Market Midpoint</span>
              <span className="text-lg sm:text-xl font-black font-mono text-charcoal">₹{calculatedMid}L</span>
              <span className="text-[9px] text-editorial-grey block mt-0.5">Role fair value</span>
            </div>
            <div className="p-3.5 bg-paper-cream rounded-2xl border border-[#FF2A6D]/40 bg-[#FF2A6D]/5">
              <span className="text-[10px] font-mono uppercase text-[#FF2A6D] font-extrabold block">3. Realistic Target</span>
              <span className="text-lg sm:text-xl font-black font-mono text-[#FF2A6D]">₹{calculatedTarget}L</span>
              <span className="text-[9px] text-[#FF2A6D] font-bold block mt-0.5">+45% Target Hike</span>
            </div>
            <div className="p-3.5 bg-paper-cream rounded-2xl border border-editorial-border">
              <span className="text-[10px] font-mono uppercase text-editorial-grey font-bold block">4. Strategic Anchor</span>
              <span className="text-lg sm:text-xl font-black font-mono text-charcoal">₹{calculatedAnchor}L</span>
              <span className="text-[9px] text-emerald-600 font-bold block mt-0.5">Opening Ask</span>
            </div>
          </div>

          {/* Quick CTA inside preview */}
          <div className="p-4 bg-charcoal text-paper rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="text-xs text-white/80 font-medium">
                Your calculated potential compensation gap is:{" "}
                <strong className="text-emerald-400 font-mono text-sm">+₹{potentialGap} LPA</strong>
              </span>
              <div className="text-[11px] text-white/60">
                The playbook gives you the complete fillable worksheet and exact scripts to defend this number.
              </div>
            </div>
            <button
              onClick={onOpenCheckout}
              className="btn-coral-gradient px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shrink-0"
            >
              Get Full Calculator — ₹299
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
