"use client";

import React, { useState } from "react";
import { CONTENT } from "@/config/content";
import { PRODUCT } from "@/config/product";
import { ArrowRight, ShieldCheck, Mail, X } from "lucide-react";

interface FooterProps {
  onOpenCheckout: () => void;
}

export default function Footer({ onOpenCheckout }: FooterProps) {
  const { footer } = CONTENT;
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const getModalTitle = (id: string) => {
    switch (id) {
      case "terms":
        return "Terms of Use";
      case "privacy":
        return "Privacy Policy";
      case "refund":
        return "Refund Policy & Guarantee";
      case "contact":
        return "Support & Inquiries";
      default:
        return "";
    }
  };

  const getModalBody = (id: string) => {
    switch (id) {
      case "terms":
        return "The Salary Worth and Negotiation Playbook is an informational digital guide and preparation workbook intended to assist professionals in preparing for compensation discussions. All calculations, estimates, and worksheets are educational tools and do not constitute legal, tax, or employment guarantees.";
      case "privacy":
        return "We respect your personal privacy. We only collect the minimal contact information required to fulfill your digital download and communicate essential order receipts. We do not sell or monetize personal customer details.";
      case "refund":
        return "Digital Delivery & Refund Notice: Because this product grants immediate, complete downloadable access to proprietary PDF guides, Excel/Sheets calculation models, and script packs upon purchase, refunds are reviewed on a case-by-case basis according to creator policies. If you experience any technical download difficulties, our team guarantees resolution within 24 business hours.";
      case "contact":
        return `For any inquiries, download support, or questions regarding the playbook, please reach out to: ${PRODUCT.supportEmail}. We typically respond within 24 business hours.`;
      default:
        return "";
    }
  };

  return (
    <footer className="bg-charcoal text-paper py-16 border-t border-charcoal/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Product Name & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-coral text-white flex items-center justify-center font-bold text-xs">
                SP
              </span>
              <span className="font-editorial-condensed text-2xl text-white tracking-wide">
                {footer.productName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-md leading-relaxed font-sans">
              {footer.description}
            </p>
            <div className="text-xs font-semibold text-coral">
              {footer.creatorCredit}
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Mail className="w-4 h-4 text-coral" />
              <span>{footer.supportEmail}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase text-white/50 tracking-wider block mb-4">
              Legal & Support
            </span>
            <ul className="space-y-2.5 text-xs text-white/80">
              {footer.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveModal(link.id)}
                    className="hover:text-coral transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Buy CTA Action */}
          <div className="md:col-span-3 flex flex-col justify-start">
            <span className="text-xs font-mono uppercase text-coral font-bold tracking-wider block mb-3">
              LAUNCH SPECIAL • ₹299
            </span>
            <p className="text-xs text-white/60 mb-4 leading-relaxed font-sans">
              Step into your next appraisal, promotion, or offer conversation fully prepared.
            </p>
            <button
              onClick={onOpenCheckout}
              className="btn-coral px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <span>GET THE PLAYBOOK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-[11px] text-white/50 leading-relaxed font-sans">
          <p>{footer.disclaimer}</p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5 pt-4 text-white/40">
            <span>{footer.copyright}</span>
            <span>Edition 2026 • Created by Bhargavi Papolu</span>
          </div>
        </div>
      </div>

      {/* Legal & Policy Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-paper-white text-charcoal rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-editorial-border shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-charcoal-light hover:text-coral p-1 rounded-lg"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-editorial-condensed text-2xl text-charcoal mb-4">
              {getModalTitle(activeModal)}
            </h3>
            <div className="text-sm text-charcoal-light leading-relaxed mb-6 font-sans">
              {getModalBody(activeModal)}
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full bg-charcoal text-paper py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-charcoal-muted transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
