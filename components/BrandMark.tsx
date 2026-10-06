export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 600 430"
      className={compact ? 'h-full w-full' : 'h-auto w-full max-w-[640px]'}
      aria-label="Tails and Trails logo"
      role="img"
    >
      <circle cx="300" cy="170" r="160" fill="#f7f3ee" stroke="#5d7a6d" strokeWidth="8" />
      <path d="M140 240 L260 235 L205 257 L170 295 L130 300 L120 270 Z" fill="#d9e5d7" stroke="#234553" strokeWidth="5" strokeLinejoin="round" />
      <path d="M242 260 L160 328 C125 342 87 302 103 268 L126 219 L170 224 L180 269 L214 273 Z" fill="#f7f3ee" stroke="#234553" strokeWidth="5" />
      <path d="M292 255 L380 335 C420 344 453 329 470 298 L497 255 L476 236 L440 214 L397 221 L345 229 Z" fill="#f7f3ee" stroke="#234553" strokeWidth="5" />
      <path d="M190 188 C188 150 209 132 240 132 C273 132 291 160 291 188 C291 220 269 230 242 230 C209 231 189 215 190 188 Z" fill="#f8f9f9" stroke="#234553" strokeWidth="5" />
      <circle cx="230" cy="178" r="9" fill="#234553" />
      <circle cx="294" cy="178" r="9" fill="#234553" />
      <path d="M200 217 Q245 247 290 217" fill="none" stroke="#234553" strokeWidth="5" strokeLinecap="round" />
      <path d="M385 188 C384 149 407 131 437 131 C471 131 489 158 489 188 C489 218 468 229 439 229 C407 229 387 214 385 188 Z" fill="#f8f9f9" stroke="#234553" strokeWidth="5" />
      <circle cx="426" cy="178" r="9" fill="#234553" />
      <circle cx="482" cy="178" r="9" fill="#234553" />
      <path d="M390 217 Q438 248 486 216" fill="none" stroke="#234553" strokeWidth="5" strokeLinecap="round" />
      <path d="M158 118 L174 98 L191 118" fill="none" stroke="#5d7a6d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M194 118 L210 93 L227 118" fill="none" stroke="#5d7a6d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M233 118 L249 94 L266 118" fill="none" stroke="#5d7a6d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M371 118 L387 94 L403 118" fill="none" stroke="#5d7a6d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M408 118 L424 92 L440 118" fill="none" stroke="#5d7a6d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M98 316 Q300 286 500 316" fill="none" stroke="#cfaf62" strokeWidth="16" strokeLinecap="round" />
      <path d="M72 318 Q214 280 300 318 Q393 351 528 318" fill="none" stroke="#5d7a6d" strokeWidth="8" strokeLinecap="round" />
      <circle cx="430" cy="110" r="23" fill="#dcb35f" />
      <text x="300" y="380" textAnchor="middle" fill="#1d2a2f" fontSize="54" fontWeight="800" fontFamily="Arial, sans-serif">Tails &amp; Trails</text>
      <text x="300" y="410" textAnchor="middle" fill="#5d7a6d" fontSize="26" fontWeight="700" fontFamily="Arial, sans-serif">Pet Sitting &amp; Dog Walking</text>
    </svg>
  );
}
