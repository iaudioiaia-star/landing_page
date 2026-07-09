import { useId } from "react";
import { cn } from "@/lib/utils";

interface IaudioLogoProps {
  size?: number;
  className?: string;
}

const IaudioLogo = ({ size = 44, className }: IaudioLogoProps) => {
  const raw = useId();
  const uid = raw.replace(/:/g, "_");

  return (
    <svg
      viewBox="0 0 100 148"
      width={size}
      height={Math.round(size * 1.48)}
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Iaudio logo"
    >
      <defs>
        {/* Green neon glow filter */}
        <filter id={`glow_${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`glow_soft_${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Background radial gradient */}
        <radialGradient id={`bg_${uid}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1a3810" />
          <stop offset="100%" stopColor="#020403" />
        </radialGradient>

        {/* Inner ambient glow */}
        <radialGradient id={`ambient_${uid}`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#6FBB49" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6FBB49" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Outer frame – pill / rounded rect ───────────────────── */}
      <rect x="5" y="15" width="90" height="126" rx="24"
        fill={`url(#bg_${uid})`} />
      <rect x="5" y="15" width="90" height="126" rx="24"
        fill={`url(#ambient_${uid})`} />
      {/* Border outer glow */}
      <rect x="5" y="15" width="90" height="126" rx="24"
        fill="none" stroke="#6FBB49" strokeWidth="1.8"
        filter={`url(#glow_${uid})`} />
      {/* Inner thin ring */}
      <rect x="9" y="19" width="82" height="118" rx="21"
        fill="none" stroke="#426C2A" strokeWidth="0.6" opacity="0.7" />

      {/* ── Top cap circle ──────────────────────────────────────── */}
      {/* Stem connecting I top to cap */}
      <line x1="50" y1="40" x2="50" y2="20"
        stroke="#426C2A" strokeWidth="1" strokeDasharray="2 2" />
      {/* Cap ring */}
      <circle cx="50" cy="13" r="11"
        fill="#0a1a07" stroke="#6FBB49" strokeWidth="1.5"
        filter={`url(#glow_${uid})`} />
      {/* Cap inner glow */}
      <circle cx="50" cy="13" r="6" fill="#426C2A" />
      <circle cx="50" cy="13" r="3" fill="#94CC74"
        filter={`url(#glow_soft_${uid})`} />
      <circle cx="50" cy="13" r="1.2" fill="#CEECB6" />

      {/* ── I-beam – circuit style ───────────────────────────────── */}
      {/* Top horizontal bar */}
      <rect x="23" y="40" width="54" height="10" rx="2"
        fill="#31531E" stroke="#549733" strokeWidth="0.6" />
      <rect x="23" y="40" width="54" height="10" rx="2"
        fill="none" stroke="#6FBB49" strokeWidth="0.5" opacity="0.5" />

      {/* Vertical stem */}
      <rect x="43" y="50" width="14" height="52" rx="2"
        fill="#31531E" stroke="#549733" strokeWidth="0.6" />

      {/* Bottom horizontal bar */}
      <rect x="23" y="102" width="54" height="10" rx="2"
        fill="#31531E" stroke="#549733" strokeWidth="0.6" />
      <rect x="23" y="102" width="54" height="10" rx="2"
        fill="none" stroke="#6FBB49" strokeWidth="0.5" opacity="0.5" />

      {/* ── Centre node ─────────────────────────────────────────── */}
      <circle cx="50" cy="76" r="4.5" fill="#426C2A" />
      <circle cx="50" cy="76" r="2.5" fill="#6FBB49"
        filter={`url(#glow_soft_${uid})`} />
      <circle cx="50" cy="76" r="1" fill="#CEECB6" />

      {/* ── Circuit traces ───────────────────────────────────────── */}
      {/* Top-bar left */}
      <line x1="23" y1="45" x2="10" y2="45"
        stroke="#6FBB49" strokeWidth="1.6" strokeLinecap="round"
        filter={`url(#glow_soft_${uid})`} />
      <circle cx="9" cy="45" r="2.8" fill="#CEECB6"
        filter={`url(#glow_${uid})`} />

      {/* Top-bar right */}
      <line x1="77" y1="45" x2="90" y2="45"
        stroke="#6FBB49" strokeWidth="1.6" strokeLinecap="round"
        filter={`url(#glow_soft_${uid})`} />
      <circle cx="91" cy="45" r="2.8" fill="#CEECB6"
        filter={`url(#glow_${uid})`} />

      {/* Stem left – upper elbow */}
      <line x1="43" y1="60" x2="26" y2="60"
        stroke="#549733" strokeWidth="1" strokeLinecap="round" />
      <line x1="26" y1="60" x2="26" y2="52"
        stroke="#549733" strokeWidth="1" strokeLinecap="round" />
      <circle cx="26" cy="50" r="2.2" fill="#6FBB49"
        filter={`url(#glow_soft_${uid})`} />

      {/* Stem right – upper elbow */}
      <line x1="57" y1="60" x2="74" y2="60"
        stroke="#549733" strokeWidth="1" strokeLinecap="round" />
      <line x1="74" y1="60" x2="74" y2="52"
        stroke="#549733" strokeWidth="1" strokeLinecap="round" />
      <circle cx="74" cy="50" r="2.2" fill="#6FBB49"
        filter={`url(#glow_soft_${uid})`} />

      {/* Stem left – lower elbow */}
      <line x1="43" y1="92" x2="26" y2="92"
        stroke="#549733" strokeWidth="1" strokeLinecap="round" />
      <line x1="26" y1="92" x2="26" y2="100"
        stroke="#549733" strokeWidth="1" strokeLinecap="round" />
      <circle cx="26" cy="102" r="2.2" fill="#6FBB49"
        filter={`url(#glow_soft_${uid})`} />

      {/* Stem right – lower elbow */}
      <line x1="57" y1="92" x2="74" y2="92"
        stroke="#549733" strokeWidth="1" strokeLinecap="round" />
      <line x1="74" y1="92" x2="74" y2="100"
        stroke="#549733" strokeWidth="1" strokeLinecap="round" />
      <circle cx="74" cy="102" r="2.2" fill="#6FBB49"
        filter={`url(#glow_soft_${uid})`} />

      {/* Bottom-bar left */}
      <line x1="23" y1="107" x2="10" y2="107"
        stroke="#6FBB49" strokeWidth="1.6" strokeLinecap="round"
        filter={`url(#glow_soft_${uid})`} />
      <circle cx="9" cy="107" r="2.8" fill="#CEECB6"
        filter={`url(#glow_${uid})`} />

      {/* Bottom-bar right */}
      <line x1="77" y1="107" x2="90" y2="107"
        stroke="#6FBB49" strokeWidth="1.6" strokeLinecap="round"
        filter={`url(#glow_soft_${uid})`} />
      <circle cx="91" cy="107" r="2.8" fill="#CEECB6"
        filter={`url(#glow_${uid})`} />

      {/* ── Corner accent dots on I bars ────────────────────────── */}
      <circle cx="23" cy="40" r="2" fill="#94CC74" />
      <circle cx="77" cy="40" r="2" fill="#94CC74" />
      <circle cx="23" cy="112" r="2" fill="#94CC74" />
      <circle cx="77" cy="112" r="2" fill="#94CC74" />

      {/* ── Bottom decorative dots inside frame ─────────────────── */}
      <circle cx="35" cy="127" r="1.5" fill="#426C2A" opacity="0.7" />
      <circle cx="50" cy="129" r="1.5" fill="#549733" opacity="0.8" />
      <circle cx="65" cy="127" r="1.5" fill="#426C2A" opacity="0.7" />
    </svg>
  );
};

export default IaudioLogo;
