import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Compare Livestock Insurance Providers NZ — FMG vs Aon vs Gallagher vs NZI',
  description: 'Compare FMG, Aon, Gallagher and NZI livestock insurance in New Zealand. Side-by-side comparison of coverage, pricing, and specialist capabilities.',
  alternates: { canonical: `${SITE.domain}/compare/` },
};

const rows = [
  { label: 'Best for', fmg: 'Mainstream NZ sheep, cattle & deer farmers', aon: 'Complex needs & high-value stud animals', gallagher: 'Exotic livestock, rare breeds & alpacas', nzi: 'Farm pack bundled cover' },
  { label: 'NZ Market Share', fmg: '~65–70%', aon: '~8–12%', gallagher: '~5–8%', nzi: '~6–10%' },
  { label: 'Cattle Cover', fmg: '✅ Specialist', aon: '✅ Strong', gallagher: '✅ Good', nzi: '✅ Standard' },
  { label: 'Sheep Cover', fmg: '✅ Market leader', aon: '✅ Good', gallagher: '✅ Good', nzi: '✅ Standard' },
  { label: 'Deer Cover', fmg: '✅ Specialist (velvet stag)', aon: '✅ Good', gallagher: '✅ Good', nzi: '⚠️ Limited' },
  { label: 'Exotic/Rare Livestock', fmg: '⚠️ Limited', aon: '✅ Via Lloyd\'s', gallagher: '✅ Specialist', nzi: '❌ Minimal' },
  { label: 'Natural Disaster', fmg: '✅ Add-on available', aon: '✅ Available', gallagher: '✅ Available', nzi: '✅ Available' },
  { label: 'Post-Shearing Exposure', fmg: '✅ Specific NZ cover', aon: '⚠️ Case by case', gallagher: '⚠️ Limited', nzi: '⚠️ Limited' },
  { label: 'Velvet Removal Cover', fmg: '✅ Specific cover', aon: '⚠️ Case by case', gallagher: '⚠️ Limited', nzi: '❌ Not standard' },
  { label: 'Agreed Value Cover', fmg: '✅ Up to ~$100K', aon: '✅ High limits via Lloyd\'s', gallagher: '✅ High limits', nzi: '⚠️ Limited' },
  { label: 'Online Quote', fmg: '✅ Yes', aon: '✅ Yes', gallagher: '⚠️ Broker only', nzi: '✅ Yes' },
];

export default function ComparePage() {
  return (
    <>
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-65" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=1400&h=500&fit=crop&auto=format&q=80)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Compare Providers</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Compare Livestock Insurance Providers</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Side-by-side comparison of FMG, Aon, Gallagher, and NZI — so you can find the right provider for your livestock and farm.
          </p>
        </div>
      </section>

      {/* Provider Summary Cards */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'FMG', subtitle: 'Farmers Mutual Group', badge: 'Market Leader', color: '#0d7377', summary: "largest rural insurer. Specialist NZ conditions cover." },
              { name: 'Aon', subtitle: 'Aon New Zealand', badge: 'Global Reach', color: '#1e40af', summary: 'Global broker. Best for complex needs & Lloyd\'s access.' },
              { name: 'Gallagher', subtitle: 'Gallagher Insurance', badge: 'Specialist', color: '#92400e', summary: 'Exotic & specialist livestock. Best for rare breeds & alpacas.' },
              { name: 'NZI', subtitle: 'New Zealand Insurance', badge: 'Farm Pack', color: '#374151', summary: 'Comprehensive farm packs with bundled livestock cover.' },
            ].map((p) => (
              <div key={p.name} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-gray-900">{p.name}</span>
                  <span className="text-xs font-semibold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: p.color }}>{p.badge}</span>
                </div>
                <p className="text-gray-500 text-xs mb-1">{p.subtitle}</p>
                <p className="text-gray-700 text-xs leading-relaxed">{p.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="text-left p-4 text-gray-400 font-semibold text-xs uppercase tracking-wider w-1/4">Feature</th>
                      <th className="text-left p-4 font-semibold text-xs uppercase tracking-wider" style={{ color: '#0d7377' }}>FMG</th>
                      <th className="text-left p-4 text-blue-400 font-semibold text-xs uppercase tracking-wider">Aon</th>
                      <th className="text-left p-4 text-amber-400 font-semibold text-xs uppercase tracking-wider">Gallagher</th>
                      <th className="text-left p-4 text-gray-400 font-semibold text-xs uppercase tracking-wider">NZI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4 font-semibold text-gray-900 text-xs align-top">{row.label}</td>
                        <td className="p-4 text-gray-600 text-xs align-top">{row.fmg}</td>
                        <td className="p-4 text-gray-600 text-xs align-top">{row.aon}</td>
                        <td className="p-4 text-gray-600 text-xs align-top">{row.gallagher}</td>
                        <td className="p-4 text-gray-600 text-xs align-top">{row.nzi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                ✅ = Standard offering &nbsp; ⚠️ = Available with conditions &nbsp; ❌ = Not standard. Data indicative — always confirm with your adviser.
              </p>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Provider Is Right for You?</h2>
          <div className="space-y-4">
            {[
              { title: 'Choose FMG if...', desc: "You're a mainstream NZ sheep, cattle, or deer farmer. FMG understands local farming conditions better than anyone — post-shearing exposure, velvet stag cover, and the nuances of NZ rural risk. Approximately 65-70% of NZ rural farmers are with FMG for good reason.", color: '#0d7377' },
              { title: 'Choose Aon if...', desc: "You have complex coverage needs, high-value stud animals requiring agreed values above standard FMG limits, or a mixed operation with unusual coverage requirements. Aon's Lloyd's market access provides flexibility FMG can't always match.", color: '#1e40af' },
              { title: 'Choose Gallagher if...', desc: 'You have exotic livestock — alpacas, llamas, rare breed sheep, heritage pigs, or high-value show animals. Gallagher specialises in non-standard livestock that standard farm insurers are reluctant to write.', color: '#92400e' },
              { title: 'Consider NZI if...', desc: "You want a comprehensive farm pack that bundles property, equipment, and livestock cover in one policy. NZI is competitive on farm pack pricing. Less specialist than FMG for livestock-only cover.", color: '#374151' },
            ].map((v) => (
              <div key={v.title} className="border-l-4 pl-5 py-3" style={{ borderColor: v.color }}>
                <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: '#0d7377' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Let Us Compare For You</h2>
          <p className="text-teal-100 mb-6">Our licensed advisers will compare all providers and recommend the right cover for your livestock and farm.</p>
          <Link href="/contact/" className="inline-block bg-white font-bold px-6 py-3 rounded-xl" style={{ color: '#0d7377' }}>
            Get Comparison Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
