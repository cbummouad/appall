import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const ServicesSection = (): JSX.Element => {
  const faqData = [
    {
      id: "item-1",
      question: "AppAll est-il hébergeable en interne (on-premise) ?",
      answer: "",
    },
    {
      id: "item-2",
      question:
        "Quelle est la différence entre AppAll et un simple chatbot ou application AI",
      answer: "",
    },
    {
      id: "item-3",
      question: "Puis-je personnaliser les applications et l'interface ?",
      answer: "",
    },
    {
      id: "item-4",
      question: "Comment puis-je commencer avec AppAll ?",
      answer: "",
    },
    {
      id: "item-5",
      question: "Quelles garanties de sécurité offre AppAll ?",
      answer: "",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-[75px] py-8">
      <div className="flex justify-center">
        <div className="w-[147px] h-14 [text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Technovier-Bold',Helvetica] font-bold text-transparent text-5xl tracking-[0] leading-[normal] whitespace-nowrap">
          FAQ
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto relative">
        <div className="w-full rounded-[13.4px] border-[none] backdrop-blur-[28.36px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.36px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-[13.4px] before:[background:linear-gradient(39deg,rgba(52,66,102,1)_0%,rgba(224,206,243,1)_50%,rgba(170,221,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none p-12">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-none"
              >
                <AccordionTrigger className="flex justify-between items-center w-full py-4 border-b-[5px] border-b-[url('/vector-2519.svg')] bg-repeat-x [text-shadow:0px_9.42px_9.42px_#0000000f] bg-[linear-gradient(90deg,rgba(128,0,128,1)_0%,rgba(0,157,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Public_Sans',Helvetica] font-medium text-transparent text-[25px] text-left tracking-[0] leading-[normal] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="text-white/80">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
