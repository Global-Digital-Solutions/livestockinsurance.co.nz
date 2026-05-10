import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from './components/QuoteForm';
import { LIVESTOCK_TYPES } from '@/data/livestock-types';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { BLOG_POSTS } from '@/data/blog-posts';
import { FAQS } from '@/data/faqs';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: `NZ Livestock Insurance — Compare FMG, Aon, Gallagher & More | LivestockInsurance.co.nz`,
  description: SITE.description,
  alternates: { canonical: `${SITE.domain}/` },
};

const recentPosts = BLOG_POSTS.slice(0, 4);
const previewFaqs = FAQS.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=1400&h=700&fit=crop&auto=format&q=80)` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4" style={{ backgroundColor: '#0d7377' }}>
                Independent Livestock Insurance Comparison
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                NZ Livestock Insurance — Compare &amp; Get Covered
              </h1>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Independent comparison of FMG, Aon, Gallagher, NZI and specialist brokers. Expert advice for farmers — cattle, sheep, deer, goat, pig, alpaca and poultry insurance.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Free to use', 'Licensed advisers', '24hr response', 'All livestock types'].map((t) => (
                  <span key={t} className="flex items-center space-x-1 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Livestock Types Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Livestock We Cover</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Specialist insurance for every type of livestock — from commercial dairy herds to elite velvet stags and rare breeds.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {LIVESTOCK_TYPES.map((lt) => (
              <Link
                key={lt.slug}
                href={`/livestock/${lt.slug}/`}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all group text-center"
              >
                <div className="text-4xl mb-3">{lt.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-teal-700 mb-1">{lt.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{lt.shortDesc.split('—')[0]}</p>
                <p className="text-xs font-semibold mt-2" style={{ color: '#0d7377' }}>{lt.fromPrice}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Coverage Types</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From basic mortality cover to comprehensive natural disaster and disease protection — understand your options.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COVERAGE_TYPES.map((ct) => (
              <Link
                key={ct.slug}
                href={`/types/${ct.slug}/`}
                className="border border-gray-100 rounded-xl p-6 hover:border-teal-300 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-3">{ct.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-700">{ct.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{ct.shortDesc}</p>
                <p className="text-xs font-semibold" style={{ color: '#0d7377' }}>{ct.fromPrice}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Livestock Insurance Providers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We compare quotes from the leading rural insurance specialists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: 'FMG',
                full: 'Farmers Mutual Group',
                desc: "largest rural insurer with 65-70% market share. Specialist livestock policies for local conditions including post-shearing exposure and velvet stag cover.",
                badge: 'Market Leader',
                badgeColor: '#0d7377',
              },
              {
                name: 'Aon',
                full: 'Aon New Zealand',
                desc: 'Global insurance broker with strong rural expertise. Ideal for complex or unusual coverage needs, including access to Lloyd\'s markets for high-value stud animals.',
                badge: 'Global Reach',
                badgeColor: '#1e40af',
              },
              {
                name: 'Gallagher',
                full: 'Gallagher Insurance',
                desc: 'Specialist in exotic and rare livestock — alpacas, llamas, rare breeds, and high agreed-value stud animals. Best for non-standard livestock coverage.',
                badge: 'Specialist Cover',
                badgeColor: '#92400e',
              },
            ].map((p) => (
              <div key={p.name} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <span
                    className="text-xs font-semibold text-white px-2 py-1 rounded-full"
                    style={{ backgroundColor: p.badgeColor }}
                  >
                    {p.badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{p.full}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/compare/"
              className="inline-block text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              style={{ backgroundColor: '#0d7377' }}
            >
              Compare All Providers
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">Latest Guides & News</h2>
              <p className="text-gray-500">Expert advice for livestock farmers.</p>
            </div>
            <Link href="/blog/" className="text-sm font-semibold hover:underline hidden sm:block" style={{ color: '#0d7377' }}>
              View all posts &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 mb-2 inline-block">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 group-hover:text-teal-700 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs">{post.readTime} read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {previewFaqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faqs/" className="text-sm font-semibold hover:underline" style={{ color: '#0d7377' }}>
              View all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#0d7377' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Protect Your Livestock?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Free quotes from licensed rural insurance advisers. No cost, no obligation.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            style={{ color: '#0d7377' }}
          >
            Get Free Quotes Now
          </Link>
        </div>
      </section>
    </>
  );
}
