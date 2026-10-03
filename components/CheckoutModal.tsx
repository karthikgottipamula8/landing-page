"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/config/product";
import { trackEvent } from "@/config/analytics";
import {
  X,
  ShieldCheck,
  Lock,
  ArrowRight,
  QrCode,
  CreditCard,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Loader2,
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please provide your name and email address.");
      return;
    }
    setErrorMsg("");
    setIsProcessing(true);

    trackEvent("purchase", {
      product: PRODUCT.name,
      value: PRODUCT.priceRaw,
      currency: "INR",
      payment_method: paymentMethod,
    });

    // Save details to sessionStorage for the download page
    try {
      sessionStorage.setItem("customerName", name);
      sessionStorage.setItem("customerEmail", email);
      sessionStorage.setItem("orderId", "SP-" + Math.floor(100000 + Math.random() * 900000));
    } catch (err) {
      console.error(err);
    }

    // If an external checkout URL is configured (other than placeholder), redirect to it
    if (PRODUCT.checkoutUrl && PRODUCT.checkoutUrl !== "CHECKOUT_URL_HERE") {
      window.location.href = PRODUCT.checkoutUrl;
      return;
    }

    // Otherwise simulate instantaneous secure payment and deliver access
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      router.push("/download");
    }, 1200);
  };

  const handleDirectRazorpay = () => {
    // If the creator configures an active Razorpay page, open it
    const targetUrl =
      PRODUCT.checkoutUrl !== "CHECKOUT_URL_HERE"
        ? PRODUCT.checkoutUrl
        : PRODUCT.razorpayPaymentPageUrl;

    if (targetUrl) {
      window.open(targetUrl, "_blank");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-paper-white text-charcoal rounded-3xl max-w-lg w-full border border-editorial-border shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-charcoal text-paper flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-coral font-bold block">
              SECURE CHECKOUT
            </span>
            <h3 className="font-editorial-condensed text-2xl sm:text-3xl text-white">
              GET THE SALARY PLAYBOOK
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close Checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Order Summary Box */}
          <div className="p-4 rounded-2xl bg-paper-cream border border-editorial-border">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-charcoal">
                {PRODUCT.name}
              </span>
              <span className="font-mono text-lg font-black text-coral">
                {PRODUCT.price}
              </span>
            </div>
            <ul className="text-xs text-charcoal-light space-y-1 mb-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant Digital PDF Access</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>15 Worksheets & Calculators (Excel & Sheets)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Complete 10-Scenario HR Script Pack</span>
              </li>
            </ul>
            <div className="text-[11px] font-mono text-editorial-grey pt-2 border-t border-editorial-border/60 flex items-center justify-between">
              <span>One-Time Payment</span>
              <span>Zero Hidden Charges</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleCheckout} className="space-y-4">
            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 font-medium">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Your Full Name <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-editorial-border bg-paper focus:bg-paper-white focus:outline-none focus:border-coral text-sm text-charcoal"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Email Address <span className="text-coral">*</span>
                <span className="text-[10px] text-editorial-grey font-normal lowercase ml-1">
                  (for instant delivery & backup links)
                </span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g. rahul@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-editorial-border bg-paper focus:bg-paper-white focus:outline-none focus:border-coral text-sm text-charcoal"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Phone / WhatsApp Number
                <span className="text-[10px] text-editorial-grey font-normal ml-1">
                  (optional for SMS receipt)
                </span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-editorial-border bg-paper focus:bg-paper-white focus:outline-none focus:border-coral text-sm text-charcoal"
              />
            </div>

            {/* Payment Mode Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                Select Payment Mode
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === "upi"
                      ? "bg-coral/10 border-coral text-coral"
                      : "bg-paper-cream border-editorial-border text-charcoal-light"
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === "card"
                      ? "bg-coral/10 border-coral text-coral"
                      : "bg-paper-cream border-editorial-border text-charcoal-light"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("netbanking")}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === "netbanking"
                      ? "bg-coral/10 border-coral text-coral"
                      : "bg-paper-cream border-editorial-border text-charcoal-light"
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>NetBanking</span>
                </button>
              </div>
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full btn-coral py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 mt-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Securing Order...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Pay ₹299 & Download Instantly</span>
                </>
              )}
            </button>
          </form>

          {/* External Razorpay Link Fallback */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={handleDirectRazorpay}
              className="text-xs text-charcoal-light hover:text-coral transition-colors inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline"
            >
              <span>Or pay via official Razorpay page link</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="p-3 bg-paper-cream border-t border-editorial-border text-[11px] text-charcoal-light flex items-center justify-center gap-2 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>256-Bit SSL Encrypted • Instant Digital Delivery</span>
        </div>
      </div>
    </div>
  );
}
