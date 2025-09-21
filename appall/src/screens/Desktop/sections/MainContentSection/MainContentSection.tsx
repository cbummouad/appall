import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

// TypeScript interfaces for better type safety
interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  blurSize: string;
  blurDimensions: string;
  blurRadius: string;
  marginTop: string;
  image?: {
    src: string;
    alt: string;
    className: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    className: string;
  }>;
  position: string;
  height?: string;
}

interface MainContentSectionProps {
  className?: string;
}

// Constants for better maintainability
const SECTION_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  CARD_DELAY_STEP: 0.1,
  GRID_COLUMNS: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  GRID_GAP: "gap-6 lg:gap-8",
} as const;

const cardData = [
  {
    id: "marketplace",
    title: "MarketPlace",
    description:
      "Découvrez, installez et gérez des applications et agents IA. Templates prêts à l'emploi et agents spécialisés pour accélérer la productivité.",
    bgColor: "bg-[#004ac3]",
    blurSize: "blur-[56.55px]",
    blurDimensions: "w-64 h-[190px]",
    blurRadius: "rounded-[128px/95px]",
    marginTop: "mt-3.5",
    image: {
      src: "/marketplace--1--1-1.png",
      alt: "Marketplace",
      className: "",
    },
    position: "top-[162px] left-px",
  },
  {
    id: "workplace",
    title: "WorkPlace",
    description:
      "Collaborez sur vos projets, gérez documents et tâches, et utilisez vos applications dans un espace centralisé.",
    bgColor: "bg-[#e0cef3]",
    blurSize: "blur-[34.6px]",
    blurDimensions: "w-[296px] h-[220px]",
    blurRadius: "rounded-[148px/110px]",
    marginTop: "-top-px",
    images: [
      {
        src: "/workplace-1-1.png",
        alt: "Workplace",
        className: "",
      },
      {
        src: "/workplace--2--1.png",
        alt: "Workplace",
        className: "",
      },
    ],
    position: "top-[209px] left-[428px]",
  },
  {
    id: "kplace",
    title: "K-Place (Knowledge)",
    description:
      "Stockez et accédez à vos documents, rapports et données. Alimentez vos IA en contexte et mémoire pour des interactions pertinentes.",
    bgColor: "bg-[#a4d3ff]",
    blurSize: "blur-[34.6px]",
    blurDimensions: "w-[296px] h-[220px]",
    blurRadius: "rounded-[148px/110px]",
    marginTop: "-top-px",
    image: {
      src: "/desktop---13--1--1-1.png",
      alt: "Desktop",
      className: "",
    },
    position: "top-[162px] left-[840px]",
    height: "h-[396px]",
  },
  {
    id: "dashplace",
    title: "DashPlace",
    description:
      "Tableaux de bord pour analyser KPIs, performances, usage des apps IA et ROI. Alertes et insights en temps réel.",
    bgColor: "bg-[#fbffb7]",
    blurSize: "blur-[34.6px]",
    blurDimensions: "w-[260px] h-[194px]",
    blurRadius: "rounded-[130px/97px]",
    marginTop: "mt-3",
    position: "top-[594px] left-px",
  },
  {
    id: "runplace",
    title: "RunPlace",
    description:
      "Exécutez vos IA dans des interfaces dédiées : chat, formulaires, UI, analytics, pipelines.",
    bgColor: "bg-[#c2f0d9]",
    blurSize: "blur-[34.6px]",
    blurDimensions: "w-[266px] h-[198px]",
    blurRadius: "rounded-[133px/99px]",
    marginTop: "mt-2.5",
    position: "top-[595px] left-[840px]",
  },
];

// Reusable components for better maintainability
const CardBackground: React.FC<{ cardData: FeatureCardData }> = ({ cardData }) => (
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[280px] h-[200px] flex justify-center bg-[#0f0c1724] rounded-2xl border-[0.39px] border-solid border-[#014ec7] backdrop-blur-[9.81px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9.81px)_brightness(100%)]">
    <div
      className={`absolute ${cardData.marginTop} left-1/2 transform -translate-x-1/2 ${cardData.blurDimensions} ${cardData.bgColor} ${cardData.blurRadius} ${cardData.blurSize} opacity-[0.58]`}
    />
  </div>
);

const CardContentText: React.FC<{ cardData: FeatureCardData }> = ({ cardData }) => (
  <>
    <div className="absolute bottom-[120px] left-4 [font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[1.2] z-10">
      {cardData.title}
    </div>
    <div className="absolute bottom-[20px] left-4 right-4 h-[90px] flex z-10">
      <div className="w-full [font-family:'Poppins',Helvetica] font-normal text-[#5a5862] text-sm tracking-[0] leading-[1.4] pr-2">
        {cardData.description}
      </div>
    </div>
  </>
);

// Demo button component matching the design
const DemoButton: React.FC = () => (
  <motion.button
    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 z-20"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.4 }}
  >
    <span className="text-sm">Réservez votre démo</span>
  </motion.button>
);

// Centered demo button component
const CenteredDemoButton: React.FC = () => (
  <motion.div
    className="flex justify-center mt-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <motion.button
      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-base">Réservez votre démo</span>
    </motion.button>
  </motion.div>
);

const CardImages: React.FC<{ cardData: FeatureCardData }> = ({ cardData }) => (
  <div className="absolute top-4 left-4 right-4 h-[140px] overflow-hidden rounded-lg">
    {/* Single image */}
    {cardData.image && (
      <img
        className="w-full h-full object-cover object-center rounded-lg"
        alt={cardData.image.alt}
        src={cardData.image.src}
      />
    )}

    {/* Multiple images */}
    {cardData.images && (
      <div className="relative w-full h-full">
        {cardData.images.map((image, index) => (
          <img
            key={index}
            className={`absolute rounded-lg object-cover ${
              index === 0 
                ? "w-full h-full inset-0" 
                : "w-3/5 h-3/5 bottom-2 right-2 border-2 border-white shadow-lg"
            }`}
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>
    )}
  </div>
);

const FeatureCard: React.FC<{ cardData: FeatureCardData; delay: number }> = ({ cardData, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay }}
    viewport={{ once: true }}
    className="w-full max-w-[280px] mx-auto"
  >
    <Card className="w-full h-[380px] relative group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardContent className="p-0 h-full relative overflow-hidden">
        {/* Card background with blur effect */}
        <CardBackground cardData={cardData} />

        {/* Images - now properly sized and positioned */}
        <CardImages cardData={cardData} />

        {/* Card content text */}
        <CardContentText cardData={cardData} />

        {/* Subtle hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
      </CardContent>
    </Card>
  </motion.div>
);

export const MainContentSection: React.FC<MainContentSectionProps> = ({ className = "" }) => {
  return (
    <section id="about" className={`w-full relative py-16 lg:py-24 ${className}`}>
      {/* Enhanced header with better styling */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION }}
        viewport={{ once: true }}
        className="flex justify-center mb-16 lg:mb-20"
      >
        <div className="relative text-center">
          <motion.h1
            className="[text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-[1.1]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Le HubPlace en espaces
          </motion.h1>
          <motion.span
            className="absolute -top-2 -right-4 lg:-top-4 lg:-right-8 bg-[linear-gradient(270deg,rgba(42,105,213,1)_0%,rgba(52,94,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Prosto_One',Helvetica] font-normal text-transparent text-3xl lg:text-5xl xl:text-6xl tracking-[-0.96px] leading-[84px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: SECTION_CONSTANTS.ANIMATION_DURATION, delay: 0.4 }}
            viewport={{ once: true }}
          >
            5
          </motion.span>
        </div>
      </motion.header>

      {/* Grid layout matching the design - 3 cards top, 2 cards bottom */}
      <div className="relative w-full max-w-6xl mx-auto px-4 lg:px-6">
        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {cardData.slice(0, 3).map((card, index) => (
            <FeatureCard
              key={card.id}
              cardData={card}
              delay={index * SECTION_CONSTANTS.CARD_DELAY_STEP}
            />
          ))}
        </div>

        {/* Bottom row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {cardData.slice(3).map((card, index) => (
            <FeatureCard
              key={card.id}
              cardData={card}
              delay={(index + 3) * SECTION_CONSTANTS.CARD_DELAY_STEP}
            />
          ))}
        </div>

        {/* Centered demo button between bottom cards */}
        <CenteredDemoButton />

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 rounded-3xl -z-10" />
      </div>
    </section>
  );
};