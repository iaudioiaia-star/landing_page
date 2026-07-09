import { useEffect, useState, useRef } from "react";
import { Music, Clock, Heart, Headphones, Sparkles } from "lucide-react";

const stats = [
  { icon: Music,      value: 110550, prefix: "+", suffix: "",     label: "músicas criadas" },
  { icon: Clock,      value: 25,    prefix: "",  suffix: " min", label: "tempo médio"     },
  { icon: Heart,      value: 98,    prefix: "",  suffix: "%",    label: "satisfação"      },
  { icon: Headphones, value: 24,    prefix: "",  suffix: "h",    label: "atendimento"     },
];

const useCountUp = (end: number, duration = 2500, startCounting: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 4)) * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);
  return count;
};

const StatItem = ({
  icon: Icon, value, prefix, suffix, label, startCounting, delay, index,
}: {
  icon: typeof Music;
  value: number; prefix: string; suffix: string; label: string;
  startCounting: boolean; delay: number; index: number;
}) => {
  const [shouldCount, setShouldCount] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, 2500, shouldCount);

  useEffect(() => {
    if (startCounting) {
      const t = setTimeout(() => { setShouldCount(true); setIsVisible(true); }, delay);
      return () => clearTimeout(t);
    }
  }, [startCounting, delay]);

  return (
    <div
      className={`relative flex flex-col items-center gap-4 p-8 rounded-3xl
        backdrop-blur-xl transition-all duration-500 ease-out hover:scale-105
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        background: "linear-gradient(145deg, #1a3010, #0a1508)",
        border: "1px solid rgba(66,108,42,0.5)",
        boxShadow: "0 8px 32px rgba(111,187,73,0.10), inset 0 1px 0 rgba(111,187,73,0.08)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-xl animate-pulse"
          style={{ background: "rgba(84,151,51,0.25)" }} />
        <div className="relative w-16 h-16 rounded-full flex items-center justify-center border shadow-lg"
          style={{
            background: "linear-gradient(135deg, rgba(84,151,51,0.30), rgba(66,108,42,0.15))",
            borderColor: "rgba(111,187,73,0.35)",
          }}
        >
          <Icon className="w-8 h-8"
            style={{ color: "#6FBB49", filter: "drop-shadow(0 0 6px rgba(111,187,73,0.6))" }} />
        </div>
      </div>

      <div className="text-center relative z-10">
        <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(135deg, #6FBB49, #94CC74, #CEECB6)" }}>
          {prefix}{count.toLocaleString("pt-BR")}{suffix}
        </p>
        <p className="text-sm md:text-base mt-2 font-medium tracking-wide uppercase"
          style={{ color: "#94CC74" }}>
          {label}
        </p>
      </div>
    </div>
  );
};

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #020403, #0a1508, #020403)" }} />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float"
        style={{ background: "rgba(84,151,51,0.08)" }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl animate-float"
        style={{ background: "rgba(66,108,42,0.06)", animationDelay: "1s" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(84,151,51,0.12)", border: "1px solid rgba(111,187,73,0.25)" }}>
            <Sparkles className="w-4 h-4" style={{ color: "#6FBB49" }} />
            <span className="text-sm font-medium" style={{ color: "#6FBB49" }}>Nossos Resultados</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Números que <span className="text-gradient-gold">Falam por Si</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milhares de pessoas já transformaram seus momentos especiais em músicas únicas
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} startCounting={isVisible} delay={index * 200} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
