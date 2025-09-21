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
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left column: Text and button */}
          <div className="flex-1 max-w-lg text-left">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent mb-4">
              One App to Run All AI
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal leading-relaxed">
              AppAll votre HubPlace où l&apos;IA devient un compagnon de conscience.
              AppAll n&apos;est pas seulement une application, c&apos;est un compagnon
              pour apprendre, penser, analyser, cultiver et créer. Il centralise vos outils IA, documents,
              dashboards et workflows pour plus de souveraineté, clarté et adaptabilité.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300">
              Réservez votre démo
            </Button>
          </div>

          {/* Right column: Large logo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/logo-1.png"
              alt="AppAll Logo"
              className="max-w-full h-auto object-contain"
              style={{ maxHeight: 400 }}
            />
          </div>
        </div>

        {/* Partner logos horizontal scroll */}
        <div className="mt-12 overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center space-x-10 min-w-max">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
