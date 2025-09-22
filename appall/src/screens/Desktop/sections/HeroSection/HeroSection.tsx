import React, { useState, useEffect, useCallback } from "react"; // Removed useMemo as it's not being used directly here
import { motion, AnimatePresence } from "framer-motion";

// TypeScript interfaces for better type safety
interface Screenshot {
  id: string;
  alt: string;
  src: string;
  description?: string;
}

interface HeroSectionProps {
  className?: string;
}

// Constants for better maintainability
const HERO_CONSTANTS = {
  ANIMATION_DURATION: 0.8,
  SLIDE_INTERVAL: 4000,
  TRANSITION_DELAY: 0.3,
} as const;

// Screenshots data without fixed styles, as they will be dynamic
const screenshots: Screenshot[] = [
  {
    id: "desktop",
    alt: "Desktop",
    src: "/desktop---13--1--1-1.png",
    description: "Vue d'ensemble du bureau"
  },
  {
    id: "workplace-1",
    alt: "Workplace",
    src: "/workplace--1--1.png",
    description: "Espace de travail collaboratif"
  },
  {
    id: "my-docs",
    alt: "My docs",
    src: "/my-docs-1.png",
    description: "Interface de gestion des documents"
  },
  {
    id: "workplace-2",
    alt: "Workplace",
    src: "/workplace-1-1.png",
    description: "Environnement de travail moderne"
  },
  {
    id: "marketplace",
    alt: "Marketplace",
    src: "/marketplace--1--1-1.png",
    description: "Place de marché intégrée"
  },
];

// Custom hook for slider functionality
const useSlider = (totalSlides: number, interval: number = HERO_CONSTANTS.SLIDE_INTERVAL) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause autoplay on manual interaction
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval, isAutoPlaying]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    setIsAutoPlaying,
    isAutoPlaying
  };
};

// Slider navigation component
const SliderDots: React.FC<{
  total: number;
  current: number;
  onDotClick: (index: number) => void;
  setIsAutoPlaying: (value: boolean) => void;
}> = ({ total, current, onDotClick, setIsAutoPlaying }) => {
  return (
    <div className="flex justify-center space-x-2 mt-6">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => {
            onDotClick(index);
            setIsAutoPlaying(false); // Pause autoplay on manual dot click
          }}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current
              ? "bg-blue-600 scale-110"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`Aller à l'image ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Main slider component
const ScreenshotSlider: React.FC = () => {
  const { currentSlide, goToSlide, setIsAutoPlaying, nextSlide, prevSlide } = useSlider(screenshots.length);

  const getScreenshotStyles = useCallback((index: number) => {
    const total = screenshots.length;
    const centerIndex = currentSlide;
    let distance = index - centerIndex;

    // Normalize distance to handle wrapping around the slider (e.g., from last to first)
    if (distance > total / 2) {
      distance -= total;
    } else if (distance < -total / 2) {
      distance += total;
    }

    const absDistance = Math.abs(distance);

    // Default values
    let x: string | number = 0; // x can be a string (percentage) or number (px)
    let y: string | number = 0; // y can be a string (percentage) or number (px)
    let rotate = 0; // Framer motion rotate expects a number (degrees)
    let scale = 1;
    let opacity = 1;
    let zIndex = total; // zIndex expects a number

    // Specific adjustments for the visual style in the image
    if (distance === 0) { // Center image
      x = 0;
      y = 0;
      rotate = 0;
      scale = 1;
      opacity = 1;
      zIndex = total;
    } else if (distance === -1) { // Immediate left
      x = "-10%";
      y = "5%";
      rotate = -8;
      scale = 0.9;
      opacity = 0.9;
      zIndex = total - 1;
    } else if (distance === 1) { // Immediate right
      x = "10%";
      y = "5%";
      rotate = 8;
      scale = 0.9;
      opacity = 0.9;
      zIndex = total - 1;
    } else if (distance <= -2) { // Further left
      x = "-25%";
      y = "10%";
      rotate = -15;
      scale = 0.8;
      opacity = 0.8;
      zIndex = total - 2;
    } else if (distance >= 2) { // Further right
      x = "25%";
      y = "10%";
      rotate = 15;
      scale = 0.8;
      opacity = 0.8;
      zIndex = total - 2;
    }

    // Ensure opacity doesn't go below 0
    opacity = Math.max(0, opacity);

    return { x, y, rotate, scale, opacity, zIndex };
  }, [currentSlide, screenshots.length]);


  return (
    <div className="relative w-full h-[697px]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false}>
          {screenshots.map((screenshot, index) => {
            const styles = getScreenshotStyles(index);

            // Only render completely invisible slides for AnimatePresence management
            if (styles.opacity === 0 && index !== currentSlide) {
                return null;
            }

            return (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, scale: 0.5, y: "50%" }} // Initial state when mounted first time
                animate={{
                  x: styles.x,
                  y: styles.y,
                  rotate: styles.rotate,
                  scale: styles.scale,
                  opacity: styles.opacity,
                  zIndex: styles.zIndex,
                }}
                exit={{ opacity: 0, scale: 0.5, y: "50%" }} // Exit animation
                transition={{
                  duration: HERO_CONSTANTS.ANIMATION_DURATION,
                  ease: "easeInOut",
                }}
                className="absolute w-[80%] h-full flex items-center justify-center pointer-events-none" // Adjust width as needed
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="max-w-full max-h-full object-contain rounded-[20px] shadow-lg"
                  loading="lazy"
                />
                {/* Floating description for the current (center) image */}
                {index === currentSlide && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm"
                  >
                    <p className="text-sm font-medium">{screenshot.description}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false); // Pause autoplay
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
        aria-label="Previous slide"
      >
        {/* Left Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false); // Pause autoplay
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
        aria-label="Next slide"
      >
        {/* Right Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <SliderDots
        total={screenshots.length}
        current={currentSlide}
        onDotClick={goToSlide}
        setIsAutoPlaying={setIsAutoPlaying}
      />
    </div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section
      id="hero"
      className={`w-full flex flex-col gap-16 lg:gap-20 py-12 lg:py-16 pt-24 lg:pt-32 ${className}`}
    >
      {/* Header Section with improved spacing */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: HERO_CONSTANTS.ANIMATION_DURATION }}
        className="flex flex-col items-center gap-6 lg:gap-8 px-4 lg:px-6"
      >
        <motion.h1
          className="h-auto max-w-[950px] [text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-4xl lg:text-6xl xl:text-7xl tracking-[0] leading-[1.1] text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: HERO_CONSTANTS.ANIMATION_DURATION, delay: 0.2 }}
        >
          Découvrez AppAll en action
        </motion.h1>

        <motion.div
          className="max-w-[1300px] px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: HERO_CONSTANTS.ANIMATION_DURATION, delay: 0.4 }}
        >
          <p className="text-lg lg:text-xl xl:text-2xl [font-family:'Public_Sans',Helvetica] font-normal text-gray-700 text-center tracking-[0] leading-[1.6] max-w-4xl mx-auto">
            Avec AppAll, vos modèles, assistants et documents prennent vie dans
            une plateforme unique. Voici quelques écrans qui illustrent comment
            nous transformons l&apos;IA en un véritable compagnon de travail et de
            créativité, simple à utiliser et entièrement personnalisable.
          </p>
        </motion.div>
      </motion.div>

      {/* Slider Section with enhanced styling */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: HERO_CONSTANTS.ANIMATION_DURATION,
          delay: HERO_CONSTANTS.TRANSITION_DELAY,
          ease: "easeOut"
        }}
        className="w-full max-w-7xl mx-auto px-4 lg:px-6"
      >
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-indigo-50/50 rounded-[35px] blur-xl opacity-60" />

          <ScreenshotSlider />

          {/* Additional visual elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000" />
          <div className="absolute top-1/2 -left-4 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-bounce delay-500" />
        </div>
      </motion.div>
    </section>
  );
};