"use client";

import Navbar from "@/components/ui/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import WhySection from "@/components/sections/WhySection";
import FeaturedEventSection from "@/components/sections/FeaturedEventSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import CommunitySection from "@/components/sections/CommunitySection";
import QRSection from "@/components/sections/QRSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhySection />
        <FeaturedEventSection />
        <CategoriesSection />
        <CommunitySection />
        <QRSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
