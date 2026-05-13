'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '0x4AAAAAADMnsakZUoyx534R';

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const cfToken = fd.get('cf-turnstile-response');
    if (!cfToken) {
      setError('Please complete the security check and try again.');
      return;
    }
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });

    setSubmitting(true);
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: 'New Livestock Insurance Quote Request — LivestockInsurance.co.nz',
          cfTurnstileToken: cfToken,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      router.push('/thank-you/');
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="c-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input type="text" id="c-name" name="name" required placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
          <div>
            <label htmlFor="c-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" id="c-phone" name="phone" placeholder="021 xxx xxxx"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
        </div>

        <div>
          <label htmlFor="c-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input type="email" id="c-email" name="email" required placeholder="your@email.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="c-livestock" className="block text-sm font-medium text-gray-700 mb-1">Livestock Type *</label>
            <select id="c-livestock" name="livestock_type" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white">
              <option value="">Select livestock type</option>
              <option value="Dairy Cattle">Dairy Cattle</option>
              <option value="Beef Cattle">Beef Cattle</option>
              <option value="Sheep">Sheep</option>
              <option value="Deer">Deer</option>
              <option value="Goats">Goats</option>
              <option value="Pigs">Pigs</option>
              <option value="Alpacas/Llamas">Alpacas/Llamas</option>
              <option value="Poultry">Poultry</option>
              <option value="Rare Breeds">Rare Breeds</option>
              <option value="Mixed Livestock">Mixed Livestock</option>
            </select>
          </div>
          <div>
            <label htmlFor="c-cover" className="block text-sm font-medium text-gray-700 mb-1">Cover Type *</label>
            <select id="c-cover" name="cover_type" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white">
              <option value="">Select cover type</option>
              <option value="Mortality Cover">Mortality Cover</option>
              <option value="Disease & Illness">Disease &amp; Illness</option>
              <option value="Natural Disaster">Natural Disaster</option>
              <option value="Transit Insurance">Transit Insurance</option>
              <option value="Full Farm Pack">Full Farm Pack</option>
              <option value="Not sure">Not sure — advise me</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="c-message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
          <textarea id="c-message" name="message" rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
            placeholder="Number of animals, current insurer, anything else relevant…" />
        </div>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
        )}

        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
        <div className="flex justify-center">
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-size="invisible" />
        </div>

        <button type="submit" disabled={submitting}
          className="w-full text-white font-bold py-3.5 px-4 rounded-xl text-base bg-teal-700 hover:bg-teal-800 transition-colors disabled:opacity-60">
          {submitting ? 'Sending…' : 'Request My Quotes →'}
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Licensed NZ rural advisers · No obligation · Details kept private
      </p>
    </form>
  );
}
