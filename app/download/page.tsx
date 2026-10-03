"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/config/product";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  Download,
  Mail,
  ArrowRight,
  ShieldCheck,
  RotateCw,
  Home,
  FileSpreadsheet,
  FileText,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function DownloadPage() {
  const router = useRouter();
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("SP-782914");
  const downloadInitiatedRef = useRef(false);

  useEffect(() => {
    try {
      const storedName = sessionStorage.getItem("customerName");
      const storedEmail = sessionStorage.getItem("customerEmail");
      const storedOrder = sessionStorage.getItem("orderId");
      if (storedName) setCustomerName(storedName);
      if (storedEmail) setCustomerEmail(storedEmail);
      if (storedOrder) setOrderId(storedOrder);
    } catch (e) {
      // sessionStorage fallback
    }

    // Celebration confetti
    try {
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#F45152", "#181818", "#10B981", "#FFA8A6"],
      });
    } catch (e) {
      // ignore
    }

    const timer = setTimeout(() => {
      if (!downloadInitiatedRef.current) {
        downloadInitiatedRef.current = true;
        triggerDownload();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const triggerDownload = () => {
    // Generate and download a structured digital confirmation guide file
    const content = `=====================================================
SALARY WORTH & NEGOTIATION PLAYBOOK
Know Your Number Before HR Gives You Theirs
=====================================================

Order ID: ${orderId}
Purchaser: ${customerName || "Valued Professional"}
Status: Verified Launch Purchase (₹299)
Format: Master Guide + 15 Worksheets & 10 HR Script Cards

WHAT YOU NOW HAVE ACCESS TO:
1. Current Compensation Audit Worksheet
2. Salary Market Research Matrix
3. Salary Gap Calculator Framework
4. Target Salary Worksheet
5. The 5-Number Tactical Grid (Floor, Range, Midpoint, Target, Minimum, Anchor)
6. Evidence Bank (Impact Repository)
7. The 3-Proof Rule Implementation Guide
8. 100-Point Salary Negotiation Readiness Score Diagnostic
9. HR Objection Planner
10. Total Compensation Comparison (Fixed vs Variable)
11. Negotiation Preparation & Mindset Sheet
12. Final 1-Page Meeting Cheat Sheet
13. Complete 10-Scenario HR Negotiation Script Pack
14. Professional Email Templates for Reviews & Counter-Proposals
15. Follow-Up Templates

IMMEDIATE ACTION PLAN:
Step 1: Fill out Worksheet 01 & 02 to establish your baseline and market range.
Step 2: Calculate your 5 Numbers and choose your Opening Anchor.
Step 3: Document your 3 business impact proofs in the Evidence Bank.
Step 4: Practice the 4 core HR objection scripts out loud.
Step 5: Keep Worksheet 12 (1-Page Cheat Sheet) beside you during the conversation.

Support & Inquiries: ${PRODUCT.supportEmail}
© 2026 Salary Worth & Negotiation Playbook. All rights reserved.
=====================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Salary-Worth-and-Negotiation-Playbook-Access-Pack.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadTriggered(true);
  };

  return (
    <div className="min-h-screen bg-paper text-charcoal flex flex-col justify-between relative overflow-hidden py-10 px-4 sm:px-6">
      {/* Background Subtle Accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-coral/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-charcoal text-paper flex items-center justify-center font-bold text-xs group-hover:bg-coral transition-colors">
            SP
          </div>
          <div className="flex flex-col">
            <span className="font-editorial-condensed text-xl text-charcoal leading-none">
              SALARY PLAYBOOK
            </span>
            <span className="text-[9px] uppercase tracking-wider text-editorial-grey font-mono">
              Worth & Negotiation
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-light hover:text-coral transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>

      {/* Main Download Card */}
      <div className="max-w-2xl mx-auto w-full my-auto z-10 py-8">
        <div className="bg-paper-white rounded-3xl border border-editorial-border p-6 sm:p-10 shadow-paper relative">
          {/* Eyebrow Status */}
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>ORDER CONFIRMED • {orderId}</span>
            </div>
            <span className="text-xs font-mono font-bold text-coral">
              ₹299 Paid
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-editorial-condensed text-4xl sm:text-5xl md:text-6xl text-charcoal uppercase leading-[0.92] tracking-tight mb-3">
            YOUR PLAYBOOK <br />
            <span className="text-coral">IS READY TO DOWNLOAD.</span>
          </h1>

          <p className="text-sm sm:text-base text-charcoal-light leading-relaxed mb-6 font-sans">
            {customerName ? `Congratulations ${customerName}!` : "Congratulations!"}{" "}
            You now possess the research frameworks, calculation models, and negotiation scripts to step into your next salary discussion with absolute clarity.
          </p>

          {/* Status Checklist Box */}
          <div className="space-y-2.5 p-4 sm:p-5 bg-paper-cream rounded-2xl border border-editorial-border mb-6">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Digital Playbook & Frameworks Access Granted</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>15 Fillable Worksheets & Calculators Ready</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Complete 10-Scenario HR Script Pack Included</span>
            </div>
          </div>

          {/* Download Action Section */}
          <div className="space-y-3 mb-6">
            <button
              onClick={triggerDownload}
              className="btn-coral w-full py-4 px-6 rounded-2xl text-base sm:text-lg font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg group"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>DOWNLOAD PLAYBOOK & WORKSHEETS</span>
            </button>

            {downloadTriggered ? (
              <p className="text-center text-xs text-emerald-700 font-semibold flex items-center justify-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your download file has been generated. Check your downloads folder.</span>
              </p>
            ) : (
              <p className="text-center text-xs text-editorial-grey font-medium pt-1">
                Your download should begin automatically...
              </p>
            )}

            {/* Manual Retrigger */}
            <div className="text-center pt-1">
              <button
                onClick={triggerDownload}
                className="text-xs font-bold uppercase tracking-wider text-charcoal-light hover:text-coral transition-colors inline-flex items-center gap-1"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Click here if download didn't start</span>
              </button>
            </div>
          </div>

          {/* Email Delivery Note */}
          <div className="pt-5 border-t border-editorial-border/60 flex items-start gap-3 text-xs text-charcoal-light">
            <Mail className="w-4 h-4 text-coral shrink-0 mt-0.5" />
            <p>
              A confirmation and backup copy has been dispatched to{" "}
              <strong className="text-charcoal">{customerEmail || "your registered email"}</strong>.
              Please check your inbox (and spam/promotions folder just in case).
            </p>
          </div>

          {/* Back Home link */}
          <div className="mt-6 pt-4 border-t border-editorial-border/60 flex items-center justify-between text-xs text-charcoal-light">
            <span>Need assistance? {PRODUCT.supportEmail}</span>
            <Link
              href="/"
              className="font-bold uppercase tracking-wider text-coral hover:underline inline-flex items-center gap-1"
            >
              <span>Back to home</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto w-full text-center text-xs text-editorial-grey z-10 pt-4">
        © 2026 {PRODUCT.name}. All rights reserved.
      </div>
    </div>
  );
}
