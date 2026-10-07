'use client';

import { useState } from 'react';

export default function Booking() {
  const [formType, setFormType] = useState<'enquiry' | 'booking'>('enquiry');
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const endpoint = formType === 'enquiry' ? '/api/contact' : '/api/booking';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setStatus(result.message || (formType === 'enquiry' ? 'Enquiry sent!' : 'Booking submitted!'));

      if (response.ok) {
        e.currentTarget.reset();
      }
    } catch (error) {
      setStatus('Something went wrong. Please email hello@essex-tailsandtrails.com');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-navy mb-4">Book Your Service</h2>
        <p className="text-center text-lg text-navy/70 mb-12">
          Get in touch with us about your pet care needs.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => setFormType('enquiry')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              formType === 'enquiry'
                ? 'bg-sage-700 text-white'
                : 'bg-gray-100 text-navy hover:bg-gray-200'
            }`}
          >
            Enquiry Form
          </button>
          <button
            onClick={() => setFormType('booking')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              formType === 'booking'
                ? 'bg-sage-700 text-white'
                : 'bg-gray-100 text-navy hover:bg-gray-200'
            }`}
          >
            Service Booking
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-rose-50 rounded-2xl p-10 shadow-soft">
          {formType === 'enquiry' ? (
            <>
              <h3 className="text-2xl font-bold text-navy mb-6">General Enquiry</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label>Your Name *</label>
                  <input name="name" type="text" required />
                </div>
                <div>
                  <label>Email Address *</label>
                  <input name="email" type="email" required />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input name="phone" type="tel" />
                </div>
                <div>
                  <label>Service Interest *</label>
                  <select name="service" required>
                    <option value="">Select a service</option>
                    <option>Dog Walking</option>
                    <option>Pet Sitting</option>
                    <option>Doggy Daycare</option>
                    <option>All-Animal Care</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label>Message *</label>
                <textarea name="message" rows={5} required />
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-navy mb-6">Service Booking</h3>

              <div className="mb-8 pb-8 border-b-2 border-sage-200">
                <h4 className="text-xl font-bold text-sage-700 mb-4">Owner Details</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label>Your Name *</label>
                    <input name="ownerName" type="text" required />
                  </div>
                  <div>
                    <label>Email Address *</label>
                    <input name="ownerEmail" type="email" required />
                  </div>
                  <div>
                    <label>Phone Number *</label>
                    <input name="ownerPhone" type="tel" required />
                  </div>
                  <div>
                    <label>Address</label>
                    <input name="ownerAddress" type="text" />
                  </div>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b-2 border-sage-200">
                <h4 className="text-xl font-bold text-sage-700 mb-4">Pet Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label>Pet Name *</label>
                    <input name="petName" type="text" required />
                  </div>
                  <div>
                    <label>Species *</label>
                    <select name="species" required>
                      <option value="">Select species</option>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Rabbit</option>
                      <option>Bird</option>
                      <option>Reptile</option>
                      <option>Small Mammal</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label>Age *</label>
                    <input name="petAge" type="text" placeholder="e.g. 3 years" required />
                  </div>
                  <div>
                    <label>Breed</label>
                    <input name="petBreed" type="text" />
                  </div>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b-2 border-sage-200">
                <h4 className="text-xl font-bold text-sage-700 mb-4">Behaviour & Temperament</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label>Temperament *</label>
                    <input
                      name="temperament"
                      type="text"
                      placeholder="e.g. friendly, shy, energetic, anxious"
                      required
                    />
                  </div>
                  <div>
                    <label>Energy Level *</label>
                    <select name="energyLevel" required>
                      <option value="">Select energy level</option>
                      <option>Low (calm, relaxed)</option>
                      <option>Medium (moderate activity)</option>
                      <option>High (very active)</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label>Special Behaviours or Triggers</label>
                  <textarea name="behaviours" rows={3} placeholder="Any anxieties, fears, or special handling needs?" />
                </div>
              </div>

              <div className="mb-8 pb-8 border-b-2 border-sage-200">
                <h4 className="text-xl font-bold text-sage-700 mb-4">Care & Health</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label>Usual Routine *</label>
                    <input
                      name="routine"
                      type="text"
                      placeholder="e.g. walks at 8am, 12pm, 6pm"
                      required
                    />
                  </div>
                  <div>
                    <label>Diet *</label>
                    <input
                      name="diet"
                      type="text"
                      placeholder="e.g. dry food, wet food, specific brand"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label>Feeding Schedule *</label>
                  <input
                    name="feedingSchedule"
                    type="text"
                    placeholder="e.g. twice daily at 8am and 6pm"
                    required
                  />
                </div>
              </div>

              <div className="mb-8 pb-8 border-b-2 border-sage-200">
                <h4 className="text-xl font-bold text-sage-700 mb-4">Medical & Health Info</h4>
                <div>
                  <label>Known Illnesses or Conditions</label>
                  <textarea
                    name="illnesses"
                    rows={3}
                    placeholder="Any allergies, joint issues, digestive problems, etc."
                  />
                </div>
                <div className="mt-6">
                  <label>Current Medications</label>
                  <textarea
                    name="medications"
                    rows={3}
                    placeholder="List any medications with dosage and times"
                  />
                </div>
                <div className="mt-6">
                  <label>Veterinary Notes</label>
                  <textarea
                    name="vetNotes"
                    rows={3}
                    placeholder="Any other health or care information we should know?"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-sage-700 mb-4">Service Details</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label>Service Type *</label>
                    <select name="serviceType" required>
                      <option value="">Select service</option>
                      <option>Dog Walking (30 mins)</option>
                      <option>Dog Walking (1 hour)</option>
                      <option>Pet Sitting (1 visit)</option>
                      <option>Pet Sitting (2 visits)</option>
                      <option>Extended Visit (1 hour)</option>
                      <option>Full Day Care</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label>Preferred Start Date *</label>
                    <input name="startDate" type="date" required />
                  </div>
                </div>
              </div>
            </>
          )}

          <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full text-lg">
            {isSubmitting ? 'Submitting...' : formType === 'enquiry' ? 'Send Enquiry' : 'Submit Booking'}
          </button>

          {status && (
            <p className={`text-center mt-4 font-semibold ${
              status.includes('Something') ? 'text-rose-600' : 'text-sage-700'
            }`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
