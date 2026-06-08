import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Livestock Insurance Coverage Types NZ | LivestockInsurance.co.nz',
  description: 'All livestock insurance coverage types in NZ — mortality, disease, natural disaster, transit, liability, and theft cover. Compare and get quotes.',
  alternates: { canonical: `${SITE.domain}/types/` },
};

export default function CoverageTypesPage() {
  return (
    <>
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: `url(https://images.pexels.com/photos/4472994/pexels-photo-4472994.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-gray-200">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-200">Coverage Types</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-white mb-4">Livestock Insurance Coverage Types</h1>
            <p className="text-gray-300 text-lg">
              Understand your options — from basic mortality cover to comprehensive natural disaster and disease protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {COVERAGE_TYPES.map((ct) => (
                  <Link
                    key={ct.slug}
                    href={`/types/${ct.slug}/`}
                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all group"
                  >
                    <div className="text-3xl mb-3">{ct.icon}</div>
                    <h2 className="font-bold text-gray-900 mb-2 group-hover:text-teal-700">{ct.name}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{ct.shortDesc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold" style={{ color: '#0d7377' }}>{ct.fromPrice}</span>
                      <span className="text-xs text-gray-400 group-hover:text-teal-600 font-medium">Learn more &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
