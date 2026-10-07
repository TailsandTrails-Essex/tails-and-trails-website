export function BrandMark() {
  return (
    <svg
      viewBox="0 0 1200 500"
      className="w-full h-auto"
      aria-label="Tails and Trails logo"
    >
      {/* Background circle */}
      <circle cx="350" cy="250" r="200" fill="#d4a574" opacity="0.15" />
      <circle cx="350" cy="250" r="180" fill="none" stroke="#5a9d4a" strokeWidth="6" />

      {/* Trees */}
      <path d="M200 280 L180 320 L200 320 L180 340 L200 340 L170 380 L230 380" fill="#5a9d4a" />
      <path d="M480 290 L460 330 L480 330 L460 350 L480 350 L450 390 L510 390" fill="#5a9d4a" />

      {/* Sun */}
      <circle cx="380" cy="150" r="30" fill="#d4a574" />

      {/* Dog */}
      <ellipse cx="300" cy="270" rx="45" ry="55" fill="white" stroke="#1a2a3a" strokeWidth="4" />
      {/* Dog head */}
      <circle cx="290" cy="210" r="35" fill="white" stroke="#1a2a3a" strokeWidth="4" />
      {/* Dog ears */}
      <ellipse cx="270" cy="185" rx="12" ry="25" fill="white" stroke="#1a2a3a" strokeWidth="4" />
      <ellipse cx="310" cy="180" rx="12" ry="25" fill="white" stroke="#1a2a3a" strokeWidth="4" />
      {/* Dog snout */}
      <ellipse cx="285" cy="225" rx="15" ry="12" fill="white" stroke="#1a2a3a" strokeWidth="3" />
      {/* Dog nose */}
      <circle cx="285" cy="222" r="4" fill="#1a2a3a" />
      {/* Dog eye */}
      <circle cx="295" cy="205" r="4" fill="#1a2a3a" />
      {/* Dog bandana */}
      <path d="M260 245 L290 240 L305 250 L290 260 Z" fill="#d4a574" stroke="#1a2a3a" strokeWidth="3" />

      {/* Cat */}
      <ellipse cx="420" cy="270" rx="40" ry="50" fill="white" stroke="#1a2a3a" strokeWidth="4" />
      {/* Cat head */}
      <circle cx="425" cy="210" r="32" fill="white" stroke="#1a2a3a" strokeWidth="4" />
      {/* Cat ears */}
      <path d="M405 175 L395 150 L410 180" fill="white" stroke="#1a2a3a" strokeWidth="4" />
      <path d="M445 175 L455 150 L450 180" fill="white" stroke="#1a2a3a" strokeWidth="4" />
      {/* Cat snout */}
      <ellipse cx="425" cy="225" rx="12" ry="10" fill="white" stroke="#1a2a3a" strokeWidth="3" />
      {/* Cat nose */}
      <circle cx="425" cy="222" r="3" fill="#1a2a3a" />
      {/* Cat eye */}
      <circle cx="418" cy="205" r="3" fill="#1a2a3a" />
      {/* Cat tail */}
      <path d="M450 290 Q480 270 470 320" fill="none" stroke="#1a2a3a" strokeWidth="4" strokeLinecap="round" />

      {/* Grass line */}
      <path d="M200 380 Q350 370 500 380" fill="none" stroke="#5a9d4a" strokeWidth="8" />

      {/* Text */}
      <text x="700" y="200" fontSize="72" fontWeight="900" fontFamily="Trebuchet MS, sans-serif" fill="#1a2a3a">
        Tails & Trails
      </text>
      <text x="700" y="260" fontSize="36" fontWeight="700" fontFamily="Arial, sans-serif" fill="#5a9d4a">
        Pet Sitting & Dog Walking
      </text>
      <text x="700" y="300" fontSize="18" fontFamily="Arial, sans-serif" fill="#1a2a3a">
        Essex-based care for all animals
      </text>
    </svg>
  );
}
