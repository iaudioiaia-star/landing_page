import SoundWave from "../common/SoundWave";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <SoundWave barCount={4} className="h-5" />
            <span className="font-display text-xl font-semibold text-gradient-gold">
              iaudio
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Transformando sonhos em música desde 2024
          </p>

          {/* Legal */}
          <p className="text-xs text-muted-foreground">
            © 2024 iaudio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
