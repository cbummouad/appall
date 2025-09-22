import React from "react";
import { motion } from "framer-motion";

// TypeScript interfaces for better type safety
interface ActionItem {
  title: string;
  description: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    textAlign: "left" | "right";
  };
}

interface FAQSectionProps { // Renamed from FAQSectionProps
  className?: string;
}

// Constants for better maintainability
const SECTION_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  ITEM_DELAY_STEP: 0.1, // Slightly reduced delay for snappier animation
} as const;

export const FAQSection: React.FC<FAQSectionProps> = ({ className = "" }) => { // Renamed component
  const actionItems: ActionItem[] = [
    {
      title: "Apprendre",
      description: "Assimiler doucement les connaissances et s'ouvrir du savoir",
      position: { top: "18%", left: "15%", textAlign: "left" }, // Adjusted position for visual match
    },
    {
      title: "Analyser",
      description: "Réfléchir profondément, prendre du recul pour mieux comprendre",
      position: { top: "18%", right: "15%", textAlign: "right" }, // Adjusted position
    },
    {
      title: "Penser",
      description: "Examiner en détail, décomposer pour clarifier et structurer",
      position: { bottom: "18%", left: "15%", textAlign: "left" }, // Adjusted position
    },
    {
      title: "Cultiver",
      description: "Nourrir et faire mûrir les idées avec patience et soin",
      position: { bottom: "18%", right: "15%", textAlign: "right" }, // Adjusted position
    },
  ];

  // Reusable Action Item Component - now with dynamic positioning
  const ActionItemCard: React.FC<{ item: ActionItem; index: number }> = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.ITEM_DELAY_STEP }}
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
      className="absolute w-1/4" // Occupy less width, positioned absolutely
      style={{
        top: item.position.top,
        bottom: item.position.bottom,
        left: item.position.left,
        right: item.position.right,
        textAlign: item.position.textAlign, // Apply text alignment
      }}
    >
      <motion.h3
        className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-2xl lg:text-3xl tracking-[0] leading-[1.1] mb-2" // Reduced font size, margin
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.ITEM_DELAY_STEP + 0.1 }} // Adjusted delay
        viewport={{ once: true, amount: 0.5 }}
      >
        {item.title}
      </motion.h3>
      <motion.p
        className={`[font-family:'Poppins',Helvetica] font-normal text-gray-700 text-sm lg:text-base tracking-[0] leading-relaxed ${
          item.position.textAlign === 'left' ? 'pr-4' : 'pl-4' // Add padding for better spacing around central logo
        }`}
        initial={{ opacity: 0, x: item.position.textAlign === 'left' ? -20 : 20 }} // Animate from left/right
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.ITEM_DELAY_STEP + 0.2 }} // Adjusted delay
        viewport={{ once: true, amount: 0.5 }}
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
        className="text-center px-4 mb-12 lg:mb-16" // Adjusted margin-bottom
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-[1.1] mb-4" // Adjusted margin-bottom
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Plus qu&apos;une IA, un compagnon pour la sagesse
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-gray-600 italic font-medium" // Slightly reduced font size
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.4 }}
            viewport={{ once: true }}
          >
            AppAll accompagne chaque collaborateur pour :
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content Area - acting as the light-blue rounded box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        // The container needs to be relative for absolutely positioned children
        className="relative w-full max-w-6xl mx-auto h-[600px] bg-blue-50/70 rounded-[25px] shadow-xl p-6 lg:p-8 flex items-center justify-center" // Fixed height for circular layout, light blue bg
      >
        {/* Central Logo and "Créer" Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center justify-center z-10" // Ensure logo is above other elements
        >
          <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] flex items-center justify-center mb-4"> {/* Adjusted logo size */}
            <img
              src="/whatsapp-video-2025-08-27-at-10-37-07-1.png"
              alt="AppAll Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <motion.h3
            className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(0deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-2xl lg:text-3xl tracking-[0] leading-[1.1] mb-2" // Reduced font size, margin
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Créer
          </motion.h3>
          <motion.p
            className="[font-family:'Poppins',Helvetica] font-normal text-gray-700 text-sm lg:text-base text-center tracking-[0] leading-relaxed max-w-xs" // Reduced font size, max-width
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Exprimer, concrétiser et matérialiser les idées
          </motion.p>
        </motion.div>

        {/* Action Items - Absolutely positioned around the center */}
        {actionItems.map((item, index) => (
          <ActionItemCard
            key={item.title} // Using title as key for uniqueness
            item={item}
            index={index}
          />
        ))}
      </motion.div>

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: actionItems.length * SECTION_CONSTANTS.ITEM_DELAY_STEP + 0.5 }} // Delay after items
        viewport={{ once: true }}
        className="text-center mt-12 lg:mt-16 px-4" // Adjusted margin-top
      >
        <p className="text-lg lg:text-xl font-semibold text-gray-800 leading-relaxed">
          Chaque interaction devient un pas vers la maturité, l&apos;esprit critique et la sérénité.
        </p>
      </motion.div>
    </section>
  );
};