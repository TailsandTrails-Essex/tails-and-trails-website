'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Booking from '@/components/Booking';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About Me' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'booking', label: 'Booking' },
  { id: 'community', label: 'Community' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <main className="bg-cream text-navy">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      <div id="home">
        <Hero setActiveTab={setActiveTab} />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="reviews">
        <Reviews />
      </div>

      <div id="booking">
        <Booking />
      </div>

      <div id="community">
        <Community />
      </div>

      <Footer />
    </main>
  );
}
