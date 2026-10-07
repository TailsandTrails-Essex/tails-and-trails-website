'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const services = [
  {
    id: 'dog-walking',
    title: 'Dog Walking',
    icon: '🐕',
    description: 'Professional walks tailored to your dog\'s energy and needs',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    pricing: [
      { duration: '30 mins (1 dog)', price: '£10' },
      { duration: '1 hour (1 dog)', price: '£15' },
      { duration: '30 mins (2+ dogs)', price: '£15' },
      { duration: '1 hour (2+ dogs)', price: '£20' },
    ],
  },
  {
    id: 'pet-sitting',
    title: 'Pet Sitting',
    icon: '🏠',
    description: 'In-home care while you\'re away',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    pricing: [
      { duration: '1 visit/day', price: '£10' },
      { duration: '2 visits/day', price: '£15' },
      { duration: '1 hour extended', price: '£20' },
      { duration: 'Full day', price: '£25' },
    ],
  },
  {
    id: 'daycare',
    title: 'Doggy Daycare',
    icon: '🎾',
    description: 'Fun, social enrichment for your dog',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    pricing: [
      { duration: 'Half day (4 hrs)', price: 'From £20' },
      { duration: 'Full day (8 hrs)', price: 'From £35' },
      { duration: 'Weekly packages', price: 'Discount rates' },
    ],
  },
  {
    id: 'exotic-care',
    title: 'Exotic Pets',
    icon: '🐢',
    description: 'Specialist care for cats, rabbits, birds & more',
    image: 'https://images.unsplash.com/photo-1612536315141-e67bc8cc6237?auto=format&fit=crop&w=800&q=80',
    pricing: [
      { duration: 'Reptiles/Birds', price: '+£10' },
      { duration: 'Small mammals', price: '+£10' },
      { duration: 'Fish', price: '+£5' },
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-cream text-navy">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-50 to-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-navy mb-4">
              Trusted Pet Care Across Essex
            </h1>
            <p className="text-2xl text-navy/70 mb-8">
              Dog walking, pet sitting, and daycare for all your furry friends
            </p>
            <Link
              href="#services"
              className="btn btn-primary text-xl inline-block"
            >
              Explore Services
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80"
            alt="Happy pets"
            className="w-full rounded-2xl shadow-soft"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-xl text-navy/70 mb-16">Choose the perfect care for your pet</p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gradient-to-b from-rose-50 to-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all">
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{service.icon}</span>
                    <h3 className="text-3xl font-bold text-sage-700">{service.title}</h3>
                  </div>
                  <p className="text-navy/70 mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.pricing.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm text-navy/70">
                        <span>{item.duration}</span>
                        <span className="font-bold text-rose-600">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="btn btn-primary w-full text-center mb-3"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sage-700 to-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Give Your Pet Premium Care?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of happy pet owners across Essex who trust us with their beloved animals</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn bg-rose-600 text-white hover:bg-rose-700 text-lg">Book Now</button>
            <button className="btn bg-white text-sage-700 hover:bg-gray-100 text-lg">Get in Touch</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
