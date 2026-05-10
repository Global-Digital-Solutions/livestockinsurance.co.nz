import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { LIVESTOCK_TYPES } from '@/data/livestock-types';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return COVERAGE_TYPES.map((ct) => ({ slug: ct.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ct = COVERAGE_TYPES.find((c) => c.slug === params.slug);
  if (!ct) return {};
  return {
    title: ct.metaTitle,
    description: ct.metaDesc,
    alternates: { canonical: `${SITE.domain}/types/${ct.slug}/` },
    openGraph: {
      title: ct.metaTitle,
      description: ct.metaDesc,
      url: `${SITE.domain}/types/${ct.slug}/`,
      type: 'article',
    },
  };
}

const providerInfo: Record<string, { name: string; note: string }[]> = {
  'mortality-cover': [
    { name: 'FMG', note: 'Market leader for NZ rural livestock mortality. Optional infertility cover available. Best for cattle, sheep and deer farmers.' },
    { name: 'Aon', note: 'Good for high-value individual animals requiring agreed value cover. Lloyd\'s markets available.' },
    { name: 'Gallagher', note: 'Best for exotic livestock and high agreed-value stud animals. Specialist underwriter access.' },
    { name: 'NZI', note: 'Competitive farm pack pricing with mortality bundled. Good for standard herd or flock cover.' },
  ],
  'disease-illness': [
    { name: 'FMG', note: 'Specific Mycoplasma bovis and notifiable disease endorsements available. Market-leading rural expertise.' },
    { name: 'Aon', note: 'Access to specialist underwriters for complex disease scenarios, including poultry and pig operations.' },
    { name: 'Gallagher', note: 'Good for poultry and pig intensive farming disease risk. Specialist broker with global connections.' },
    { name: 'NZI', note: 'Farm pack includes basic disease cover as standard. Good value for standard operations.' },
  ],
  'transit-insurance': [
    { name: 'FMG', note: 'Comprehensive transit cover included in farm pack or as add-on. Covers saleyards and processing.' },
    { name: 'Aon', note: 'Good for specialist or high-value transit scenarios. Access to specialist markets.' },
    { name: 'Gallagher', note: 'Best for show animals travelling on the circuit. Specialist show cover available.' },
    { name: 'NZI', note: 'Transit cover available as standalone or farm pack add-on. Competitive pricing.' },
  ],
  'natural-disaster': [
    { name: 'FMG', note: 'NZ-specific natural disaster cover including post-shearing exposure for sheep. Best rural specialist.' },
    { name: 'Aon', note: 'Lloyd\'s markets available for large-scale natural disaster coverage. High-limit options.' },
    { name: 'Gallagher', note: 'Specialist cover for farms in high-risk regions — East Coast, Hawke\'s Bay, and high country.' },
    { name: 'NZI', note: 'Natural disaster extension available on farm policies. Good for standard cover requirements.' },
  ],
  'public-liability': [
    { name: 'FMG', note: 'Public liability included in most FMG farm pack policies. $1M–$10M limits available.' },
    { name: 'Aon', note: 'Higher limits available for large commercial operations and deer farms.' },
    { name: 'Gallagher', note: 'Specialist cover for deer farmers and high-escape-risk livestock. Good for complex operations.' },
    { name: 'NZI', note: 'Competitive liability pricing in farm pack policies. Good for standard farm operations.' },
  ],
  'theft-cover': [
    { name: 'FMG', note: 'Theft cover available as part of comprehensive farm pack. Good for standard herd/flock cover.' },
    { name: 'Aon', note: 'Good for high-value stud animals requiring agreed-value theft cover.' },
    { name: 'Gallagher', note: 'Specialist theft cover for rare breeds and show animals. Agreed-value options.' },
    { name: 'NZI', note: 'Theft cover available on most livestock policies. Competitive pricing in farm packs.' },
  ],
};

export default function CoverageTypePage({ params }: { params: { slug: string } }) {
  const ct = COVERAGE_TYPES.find((c) => c.slug === params.slug);
  if (!ct) notFound();

  const providers = providerInfo[ct.slug] || [];
  const relatedLivestockTypes = LIVESTOCK_TYPES.filter((lt) => lt.coverageTypes.includes(ct.slug)).slice(0, 4);
  const relatedPosts = ct.longForm?.relatedBlogs
    ? BLOG_POSTS.filter((p) => ct.longForm!.relatedBlogs.includes(p.slug)).slice(0, 4)
    : [];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Coverage Types', item: `${SITE.domain}/types/` },
      { '@type': 'ListItem', position: 3, name: ct.name, item: `${SITE.domain}/types/${ct.slug}/` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: ct.name,
    description: ct.metaDesc,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    offers: {
      '@type': 'Offer',
      description: ct.fromPrice,
      priceCurrency: 'NZD',
    },
    url: `${SITE.domain}/types/${ct.slug}/`,
  };

  const faqSchema = ct.longForm?.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ct.longForm.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: ct.metaTitle,
    description: ct.metaDesc,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
    },
    dateModified: '2026-05-10',
    url: `${SITE.domain}/types/${ct.slug}/`,
    inLanguage: 'en-NZ',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/types/" className="hover:text-gray-200">Coverage Types</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{ct.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-teal-900/50 border border-teal-600/40 text-teal-300 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Licensed NZ Rural Insurance Advisers</span>
              </div>
              <div className="text-5xl mb-3">{ct.icon}</div>
              <h1 className="text-4xl font-extrabold text-white mb-4">{ct.name} NZ</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">{ct.shortDesc}</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                  💲 {ct.fromPrice}
                </span>
                <span className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                  ⚖️ FMCA Licensed
                </span>
                <span className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                  ⏰ 24hr Response
                </span>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-10">

              {/* Long-form Intro */}
              {ct.longForm?.intro ? (
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">About {ct.name} in New Zealand</h2>
                  <div className="space-y-4">
                    {ct.longForm.intro.map((para, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed text-base">{para}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {ct.name}</h2>
                  <p className="text-gray-600 leading-relaxed">{ct.description}</p>
                </div>
              )}

              {/* What's Covered Cards */}
              {ct.longForm?.whatsCovered ? (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">What Does {ct.name} Cover?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ct.longForm.whatsCovered.map((item) => (
                      <div key={item.title} className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 hover:shadow-sm transition-all">
                        <div className="flex items-center space-x-2 mb-2">
                          <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">What It Covers</h2>
                  <ul className="space-y-2">
                    {ct.whatCovers.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What's Excluded */}
              {ct.longForm?.whatsExcluded && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Common Exclusions to Be Aware Of</h2>
                  <ul className="space-y-2">
                    {ct.longForm.whatsExcluded.map((excl) => (
                      <li key={excl} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{excl}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm mt-4">A licensed rural insurance adviser can explain exactly what is and isn&apos;t covered under any policy before you commit.</p>
                </div>
              )}

              {/* Who Needs This */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Who Needs {ct.name}?</h2>
                <ul className="space-y-2">
                  {ct.whoNeeds.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost Guide */}
              {ct.longForm?.costGuide && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Does {ct.name} Cost?</h2>
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed">{ct.longForm.costGuide}</p>
                    <div className="mt-4">
                      <Link
                        href="/contact/"
                        className="inline-flex items-center space-x-2 text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
                        style={{ backgroundColor: '#0d7377' }}
                      >
                        <span>Get a Quote</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Providers */}
              {providers.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Providers for {ct.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {providers.map((p) => (
                      <div key={p.name} className="border border-gray-200 rounded-xl p-4">
                        <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{p.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* How to Get Covered */}
              {ct.longForm?.howToGetCovered && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">How to Get {ct.name} in New Zealand</h2>
                  <div className="space-y-4">
                    {ct.longForm.howToGetCovered.map((step, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: '#0d7377' }}
                        >
                          {i + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/contact/"
                      className="inline-flex items-center space-x-2 text-white font-bold px-6 py-3 rounded-xl text-sm"
                      style={{ backgroundColor: '#0d7377' }}
                    >
                      <span>Request My Quotes</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}

              {/* Related Livestock Types */}
              {relatedLivestockTypes.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Livestock Types That Need {ct.name}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {relatedLivestockTypes.map((lt) => (
                      <Link
                        key={lt.slug}
                        href={`/livestock/${lt.slug}/`}
                        className="border border-gray-200 rounded-xl p-3 text-center hover:border-teal-300 hover:shadow-sm transition-all group"
                      >
                        <div className="text-2xl mb-1">{lt.icon}</div>
                        <p className="text-gray-700 text-xs font-medium group-hover:text-teal-700 leading-snug">{lt.name.replace(/ Insurance$/, '')}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {ct.longForm?.faqs && ct.longForm.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions — {ct.name}</h2>
                  <div className="space-y-4">
                    {ct.longForm.faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-200 rounded-xl p-5">
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* External Links */}
              {ct.longForm?.externalLinks && ct.longForm.externalLinks.length > 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Useful Resources &amp; Further Reading</h2>
                  <ul className="space-y-2">
                    {ct.longForm.externalLinks.map((link) => (
                      <li key={link.url} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-700 text-sm hover:underline font-medium"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Blog Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">Related Guides &amp; Articles</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}/`}
                        className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 hover:shadow-sm transition-all group"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-1 block">Guide</span>
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-teal-700 mb-2">{post.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/blog/" className="text-teal-700 text-sm font-medium hover:underline">
                      View all livestock insurance guides →
                    </Link>
                  </div>
                </div>
              )}

              {/* Other Coverage Types */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Other Coverage Types</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {COVERAGE_TYPES.filter((other) => other.slug !== ct.slug).map((other) => (
                    <Link
                      key={other.slug}
                      href={`/types/${other.slug}/`}
                      className="border border-gray-200 rounded-xl p-3 hover:border-teal-300 hover:shadow-sm transition-all group flex items-center space-x-2"
                    >
                      <span className="text-xl flex-shrink-0">{other.icon}</span>
                      <p className="text-gray-700 text-xs font-medium group-hover:text-teal-700 leading-snug">{other.name}</p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-5">
                <QuoteForm />

                {/* Pricing */}
                <div className="rounded-xl p-4 text-white" style={{ backgroundColor: '#0d7377' }}>
                  <h3 className="font-bold mb-2 text-sm">Pricing Guide</h3>
                  <p className="text-teal-100 text-sm font-semibold">{ct.fromPrice}</p>
                  <p className="text-teal-200 text-xs mt-1">Actual premiums depend on animal values, species, location and scope of cover. Request a quote for your specific situation.</p>
                </div>

                {/* Why Us */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 text-sm mb-3">Why LivestockInsurance.co.nz?</h3>
                  <ul className="space-y-2">
                    {[
                      'Licensed FMCA advisers',
                      'Compare FMG, Aon, Gallagher & NZI',
                      'Specialist rural knowledge',
                      'Response within 24 hours',
                      'No obligation',
                    ].map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-xs text-gray-600">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Livestock Types Links */}
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <h3 className="font-semibold text-gray-900 text-sm mb-3">Livestock Types</h3>
                  <ul className="space-y-1.5">
                    {LIVESTOCK_TYPES.slice(0, 6).map((lt) => (
                      <li key={lt.slug}>
                        <Link href={`/livestock/${lt.slug}/`} className="text-xs text-teal-700 hover:underline flex items-center space-x-1.5">
                          <span>{lt.icon}</span>
                          <span>{lt.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Author */}
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-3">About This Guide</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#0d7377' }}>
                      LI
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs">LivestockInsurance.co.nz</p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-0.5">Written by our team of rural insurance specialists. Updated May 2026. We connect NZ farmers with licensed rural insurance advisers.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: '#0d7377' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get {ct.name} Quotes Today</h2>
          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
            Licensed rural insurance advisers will compare FMG, Aon, Gallagher and NZI and find the right cover for your farm. No obligation.
          </p>
          <Link href="/contact/" className="inline-block bg-white font-bold px-8 py-3.5 rounded-xl text-base" style={{ color: '#0d7377' }}>
            Request My Quotes →
          </Link>
        </div>
      </section>
    </>
  );
}
