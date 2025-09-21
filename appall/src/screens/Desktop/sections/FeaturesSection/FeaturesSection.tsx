import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

// TypeScript interfaces for better type safety
interface AppType {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  className?: string;
}

// Constants for better maintainability
const SECTION_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  CARD_DELAY_STEP: 0.2,
} as const;

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className = "" }) => {
  const appTypes: AppType[] = [
    {
      title: "Ready Apps",
      description: "Applications prêtes à l'usage : ChatGPT-like, traduction, AskPDF, génération d'images. Incluses dans les forfaits.",
    },
    {
      title: "Exclusive Apps",
      description: "Templates semi-custom : Matching de CV, onboarding RH, FAQ métier.",
    },
    {
      title: "Custom Apps",
      description: "Construits sur mesure pour le client avec le framework AppAll.",
    },
  ];

  // App showcase images - using available images from the public folder
  const appShowcase = [
    { src: "/marketplace--2--1.png", alt: "App showcase 1" },
    { src: "/workplace--1--1.png", alt: "App showcase 2" },
    { src: "/desktop---13--1--1-1.png", alt: "App showcase 3" },
    { src: "/marketplace--1--1-1.png", alt: "App showcase 4" },
    { src: "/workplace--2--1.png", alt: "App showcase 5" },
    { src: "/my-docs-1.png", alt: "App showcase 6" },
  ];

  // Reusable components for better maintainability
  const AppTypeCard: React.FC<{ appType: AppType; index: number }> = ({ appType, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.CARD_DELAY_STEP }}
      viewport={{ once: true }}
    >
      <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
        <CardContent className="p-0">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {appType.title}
          </h3>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            {appType.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );

  const AppShowcaseGrid: React.FC = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.4 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
    >
      {appShowcase.map((app, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
            <img
              src={app.src}
              alt={app.alt}
              className="w-full h-24 lg:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className={`w-full flex flex-col gap-16 lg:gap-20 py-16 lg:py-24 ${className}`}>
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="text-center px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-[1.1]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Types d&apos;applications
          </motion.h2>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - App Types */}
          <div className="space-y-6">
            {appTypes.map((appType, index) => (
              <AppTypeCard
                key={index}
                appType={appType}
                index={index}
              />
            ))}
          </div>

          {/* Right side - App Showcase Grid */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <AppShowcaseGrid />
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-3xl -z-10" />
      </motion.div>
    </section>
  );
};
