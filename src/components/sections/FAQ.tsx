import RevealSection from "../common/RevealSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Shield } from "lucide-react";

const faqs = [
  {
    question: "Preciso entender de música ou tecnologia?",
    answer: "Não precisa saber nada! É só conversar com a gente como se estivesse mandando mensagem pra um amigo. A gente cuida de toda a parte técnica pra você."
  },
  {
    question: "Como eu pago?",
    answer: "Você pode pagar por PIX, cartão de crédito ou boleto. Se tiver dificuldade, é só avisar no chat que a gente explica passo a passo, sem pressa."
  },
  {
    question: "E se eu não gostar da música?",
    answer: "A gente trabalha junto até você ficar feliz. Fazemos ajustes sem custo extra. Seu sonho é importante pra gente."
  },
  {
    question: "É seguro usar o chat de vocês?",
    answer: "Sim! Nosso chat é seguro e seus dados ficam protegidos. É como o WhatsApp, só que feito especialmente pra atender você melhor, sem demora."
  },
  {
    question: "Quanto tempo demora pra ficar pronta?",
    answer: "Normalmente sua música fica pronta em algumas horas. A gente avisa você pelo próprio chat quando estiver prontinha."
  },
  {
    question: "Posso produzir em qualquer estilo musical?",
    answer: "Sim, produzimos em qualquer estilo musical do mundo."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <RevealSection><div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Tire suas dúvidas</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Perguntas <span className="text-gradient-gold">frequentes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Respondemos com carinho, sem termos complicados
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="card-elegant">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Security note */}
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>Seus dados estão sempre protegidos conosco</span>
          </div>
        </div></RevealSection>
      </div>
    </section>
  );
};

export default FAQ;
