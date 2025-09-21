import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  const features = [
    {
      icon: "/mask-group.png",
      title: "Souveraineté",
      description:
        "On-premise, cloud privé, chiffrement et audit complet : vos données restent sous votre contrôle.",
      bgImage1: "/bg-1.svg",
      bgImage2: "/bg-4.svg",
    },
    {
      icon: "/mask-group-1.png",
      title: "Clarté",
      description:
        "Une seule application pour piloter toutes vos IA, moins de distraction, plus d'efficacité.",
      bgImage1: "/bg.svg",
      bgImage2: "/bg-5.svg",
    },
    {
      icon: "/mask-group-2.png",
      title: "Adaptabilité",
      description:
        "Marketplace, frameworks et intégrations adaptés à vos métiers et équipes.",
      bgImage1: "/bg-2.svg",
      bgImage2: "/bg-3.svg",
    },
  ];

  return (
    <section id="why-appall" className="w-full flex flex-col gap-[17px] py-8">
      <motion.header 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-[15px] max-w-[881px] mx-auto"
      >
        <h2 className="h-14 [text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-5xl tracking-[0] leading-[normal] whitespace-nowrap">
          Pourquoi AppAll
        </h2>

        <p className="h-6 [text-shadow:0px_9.42px_9.42px_#0000000f] [font-family:'Public_Sans',Helvetica] font-normal italic text-black text-xl tracking-[0] leading-[normal] text-center max-w-[877px]">
          AppAll n&apos;est pas un outil de plus, c&apos;est votre compagnon
          pour grandir en conscience et en sagesse.
        </p>
      </motion.header>

      <div className="flex flex-wrap justify-center gap-8 max-w-[1357px] mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="w-[437px] h-[301px] relative bg-transparent border-0 shadow-none">
              <CardContent className="p-0 h-full relative">
              <img
                className="absolute w-[93.59%] h-[82.39%] top-[14.45%] left-[2.63%]"
                alt="Background"
                src={feature.bgImage1}
              />

              <img
                className="absolute w-[99.08%] h-[88.37%] top-[11.46%] left-0"
                alt="Background"
                src={feature.bgImage2}
              />

              <img
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[61px] h-[61px]"
                alt={`${feature.title} icon`}
                src={feature.icon}
              />

              <h3 className="absolute top-[100px] left-1/2 transform -translate-x-1/2 [text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                {feature.title}
              </h3>

              <p className="absolute top-[166px] left-1/2 transform -translate-x-1/2 w-[350px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#333333] text-xl text-center tracking-[0] leading-[normal]">
                {feature.description}
              </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
