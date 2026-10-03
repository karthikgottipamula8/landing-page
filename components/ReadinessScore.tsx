"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import {
  CheckCircle,
  Circle,
  HelpCircle,
  Sparkles,
  Info,
  Award,
} from "lucide-react";

export default function ReadinessScore() {
  const { readinessScore } = CONTENT;

  // Interactive diagnostic state: 5 pillars, initial checked
  const [checkedPillars, setCheckedPillars] = useState<boolean[]>([
    true,
    false,
    true,
    false,
    false,
  ]);

  const togglePillar = (index: number) => {
    const updated = [...checkedPillars];
    updated[index] = !updated[index];
    setCheckedPillars(updated);
  };

  const currentScore = checkedPillars.reduce(
    (sum, isChecked) => sum + (isChecked ? 20 : 0),
    0
  );

  return (
    <section id="readiness" className="py-20 md:py-28 bg-paper border-b border-editorial-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 inline-block">
            OBJECTIVE AUDIT
          </span>
          <h2 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-none mb-4">
            {readinessScore.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {readinessScore.subheadline}
          </p>
        </div>

        {/* 100-Point Score Interactive Card */}
        <div className="bg-paper-white rounded-3xl p-6 sm:p-10 border border-editorial-border shadow-card mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-editorial-border/60 gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-editorial-grey block">
                DIAGNOSTIC BENCHMARK
              </span>
              <h3 className="font-editorial-condensed text-3xl text-charcoal">
                THE 100-POINT PREPARATION AUDIT
              </h3>
              <p className="text-xs text-charcoal-light mt-0.5">
                Click each pillar to calculate your immediate conversation readiness:
              </p>
            </div>

            {/* Live Score Dial */}
            <div className="flex items-baseline gap-2 bg-charcoal text-paper px-5 py-3 rounded-2xl shrink-0 self-start sm:self-auto">
              <span className="font-mono text-3xl sm:text-4xl font-black text-coral">
                {currentScore}
              </span>
              <span className="font-mono text-sm sm:text-base text-white/60">
                / 100 PTS
              </span>
            </div>
          </div>

          {/* 5 Pillars Interactive List */}
          <div className="space-y-4 mb-8">
            {readinessScore.pillars.map((pillar, idx) => {
              const isChecked = checkedPillars[idx];
              return (
                <div
                  key={idx}
                  onClick={() => togglePillar(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start sm:items-center justify-between gap-4 ${
                    isChecked
                      ? "bg-paper-cream border-coral/40 shadow-sm"
                      : "bg-paper-white border-editorial-border hover:border-editorial-border/80"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <button
                      type="button"
                      className="mt-0.5 sm:mt-0 text-coral shrink-0"
                      aria-label="Toggle pillar"
                    >
                      {isChecked ? (
                        <CheckCircle className="w-5 h-5 text-coral fill-coral/10" />
                      ) : (
                        <Circle className="w-5 h-5 text-editorial-grey" />
                      )}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-coral uppercase">
                          Pillar 0{idx + 1}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-charcoal">
                          {pillar.name}
                        </h4>
                      </div>
                      <p className="text-xs text-charcoal-light mt-0.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold px-2 py-0.5 rounded ${
                        isChecked
                          ? "bg-coral text-white"
                          : "bg-charcoal/5 text-charcoal-light"
                      }`}
                    >
                      +{pillar.maxScore}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Evaluation interpretation bar */}
          <div className="p-4 rounded-xl bg-paper-cream border border-editorial-border flex items-center justify-between text-xs">
            <span className="font-bold text-charcoal">
              Status:{" "}
              {currentScore >= 80 ? (
                <span className="text-emerald-700">Audit Complete: High Preparation</span>
              ) : currentScore >= 40 ? (
                <span className="text-amber-800">Partial Preparation: Critical gaps exist</span>
              ) : (
                <span className="text-rose-700">Unprepared: High risk of accepting low offers</span>
              )}
            </span>
            <span className="text-editorial-grey hidden sm:inline">
              Worksheet 08 provides the full printable diagnostic
            </span>
          </div>
        </div>

        {/* Essential Transparent Disclaimer */}
        <div className="p-4 bg-paper-cream rounded-xl border border-editorial-border text-xs text-charcoal-light text-center leading-relaxed">
          <p className="font-semibold text-charcoal mb-0.5">Diagnostic Purpose:</p>
          <p>{readinessScore.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
