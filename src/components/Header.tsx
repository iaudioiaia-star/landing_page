import SoundWave from "./SoundWave";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SoundWave barCount={4} className="h-6" />
            <span className="font-display text-2xl font-semibold text-gradient-gold">
              iaudio
            </span>
          </div>
          <a href="#chat" className="btn-primary text-sm py-2 px-6">
            Começar Agora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
