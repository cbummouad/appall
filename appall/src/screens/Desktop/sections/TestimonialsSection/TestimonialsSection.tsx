import { ChevronDownIcon } from "lucide-react";
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

interface TestimonialsSectionProps {
  className?: string;
}

// Constants for better maintainability
const SECTION_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  ITEM_DELAY_STEP: 0.1,
} as const;

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className = "" }) => {
  const faqData: FAQItem[] = [
    {
      id: "item-1",
      question: "AppAll est-il hébergeable en interne (on-premise) ?",
      answer:
        "Oui. AppAll peut être déployé en on-premise ou sur un cloud privé, garantissant que vos données restent totalement sous votre contrôle.",
    },
    {
      id: "item-2",
      question:
        "Quelle est la différence entre AppAll et un simple chatbot ou application AI ?",
      answer:
        "AppAll est bien plus qu'un chatbot ou app. C'est un HubPlace complet qui centralise tout vos modèles IA, applications, documents, dashboards et workflows pour une expérience cohérente et sécurisée.",
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

  // Reusable FAQ Item Component with hover functionality
  const FAQItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      // Set a small delay before expanding
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(true);
      }, 300); // 300ms delay
    };

    const handleMouseLeave = () => {
      // Clear the timeout if mouse leaves before delay
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      // Small delay before collapsing
      setTimeout(() => {
        setIsHovered(false);
      }, 200); // 200ms delay
    };

    React.useEffect(() => {
      return () => {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
      };
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: index * SECTION_CONSTANTS.ITEM_DELAY_STEP }}
        viewport={{ once: true }}
      >
        <AccordionItem
          value={isHovered ? item.id : ""}
          className="border border-gray-200 rounded-2xl mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <AccordionTrigger
            className="flex justify-between items-center text-left hover:no-underline p-6 [&[data-state=open]>.chevron]:rotate-180 group [&[data-state=open]>.chevron]:text-blue-600"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex-1 pr-4">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {item.question}
              </h3>
            </div>
            <div className="chevron transition-transform duration-300">
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-blue-500 group-hover:text-blue-600 transition-all duration-300" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="w-full h-px bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 mb-4" />
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    );
  };

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
            FAQ
          </motion.h2>
        </div>
      </motion.header>

      {/* FAQ Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto px-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-200">
          <Accordion type="multiple" className="w-full">
            {faqData.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </Accordion>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-blue-25/20 to-blue-50/40 rounded-3xl -z-10" />
      </motion.div>
    </section>
  );
};
