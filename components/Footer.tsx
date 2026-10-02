"use client";

import React from "react";
import { PRODUCT } from "@/config/product";
import { Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-24 md:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6">
            <span className="font-editorial-condensed text-3xl sm:text-4xl text-white tracking-wide uppercase block">
              {PRODUCT.clientName}
            </span>
            <span className="text-xs uppercase tracking-widest text-coral font-bold block mb-4">
              {PRODUCT.name}
            </span>
            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed mb-6">
              Practical career roadmaps, salary hike strategies, and appraisal guidance for Telugu IT professionals.
            </p>
            <a
              href={PRODUCT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-white/80 hover:text-coral transition-colors"
            >
              <Instagram className="w-4 h-4 text-coral" />
              <span>{PRODUCT.instagramHandle}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-medium text-white/70">
              <li>
                <a href="#problem" className="hover:text-coral transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#inside" className="hover:text-coral transition-colors">
                  What's Inside
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-coral transition-colors">
                  The Guide
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-coral transition-colors">
                  Pricing ({PRODUCT.price})
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-coral transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              SUPPORT & LEGAL
            </div>
            <ul className="space-y-2 text-xs font-medium text-white/70">
              <li>
                <span className="text-white/50">Contact:</span>{" "}
                <a href={`mailto:${PRODUCT.supportEmail}`} className="hover:text-coral">
                  {PRODUCT.supportEmail}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li className="pt-2 text-[11px] text-white/40">
                {PRODUCT.refundPolicyText}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {PRODUCT.clientName}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-xs text-white/70 hover:text-coral transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
