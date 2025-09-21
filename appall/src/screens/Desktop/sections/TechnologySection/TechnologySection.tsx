import React from "react";
import { motion } from "framer-motion";

// TypeScript interfaces for better type safety
interface TechnologyFeature {
  icon: string;
  text: string;
}

interface TechnologySectionProps {
  className?: string;
}

// Constants for better maintainability
const SECTION_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  FEATURE_DELAY_STEP: 0.1,
} as const;

export const TechnologySection: React.FC<TechnologySectionProps> = ({ className = "" }) => {
  const features: TechnologyFeature[] = [
    {
      icon: "/group-39941.png",
      text: "Déploiement on-premise ou cloud privé",
    },
    {
      icon: "/group-39942.png",
      text: "Données confinées et chiffrement",
    },
    {
      icon: "/group-39943.png",
      text: "Conformité RGPD et politiques de rétention",
    },
    {
      icon: "/group-39944.png",
      text: "Observabilité & contrôle des coûts (KPIs, token, SLA)",
    },
  ];

  // Reusable components for better maintainability
  const FeatureItem: React.FC<{ feature: TechnologyFeature; index: number }> = ({ feature, index }) => (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-3 group-hover:scale-125 transition-transform duration-300"></div>
      <div className="flex-1 pb-4">
        <p className="text-gray-800 text-base lg:text-lg font-medium leading-relaxed">
          {feature.text}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="technologies" className={`w-full flex flex-col gap-16 lg:gap-20 py-16 lg:py-24 ${className}`}>
      {/* Enhanced header with better styling */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="flex justify-center px-4"
      >
        <div className="text-center max-w-4xl">
          <motion.h2
            className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-[1.1]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sécurité & Souveraineté
          </motion.h2>
        </div>
      </motion.header>

      {/* Main content area matching the design */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          {/* Left side - Main image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
              {/* Main image container */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  alt="Data protection and server security"
                  src="/7438712-32733-1.png"
                />
                {/* Blue overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-blue-400/5" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-400/15 to-blue-400/15 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          {/* Right side - Features list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Features container */}
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                    Fonctionnalités avancées
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>

                <div className="space-y-1">
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      feature={feature}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Additional decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 w-20 h-20 opacity-30"
            >
              <img
                className="w-full h-full object-contain"
                alt="Decorative element"
                src="/frame-239199-3.svg"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white/50 to-purple-50/40 rounded-3xl -z-10" />
      </motion.div>
    </section>
  );
};
