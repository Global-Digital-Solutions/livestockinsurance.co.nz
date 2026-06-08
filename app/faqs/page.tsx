import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQS } from '@/data/faqs';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Livestock Insurance FAQs | Common Questions Answered',
  description: 'Frequently asked questions about livestock insurance — coverage types, costs, claims, and providers. Expert answers for farmers.',
  alternates: { canonical: `${SITE.domain}/faqs/` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const categories = Array.from(new Set(FAQS.map((f) => f.category)));

export default function FAQsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: `url(https://images.pexels.com/photos/17299063/pexels-photo-17299063.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/75 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">FAQs</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Livestock Insurance FAQs</h1>
          <p className="text-white text-lg max-w-2xl">
            Common questions about livestock insurance — answered by our specialist rural insurance team.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{category}</h2>
              <div className="space-y-4">
                {FAQS.filter((f) => f.category === category).map((faq) => (
                  <div key={faq.question} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8 p-6 rounded-xl" style={{ backgroundColor: '#0d7377' }}>
            <h3 className="font-bold text-white text-lg mb-2">Have Another Question?</h3>
            <p className="text-teal-100 text-sm mb-4">Our licensed rural insurance advisers are happy to help.</p>
            <Link href="/contact/" className="inline-block bg-white font-bold px-5 py-2.5 rounded-lg text-sm" style={{ color: '#0d7377' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
