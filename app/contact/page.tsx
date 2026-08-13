import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';
import HoldingPanel from '../components/HoldingPanel';

export const metadata: Metadata = {
  title: 'Contact | LivestockInsurance.co.nz',
  description: 'Find a livestock insurance specialist. Information on licensed brokers, the FSP register, and going direct to insurers.',
  alternates: { canonical: `${SITE.domain}/contact/` },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact LivestockInsurance.co.nz',
  url: `${SITE.domain}/contact/`,
  description: 'Find a livestock insurance specialist.',
  mainEntity: {
    '@type': 'Organization',
    name: SITE.name,
    email: SITE.email,
    url: SITE.domain,
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />

      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/19292063/pexels-photo-19292063.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop)` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Contact</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Find a Livestock Insurance Specialist</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Livestock cover is a specialist area. Use the options below to find the right adviser or insurer for your situation.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* HoldingPanel - wider column */}
            <div className="lg:col-span-3">
              <HoldingPanel />
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">About this site</h2>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">🌾</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Rural insurance information</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">LivestockInsurance.co.nz provides independent information on livestock insurance options in New Zealand. We are not an insurer and do not arrange cover directly.</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">🔍</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Independent</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">We are not owned by or affiliated with any insurer or broker. The information on this site is provided as a starting point for your research.</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">🇳🇿</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">NZ owned and operated</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">This site is operated by Cover4You, a New Zealand business.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email direct */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed">
                  <strong className="text-gray-700 block mb-1">General enquiries</strong>
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
