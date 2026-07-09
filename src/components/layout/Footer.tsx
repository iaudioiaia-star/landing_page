
const Footer = () => {
  return (
    <footer
      className="py-12 border-t"
      style={{
        borderColor: "rgba(66,108,42,0.4)",
        background: "linear-gradient(180deg, #0a1508, #020403)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="circuit-line mb-10 opacity-40" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/iaudio-logo.png"
              alt="Iaudio logo"
              style={{ width: 52, height: "auto", objectFit: "contain", flexShrink: 0 }}
            />
            <span
              className="font-display text-xl font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #6FBB49, #94CC74)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
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
