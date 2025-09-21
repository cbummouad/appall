import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface AboutUsSectionProps {
  onDemoClick: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onDemoClick }) => {
  const packs = [
    {
      title: "Starter pack",
      description: "Parfait pour les équipes qui découvrent l'IA",
      features: [
        "5 utilisateurs",
        "Ready Apps incluses",
        "Crédit tokens mensuel",
        "Support standard",
      ],
      iconSrc: "/vector-2.svg",
    },
    {
      title: "Team pack",
      description: "L'essentiel pour les équipes productives",
      features: [
        "25 utilisateurs",
        "Apps ill",
        "1 Exclusive App",
        "Support prioritaire",
      ],
      iconSrc: "/vector.svg",
    },
    {
      title: "Enterprise pack",
      description: "Solutions personnalisées pour l'entreprise",
      features: [
        "Illimité + on-premise",
        "Personalized Apps",
        "SLA, SSO, IAM, audit",
        "Support 24/7",
      ],
      iconSrc: "/vector.svg",
    },
  ];

  return (
    <section id="pricing" className="w-full relative py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-[19px] mb-[75px]"
      >
        <h2 className="h-14 [text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-5xl tracking-[0] leading-[normal] whitespace-nowrap">
          Nos packs
        </h2>

        <p className="h-[35px] [font-family:'Public_Sans',Helvetica] font-normal text-black text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Choisissez le pack qui vous correspond
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[35px] max-w-[1260px] mx-auto">
        {packs.map((pack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="relative w-full max-w-[402px] h-[427px] bg-[#d0d9e32e] rounded-[13.4px] border-[none] backdrop-blur-[28.36px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.36px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-[13.4px] before:[background:linear-gradient(39deg,rgba(52,66,102,1)_0%,rgba(224,206,243,1)_50%,rgba(170,221,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <CardContent className="relative p-0 h-full">
              <img
                className="absolute top-[78px] right-[18px] w-[142px] h-60"
                alt="Frame"
                src="/frame-239199.svg"
              />

              <div className="absolute top-10 left-[78px] [text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-[27px] tracking-[0] leading-[normal] whitespace-nowrap">
                {pack.title}
              </div>

              <div className="absolute top-[82px] left-[58px] right-[160px] [font-family:'Poppins',Helvetica] font-light text-black text-[13px] tracking-[0] leading-[normal]">
                {pack.description}
              </div>

              <div className="absolute top-[147px] left-[66px] space-y-[39px]">
                {pack.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <img className="w-3 h-2" alt="Vector" src={pack.iconSrc} />
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-[15px] tracking-[0] leading-[normal]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onDemoClick}
                className="absolute top-[321px] left-8 w-[321px] h-14 bg-[#83c3e8] hover:bg-[#6bb3d8] rounded-[15px] h-auto transition-all duration-200 hover:scale-105"
              >
                <span className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0] leading-[normal]">
                  Réservez votre démo
                </span>
              </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
