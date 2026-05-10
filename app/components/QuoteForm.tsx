'use client';

import { SITE } from '@/data/site';

export default function QuoteForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-full max-w-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Get Your Quotes</h3>
      <p className="text-sm text-gray-500 mb-4">
        Licensed rural insurance advisers — no obligation.
      </p>
      <form
        method="POST"
        action={SITE.workerUrl}
      >
        <input type="hidden" name="_cc" value={SITE.formCC} />
        <input type="hidden" name="_subject" value={SITE.formSubject} />
        <input type="hidden" name="_next" value={SITE.formNext} />

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

          <button
            type="submit"
            className="w-full text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm mt-2"
            style={{ backgroundColor: '#0d7377' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0a5f63')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0d7377')}
          >
            Get My Quotes →
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-3 text-center">
          Licensed NZ rural advisers · No obligation
        </p>
      </form>
    </div>
  );
}
