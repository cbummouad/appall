import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DemoForm } from "../../../../components/DemoForm/DemoForm";

// TypeScript interfaces for better type safety
interface PricingPack {
  name: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  value: "starter" | "team" | "enterprise"; // Explicitly type the possible values
  isRecommended?: boolean; // Optional: to highlight a pack
}

interface PricingSectionProps {
  className?: string;
}

// Constants for better maintainability
const SECTION_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  CARD_DELAY_STEP: 0.2,
} as const;

export const PricingSection: React.FC<PricingSectionProps> = ({ className = "" }) => {
  const pricingPacks: PricingPack[] = [
    {
      name: "Starter pack",
      subtitle: "Parfait pour les équipes qui découvrent l'IA",
      features: [
        "5 utilisateurs",
        "Ready Apps incluses",
        "Crédit tokens mensuel",
        "Support standard"
      ],
      buttonText: "Réservez votre démo",
      value: "starter"
    },
    {
      name: "Team pack",
      subtitle: "L'essor pour les équipes productives",
      features: [
        "25 utilisateurs",
        "Apps illimitées",
        "1 Exclusive App",
        "Support prioritaire"
      ],
      buttonText: "Réservez votre démo",
      value: "team",
      isRecommended: true // Highlight this pack
    },
    {
      name: "Enterprise pack",
      subtitle: "Solutions personnalisées pour l'entreprise",
      features: [
        "Illimité + on-premise",
        "Personalized Apps",
        "SLA, SSO, IAM, audit",
        "Support 24/7"
      ],
      buttonText: "Réservez votre démo",
      value: "enterprise"
    }
  ];

  // Reusable components for better maintainability
  const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-3 py-1">
      {/* Enhanced bullet point with subtle animation */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.8 }}
        className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"
      ></motion.div>
      <span className="text-gray-700 text-sm lg:text-base font-medium">{text}</span>
    </div>
  );

  const PricingCard: React.FC<{ pack: PricingPack; index: number; onDemoClick: (packValue: PricingPack['value']) => void }> = ({ pack, index, onDemoClick }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.CARD_DELAY_STEP }}
      viewport={{ once: true }}
      className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 transition-all duration-300 ${
        pack.isRecommended
          ? "border-blue-500/50 scale-105 shadow-2xl hover:scale-105" // Recommended styling
          : "hover:shadow-2xl hover:-translate-y-2" // Default hover
      }`}
    >
      {/* Optional "Recommended" badge */}
      {pack.isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform -rotate-3">
          Recommandé
        </div>
      )}

      {/* Background decoration with more prominent hover effect */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/50 to-purple-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>

      <div className="relative z-10 flex flex-col h-full"> {/* Use flex to push button to bottom */}
        {/* Card Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
            {pack.name}
          </h3>
          <p className="text-gray-600 text-sm lg:text-base font-medium">
            {pack.subtitle}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-2 mb-8 flex-grow"> {/* flex-grow ensures features take available space */}
          {pack.features.map((feature, featureIndex) => (
            <FeatureItem key={featureIndex} text={feature} />
          ))}
        </div>

        {/* Button - pushed to bottom */}
        <div className="text-center mt-auto"> {/* mt-auto pushes it to the bottom */}
          <motion.button
            whileHover={{ scale: 1.02 }} // Slightly reduced scale for more natural feel
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 ${
              pack.isRecommended
                ? "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800" // Stronger gradient for recommended
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            }`}
            onClick={() => onDemoClick(pack.value)}
          >
            {pack.buttonText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState<PricingPack['value'] | undefined>(undefined); // Use the explicit type

  const openDemoForm = (packValue: PricingPack['value']) => {
    setSelectedPack(packValue);
    setIsDemoFormOpen(true);
  };

  const closeDemoForm = () => {
    setIsDemoFormOpen(false);
    setSelectedPack(undefined);
  };

  return (
    <section className={`w-full flex flex-col gap-16 lg:gap-20 py-16 lg:py-24 relative z-10 overflow-hidden ${className}`}> {/* Added overflow-hidden */}
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-50/50 via-transparent to-purple-50/50 opacity-40 animate-fade-in -z-20"></div>

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="text-center px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-[1.1] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nos packs
          </motion.h2>

          <motion.p
            className="text-lg lg:text-xl text-gray-700 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Choisissez le pack qui vous correspond
          </motion.p>
        </div>
      </motion.header>

      {/* Pricing Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"> {/* items-stretch for equal card height */}
          {pricingPacks.map((pack, index) => (
            <PricingCard
              key={pack.name}
              pack={pack}
              index={index}
              onDemoClick={openDemoForm}
            />
          ))}
        </div>

        {/* Removed the simple inset background decoration as it's now handled by the radial gradient on the section */}
      </motion.div>

      {/* Demo form modal */}
      <AnimatePresence>
        {isDemoFormOpen && (
          <DemoForm isOpen={isDemoFormOpen} onClose={closeDemoForm} defaultPack={selectedPack} />
        )}
      </AnimatePresence>
    </section>
  );
};

