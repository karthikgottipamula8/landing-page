"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  Download,
  Mail,
  ArrowRight,
  ShieldCheck,
  RotateCw,
  Home,
  Instagram,
} from "lucide-react";

export default function DownloadPage() {
  const router = useRouter();
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(
    Math.round(PRODUCT.downloadRedirectDelay / 1000)
  );
  const [redirectPaused, setRedirectPaused] = useState(false);
  const downloadInitiatedRef = useRef(false);

  // Trigger PDF file download
  const triggerDownload = () => {
    trackEvent("click_download", { product: PRODUCT.name });
    const link = document.createElement("a");
    link.href = PRODUCT.pdfUrl;
    link.download = PRODUCT.pdfFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadTriggered(true);
  };

  useEffect(() => {
    trackEvent("download_page_view", { product: PRODUCT.name });

    // Subtle celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F45152", "#181818", "#FFE4E1", "#FFA8A6"],
      });
    } catch (e) {
      // Ignore if confetti fails
    }

    // 1. Wait approx 1 second and trigger automatic download
    const autoDownloadTimer = setTimeout(() => {
      if (!downloadInitiatedRef.current) {
        downloadInitiatedRef.current = true;
        triggerDownload();
      }
    }, 1000);

    return () => clearTimeout(autoDownloadTimer);
  }, []);

  // Countdown timer for automatic redirect back to home page
  useEffect(() => {
    if (redirectPaused) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [redirectPaused, router]);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-charcoal flex flex-col justify-between relative overflow-hidden py-10 px-4 sm:px-6">
      {/* Background Decorative Rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-coral-200/40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between z-10">
        <Link href="/" className="flex flex-col items-start leading-none group">
          <span className="font-editorial-condensed text-2xl text-charcoal group-hover:text-coral transition-colors">
            {PRODUCT.clientName}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-editorial-grey">
            JOB HIKE GUIDE
          </span>
        </Link>

        <a
          href={PRODUCT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-charcoal/70 hover:text-coral transition-colors"
        >
          <Instagram className="w-4 h-4 text-coral" />
          <span>{PRODUCT.instagramHandle}</span>
        </a>
      </div>

      {/* Main Download Card */}
      <div className="max-w-xl mx-auto w-full my-auto z-10 py-8">
        <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-paper relative">
          
          {/* Eyebrow Status */}
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] uppercase text-coral bg-coral-50 border border-coral-200/50 px-3.5 py-1 rounded-full mb-6">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>PAYMENT CONFIRMED</span>
          </div>

          {/* Heading */}
          <h1 className="font-editorial-condensed text-5xl sm:text-6xl text-charcoal uppercase leading-[0.9] tracking-tight mb-4">
            YOUR GUIDE <br />
            <span className="text-coral">IS READY.</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed mb-8">
            Thank you for purchasing the <strong>Job Hike Guide</strong> by {PRODUCT.clientName}. Your career transformation starts right here.
          </p>

          {/* 3 Status Items */}
          <div className="space-y-3 p-5 bg-[#FAF9F5] rounded-2xl border border-black/[0.06] mb-8">
            <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>PAYMENT SUCCESSFUL</span>
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>GUIDE READY FOR INSTANT DOWNLOAD</span>
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>EMAIL DELIVERY IN PROGRESS</span>
            </div>
          </div>

          {/* Download Action Section */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={triggerDownload}
              className="w-full inline-flex items-center justify-center space-x-3 bg-coral hover:bg-coral-600 text-white font-editorial-condensed text-2xl uppercase tracking-wider py-4 px-6 rounded-full shadow-lg shadow-coral/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-6 h-6 stroke-[2.5]" />
              <span>DOWNLOAD JOB HIKE GUIDE</span>
            </button>

            {downloadTriggered ? (
              <p className="text-center text-xs text-emerald-600 font-semibold flex items-center justify-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Your download has started. Check your browser downloads folder.</span>
              </p>
            ) : (
              <p className="text-center text-xs text-editorial-grey font-medium">
                Your download is starting automatically...
              </p>
            )}

            {/* Manual fallback */}
            <div className="text-center pt-2">
              <button
                onClick={triggerDownload}
                className="text-xs font-bold uppercase tracking-wider text-charcoal/70 hover:text-coral transition-colors inline-flex items-center space-x-1"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>DOWNLOAD AGAIN IF NEEDED</span>
              </button>
            </div>
          </div>

          {/* Email Delivery Note */}
          <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-start space-x-3 text-xs sm:text-sm text-charcoal/70">
            <Mail className="w-5 h-5 text-coral shrink-0 mt-0.5" />
            <p>
              Your guide will also be sent to the email address used during payment. If you do not see it within a few minutes, please check your promotions or spam folder.
            </p>
          </div>

          {/* Automatic Redirect Notice with Pause Control */}
          <div className="mt-6 p-4 rounded-xl bg-black/[0.03] flex items-center justify-between text-xs text-charcoal/70">
            <div>
              {!redirectPaused ? (
                <span>
                  Redirecting to home page in{" "}
                  <strong className="text-coral font-bold">{secondsRemaining}s</strong>...
                </span>
              ) : (
                <span>Redirect paused.</span>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setRedirectPaused(!redirectPaused)}
                className="font-bold uppercase tracking-wider text-charcoal hover:text-coral"
              >
                {redirectPaused ? "Resume" : "Stay on page"}
              </button>
              <span>•</span>
              <Link
                href="/"
                className="font-bold uppercase tracking-wider text-coral hover:underline inline-flex items-center space-x-1"
              >
                <span>Return now</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto w-full text-center text-xs text-charcoal/50 z-10 pt-4">
        © {new Date().getFullYear()} {PRODUCT.clientName}. All rights reserved. • Support: {PRODUCT.supportEmail}
      </div>
    </div>
  );
}
