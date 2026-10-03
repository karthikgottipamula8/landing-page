"use client";

import React, { useState, useEffect } from "react";
import { CONTENT } from "@/config/content";
import { ShieldCheck, ArrowRight, Menu, X } from "lucide-react";

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

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-editorial-border shadow-sm py-3"
          : "bg-paper/80 backdrop-blur-sm border-b border-editorial-border/40 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-charcoal text-paper flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:bg-coral transition-colors">
              SP
            </div>
            <div className="flex flex-col">
              <span className="font-editorial-condensed text-xl sm:text-2xl tracking-tight text-charcoal leading-none">
                {CONTENT.nav.logoTitle}
              </span>
              <span className="text-[10px] font-semibold text-editorial-grey tracking-wider uppercase">
                {CONTENT.nav.logoSubtitle}
              </span>
            </div>
          </a>

          {/* Clean Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-charcoal-light">
            {CONTENT.nav.links.map((link) => (
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
              className="btn-coral px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm hover:shadow-md"
            >
              <span>{CONTENT.nav.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCheckout}
              className="btn-coral px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
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
            {CONTENT.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-charcoal py-2 border-b border-editorial-border/40 hover:text-coral"
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
            className="w-full btn-coral py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
          >
            <span>{CONTENT.nav.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
