import { MessageCircle, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import RevealSection from "../common/RevealSection";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "rgba(84,151,51,0.07)" }}
        />
      </div>

      {/* Circuit decorative lines */}
      <div className="circuit-line absolute top-0 left-0 right-0 opacity-30" />
      <div className="circuit-line absolute bottom-0 left-0 right-0 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <RevealSection><div className="max-w-3xl mx-auto text-center">
          {/* Logo centred */}
          <div className="flex justify-center mb-8">
            <img
              src="/iaudio-logo.png"
              alt="Iaudio logo"
              style={{ width: 100, height: "auto", objectFit: "contain" }}
            />
          </div>

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
            <Link to="/chat" className="btn-whatsapp text-lg py-5 px-12 group">
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Falar com a iaudio
            </Link>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>Atendimento com carinho, sem robô</span>
            </div>
          </div>

          {/* Phone */}
          <div
            className="mt-16 pt-8"
            style={{ borderTop: "1px solid rgba(66,108,42,0.4)" }}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Prefere ligar? Também estamos no telefone:
            </p>
            <a
              href="tel:+5562981457822"
              className="inline-flex items-center gap-2 font-medium transition-colors hover:text-foreground"
              style={{ color: "#94CC74" }}
            >
              <Phone className="w-5 h-5" />
              <span>(62) 98145-7822</span>
            </a>
          </div>
        </div></RevealSection>
      </div>
    </section>
  );
};

export default FinalCTA;
