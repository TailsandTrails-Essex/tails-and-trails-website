'use client';

import { FormEvent, useState } from 'react';

export function BookingForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setStatus(result.message);

    if (response.ok) {
      form.reset();
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-ink/70">
          Owner Name
          <input name="customerName" type="text" placeholder="Your name" required />
        </label>
        <label className="text-sm font-medium text-ink/70">
          Pet Name
          <input name="petName" type="text" placeholder="Your pet's name" required />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-ink/70">
          Species
          <select name="species" defaultValue="">
            <option value="" disabled>
              Select animal type
            </option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Rabbit</option>
            <option>Bird</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm font-medium text-ink/70">
          Age
          <input name="age" type="text" placeholder="e.g. 3 years" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-ink/70">
          Temperament
          <input name="temperament" type="text" placeholder="Friendly, shy, energetic..." />
        </label>
        <label className="text-sm font-medium text-ink/70">
          Service Type
          <select name="serviceType" defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            <option>Dog Walking</option>
            <option>Pet Sitting</option>
            <option>Doggy Daycare</option>
            <option>Specialist Care</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-ink/70">
          Preferred Date
          <input name="startDate" type="date" required />
        </label>
        <label className="text-sm font-medium text-ink/70">
          Feeding Routine
          <input name="feeding" type="text" placeholder="Meals, treats, schedule" />
        </label>
      </div>

      <label className="text-sm font-medium text-ink/70">
        Illnesses / Ailments / Medication
        <textarea name="medicalNotes" rows={4} placeholder="Mention any medical needs, medications, allergies, or notable concerns." />
      </label>

      <label className="text-sm font-medium text-ink/70">
        Additional Notes
        <textarea name="notes" rows={4} placeholder="Share behavioural notes, routines, emergency contacts, or special handling requirements." />
      </label>

      <button type="submit" className="rounded-full bg-sage-700 px-5 py-3 font-bold text-white transition hover:bg-sage-800">
        Submit Booking Request
      </button>

      {status && <p className="text-sm font-medium text-sage-700">{status}</p>}
    </form>
  );
}
