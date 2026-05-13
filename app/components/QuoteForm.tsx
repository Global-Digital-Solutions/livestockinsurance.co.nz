'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '0x4AAAAAADMnsakZUoyx534R';

export default function QuoteForm() {
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
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-full max-w-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Get Your Quotes</h3>
      <p className="text-sm text-gray-500 mb-4">
        Licensed rural insurance advisers — no obligation.
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="021 xxx xxxx"
            />
          </div>

          <div>
            <label htmlFor="livestock_type" className="block text-sm font-medium text-gray-700 mb-1">
              Livestock Type *
            </label>
            <select
              id="livestock_type"
              name="livestock_type"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
            >
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
            <label htmlFor="cover_type" className="block text-sm font-medium text-gray-700 mb-1">
              Cover Type Needed *
            </label>
            <select
              id="cover_type"
              name="cover_type"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
            >
              <option value="">Select cover type</option>
              <option value="Mortality Cover">Mortality Cover</option>
              <option value="Disease & Illness">Disease &amp; Illness</option>
              <option value="Natural Disaster">Natural Disaster</option>
              <option value="Transit Insurance">Transit Insurance</option>
              <option value="Full Farm Pack">Full Farm Pack</option>
              <option value="Not sure">Not sure — advise me</option>
            </select>
          </div>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
          )}

          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
          <div className="flex justify-center">
            <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-size="invisible" />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm mt-2 disabled:opacity-60"
            style={{ backgroundColor: '#0d7377' }}
          >
            {submitting ? 'Sending…' : 'Get My Quotes →'}
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-3 text-center">
          Licensed NZ rural advisers · No obligation
        </p>
      </form>
    </div>
  );
}
