"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import TransformationSection from "@/components/TransformationSection";
import WhatsInside from "@/components/WhatsInside";
import ProductMockup from "@/components/ProductMockup";
import Benefits from "@/components/Benefits";
import WhoItsFor from "@/components/WhoItsFor";
import BhargaviSection from "@/components/BhargaviSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { trackEvent } from "@/config/analytics";

export default function Home() {
  useEffect(() => {
    trackEvent("page_view", { page: "home" });
  }, []);

  return (
    <main className="relative min-h-screen pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <ProblemSection />
      <TransformationSection />
      <WhatsInside />
      <ProductMockup />
      <Benefits />
      <WhoItsFor />
      <BhargaviSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
