"use client";

import React, { useState, useEffect } from "react";
import { PRODUCT } from "@/config/product";
import { handlePayNow } from "@/config/analytics";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
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
    { label: "THE PROBLEM", href: "#problem" },
    { label: "WHAT'S INSIDE", href: "#inside" },
    { label: "THE GUIDE", href: "#guide" },
    { label: "WHO IT'S FOR", href: "#who" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F5]/92 backdrop-blur-md border-b border-black/[0.06] shadow-sm py-3"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex flex-col items-start leading-none tracking-tight focus:outline-none"
          >
            <span className="font-editorial-condensed text-2xl md:text-3xl text-charcoal tracking-wide group-hover:text-coral transition-colors">
              {PRODUCT.clientName}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-editorial-grey font-medium -mt-0.5">
              JOB HIKE GUIDE
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-charcoal/70 hover:text-coral transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center space-x-4">
            <span className="hidden md:inline-block text-xs font-bold text-coral tracking-wider uppercase bg-coral-100 px-2.5 py-1 rounded-full">
              {PRODUCT.price}
            </span>
            <button
              onClick={() => handlePayNow("navbar")}
              className="group inline-flex items-center justify-center space-x-2 bg-coral hover:bg-coral-600 text-white font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>GET THE GUIDE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => handlePayNow("navbar-mobile-quick")}
              className="bg-coral text-white text-[11px] font-bold px-3 py-1.5 rounded-full"
            >
              {PRODUCT.price}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-coral focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF9F5] border-b border-black/[0.08] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-charcoal py-2 border-b border-black/[0.04] hover:text-coral"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handlePayNow("navbar-mobile-drawer");
                }}
                className="w-full flex items-center justify-center space-x-2 bg-coral text-white font-bold text-xs uppercase tracking-wider py-3 rounded-full shadow-md"
              >
                <span>GET THE GUIDE — {PRODUCT.price}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
