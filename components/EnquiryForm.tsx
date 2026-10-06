'use client';

import { FormEvent, useState } from 'react';

export function EnquiryForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const response = await fetch('/api/contact', {
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
          Name
          <input name="name" type="text" placeholder="Your full name" required />
        </label>
        <label className="text-sm font-medium text-ink/70">
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-ink/70">
          Phone
          <input name="phone" type="tel" placeholder="Your contact number" />
        </label>
        <label className="text-sm font-medium text-ink/70">
          Service
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Dog Walking</option>
            <option>Pet Sitting</option>
            <option>Doggy Daycare</option>
            <option>All-Animal Care</option>
          </select>
        </label>
      </div>

      <label className="text-sm font-medium text-ink/70">
        Message
        <textarea name="message" rows={5} placeholder="Tell me about your requirements or your animal's needs." required />
      </label>

      <button type="submit" className="rounded-full bg-sage-700 px-5 py-3 font-bold text-white transition hover:bg-sage-800">
        Send Enquiry
      </button>

      {status && <p className="text-sm font-medium text-sage-700">{status}</p>}
    </form>
  );
}
