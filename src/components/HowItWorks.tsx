import { MessageSquare, Wand2, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Atendimento exclusivo",
    description: "Aqui, você não entra em fila. Cada compositor é atendido em um canal exclusivo da IAudio."
  },
  {
    icon: Wand2,
    number: "02",
    title: "Produção rápida",
    description: "Você envia sua letra ou ideia e a produção começa imediatamente. Em poucos minutos, sua música está pronta."
  },
  {
    icon: Download,
    number: "03",
    title: "Receba no mesmo lugar",
    description: "Sua música é entregue no próprio atendimento exclusivo. Você ouve, baixa e guarda com segurança."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Como <span className="text-gradient-gold">funciona</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Três passos simples. Sem complicação, sem termos difíceis.
            </p>
          </div>
          
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="card-elegant h-full hover:border-primary/30 transition-all duration-300">
                  {/* Step number */}
                  <span className="text-6xl font-display font-bold text-primary/10 absolute top-4 right-4">
                    {step.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
