import React from "react";
import { motion } from "framer-motion";

// TypeScript interfaces for better type safety
interface PricingPack {
  name: string;
  subtitle: string;
  features: string[];
  buttonText: string;
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
      buttonText: "Réservez votre démo"
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
      buttonText: "Réservez votre démo"
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
      buttonText: "Réservez votre démo"
    }
  ];

  // Reusable components for better maintainability
  const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-3 py-1">
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"></div>
      <span className="text-gray-700 text-sm lg:text-base font-medium">{text}</span>
    </div>
  );

  const PricingCard: React.FC<{ pack: PricingPack; index: number }> = ({ pack, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.CARD_DELAY_STEP }}
      viewport={{ once: true }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
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
        <div className="space-y-2 mb-8">
          {pack.features.map((feature, featureIndex) => (
            <FeatureItem key={featureIndex} text={feature} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {pack.buttonText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={`w-full flex flex-col gap-16 lg:gap-20 py-16 lg:py-24 relative z-10 ${className}`}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPacks.map((pack, index) => (
            <PricingCard
              key={pack.name}
              pack={pack}
              index={index}
            />
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-3xl -z-10" />
      </motion.div>
    </section>
  );
};
