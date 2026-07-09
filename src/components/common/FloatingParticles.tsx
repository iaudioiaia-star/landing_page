const PARTICLES = [
  { left: "8%",  top: "22%", size: 2.5, delay: 0,    dur: 5.2, opacity: 0.55 },
  { left: "15%", top: "65%", size: 2,   delay: 1.4,  dur: 6.5, opacity: 0.40 },
  { left: "22%", top: "40%", size: 3,   delay: 2.8,  dur: 4.8, opacity: 0.50 },
  { left: "30%", top: "78%", size: 1.5, delay: 0.6,  dur: 7.0, opacity: 0.35 },
  { left: "42%", top: "15%", size: 2,   delay: 3.2,  dur: 5.5, opacity: 0.45 },
  { left: "55%", top: "82%", size: 2.5, delay: 1.8,  dur: 6.0, opacity: 0.40 },
  { left: "65%", top: "30%", size: 1.8, delay: 0.3,  dur: 5.8, opacity: 0.50 },
  { left: "72%", top: "60%", size: 3,   delay: 2.1,  dur: 4.5, opacity: 0.45 },
  { left: "80%", top: "18%", size: 2,   delay: 3.6,  dur: 6.8, opacity: 0.35 },
  { left: "88%", top: "72%", size: 2.5, delay: 0.9,  dur: 5.0, opacity: 0.55 },
  { left: "93%", top: "45%", size: 1.5, delay: 2.5,  dur: 7.2, opacity: 0.40 },
  { left: "48%", top: "50%", size: 1.5, delay: 4.0,  dur: 5.5, opacity: 0.25 },
  { left: "35%", top: "55%", size: 2,   delay: 1.1,  dur: 6.2, opacity: 0.30 },
  { left: "60%", top: "88%", size: 1.8, delay: 3.9,  dur: 4.8, opacity: 0.35 },
  { left: "10%", top: "88%", size: 2,   delay: 2.3,  dur: 6.5, opacity: 0.30 },
];

const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
    {PARTICLES.map((p, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          left: p.left,
          top: p.top,
          width: p.size,
          height: p.size,
          backgroundColor: "#6FBB49",
          opacity: p.opacity,
          boxShadow: `0 0 ${p.size * 3}px rgba(111,187,73,0.8)`,
          animation: `particle-float ${p.dur}s ease-in-out ${p.delay}s infinite`,
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
