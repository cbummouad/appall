import React from "react";
import { Button } from "../../../../components/ui/button";

export const ResourcesSection = (): JSX.Element => {
  const partnerLogos = [
    {
      src: "/image-10.png",
      alt: "OpenAI",
      width: 137,
      height: 37,
    },
    {
      src: "/image-8.png",
      alt: "Deepseek",
      width: 170,
      height: 37,
    },
    {
      src: "/image-7.png",
      alt: "Gemini",
      width: 100,
      height: 37,
    },
    {
      src: "/image-9.png",
      alt: "Claude",
      width: 174,
      height: 37,
    },
    {
      src: "/image-12.png",
      alt: "Mistral AI",
      width: 170,
      height: 31,
    },
    {
      src: "/image-11.png",
      alt: "Anthropic",
      width: 226,
      height: 27,
    },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background with gradient curves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100"></div>
        
        {/* Curved gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full transform -translate-x-24"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-blue-300/30 to-transparent rounded-full transform translate-y-24"></div>
        </div>

        {/* Flowing wave patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1200 320" preserveAspectRatio="none">
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,149.3L1200,139L1200,320L0,320Z"
            fill="url(#wave-gradient)"
            fillOpacity="0.3"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"> {/* Reduced gap */}
          {/* Left column: Text and button */}
          <div className="flex-1 max-w-lg text-left">
            <h1 className="text-6xl lg:text-9xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                AppAll
              </span>
            </h1>
            <h2 className="text-6xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              One App to Run All AI
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-normal leading-relaxed">
              AppAll votre HubPlace où l&apos;IA devient un compagnon de conscience.
              AppAll n&apos;est pas seulement une application, c&apos;est un compagnon
              pour apprendre, penser, analyser, cultiver et créer. Il centralise vos outils IA, documents,
              dashboards et workflows pour plus de souveraineté, clarté et adaptabilité.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg">
              Réservez votre démo
            </Button>
          </div>

          {/* Right column: Atomic logo - Made bigger and closer */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg"> {/* Increased max width */}
              <img
                src="/logo-1.png"
                alt="AppAll Logo"
                className="w-full h-auto object-contain"
                style={{ maxHeight: 500 }} /* Increased max height */
              />
            </div>
          </div>
        </div>

        {/* Partner logos horizontal scroll */}
        <div className="mt-16 pt-8 border-t border-blue-200/50">
          <div className="overflow-x-auto no-scrollbar">
            <div className="inline-flex items-center justify-center space-x-12 min-w-max py-4">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};