import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Get Livestock Insurance Quotes NZ | Expert Comparison | LivestockInsurance.co.nz',
  description: 'Get livestock insurance quotes from licensed rural insurance advisers. Compare FMG, Aon, Gallagher and NZI. No obligation.',
  alternates: { canonical: `${SITE.domain}/contact/` },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Get Livestock Insurance Quotes',
  url: `${SITE.domain}/contact/`,
  description: 'Livestock insurance quotes from licensed NZ rural advisers.',
  mainEntity: {
    '@type': 'Organization',
    name: SITE.name,
    email: SITE.email,
    url: SITE.domain,
  },
};

const trustPills = [
  'Licensed NZ Advisers',
  'Response Within 24hrs',
  'No Obligation',
  'Independent Comparison',
  'Rural Specialists',
];

const trustItems = [
  {
    icon: '🏅',
    title: 'Licensed NZ Advisers',
    desc: 'All advisers are licensed under the Financial Markets Conduct Act 2013 and hold current FAP licences.',
  },
  {
    icon: '⏰',
    title: 'Response Within 24 Hours',
    desc: 'A licensed adviser will contact you within 24 business hours of your enquiry — often the same day.',
  },
  {
    icon: '🔍',
    title: 'Independent Comparison',
    desc: 'We compare FMG, Aon, Gallagher, NZI, and specialist brokers — not tied to any single insurer.',
  },
  {
    icon: '🌾',
    title: 'Rural Specialists',
    desc: 'Advisers who specialise in rural and livestock insurance and understand the realities of farming.',
  },
  {
    icon: '🔒',
    title: 'Your Details Are Safe',
    desc: 'We only share your enquiry with licensed advisers. Your information is never sold or shared with third parties.',
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />

      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(https://images.pexels.com/photos/19292063/pexels-photo-19292063.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Get Quotes</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Get Livestock Insurance Quotes</h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-5">
            Licensed rural insurance advisers will compare FMG, Aon, Gallagher and NZI — and find the right cover for your livestock.
          </p>
          {/* Trust pills in hero */}
          <div className="flex flex-wrap gap-2">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center space-x-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
              >
                <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{pill}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Trust badge strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { icon: '🏅', label: 'Licensed Advisers' },
              { icon: '⏰', label: '24hr Response' },
              { icon: '🔍', label: 'Independent' },
              { icon: '🔒', label: 'Details Secure' },
            ].map((b) => (
              <div
                key={b.label}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center space-x-3 shadow-sm"
              >
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <span className="text-sm font-semibold text-gray-800">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form — wider column */}
            <div className="lg:col-span-3">
              <div className="bg-white border-2 border-teal-600 rounded-2xl shadow-xl p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Request Quotes</h2>
                  <p className="text-gray-500 text-sm">Licensed advisers will get back to you within 24 hours.</p>
                </div>

                <form method="POST" action={SITE.workerUrl}>
                  <input type="hidden" name="_cc" value={SITE.formCC} />
                  <input type="hidden" name="_subject" value={SITE.formSubject} />
                  <input type="hidden" name="_next" value={SITE.formNext} />

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text" id="c-name" name="name" required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="c-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel" id="c-phone" name="phone"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                          placeholder="021 xxx xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email" id="c-email" name="email" required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-livestock" className="block text-sm font-medium text-gray-700 mb-1">Livestock Type *</label>
                        <select
                          id="c-livestock" name="livestock_type" required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
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
                        <label htmlFor="c-cover" className="block text-sm font-medium text-gray-700 mb-1">Cover Type *</label>
                        <select
                          id="c-cover" name="cover_type" required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
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
                    </div>

                    <div>
                      <label htmlFor="c-message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                      <textarea
                        id="c-message" name="message" rows={3}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                        placeholder="Number of animals, current insurer, anything else relevant…"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white font-bold py-3.5 px-4 rounded-xl text-base bg-teal-700 hover:bg-teal-800 transition-colors"
                    >
                      Request My Quotes →
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 mt-4 text-center">
                    Licensed NZ rural advisers · No obligation · Details kept private
                  </p>
                </form>
              </div>
            </div>

            {/* Trust sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Why LivestockInsurance.co.nz?</h2>
                <div className="space-y-4">
                  {trustItems.map((item) => (
                    <div key={item.title} className="flex space-x-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Providers block */}
              <div className="bg-gray-900 rounded-xl p-5">
                <h3 className="font-bold text-white mb-3 text-sm">Providers We Compare</h3>
                <div className="space-y-2">
                  {[
                    { name: 'FMG', tag: 'Market Leader' },
                    { name: 'Aon', tag: 'Global Reach' },
                    { name: 'Gallagher', tag: 'Specialist Cover' },
                    { name: 'NZI', tag: 'Farm Packs' },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-sm font-semibold">{p.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{p.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email direct */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed">
                  <strong className="text-gray-700 block mb-1">Prefer to email directly?</strong>
                  <a href={`mailto:${SITE.email}`} className="font-medium hover:underline" style={{ color: '#0d7377' }}>{SITE.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
