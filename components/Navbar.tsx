"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCheckout: () => void;
}

export default function Navbar({ onOpenCheckout }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "What's Inside", href: "#whats-inside" },
    { label: "Benefits", href: "#benefits" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-editorial-border shadow-sm py-2.5"
          : "bg-paper/90 backdrop-blur-sm border-b border-editorial-border/40 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Creator Brand (Matching Image: "Bhargavi Papolu") */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-charcoal via-[#2A2A2A] to-charcoal text-paper flex items-center justify-center shadow-md border border-white/10 group-hover:border-coral/60 transition-all duration-300 shrink-0">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:scale-105 transition-transform"
              >
                <path
                  d="M20 4L32 10.5V23.5C32 29.5 26.5 34.5 20 36.5C13.5 34.5 8 29.5 8 23.5V10.5L20 4Z"
                  stroke="url(#logo_grad_nav)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 24L18 20L22 23L26 15"
                  stroke="#FFFFFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="27" r="1.6" fill="#FF2A6D" />
                <defs>
                  <linearGradient id="logo_grad_nav" x1="8" y1="4" x2="32" y2="36.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF6F61" />
                    <stop offset="0.5" stopColor="#FF2A6D" />
                    <stop offset="1" stopColor="#FF8C42" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-editorial-condensed text-2xl sm:text-3xl tracking-tight text-charcoal leading-none">
                Bhargavi Papolu
              </span>
              <span className="text-[10px] font-bold text-editorial-grey uppercase tracking-wider">
                Salary Worth Playbook
              </span>
            </div>
          </a>

          {/* Nav Links Matching Reference Image */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-charcoal-light">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-coral transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCheckout}
              className="btn-coral-gradient px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:shadow-lg group"
            >
              <span>Get The Playbook — ₹299</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCheckout}
              className="btn-coral-gradient px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider"
            >
              ₹299
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:bg-charcoal/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-paper-cream border-b border-editorial-border px-4 pt-3 pb-5 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-charcoal py-2 border-b border-editorial-border/40 hover:text-coral"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCheckout();
            }}
            className="w-full btn-coral-gradient py-3 rounded-xl text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
          >
            <span>Get The Playbook — ₹299</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
