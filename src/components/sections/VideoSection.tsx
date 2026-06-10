import { Play, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SoundWave from "../common/SoundWave";

const VideoSection = () => {
  return (
    <section id="video" className="pt-8 pb-16 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Veja com seus olhos</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Entenda em <span className="text-gradient-gold">1 minuto</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Assista e veja como é simples ter sua música pronta,
              sem complicação nenhuma.
            </p>
          </div>

          {/* Video frame - vertical format */}
          <div className="flex flex-col items-center gap-8">
            <div className="video-frame p-2 max-w-sm w-full mx-auto glow-gold">
              <div className="relative aspect-[9/16] bg-secondary rounded-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/tLz4JwPgeSM"
                  title="Seja Bem Vindo a Produtora Iaudio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/chat"
              className="btn-whatsapp text-xl py-6 px-12 group text-center"
            >
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
              Quero Minha Música Agora
            </Link>

            <p className="text-sm text-muted-foreground text-center">
              Atendimento rápido e sem burocracia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
