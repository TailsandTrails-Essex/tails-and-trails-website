'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const serviceDetails = {
  'dog-walking': {
    title: 'Dog Walking',
    icon: '🐕',
    description: 'Professional dog walking services tailored to your pet\'s needs',
    fullDescription: 'Our dog walking service is designed to keep your furry friend active, happy, and healthy. We understand that every dog is unique – some need high-energy adventures, while others prefer a leisurely stroll. We tailor each walk to your dog\'s personality, energy level, and health requirements.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Professional handlers with years of experience',
      'Tailored routes based on your dog\'s fitness',
      'Regular photo updates sent to you',
      'Flexible scheduling (weekdays & weekends)',
      'Safe, secure walking practices',
      'Group walks or one-on-one available',
    ],
    pricing: [
      { duration: '30 minute walk (1 dog)', price: '£10' },
      { duration: '1 hour walk (1 dog)', price: '£15' },
      { duration: '30 minute walk (2+ dogs)', price: '£15' },
      { duration: '1 hour walk (2+ dogs)', price: '£20' },
    ],
  },
  'pet-sitting': {
    title: 'Pet Sitting',
    icon: '🏠',
    description: 'In-home pet care while you\'re away',
    fullDescription: 'Our pet sitting service brings professional care directly to your home. Whether you\'re away for a few hours or several days, we ensure your pets are comfortable, fed, and loved in their familiar environment.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
    features: [
      'In-home visits at your preferred times',
      'Feeding and hydration management',
      'Play time and exercise',
      'Medication administration if needed',
      'Regular photo/video updates',
      'Secure key storage',
    ],
    pricing: [
      { duration: '1 visit per day', price: '£10' },
      { duration: '2 visits per day', price: '£15' },
      { duration: '1 hour extended visit', price: '£20' },
      { duration: 'Full day care (8 hours)', price: '£25' },
    ],
  },
  'daycare': {
    title: 'Doggy Daycare',
    icon: '🎾',
    description: 'Fun, social enrichment during the day',
    fullDescription: 'Our daycare facility provides a safe, fun, and socially enriching environment for your dog. With supervised play, exercise, and rest periods, your dog gets the perfect balance of activity and relaxation.',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Supervised play with other dogs',
      'Structured activity schedule',
      'Rest periods throughout the day',
      'Indoor and outdoor facilities',
      'Professional trainers on staff',
      'Individual attention to each dog',
    ],
    pricing: [
      { duration: 'Half day (4 hours)', price: 'From £20' },
      { duration: 'Full day (8 hours)', price: 'From £35' },
      { duration: 'Weekly package (5 days)', price: 'Special rates available' },
      { duration: 'Monthly unlimited', price: 'Contact for quote' },
    ],
  },
  'exotic-care': {
    title: 'Exotic Pets',
    icon: '🐢',
    description: 'Specialist care for all types of animals',
    fullDescription: 'We provide professional care for cats, rabbits, birds, reptiles, and other exotic pets. Our team has specialist knowledge to ensure every animal receives appropriate, species-specific care.',
    image: 'https://images.unsplash.com/photo-1612536315141-e67bc8cc6237?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Species-specific handling techniques',
      'Specialized equipment and enclosure care',
      'Temperature and humidity monitoring',
      'Feeding of specialized diets',
      'Medication administration',
      'Stress-free environment maintenance',
    ],
    pricing: [
      { duration: 'Cats, rabbits, small mammals', price: 'Standard rates + £5-10' },
      { duration: 'Reptiles and amphibians', price: 'Standard rates + £10' },
      { duration: 'Birds', price: 'Standard rates + £10' },
      { duration: 'Fish and aquatic', price: 'Standard rates + £5' },
    ],
  },
};

export default function ServicePage() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <main>
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Service not found</h1>
          <Link href="/" className="btn btn-primary">Back to Home</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-cream">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-50 to-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="text-sage-700 font-bold mb-4 inline-block">← Back</Link>
          <div className="flex items-center gap-6 mb-6">
            <span className="text-6xl">{service.icon}</span>
            <h1 className="text-5xl font-bold text-navy">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <img src={service.image} alt={service.title} className="w-full rounded-2xl shadow-soft" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">About This Service</h2>
              <p className="text-lg text-navy/80 mb-6">{service.fullDescription}</p>
              <h3 className="text-2xl font-bold text-sage-700 mb-4">Why Choose Our {service.title}?</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-navy/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50 rounded-2xl p-8 h-fit">
              <h3 className="text-2xl font-bold text-navy mb-6">Pricing</h3>
              <div className="space-y-4 mb-8">
                {service.pricing.map((item, idx) => (
                  <div key={idx} className="flex justify-between pb-4 border-b border-rose-200">
                    <span className="text-navy/70">{item.duration}</span>
                    <span className="font-bold text-rose-600">{item.price}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary w-full text-lg">Book This Service</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
