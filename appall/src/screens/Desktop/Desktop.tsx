import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { DemoForm } from "../../components/DemoForm/DemoForm";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { ResourcesSection } from "./sections/ResourcesSection/ResourcesSection";
import { TechnologySection } from "./sections/TechnologySection/TechnologySection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const Desktop = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const handleDemoClick = () => {
    setIsDemoFormOpen(true);
  };

  const handleDemoClose = () => {
    setIsDemoFormOpen(false);
  };

  return (
    <>
      <Navbar onDemoClick={handleDemoClick} />
      <DemoForm isOpen={isDemoFormOpen} onClose={handleDemoClose} />
      
      <main className="bg-[#ffffff] overflow-hidden w-full relative">
        <ResourcesSection />
        <ContactSection />
        <HeroSection />
        <MainContentSection />
        <FAQSection />
        
        <PricingSection />
        <FeaturesSection />
        <TechnologySection />
       
        
        <TestimonialsSection />

        {/* Background decorative elements */}
        <div className="absolute top-[4885px] left-[18px] w-[1422px] h-[1415px] flex overflow-hidden pointer-events-none">
          <div className="w-[1440px] h-[1079px] ml-[-19px] bg-[url(/67654fba4bffecaa17d6a4cf-light--p-1600-webp-2.png)] bg-cover bg-[50%_50%] opacity-30" />
        </div>

        <div className="absolute top-[5964px] left-0 w-[1440px] h-[1006px] bg-[url(/67654fba4bffecaa17d6a4cf-light--p-1600-webp.png)] bg-cover bg-[50%_50%] opacity-20 pointer-events-none" />

        <div className="absolute top-[6536px] left-0 w-[1440px] h-[849px] rotate-180 bg-[url(/67654fba4bffecaa17d6a4cf-light--p-1600-webp-1.png)] bg-cover bg-[50%_50%] opacity-20 pointer-events-none" />
      </main>
    </>
  );
};
