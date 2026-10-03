"use client";

import React, { useState, useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar"; // 1. Announcement / value strip
import Navbar from "@/components/Navbar"; // 2. Navigation
import Hero from "@/components/Hero"; // 3. Above-the-fold Hero
import ImmediateTrust from "@/components/ImmediateTrust"; // 4. Immediate trust / proof
import CoreProblem from "@/components/CoreProblem"; // 5. Core problem
import DifficultySection from "@/components/DifficultySection"; // 6. Why salary negotiation is difficult
import MethodologySection from "@/components/MethodologySection"; // 7. The Salary Worth methodology
import WhatsInside from "@/components/WhatsInside"; // 8. What is inside the playbook
import ProductPreview from "@/components/ProductPreview"; // 9. Product preview
import BonusScriptPack from "@/components/BonusScriptPack"; // 10. Bonus Script Pack
import BeforeAfterSection from "@/components/BeforeAfterSection"; // 11. Before vs After
import WhyDifferent from "@/components/WhyDifferent"; // 12. Why this system is different
import CreatorAuthority from "@/components/CreatorAuthority"; // 13. Credibility / proof / Creator Feature
import ValueStack from "@/components/ValueStack"; // 14. Offer / value stack
import PricingSection from "@/components/PricingSection"; // 15. Pricing
import TrustSection from "@/components/TrustSection"; // 16. Risk reversal / trust
import FAQSection from "@/components/FAQSection"; // 17. FAQ
import FinalCTA from "@/components/FinalCTA"; // 18. Final CTA
import Footer from "@/components/Footer"; // 19. Footer
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CheckoutModal from "@/components/CheckoutModal";
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
      {/* 1. Announcement / value strip */}
      <AnnouncementBar onOpenCheckout={openCheckout} />

      {/* 2. Navigation */}
      <Navbar onOpenCheckout={openCheckout} />

      {/* 3. Hero (Above the fold) */}
      <Hero onOpenCheckout={openCheckout} />

      {/* 4. Immediate trust / proof */}
      <ImmediateTrust />

      {/* 5. Core problem */}
      <CoreProblem />

      {/* 6. Why salary negotiation is difficult */}
      <DifficultySection />

      {/* 7. The Salary Worth methodology */}
      <MethodologySection />

      {/* 8. What is inside the playbook */}
      <WhatsInside />

      {/* 9. Product preview */}
      <ProductPreview />

      {/* 10. Bonus Script Pack */}
      <BonusScriptPack onOpenCheckout={openCheckout} />

      {/* 11. Before vs After */}
      <BeforeAfterSection />

      {/* 12. Why this system is different */}
      <WhyDifferent />

      {/* 13. Credibility / proof / Creator Feature (Bhargavi Papolu live speaking & review) */}
      <CreatorAuthority />

      {/* 14. Offer / value stack */}
      <ValueStack onOpenCheckout={openCheckout} />

      {/* 15. Pricing */}
      <PricingSection onOpenCheckout={openCheckout} />

      {/* 16. Risk reversal / trust */}
      <TrustSection />

      {/* 17. FAQ */}
      <FAQSection />

      {/* 18. Final CTA */}
      <FinalCTA onOpenCheckout={openCheckout} />

      {/* 19. Footer */}
      <Footer onOpenCheckout={openCheckout} />

      {/* Mobile Sticky Purchase Bar */}
      <StickyMobileCTA onOpenCheckout={openCheckout} />

      {/* High-Converting Frictionless Checkout Modal */}
      <CheckoutModal isOpen={checkoutOpen} onClose={closeCheckout} />
    </main>
  );
}
