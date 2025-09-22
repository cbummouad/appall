import React from "react";
import { motion } from "framer-motion"; // Assuming Framer Motion for general section animations
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion"; // Assuming ShadCN Accordion

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

export const FAQSection: React.FC<FAQSectionProps> = ({ className = "" }) => {
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
      className={`w-full flex flex-col items-center py-16 lg:py-24 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50 ${className}`} // Light gradient background for the section
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

      {/* Main FAQ Container (the light gray box) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full max-w-[900px] mx-auto p-4 md:p-8 bg-gray-50/80 rounded-[20px] shadow-xl border border-gray-100" // Styled for the light gray box
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
              <AccordionItem value={item.id} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="flex justify-between items-center w-full py-4 text-lg lg:text-xl font-medium [font-family:'Public_Sans',Helvetica] text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {/* Question text with gradient */}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent [text-shadow:0px_2px_4px_rgba(0,0,0,0.05)]">
                    {item.question}
                  </span>
                  {/* Custom SVG icon for trigger (matching the image's arrow) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5} // Slightly thicker stroke for visibility
                    stroke="currentColor"
                    className="h-6 w-6 text-purple-600 group-hover:text-blue-500 transition-transform duration-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-base lg:text-lg text-gray-700 leading-relaxed pr-8">
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