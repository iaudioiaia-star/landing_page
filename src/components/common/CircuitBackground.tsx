import { useId } from "react";

const CircuitBackground = () => {
  const uid = useId().replace(/:/g, "_");

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id={`node_glow_${uid}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`trace_glow_${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── LEFT CLUSTER ─────────────────────────────────────────── */}
      <g opacity="0.55">
        {/* Trace L1 */}
        <path d="M 0 185 H 165 V 118 H 255" stroke="#426C2A" strokeWidth="1.5" fill="none" />
        <circle cx="165" cy="185" r="3.5" fill="#6FBB49" filter={`url(#node_glow_${uid})`} className="animate-circuit-pulse" />
        <circle cx="165" cy="118" r="3" fill="#549733" />
        <circle cx="255" cy="118" r="4" fill="#6FBB49" filter={`url(#node_glow_${uid})`} />

        {/* Trace L2 */}
        <path d="M 0 295 H 95 V 218 H 205 V 158" stroke="#31531E" strokeWidth="1" fill="none" />
        <circle cx="95"  cy="295" r="2.5" fill="#549733" />
        <circle cx="95"  cy="218" r="2.5" fill="#549733" />
        <circle cx="205" cy="218" r="3"   fill="#6FBB49" filter={`url(#node_glow_${uid})`} className="animate-circuit-pulse" style={{ animationDelay: "0.6s" }} />
        <circle cx="205" cy="158" r="2.5" fill="#549733" />

        {/* Trace L3 */}
        <path d="M 0 430 H 148 V 362 H 238 V 305" stroke="#426C2A" strokeWidth="1.5" fill="none" />
        <circle cx="148" cy="430" r="3"   fill="#549733" />
        <circle cx="148" cy="362" r="3.5" fill="#6FBB49" filter={`url(#node_glow_${uid})`} />
        <circle cx="238" cy="362" r="2.5" fill="#549733" />
        <circle cx="238" cy="305" r="4"   fill="#6FBB49" filter={`url(#node_glow_${uid})`} className="animate-circuit-pulse" style={{ animationDelay: "1.2s" }} />

        {/* Trace L4 — branch off L3 */}
        <path d="M 148 362 H 65 V 308" stroke="#31531E" strokeWidth="1" fill="none" />
        <circle cx="65" cy="308" r="2" fill="#426C2A" />

        {/* Trace L5 */}
        <path d="M 0 548 H 78 V 495" stroke="#223B16" strokeWidth="1" fill="none" />
        <circle cx="78" cy="548" r="2" fill="#426C2A" />
        <circle cx="78" cy="495" r="2" fill="#426C2A" />

        {/* Trace L6 lower */}
        <path d="M 68 720 H 218 V 645 H 322 V 578" stroke="#31531E" strokeWidth="1.5" fill="none" />
        <circle cx="218" cy="720" r="2.5" fill="#549733" />
        <circle cx="218" cy="645" r="3"   fill="#6FBB49" filter={`url(#node_glow_${uid})`} />
        <circle cx="322" cy="645" r="2.5" fill="#549733" />
        <circle cx="322" cy="578" r="3.5" fill="#6FBB49" filter={`url(#node_glow_${uid})`} className="animate-circuit-pulse" style={{ animationDelay: "0.9s" }} />

        {/* Short stubs L */}
        <path d="M 0 630 H 45 V 595" stroke="#223B16" strokeWidth="1" fill="none" />
        <path d="M 110 800 V 735 H 168" stroke="#223B16" strokeWidth="1" fill="none" />
        <circle cx="168" cy="735" r="2" fill="#426C2A" />
      </g>

      {/* ── RIGHT CLUSTER (mirrored) ──────────────────────────────── */}
      <g opacity="0.55">
        {/* Trace R1 */}
        <path d="M 1440 185 H 1275 V 118 H 1185" stroke="#426C2A" strokeWidth="1.5" fill="none" />
        <circle cx="1275" cy="185" r="3.5" fill="#6FBB49" filter={`url(#node_glow_${uid})`} className="animate-circuit-pulse" style={{ animationDelay: "0.4s" }} />
        <circle cx="1275" cy="118" r="3"   fill="#549733" />
        <circle cx="1185" cy="118" r="4"   fill="#6FBB49" filter={`url(#node_glow_${uid})`} />

        {/* Trace R2 */}
        <path d="M 1440 295 H 1345 V 218 H 1235 V 158" stroke="#31531E" strokeWidth="1" fill="none" />
        <circle cx="1345" cy="295" r="2.5" fill="#549733" />
        <circle cx="1345" cy="218" r="2.5" fill="#549733" />
        <circle cx="1235" cy="218" r="3"   fill="#6FBB49" filter={`url(#node_glow_${uid})`} className="animate-circuit-pulse" style={{ animationDelay: "1.0s" }} />
        <circle cx="1235" cy="158" r="2.5" fill="#549733" />

        {/* Trace R3 */}
        <path d="M 1440 430 H 1292 V 362 H 1202 V 305" stroke="#426C2A" strokeWidth="1.5" fill="none" />
        <circle cx="1292" cy="430" r="3"   fill="#549733" />
        <circle cx="1292" cy="362" r="3.5" fill="#6FBB49" filter={`url(#node_glow_${uid})`} />
        <circle cx="1202" cy="362" r="2.5" fill="#549733" />
        <circle cx="1202" cy="305" r="4"   fill="#6FBB49" filter={`url(#node_glow_${uid})`} className="animate-circuit-pulse" style={{ animationDelay: "1.6s" }} />

        {/* Trace R4 — branch */}
        <path d="M 1292 362 H 1375 V 308" stroke="#31531E" strokeWidth="1" fill="none" />
        <circle cx="1375" cy="308" r="2" fill="#426C2A" />

        {/* Trace R5 */}
        <path d="M 1440 548 H 1362 V 495" stroke="#223B16" strokeWidth="1" fill="none" />
        <circle cx="1362" cy="548" r="2" fill="#426C2A" />
        <circle cx="1362" cy="495" r="2" fill="#426C2A" />

        {/* Trace R6 lower */}
        <path d="M 1372 720 H 1222 V 645 H 1118 V 578" stroke="#31531E" strokeWidth="1.5" fill="none" />
        <circle cx="1222" cy="720" r="2.5" fill="#549733" />
        <circle cx="1222" cy="645" r="3"   fill="#6FBB49" filter={`url(#node_glow_${uid})`} />
        <circle cx="1118" cy="645" r="2.5" fill="#549733" />
        <circle cx="1118" cy="578" r="3.5" fill="#6FBB49" filter={`url(#node_glow_${uid})`} className="animate-circuit-pulse" style={{ animationDelay: "0.3s" }} />

        {/* Short stubs R */}
        <path d="M 1440 630 H 1395 V 595" stroke="#223B16" strokeWidth="1" fill="none" />
        <path d="M 1330 800 V 735 H 1272" stroke="#223B16" strokeWidth="1" fill="none" />
        <circle cx="1272" cy="735" r="2" fill="#426C2A" />
      </g>

      {/* ── BOTTOM CENTRE (very subtle) ───────────────────────────── */}
      <g opacity="0.25">
        <path d="M 490 800 V 710 H 555 V 668" stroke="#31531E" strokeWidth="1" fill="none" />
        <circle cx="555" cy="710" r="2" fill="#549733" />
        <circle cx="555" cy="668" r="2.5" fill="#6FBB49" />

        <path d="M 950 800 V 710 H 885 V 668" stroke="#31531E" strokeWidth="1" fill="none" />
        <circle cx="885" cy="710" r="2" fill="#549733" />
        <circle cx="885" cy="668" r="2.5" fill="#6FBB49" />

        <path d="M 640 800 V 740 H 700 V 700" stroke="#223B16" strokeWidth="1" fill="none" />
        <path d="M 800 800 V 740 H 740 V 700" stroke="#223B16" strokeWidth="1" fill="none" />
      </g>

      {/* ── TOP CORNERS (faint crosshatch accent) ─────────────────── */}
      <g opacity="0.18">
        <path d="M 0 60 H 80 V 30 H 140" stroke="#6FBB49" strokeWidth="1" fill="none" filter={`url(#trace_glow_${uid})`} />
        <path d="M 1440 60 H 1360 V 30 H 1300" stroke="#6FBB49" strokeWidth="1" fill="none" filter={`url(#trace_glow_${uid})`} />
        <circle cx="80"   cy="60" r="2" fill="#94CC74" />
        <circle cx="80"   cy="30" r="2" fill="#94CC74" />
        <circle cx="1360" cy="60" r="2" fill="#94CC74" />
        <circle cx="1360" cy="30" r="2" fill="#94CC74" />
      </g>
    </svg>
  );
};

export default CircuitBackground;
