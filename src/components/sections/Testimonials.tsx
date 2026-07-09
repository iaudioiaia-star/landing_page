import { Star, Play, Music, Music2, Headphones, Mic, Disc3, Award } from "lucide-react";
import RevealSection from "../common/RevealSection";
import SpotlightCard from "../common/SpotlightCard";

const testimonials = [
  {
    name: "Moacir Ronaldo",
    age: "58 anos",
    videoUrl: "https://www.youtube.com/embed/ssD6jZJ74n0",
    rating: 5
  },
  {
    name: "Fernando Henrique",
    age: "30 anos",
    videoUrl: "https://www.youtube.com/embed/HokOR8cj678",
    rating: 5
  },
  {
    name: "Marcelo Duarte",
    age: "47 anos",
    videoUrl: "https://www.youtube.com/embed/CX2BJ-mIlgU",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <RevealSection><div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Quem já <span className="text-gradient-gold">realizou o sonho</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Histórias reais de pessoas como você
            </p>
          </div>

          {/* Testimonial video cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <RevealSection key={index} delay={index * 150}>
              <SpotlightCard
                className="card-elegant relative border"
                style={{ borderColor: "rgba(66,108,42,0.45)", height: "100%" }}
              >
                {/* Video frame vertical 9:16 */}
                <div
                  className="video-frame relative w-full mb-4 overflow-hidden"
                  style={{ aspectRatio: '9/16' }}
                >
                  {testimonial.videoUrl ? (
                    <iframe
                      src={testimonial.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-dark flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 hover:bg-primary/30 transition-colors cursor-pointer">
                        <Play className="w-8 h-8 text-primary fill-primary/30" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ fill: 'hsl(42 85% 55%)', color: 'hsl(42 85% 55%)' }} />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.age}
                  </p>
                </div>
              </SpotlightCard>
              </RevealSection>
            ))}
          </div>

          {/* Premium trust banner */}
          <div className="mt-16">
            <RevealSection delay={300}>
              <div
                className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden"
                style={{
                  padding: "1px",
                  background: "linear-gradient(135deg, rgba(84,151,51,0.5) 0%, rgba(111,187,73,0.7) 50%, rgba(84,151,51,0.5) 100%)",
                  boxShadow: "0 0 50px rgba(111,187,73,0.18), 0 0 100px rgba(84,151,51,0.08)",
                }}
              >
                {/* Inner card */}
                <div
                  className="rounded-2xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center gap-7 md:gap-10 relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #0c1d09, #111f0c, #0c1d09)" }}
                >
                  {/* Corner circuit accents */}
                  <div
                    className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at top left, rgba(111,187,73,0.15) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at bottom right, rgba(111,187,73,0.12) 0%, transparent 70%)",
                    }}
                  />

                  {/* Left: music icons stack + equalizer bars */}
                  <div className="flex flex-col items-center gap-4 shrink-0">
                    <div className="flex -space-x-3">
                      {([
                        { bg: "#223B16", Icon: Music,      glow: false },
                        { bg: "#31531E", Icon: Music2,     glow: false },
                        { bg: "#426C2A", Icon: Headphones, glow: false },
                        { bg: "#549733", Icon: Mic,        glow: false },
                        { bg: "#6FBB49", Icon: Disc3,      glow: true  },
                      ] as const).map(({ bg, Icon, glow }, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                          style={{
                            background: glow
                              ? "linear-gradient(135deg, #549733, #6FBB49)"
                              : bg,
                            borderColor: "#0c1d09",
                            zIndex: 5 - i,
                            boxShadow: glow
                              ? "0 0 14px rgba(111,187,73,0.65), 0 0 4px rgba(111,187,73,0.9)"
                              : "none",
                          }}
                        >
                          <Icon
                            className="w-4 h-4"
                            style={{
                              color: glow ? "#020403" : "#CEECB6",
                              filter: glow ? "none" : "drop-shadow(0 0 2px rgba(206,236,182,0.4))",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Mini equalizer bars */}
                    <div className="flex items-end gap-[3px]" style={{ height: 20 }}>
                      {[0.4, 0.9, 0.6, 1, 0.7, 0.5, 0.85, 0.45].map((h, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full animate-sound-wave"
                          style={{
                            height: `${h * 100}%`,
                            background: "linear-gradient(to top, #549733, #6FBB49)",
                            animationDelay: `${i * 0.12}s`,
                            animationDuration: `${0.9 + i * 0.1}s`,
                            boxShadow: "0 0 4px rgba(111,187,73,0.5)",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Vertical divider */}
                  <div
                    className="hidden md:block w-px self-stretch"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(111,187,73,0.4), transparent)" }}
                  />

                  {/* Center: milestone number */}
                  <div className="text-center flex-1">
                    <p
                      className="shimmer-text leading-none mb-1"
                      style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontFamily: "'Sora', sans-serif", fontWeight: 900 }}
                    >
                      +110.550
                    </p>
                    <p className="text-sm md:text-base font-medium mt-2 mb-3" style={{ color: "#94CC74" }}>
                      músicas criadas com exclusividade
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          style={{ fill: "hsl(42 85% 55%)", color: "hsl(42 85% 55%)" }}
                        />
                      ))}
                      <span className="text-xs font-bold ml-1" style={{ color: "hsl(42 85% 55%)" }}>5.0</span>
                    </div>
                  </div>

                  {/* Vertical divider */}
                  <div
                    className="hidden md:block w-px self-stretch"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(111,187,73,0.4), transparent)" }}
                  />

                  {/* Right: guarantee badge */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(84,151,51,0.25), rgba(66,108,42,0.1))",
                        border: "1px solid rgba(111,187,73,0.4)",
                        boxShadow: "0 0 20px rgba(111,187,73,0.25)",
                      }}
                    >
                      <Award className="w-7 h-7" style={{ color: "#6FBB49", filter: "drop-shadow(0 0 6px rgba(111,187,73,0.6))" }} />
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-center" style={{ color: "#94CC74" }}>
                      100%<br />GARANTIDO
                    </span>
                  </div>
                </div>

                {/* Animated circuit bottom line */}
                <div className="circuit-divider-animated" />
              </div>
            </RevealSection>
          </div>
        </div></RevealSection>
      </div>
    </section>
  );
};

export default Testimonials;
