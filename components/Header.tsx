'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BrandMark } from './BrandMark';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Me' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/reviews', label: 'Reviews' },
];

export default function Header() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-soft sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex-1">
              <div className="h-16">
                <BrandMark />
              </div>
            </Link>
            <button
              onClick={() => setBookingOpen(true)}
              className="btn btn-primary text-lg whitespace-nowrap ml-6"
            >
              Book Now
            </button>
          </div>

          <nav className="flex gap-6 text-lg font-semibold text-navy">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-sage-700 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {bookingOpen && (
        <BookingModal onClose={() => setBookingOpen(false)} />
      )}
    </>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState<'enquiry' | 'booking' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const endpoint = type === 'enquiry' ? '/api/contact' : '/api/booking';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setStatus(result.message);

      if (response.ok) {
        setTimeout(() => onClose(), 2000);
      }
    } catch (error) {
      setStatus('Error submitting form');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-navy">
            {type === null ? 'Get Started' : type === 'enquiry' ? 'Send Enquiry' : 'Book Service'}
          </h2>
          <button
            onClick={onClose}
            className="text-3xl font-bold text-navy hover:text-rose-600"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          {type === null ? (
            <div className="space-y-4">
              <button
                onClick={() => setType('enquiry')}
                className="w-full p-6 bg-rose-50 border-2 border-sage-700 rounded-xl text-left hover:bg-rose-100 transition"
              >
                <h3 className="text-2xl font-bold text-navy mb-2">📧 Send Enquiry</h3>
                <p className="text-navy/70">Have questions? Fill out a form and we'll email you to discuss your needs.</p>
              </button>
              <button
                onClick={() => setType('booking')}
                className="w-full p-6 bg-sage-50 border-2 border-sage-700 rounded-xl text-left hover:bg-sage-100 transition"
              >
                <h3 className="text-2xl font-bold text-navy mb-2">📅 Book Service</h3>
                <p className="text-navy/70">Ready to book? Fill out detailed pet information and select your service.</p>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {type === 'enquiry' ? (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-navy mb-2">Name *</label>
                      <input name="name" type="text" required className="w-full" />
                    </div>
                    <div>
                      <label className="block font-bold text-navy mb-2">Email *</label>
                      <input name="email" type="email" required className="w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-navy mb-2">Service Interest *</label>
                    <select name="service" required className="w-full">
                      <option value="">Select...</option>
                      <option>Dog Walking</option>
                      <option>Pet Sitting</option>
                      <option>Doggy Daycare</option>
                      <option>All-Animal Care</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-navy mb-2">Message *</label>
                    <textarea name="message" rows={4} required className="w-full" />
                  </div>
                </>
              ) : (
                <>
                  <h4 className="font-bold text-lg text-navy mb-4">Pet Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-navy mb-2">Your Name *</label>
                      <input name="customerName" type="text" required className="w-full" />
                    </div>
                    <div>
                      <label className="block font-bold text-navy mb-2">Pet Name *</label>
                      <input name="petName" type="text" required className="w-full" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-navy mb-2">Species *</label>
                      <select name="species" required className="w-full">
                        <option value="">Select...</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Rabbit</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-navy mb-2">Age *</label>
                      <input name="age" type="text" required className="w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-navy mb-2">Temperament</label>
                    <input name="temperament" type="text" className="w-full" />
                  </div>
                  <div>
                    <label className="block font-bold text-navy mb-2">Diet & Feeding</label>
                    <input name="diet" type="text" className="w-full" />
                  </div>
                  <div>
                    <label className="block font-bold text-navy mb-2">Medical Info</label>
                    <textarea name="medicalNotes" rows={2} className="w-full" />
                  </div>
                  <div>
                    <label className="block font-bold text-navy mb-2">Service Type *</label>
                    <select name="serviceType" required className="w-full">
                      <option value="">Select...</option>
                      <option>Dog Walking</option>
                      <option>Pet Sitting</option>
                      <option>Daycare</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-navy mb-2">Preferred Date *</label>
                    <input name="startDate" type="date" required className="w-full" />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full mt-6"
              >
                {isSubmitting ? 'Submitting...' : type === 'enquiry' ? 'Send Enquiry' : 'Submit Booking'}
              </button>

              {status && (
                <p className={`text-center font-semibold ${
                  status.includes('Error') ? 'text-rose-600' : 'text-sage-700'
                }`}>
                  {status}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
