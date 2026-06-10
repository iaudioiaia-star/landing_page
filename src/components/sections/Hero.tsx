import { Music, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import SoundWave from "../common/SoundWave";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />

      {/* Floating music notes */}
      <Music className="absolute top-32 left-[15%] w-8 h-8 text-primary/20 animate-float" />
      <Sparkles className="absolute top-48 right-[20%] w-6 h-6 text-primary/20 animate-float animation-delay-200" />
      <Heart className="absolute bottom-32 left-[25%] w-6 h-6 text-primary/20 animate-float animation-delay-400" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in-up">
            <SoundWave barCount={3} className="h-4" />
            <span className="text-sm text-muted-foreground">
              Rápido e exclusivo
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            Sua música em minutos,
            <br />
            com atendimento{" "}
            <span className="text-gradient-gold">exclusivo</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Aqui, você não precisa esperar um dia ou mais para receber sua música.{" "}
            <span className="text-foreground">Você conversa, envia sua letra e ritmo</span>{" "}
            e em poucos minutos recebe sua música pronta através de um canal exclusivo.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Entrega em minutos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Canal exclusivo</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Pagamento seguro</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Link to="/chat" className="btn-whatsapp">
              <Music className="w-5 h-5" />
              Quero Minha Música
            </Link>
            <a href="#video" className="btn-secondary">
              Ver Como Funciona
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
