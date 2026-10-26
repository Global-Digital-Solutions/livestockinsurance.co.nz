import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Livestock Insurance Providers NZ: Aon and Gallagher',
  description: 'What Aon and Gallagher say about their livestock insurance in New Zealand, taken from their own websites and dated.',
  alternates: { canonical: `${SITE.domain}/compare/` },
};

const CHECKED = '26 October 2026';

// Every statement below is taken from the provider's own website on CHECKED.
// No ratings, scores or comparative judgements. Re-check each entry against
// the linked pages before changing CHECKED.
const providers = [
  {
    name: 'Gallagher',
    subtitle: 'Gallagher Insurance New Zealand (broker)',
    color: '#92400e',
    points: [
      'Arranges insurance for farm animals, including cattle, deer and alpacas, and lists young animals, rare breeds and valuable pets, and show animals.',
      'Cover described includes death from accident, natural causes, injury, illness, disease or humane destruction; business interruption from loss of farming animals; and worldwide transit.',
      'Cover is arranged through Gallagher\'s brokers.',
    ],
    source: 'https://www.ajg.co.nz/business/bird-and-animal-insurance/',
    sourceLabel: 'ajg.co.nz: Farm Animal Insurance',
  },
  {
    name: 'Aon',
    subtitle: 'Aon New Zealand (broker)',
    color: '#1e40af',
    points: [
      'Describes its livestock capability as three core areas: bulls, sheep and beef, and equine.',
      'Offers AonAgri livestock insurance online, with 3, 6 or 12 month terms (death, theft, escape, infertility or maternity) and a 30 days plus transit option, with an optional tuberculosis extension.',
      'Limits, excesses, terms and exclusions apply, as set out in Aon\'s policy documents.',
    ],
    source: 'https://aon.co.nz/Agri-Business/Livestock-Insurance',
    sourceLabel: 'aon.co.nz: Livestock Insurance',
    source2: 'https://aon.co.nz/Livestock',
    sourceLabel2: 'aon.co.nz: Livestock online',
  },
];

export default function ComparePage() {
  return (
    <>
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=1400&h=500&fit=crop&auto=format&q=80)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/75 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Compare Providers</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Livestock Insurance Providers</h1>
          <p className="text-white text-lg max-w-2xl">
            What two of the brokers active in NZ livestock insurance say about their own cover, taken from their websites and dated.
          </p>
        </div>
      </section>

      {/* Providers: facts from each provider's own site */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Below is what two of the brokers active in New Zealand livestock insurance say about their own cover. We have not rated or ranked them. Policy terms, limits and eligibility vary, so check the details with the provider or a broker before deciding.
              </p>
              {providers.map((p) => (
                <div key={p.name} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-2 h-6 rounded" style={{ backgroundColor: p.color }} />
                    <h2 className="text-xl font-bold text-gray-900">{p.name}</h2>
                  </div>
                  <p className="text-gray-500 text-xs mb-4">{p.subtitle}</p>
                  <ul className="space-y-2 mb-4">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-gray-700 text-sm leading-relaxed flex gap-2">
                        <span className="text-teal-600 mt-0.5">•</span><span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500">
                    Source:{' '}
                    <a href={p.source} target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">{p.sourceLabel}</a>
                    {p.source2 && (
                      <>{' '}and{' '}<a href={p.source2} target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">{p.sourceLabel2}</a></>
                    )}
                    , checked {CHECKED}.
                  </p>
                </div>
              ))}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h2 className="text-sm font-bold text-gray-900 mb-1">Sources and accuracy</h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Everything on this page is taken from each provider&apos;s own website on {CHECKED} and is accurate at the time of checking. Providers change their products, so confirm the current position with them. If you are a provider and anything here is wrong or out of date, email{' '}
                  <a href="mailto:hello@cover4you.co.nz" className="text-teal-700 underline">hello@cover4you.co.nz</a> and we will correct it.
                </p>
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

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: '#0d7377' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want a Broker to Compare for You?</h2>
          <p className="text-teal-100 mb-6">Our registered brokers will compare the best options to suit your requirements.</p>
          <Link href="/contact/" className="inline-block bg-white font-bold px-6 py-3 rounded-xl" style={{ color: '#0d7377' }}>
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
