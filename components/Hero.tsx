export default function Hero({ setActiveTab }: { setActiveTab: (id: string) => void }) {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-cream py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <svg
                viewBox="0 0 600 430"
                className="w-full max-w-md mx-auto md:mx-0"
                aria-label="Tails and Trails logo"
              >
                <circle cx="300" cy="170" r="160" fill="#faf8f3" stroke="#5a9d4a" strokeWidth="8" />
                <path d="M140 240 L260 235 L205 257 L170 295 L130 300 L120 270 Z" fill="#96c380" stroke="#1a2a3a" strokeWidth="5" strokeLinejoin="round" />
                <path d="M242 260 L160 328 C125 342 87 302 103 268 L126 219 L170 224 L180 269 L214 273 Z" fill="#faf8f3" stroke="#1a2a3a" strokeWidth="5" />
                <path d="M292 255 L380 335 C420 344 453 329 470 298 L497 255 L476 236 L440 214 L397 221 L345 229 Z" fill="#faf8f3" stroke="#1a2a3a" strokeWidth="5" />
                <path d="M190 188 C188 150 209 132 240 132 C273 132 291 160 291 188 C291 220 269 230 242 230 C209 231 189 215 190 188 Z" fill="#fff" stroke="#1a2a3a" strokeWidth="5" />
                <circle cx="230" cy="178" r="9" fill="#1a2a3a" />
                <circle cx="294" cy="178" r="9" fill="#1a2a3a" />
                <path d="M385 188 C384 149 407 131 437 131 C471 131 489 158 489 188 C489 218 468 229 439 229 C407 229 387 214 385 188 Z" fill="#fff" stroke="#1a2a3a" strokeWidth="5" />
                <circle cx="426" cy="178" r="9" fill="#1a2a3a" />
                <circle cx="482" cy="178" r="9" fill="#1a2a3a" />
                <circle cx="430" cy="110" r="23" fill="#d4a574" />
              </svg>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight">
              Trusted Care for Your Beloved Pets
            </h2>

            <p className="text-xl text-navy/80 mb-8">
              Professional dog walking, pet sitting, and daycare services for all animals across Essex. We treat every pet like family.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => {
                  setActiveTab('booking');
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary text-lg"
              >
                Book Now
              </button>
              <button
                onClick={() => {
                  setActiveTab('services');
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-outline text-lg"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80"
              alt="Happy dogs playing"
              className="rounded-2xl shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
