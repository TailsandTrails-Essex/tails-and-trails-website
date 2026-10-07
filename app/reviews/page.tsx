'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const reviews = [
  {
    name: 'Sarah M.',
    pet: 'Max (Golden Retriever)',
    rating: 5,
    text: 'Tails & Trails transformed my dog\'s daily routine. The walks are professional, the updates are reassuring, and Max absolutely loves it!',
  },
  {
    name: 'James & Rachel L.',
    pet: 'Whiskers (Cat)',
    rating: 5,
    text: 'We were nervous leaving our anxious cat with a stranger, but the care and attention Whiskers received was exceptional. We\'ll be booking again!',
  },
  {
    name: 'Emily T.',
    pet: 'Luna & Bella (Puppies)',
    rating: 5,
    text: 'Fantastic service! The puppies are always so happy and tired after their visits. Highly recommend for anyone needing reliable pet care.',
  },
  {
    name: 'David P.',
    pet: 'Biscuit (Rabbit)',
    rating: 5,
    text: 'Professional, caring, and knowledgeable. Biscuit gets excited every time we book. Best money spent!',
  },
];

export default function ReviewsPage() {
  return (
    <main className="bg-cream">
      <Header />

      <section className="py-20 bg-gradient-to-b from-rose-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-navy mb-4">Client Reviews</h1>
          <p className="text-2xl text-navy/70">See what pet owners across Essex have to say</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-rose-50 rounded-2xl p-8 shadow-soft">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-rose-500 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-navy/80 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-navy">{review.name}</p>
                  <p className="text-sm text-sage-600">{review.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
