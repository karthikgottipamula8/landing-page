"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // Section 1
import PainRelatability from "@/components/PainRelatability"; // Section 2
import ReframeProblem from "@/components/ReframeProblem"; // Section 3
import IntroduceProduct from "@/components/IntroduceProduct"; // Section 4
import CoreMechanism from "@/components/CoreMechanism"; // Section 5
import TransformationExample from "@/components/TransformationExample"; // Section 6
import WhatsInside from "@/components/WhatsInside"; // Section 7
import EvidenceSection from "@/components/EvidenceSection"; // Section 8
import HRObjections from "@/components/HRObjections"; // Section 9
import ScriptPack from "@/components/ScriptPack"; // Section 10
import TotalCompensation from "@/components/TotalCompensation"; // Section 11
import ReadinessScore from "@/components/ReadinessScore"; // Section 12
import WhoItsFor from "@/components/WhoItsFor"; // Section 13
import WhoItsNotFor from "@/components/WhoItsNotFor"; // Section 14
import ProductPreview from "@/components/ProductPreview"; // Section 15
import ValueStack from "@/components/ValueStack"; // Section 16
import FAQSection from "@/components/FAQSection"; // Section 17
import FinalCTA from "@/components/FinalCTA"; // Section 18
import FutureProduct from "@/components/FutureProduct"; // Section 19
import Footer from "@/components/Footer"; // Section 20
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CheckoutModal from "@/components/CheckoutModal";

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const openCheckout = () => {
    setCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-paper text-charcoal pb-16 sm:pb-0">
      {/* Sticky Navigation */}
      <Navbar onOpenCheckout={openCheckout} />

      {/* SECTION 1 — ABOVE THE FOLD */}
      <Hero onOpenCheckout={openCheckout} />

      {/* SECTION 2 — PAIN / RELATABILITY */}
      <PainRelatability />

      {/* SECTION 3 — REFRAME THE PROBLEM */}
      <ReframeProblem />

      {/* SECTION 4 — INTRODUCE THE PRODUCT */}
      <IntroduceProduct />

      {/* SECTION 5 — THE CORE MECHANISM */}
      <CoreMechanism />

      {/* SECTION 6 — SHOW THE TRANSFORMATION WITH AN EXAMPLE */}
      <TransformationExample />

      {/* SECTION 7 — WHAT'S INSIDE THE PLAYBOOK */}
      <WhatsInside />

      {/* SECTION 8 — EVIDENCE SECTION */}
      <EvidenceSection onOpenCheckout={openCheckout} />

      {/* SECTION 9 — HR OBJECTIONS */}
      <HRObjections />

      {/* SECTION 10 — SCRIPT PACK */}
      <ScriptPack onOpenCheckout={openCheckout} />

      {/* SECTION 11 — TOTAL COMPENSATION */}
      <TotalCompensation />

      {/* SECTION 12 — SALARY NEGOTIATION READINESS SCORE */}
      <ReadinessScore />

      {/* SECTION 13 — WHO THIS IS FOR */}
      <WhoItsFor />

      {/* SECTION 14 — WHO IT IS NOT FOR */}
      <WhoItsNotFor />

      {/* SECTION 15 — PRODUCT PREVIEW */}
      <ProductPreview />

      {/* SECTION 16 — VALUE STACK */}
      <ValueStack onOpenCheckout={openCheckout} />

      {/* SECTION 17 — OBJECTION HANDLING */}
      <FAQSection />

      {/* SECTION 18 — FINAL CTA */}
      <FinalCTA onOpenCheckout={openCheckout} />

      {/* SECTION 19 — FUTURE PRODUCT */}
      <FutureProduct />

      {/* SECTION 20 — FOOTER */}
      <Footer onOpenCheckout={openCheckout} />

      {/* Mobile-first Sticky CTA */}
      <StickyMobileCTA onOpenCheckout={openCheckout} />

      {/* High-Converting Checkout Modal */}
      <CheckoutModal isOpen={checkoutOpen} onClose={closeCheckout} />
    </main>
  );
}
