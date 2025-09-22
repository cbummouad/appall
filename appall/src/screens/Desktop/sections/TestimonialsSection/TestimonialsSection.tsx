import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

// TypeScript interfaces for better type safety
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

// Constants for better maintainability
const SECTION_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  ITEM_DELAY_STEP: 0.1,
} as const;

export const TestimonialsSection: React.FC<FAQSectionProps> = ({ className = "" }) => {
  const faqData: FAQItem[] = [
    {
      id: "item-1",
      question: "AppAll est-il hébergeable en interne (on-premise) ?",
      answer:
        "Oui, AppAll peut être déployé en on-premise ou sur un cloud privé, garantissant que vos données restent totalement sous votre contrôle.",
    },
    {
      id: "item-2",
      question:
        "Quelle est la différence entre AppAll et un simple chatbot ou application AI ?",
      answer:
        "AppAll est bien plus qu'un chatbot ou app. C'est un HubPlace complet qui centralise tous vos modèles IA, applications, documents, dashboards et workflows pour une expérience cohérente et sécurisée.",
    },
    {
      id: "item-3",
      question: "Puis-je personnaliser les applications et l'interface ?",
      answer:
        "Absolument. Vous pouvez choisir vos applications, vos modèles IA, et même personnaliser l'apparence pour l'adapter à vos préférences et à vos métiers.",
    },
    {
      id: "item-4",
      question: "Comment puis-je commencer avec AppAll ?",
      answer:
        "Il suffit de réserver une démo. Notre équipe organise un point avec vous pour comprendre vos besoins, vous présenter la solution en détail et ensuite déployer la plateforme de manière personnalisée selon vos attentes.",
    },
    {
      id: "item-5",
      question: "Quelles garanties de sécurité offre AppAll ?",
      answer:
        "AppAll respecte les standards les plus élevés : chiffrement des données, conformité RGPD, contrôle d'accès (RBAC), audit et observabilité complète de vos usages et coûts",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
      viewport={{ once: true, amount: 0.3 }}
      // Light background for the entire section (subtle, like the image)
      className={`w-full flex flex-col items-center py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50 ${className}`}
    >
      {/* FAQ Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12 lg:mb-16"
      >
        <h2 className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-5xl tracking-[0] leading-[normal] whitespace-nowrap">
          FAQ
        </h2>
      </motion.div>

      {/* Main FAQ Container (the subtle white/light-grey box) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full max-w-[900px] mx-auto p-4 md:p-8 bg-white/70 rounded-[20px] shadow-xl border border-gray-100" // Subtle white/light-grey background
      >
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * SECTION_CONSTANTS.ITEM_DELAY_STEP }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AccordionItem
                value={item.id}
                className="relative overflow-hidden last:border-b-0" // Removed direct border-b, will use internal div
              >
                <AccordionTrigger className="group relative flex justify-between items-center w-full py-5 text-lg lg:text-xl [font-family:'Public_Sans',Helvetica] text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {/* Question text with gradient and subtle shadow */}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent [text-shadow:0px_1px_2px_rgba(0,0,0,0.08)] font-semibold">
                    {item.question}
                  </span>
                  {/* Custom SVG icon for trigger with gradient stroke */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    // Apply gradient directly as SVG stroke if possible, or use CSS gradient with SVG mask if not.
                    // For simplicity with Tailwind, using a solid color matching the gradient for now,
                    // as direct gradient stroke is complex without custom SVG or plugins.
                    // Will mimic gradient with class if a single color is derived from it.
                    stroke="url(#gradientArrow)" // Using SVG internal gradient definition
                    className="h-6 w-6 transition-transform duration-200"
                  >
                    <defs>
                        {/* Define a linear gradient within the SVG for the stroke */}
                        <linearGradient id="gradientArrow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#800080" /> {/* Purple */}
                            <stop offset="100%" stopColor="#009DFF" /> {/* Blue */}
                        </linearGradient>
                    </defs>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                  {/* Gradient Divider Line (Pseudo-element or div) */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-300 via-blue-300 to-transparent"></div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-5 text-base lg:text-lg text-gray-700 leading-relaxed pr-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
};