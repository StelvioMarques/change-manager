export function HeroScene() {
  return (
    <svg
      id="hero-scene"
      className="absolute inset-0 pointer-events-none w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--background)" stopOpacity="1" />
          <stop offset="45%" stopColor="var(--background)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--background)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fadeRight" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--background)" stopOpacity="1" />
          <stop offset="35%" stopColor="var(--background)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--background)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fadeBottom" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--background)" stopOpacity="1" />
          <stop offset="40%" stopColor="var(--background)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g id="boxes-group" opacity="0.06">
        {/* Large box */}
        <rect x="980" y="320" width="130" height="160" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M980 320 L1045 285 L1175 285 L1110 320 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M1110 320 L1175 285 L1175 445 L1110 480 Z" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.45" />
        <line x1="980" y1="380" x2="1110" y2="380" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="1045" y1="320" x2="1045" y2="480" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />

        {/* Medium box — open flaps */}
        <rect x="1120" y="400" width="110" height="130" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M1120 400 L1120 370 L1175 348 L1175 378" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M1230 400 L1230 370 L1175 348" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M1230 400 L1290 368 L1290 498 L1230 530 Z" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.4" />
        <path d="M1290 368 L1230 370" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Small box */}
        <rect x="1010" y="235" width="80" height="85" rx="2" stroke="currentColor" strokeWidth="1.1" fill="none" />
        <path d="M1010 235 L1050 212 L1130 212 L1090 235 Z" stroke="currentColor" strokeWidth="1.1" fill="none" />
        <path d="M1090 235 L1130 212 L1130 297 L1090 320 Z" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.4" />
        <line x1="1018" y1="270" x2="1082" y2="270" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />

        {/* Tiny box — tilted */}
        <g transform="rotate(-8, 900, 490)">
          <rect x="870" y="455" width="65" height="60" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
          <path d="M870 455 L902 435 L967 435 L935 455 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
        </g>

        {/* Fades */}
        <rect x="0" y="0" width="600" height="900" fill="url(#fadeLeft)" />
        <rect x="1260" y="200" width="180" height="450" fill="url(#fadeRight)" />
        <rect x="800" y="560" width="500" height="340" fill="url(#fadeBottom)" />
      </g>

      {/* Ground shadow */}
      <ellipse cx="1100" cy="540" rx="200" ry="18" fill="currentColor" opacity="0.25" />
    </svg>
  )
}