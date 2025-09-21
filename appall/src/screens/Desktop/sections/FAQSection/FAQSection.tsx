import React from "react";
import { motion } from "framer-motion";

// TypeScript interfaces for better type safety
interface ActionItem {
  title: string;
  description: string;
  position: string;
}

interface FAQSectionProps {
  className?: string;
}

// Constants for better maintainability
const SECTION_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  ITEM_DELAY_STEP: 0.2,
} as const;

export const FAQSection: React.FC<FAQSectionProps> = ({ className = "" }) => {
  const actionItems: ActionItem[] = [
    {
      title: "Apprendre",
      description: "Assimiler durablement les connaissances et fournir un savoir",
      position: "top-left",
    },
    {
      title: "Analyser",
      description: "Réfléchir profondément du réel pour mieux comprendre",
      position: "top-right",
    },
    {
      title: "Penser",
      description: "Examiner en détail, décomposer pour clarifier et structurer",
      position: "bottom-left",
    },
    {
      title: "Cultiver",
      description: "Nourrir et faire mûrir les idées avec patience et soin",
      position: "bottom-right",
    },
  ];

  // Reusable Action Item Component
  const ActionItemCard: React.FC<{ item: ActionItem; index: number }> = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.ITEM_DELAY_STEP }}
      viewport={{ once: true }}
      className={`flex flex-col items-start ${
        item.position === 'top-left' ? 'justify-start' :
        item.position === 'top-right' ? 'justify-start' :
        item.position === 'bottom-left' ? 'justify-end' :
        'justify-end'
      }`}
    >
      <motion.h3
        className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-3xl lg:text-4xl tracking-[0] leading-[1.1] mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.ITEM_DELAY_STEP + 0.2 }}
        viewport={{ once: true }}
      >
        {item.title}
      </motion.h3>
      <motion.p
        className="[font-family:'Poppins',Helvetica] font-normal text-gray-700 text-base lg:text-lg tracking-[0] leading-relaxed"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.ITEM_DELAY_STEP + 0.4 }}
        viewport={{ once: true }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  );

  return (
    <section className={`w-full flex flex-col items-center py-16 lg:py-24 ${className}`}>
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="text-center px-4 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-[1.1] mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Plus qu&apos;une IA, un compagnon pour la sagesse
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl text-gray-600 italic font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.4 }}
            viewport={{ once: true }}
          >
            AppAll accompagne chaque collaborateur pour :
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content with Circular Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
          {/* Four Action Items in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {actionItems.map((item, index) => (
              <ActionItemCard
                key={item.position}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* Central Logo/Graphic Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-16"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center">
              {/* Central Logo Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/whatsapp-video-2025-08-27-at-10-37-07-1.png"
                  alt="AppAll Logo"
                  className="w-full h-full object-contain"
                />

                {/* Orbital animation rings */}
                <div className="absolute inset-0 border-2 border-blue-300/30 rounded-full animate-spin" style={{animationDuration: '20s'}} />
                <div className="absolute inset-4 border border-purple-300/20 rounded-full animate-ping" style={{animationDuration: '15s'}} />
                <div className="absolute inset-8 border border-blue-200/40 rounded-full animate-pulse" style={{animationDuration: '10s'}} />
              </div>
            </div>
          </motion.div>

          {/* Bottom Créer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(0deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-3xl lg:text-4xl tracking-[0] leading-[1.1] mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 1.0 }}
              viewport={{ once: true }}
            >
              Créer
            </motion.h3>
            <motion.p
              className="[font-family:'Poppins',Helvetica] font-normal text-gray-700 text-base lg:text-lg text-center tracking-[0] leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Exprimer, concrétiser et matérialiser les idées
            </motion.p>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 1.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg lg:text-xl font-semibold text-gray-800 leading-relaxed">
              Chaque interaction devient un pas vers la maturité, l&apos;esprit critique et la sérénité.
            </p>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 rounded-3xl -z-10" />
        </div>
      </motion.div>
    </section>
  );
};
