import { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SpotlightCard = ({ children, className = "", style = {} }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        background: hovered
          ? `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(111,187,73,0.10) 0%, transparent 55%), linear-gradient(145deg, #1a3010, #0a1508)`
          : "linear-gradient(145deg, #1a3010, #0a1508)",
        borderColor: hovered ? "rgba(111,187,73,0.55)" : "rgba(66,108,42,0.45)",
        boxShadow: hovered
          ? "0 12px 40px rgba(111,187,73,0.18), inset 0 1px 0 rgba(111,187,73,0.10)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
