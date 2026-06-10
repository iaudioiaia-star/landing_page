import { cn } from "@/lib/utils";

interface SoundWaveProps {
  className?: string;
  barCount?: number;
}

const SoundWave = ({ className, barCount = 5 }: SoundWaveProps) => {
  return (
    <div className={cn("flex items-end gap-1 h-8", className)}>
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className="w-1 bg-primary rounded-full animate-sound-wave origin-bottom"
          style={{
            height: "100%",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
