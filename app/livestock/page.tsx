import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { LIVESTOCK_TYPES } from '@/data/livestock-types';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Livestock Insurance NZ | All Livestock Types | LivestockInsurance.co.nz',
  description: 'Compare livestock insurance for cattle, sheep, deer, goats, pigs, alpacas, poultry and rare breeds in NZ. Free quotes from licensed rural advisers.',
  alternates: { canonical: `${SITE.domain}/livestock/` },
};

export default function LivestockPage() {
  return (
    <>
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-65" style={{ backgroundImage: `url(https://images.pexels.com/photos/671931/pexels-photo-671931.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-gray-200">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-200">Livestock Insurance</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-white mb-4">Livestock Insurance</h1>
            <p className="text-gray-300 text-lg">
              Specialist cover for every type of livestock. Compare providers and get free expert quotes from licensed rural advisers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {LIVESTOCK_TYPES.map((lt) => (
                  <Link
                    key={lt.slug}
                    href={`/livestock/${lt.slug}/`}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={lt.heroImage}
                        alt={lt.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{lt.icon}</span>
                        <h2 className="font-bold text-gray-900 group-hover:text-teal-700">{lt.name}</h2>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{lt.shortDesc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold" style={{ color: '#0d7377' }}>{lt.fromPrice}</span>
                        <span className="text-xs text-gray-400 group-hover:text-teal-600 font-medium">Learn more &rarr;</span>
                      </div>
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
