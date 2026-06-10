import { useEffect, useState, useRef } from "react";
import { Music, Clock, Heart, Headphones, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Music,
    value: 50000,
    prefix: "+",
    suffix: "",
    label: "músicas criadas",
  },
  {
    icon: Clock,
    value: 25,
    prefix: "",
    suffix: " min",
    label: "tempo médio",
  },
  {
    icon: Heart,
    value: 98,
    prefix: "",
    suffix: "%",
    label: "satisfação",
  },
  {
    icon: Headphones,
    value: 24,
    prefix: "",
    suffix: "h",
    label: "atendimento",
  },
];

const useCountUp = (end: number, duration: number = 2500, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const StatItem = ({
  icon: Icon,
  value,
  prefix,
  suffix,
  label,
  startCounting,
  delay,
  index
}: {
  icon: typeof Music;
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  startCounting: boolean;
  delay: number;
  index: number;
}) => {
  const [shouldCount, setShouldCount] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, 2500, shouldCount);

  useEffect(() => {
    if (startCounting) {
      const timer = setTimeout(() => {
        setShouldCount(true);
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [startCounting, delay]);

  return (
    <div
      className={`
        relative flex flex-col items-center gap-4 p-8 rounded-3xl
        bg-gradient-to-br from-card/80 via-card/60 to-secondary/40
        backdrop-blur-xl border border-primary/20
        shadow-[0_8px_32px_rgba(212,175,55,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]
        hover:shadow-[0_16px_48px_rgba(212,175,55,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
        hover:border-primary/40 hover:scale-105
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/30 shadow-lg">
          <Icon className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
        </div>
      </div>

      <div className="text-center relative z-10">
        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent drop-shadow-lg">
          {prefix}{count.toLocaleString('pt-BR')}{suffix}
        </p>
        <p className="text-sm md:text-base text-muted-foreground mt-2 font-medium tracking-wide uppercase">
          {label}
        </p>
      </div>
    </div>
  );
};

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Só dispara a animação quando a seção entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Nossos Resultados</span>
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
            <StatItem
              key={stat.label}
              {...stat}
              startCounting={isVisible}
              delay={index * 200}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
