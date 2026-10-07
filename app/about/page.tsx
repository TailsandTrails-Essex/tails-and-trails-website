'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <Header />

      <section className="py-20 bg-gradient-to-b from-rose-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-navy mb-8">About Me</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1494842494f3ba55f96ad7264e2b66183d32c8867?auto=format&fit=crop&w=600&q=80"
              alt="Tails & Trails"
              className="rounded-2xl shadow-soft"
            />
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Meet Your Pet\'s New Family</h2>
              <p className="text-lg text-navy/80 mb-6">
                Hi! I\'m the founder of Tails & Trails, and I\'ve dedicated my life to providing exceptional care for pets across Essex. With years of experience in animal care, I understand that every pet is unique.
              </p>
              <p className="text-lg text-navy/80 mb-6">
                Whether your dog needs an energetic walk, your cat needs a gentle visit while you\'re away, or your exotic pet needs specialist attention, I\'m here to help. My approach is simple: treat every animal like family.
              </p>
              <p className="text-lg text-navy/80 mb-8">
                I take time to understand each pet\'s personality, routine, and special needs to ensure they\'re always happy, healthy, and well-cared-for.
              </p>

              <div className="bg-rose-50 rounded-xl p-6">
                <h3 className="font-bold text-sage-700 text-xl mb-4">Why Tails & Trails?</h3>
                <ul className="space-y-2 text-navy/70">
                  <li>✓ Fully insured and certified</li>
                  <li>✓ Personalized care plans</li>
                  <li>✓ Regular updates & photos</li>
                  <li>✓ Experience with all animals</li>
                  <li>✓ Local, reliable service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
