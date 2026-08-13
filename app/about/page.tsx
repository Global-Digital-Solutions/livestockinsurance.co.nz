import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'About LivestockInsurance.co.nz | Independent Livestock Insurance Information',
  description: 'About LivestockInsurance.co.nz — part of the Cover4You Group. Independent livestock insurance information for NZ farmers.',
  alternates: { canonical: `${SITE.domain}/about/` },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About LivestockInsurance.co.nz',
  url: `${SITE.domain}/about/`,
  description: 'Independent livestock insurance information site for farmers.',
  mainEntity: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
    email: SITE.email,
    areaServed: 'New Zealand',
    description: 'Independent livestock insurance information for NZ farmers, operated by Cover4You.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1400&h=500&fit=crop&auto=format&q=80)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/75 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">About LivestockInsurance.co.nz</h1>
          <p className="text-white text-lg max-w-2xl">
            {"Independent livestock insurance information site — part of the Cover4You Group."}
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none space-y-6 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
            <p className="leading-relaxed">
              LivestockInsurance.co.nz is an independent livestock insurance information site operated by the Cover4You Group. We publish general information about livestock and farm insurance in New Zealand to help farmers understand what cover is available and how to find it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
            <p className="leading-relaxed">
              We publish independent information about livestock insurance in New Zealand — what cover exists, what it typically includes and excludes, and how to find a qualified professional who can arrange it.
            </p>
            <p className="leading-relaxed">
              We are not an insurer, a broker, or a licensed financial adviser. We do not sell policies, arrange cover, or provide advice. Some insurers deal directly with farmers; others write only through brokers. Where you need advice, use someone who holds a Financial Advice Provider (FAP) licence under the Financial Markets Conduct Act 2013 — you can verify this on the Financial Service Providers Register.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Why We Exist</h2>
            <p className="leading-relaxed">
              Many farmers are significantly underinsured — either because they go with whoever is easiest to reach, or because understanding the options takes time they don't have. Events like Cyclone Gabrielle and the Mycoplasma bovis programme showed what happens when cover is inadequate.
            </p>
            <p className="leading-relaxed">
              Good information is the starting point. This site aims to give farmers a clear picture of what livestock insurance exists, so conversations with a broker or insurer start from an informed position.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Broker Fees</h2>
            <p className="leading-relaxed">
              If you use a broker to arrange insurance, brokers are typically remunerated by the insurer through brokerage — there is usually no direct fee to you. Ask your broker to confirm their remuneration arrangements before proceeding.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Part of the Cover4You Group</h2>
            <p className="leading-relaxed">
              LivestockInsurance.co.nz is one of several specialist insurance information sites operated by the Cover4You Group. Our portfolio includes sites covering public liability, tradie, health, yacht, equine, and other specialist insurance categories.
            </p>
            <p className="leading-relaxed">
              Contact us: <a href="mailto:hello@cover4you.co.nz" className="hover:underline" style={{ color: '#0d7377' }}>hello@cover4you.co.nz</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
