import { MessageCircle, Heart, Phone } from "lucide-react";
import SoundWave from "./SoundWave";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <SoundWave barCount={9} className="h-12 justify-center mb-8" />
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Sua música está esperando
            <br />
            <span className="text-gradient-gold">para nascer</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Não precisa ter pressa. Quando você estiver pronto, a gente tá aqui.
            É só chamar no chat que a gente responde rapidinho.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href="#" 
              className="btn-primary text-lg py-5 px-12 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Falar com a iaudio
            </a>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>Atendimento com carinho, sem robô</span>
            </div>
          </div>
          
          {/* Contact alternatives */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Prefere ligar? Também estamos no telefone:
            </p>
            <a 
              href="tel:+5500000000000" 
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(00) 00000-0000</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
