import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Thank You | LivestockInsurance.co.nz',
  description: 'Thank you for your livestock insurance enquiry. A registered NZ rural insurance broker will be in touch soon.',
  robots: { index: false },
  alternates: { canonical: `${SITE.domain}/thank-you/` },
};

export default function ThankYouPage() {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-4xl font-extrabold text-white mb-4">Thank You!</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Your livestock insurance enquiry has been received. A registered NZ rural insurance broker will be in touch soon.
        </p>
        <div className="bg-gray-800 rounded-xl p-5 mb-8">
          <p className="text-gray-400 text-sm">
            While you wait, explore our guides on livestock insurance coverage types, costs, and how to get the best cover for your farm.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="text-white font-semibold px-5 py-2.5 rounded-lg text-sm" style={{ backgroundColor: '#0d7377' }}>
            Back to Home
          </Link>
          <Link href="/blog/" className="border border-gray-600 text-gray-300 hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
            Read Our Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
