"use client";

import React, { useState, useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar"; // 1. Top urgency & cart bar
import Navbar from "@/components/Navbar"; // 2. Clean Navigation matching image
import Hero from "@/components/Hero"; // 3. Hero featuring bhargavi-hero-banner.jpg first
import WhatsInside from "@/components/WhatsInside"; // 4. What's Inside section
import BenefitsSection from "@/components/BenefitsSection"; // 5. Benefits & Interactive CTC Slider
import CreatorAuthority from "@/components/CreatorAuthority"; // 6. Bhargavi Papolu & Testimonials
import PricingSection from "@/components/PricingSection"; // 7. Focused ₹299 purchase card
import FAQSection from "@/components/FAQSection"; // 8. Direct conversion FAQs
import Footer from "@/components/Footer"; // 9. Footer with social links matching image
import StickyMobileCTA from "@/components/StickyMobileCTA"; // 10. Sticky bottom cart with ticking seconds
import CheckoutModal from "@/components/CheckoutModal"; // 11. Instant Frictionless Checkout Modal
import { trackEvent } from "@/config/analytics";

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => {
    trackEvent("page_view", { page: "home" });
  }, []);

  const openCheckout = () => {
    trackEvent("checkout_start", { source: "page_cta" });
    setCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-paper text-charcoal pb-16 sm:pb-0">
      {/* 1. Announcement / Urgency Strip with 7-Hour Running Countdown */}
      <AnnouncementBar onOpenCheckout={openCheckout} />

      {/* 2. Navigation matching image: "Bhargavi Papolu" | What's Inside | Benefits | Testimonials | FAQ */}
      <Navbar onOpenCheckout={openCheckout} />

      {/* 3. Hero (FIRST ELEMENT: Features the approved graphic banner + instant ₹299 CTA) */}
      <Hero onOpenCheckout={openCheckout} />

      {/* 4. What's Inside: Master Playbook (PDF), 15 Worksheets & HR Scripts */}
      <WhatsInside onOpenCheckout={openCheckout} />

      {/* 5. Benefits & Interactive 5-Number CTC Calculator */}
      <BenefitsSection onOpenCheckout={openCheckout} />

      {/* 6. Testimonials & Verified Mentor Authority (Bhargavi Papolu) */}
      <CreatorAuthority />

      {/* 7. Buying Decision & Single ₹299 Pricing Card */}
      <PricingSection onOpenCheckout={openCheckout} />

      {/* 8. Direct conversion FAQ */}
      <FAQSection />

      {/* 9. Footer with Social Channels matching the image & Legal Links */}
      <Footer onOpenCheckout={openCheckout} />

      {/* Floating Bottom Cart with Ticking Seconds Timer & Pink Gradient Title */}
      <StickyMobileCTA onOpenCheckout={openCheckout} />

      {/* Frictionless 1-Click Instant Checkout Modal */}
      <CheckoutModal isOpen={checkoutOpen} onClose={closeCheckout} />
    </main>
  );
}
