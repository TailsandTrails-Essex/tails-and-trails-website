const services = [
  {
    title: 'Dog Walking',
    description: 'Regular, tailored walks for your dog with professional care and attention.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80',
    icon: '🚶',
  },
  {
    title: 'Pet Sitting',
    description: 'In-home visits ensuring your pets are comfortable, safe, and well-cared-for.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80',
    icon: '🏠',
  },
  {
    title: 'Doggy Daycare',
    description: 'A fun, social, and enriching daycare experience for your dog.',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=500&q=80',
    icon: '🎾',
  },
  {
    title: 'All-Animal Care',
    description: 'Specialist care for cats, rabbits, birds, reptiles, and exotic pets.',
    image: 'https://images.unsplash.com/photo-1612536315141-e67bc8cc6237?auto=format&fit=crop&w=500&q=80',
    icon: '🐾',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-navy mb-4">Our Services</h2>
        <p className="text-center text-lg text-navy/70 mb-16 max-w-2xl mx-auto">
          Comprehensive pet care tailored to your animal's unique needs and personality.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gradient-to-b from-rose-50 to-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-2xl font-bold text-sage-700 mb-3">{service.title}</h3>
                <p className="text-navy/70 mb-4">{service.description}</p>
                <a href="#booking" className="text-sage-700 font-bold hover:text-sage-600">
                  Book Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
