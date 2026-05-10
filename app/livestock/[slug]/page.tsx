import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { LIVESTOCK_TYPES } from '@/data/livestock-types';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return LIVESTOCK_TYPES.map((lt) => ({ slug: lt.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const lt = LIVESTOCK_TYPES.find((l) => l.slug === params.slug);
  if (!lt) return {};
  return {
    title: lt.metaTitle,
    description: lt.metaDesc,
    alternates: { canonical: `${SITE.domain}/livestock/${lt.slug}/` },
  };
}

export default function LivestockTypePage({ params }: { params: { slug: string } }) {
  const lt = LIVESTOCK_TYPES.find((l) => l.slug === params.slug);
  if (!lt) notFound();

  const relatedCoverage = COVERAGE_TYPES.filter((ct) => lt.coverageTypes.includes(ct.slug));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Livestock Insurance', item: `${SITE.domain}/livestock/` },
      { '@type': 'ListItem', position: 3, name: lt.name, item: `${SITE.domain}/livestock/${lt.slug}/` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: lt.name,
    description: lt.description,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
    },
    areaServed: 'New Zealand',
    offers: {
      '@type': 'Offer',
      description: lt.fromPrice,
    },
  };

  const animalLabel = lt.name.replace(/ Insurance$/, '');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${lt.heroImage})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/livestock/" className="hover:text-gray-200">Livestock Insurance</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{lt.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-5xl mb-3">{lt.icon}</div>
              <h1 className="text-4xl font-extrabold text-white mb-4">{lt.name}</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">{lt.shortDesc}</p>
              <p className="text-2xl font-bold" style={{ color: '#0d7377' }}>{lt.fromPrice}</p>
            </div>
            <div className="flex justify-end">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {lt.name}</h2>
                <p className="text-gray-600 leading-relaxed">{lt.description}</p>
              </div>

              {/* Key Facts */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Key Facts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lt.keyFacts.map((fact) => (
                    <div key={fact} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Coverage */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Coverage Types</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedCoverage.map((ct) => (
                    <Link
                      key={ct.slug}
                      href={`/types/${ct.slug}/`}
                      className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xl">{ct.icon}</span>
                        <h3 className="font-semibold text-gray-900 text-sm group-hover:text-teal-700">{ct.name}</h3>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{ct.shortDesc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-4">
                <QuoteForm />
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">Why Use LivestockInsurance.co.nz?</h3>
                  <ul className="space-y-1.5">
                    {['Free to use', 'Licensed advisers', 'Compare FMG, Aon, Gallagher & NZI', 'Specialist rural knowledge', 'Response within 24 hours'].map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-xs text-gray-600">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: '#0d7377' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Insure Your {animalLabel} — Get Quotes Today</h2>
          <p className="text-teal-100 mb-6">Compare cover from FMG, Aon, Gallagher and NZI — free quotes from licensed NZ rural advisers.</p>
          <Link href="/contact/" className="inline-block bg-white font-bold px-6 py-3 rounded-xl" style={{ color: '#0d7377' }}>
            Get Free Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
