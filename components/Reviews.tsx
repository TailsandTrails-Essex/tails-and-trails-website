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

export default function Reviews() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-navy mb-4">Client Reviews</h2>
        <p className="text-center text-lg text-navy/70 mb-16 max-w-2xl mx-auto">
          Don't just take our word for it—hear from the families we've helped.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-rose-500 text-2xl">
                    ★
                  </span>
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
  );
}
