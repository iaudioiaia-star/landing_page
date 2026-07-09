import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}

const RevealSection = ({
  children,
  delay = 0,
  className = "",
  distance = 40,
}: RevealSectionProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
        transition: `opacity 0.75s ease-out ${delay}ms, transform 0.75s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealSection;
