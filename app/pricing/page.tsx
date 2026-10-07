'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <main className="bg-cream">
      <Header />

      <section className="py-20 bg-gradient-to-b from-rose-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-navy mb-8">Pricing & Services</h1>
          <p className="text-2xl text-navy/70">Affordable, professional pet care for Essex</p>
        </div>
      </section>

      {/* Pricing Image */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <img
            src="https://images.unsplash.com/photo-1607863680198-23d76319b939?auto=format&fit=crop&w=1200&q=80"
            alt="Service Pricing"
            className="w-full rounded-2xl shadow-soft mb-12"
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dog Walking */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-sage-700 mb-6">🐕 Dog Walking</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">30 mins - 1 Dog</p>
                  <p className="text-2xl font-bold text-rose-600">£10</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">1 Hour - 1 Dog</p>
                  <p className="text-2xl font-bold text-rose-600">£15</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">30 mins - 2+ Dogs</p>
                  <p className="text-2xl font-bold text-rose-600">£15</p>
                </div>
                <div>
                  <p className="text-sm text-navy/60 mb-1">1 Hour - 2+ Dogs</p>
                  <p className="text-2xl font-bold text-rose-600">£20</p>
                </div>
              </div>
            </div>

            {/* Pet Sitting */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-sage-700 mb-6">🏠 Pet Sitting</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">1 Visit/Day</p>
                  <p className="text-2xl font-bold text-rose-600">£10</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">2 Visits/Day</p>
                  <p className="text-2xl font-bold text-rose-600">£15</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">1 Hour Extended</p>
                  <p className="text-2xl font-bold text-rose-600">£20</p>
                </div>
                <div>
                  <p className="text-sm text-navy/60 mb-1">Full Day (8 hrs)</p>
                  <p className="text-2xl font-bold text-rose-600">£25</p>
                </div>
              </div>
            </div>

            {/* Daycare */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-sage-700 mb-6">🎾 Doggy Daycare</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">Half Day (4 hrs)</p>
                  <p className="text-2xl font-bold text-rose-600">From £20</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">Full Day (8 hrs)</p>
                  <p className="text-2xl font-bold text-rose-600">From £35</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-navy/60 mb-1">Weekly Package</p>
                  <p className="text-2xl font-bold text-rose-600">Discounted</p>
                </div>
                <div>
                  <p className="text-sm text-navy/60 mb-1">Monthly Unlimited</p>
                  <p className="text-sm text-navy/70">Contact for quote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
