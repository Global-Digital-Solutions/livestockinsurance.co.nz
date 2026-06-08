import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'About LivestockInsurance.co.nz | NZ Livestock Insurance Comparison',
  description: 'About LivestockInsurance.co.nz — part of the Cover4You Group. Independent referral service connecting farmers with licensed rural insurance advisers.',
  alternates: { canonical: `${SITE.domain}/about/` },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About LivestockInsurance.co.nz',
  url: `${SITE.domain}/about/`,
  description: 'Independent livestock insurance comparison service for farmers.',
  mainEntity: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
    email: SITE.email,
    areaServed: 'New Zealand',
    description: 'Part of the Cover4You Group. Independent referral service connecting farmers with licensed rural insurance advisers.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-65" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1400&h=500&fit=crop&auto=format&q=80)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">About</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">About LivestockInsurance.co.nz</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            {"independent livestock insurance comparison service — part of the Cover4You Group."}
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none space-y-6 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
            <p className="leading-relaxed">
              LivestockInsurance.co.nz is an independent livestock insurance comparison and referral service operated by the Cover4You Group. We exist to help farmers find the right insurance cover for their livestock — without the pressure of dealing directly with a single insurer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
            <p className="leading-relaxed">
              We connect farmers and livestock owners with licensed rural insurance advisers who specialise in livestock and farm insurance. Our advisers compare providers including FMG, Aon, Gallagher, NZI, and specialist brokers to find the right cover for your situation.
            </p>
            <p className="leading-relaxed">
              We are not a direct insurer and we do not sell insurance policies. We are an independent referral service. The advisers we connect you with hold current Financial Advice Provider (FAP) licences under the Financial Markets Conduct Act 2013.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Why We Exist</h2>
            <p className="leading-relaxed">
              Many farmers are significantly underinsured — either because they assume FMG covers everything, or because comparing providers is time-consuming. Events like Cyclone Gabrielle and the Mycoplasma bovis programme showed what happens when farmers discover their cover is inadequate.
            </p>
            <p className="leading-relaxed">
              Our goal is simple: make it easier for farmers to get the right livestock insurance, from the right provider, at the right price.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">No Cost to You</h2>
            <p className="leading-relaxed">
              Our referral service costs you nothing. Licensed advisers earn a referral fee from the insurer when you take out a policy — you pay nothing extra for using our service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Part of the Cover4You Group</h2>
            <p className="leading-relaxed">
              LivestockInsurance.co.nz is one of several specialist insurance comparison sites operated by the Cover4You Group. Our portfolio includes sites covering public liability, tradie, health, yacht, equine, and other specialist insurance categories.
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
