import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Use | LivestockInsurance.co.nz',
  description: 'Terms of use for LivestockInsurance.co.nz — conditions governing your use of this independent livestock insurance information site.',
  alternates: { canonical: `${SITE.domain}/terms/` },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Terms of Use</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-white mb-1">Terms of Use</h1>
          <p className="text-gray-400 text-sm">Last updated: August 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main text */}
          <div className="lg:col-span-2 space-y-7 text-gray-700 leading-relaxed">

            <p className="text-sm">These Terms of Use govern your access to and use of livestockinsurance.co.nz (the &ldquo;Website&rdquo;), operated by Cover4You Group (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By using this Website, you agree to these terms. If you do not agree, please do not use this Website.</p>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">1. Nature of This Service</h2>
              <p className="text-sm">LivestockInsurance.co.nz is an independent information site operated by Cover4You Group. We publish general information about livestock insurance in New Zealand. We are not an insurer, underwriter, or Financial Advice Provider (FAP). We do not provide regulated financial advice and we are not regulated by the Financial Markets Authority (FMA) in relation to financial advice.</p>
              <p className="text-sm mt-3">Anyone providing you with insurance advice should be independently licensed as a FAP under the Financial Markets Conduct Act 2013. You can verify any adviser on the Financial Service Providers Register at fsp-register.companiesoffice.govt.nz.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">2. Information on This Website</h2>
              <p className="text-sm">All content on this Website — including coverage descriptions, pricing guides, blog articles, FAQs, and provider comparisons — is provided as <strong>general information only</strong>. It does not constitute financial advice, is not tailored to your individual circumstances, and should not be relied upon when making insurance decisions.</p>
              <p className="text-sm mt-3">We make reasonable efforts to ensure content is accurate and up to date, but we make no warranties or representations as to the accuracy, completeness, or currency of any information on this Website. Insurance products and pricing change regularly — always confirm current details with a licensed adviser.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">3. Commercial Relationships</h2>
              <p className="text-sm">This Website contains links to third-party insurers, brokers, and industry directories. We may in future receive a referral fee if we introduce you to a broker partner. Any such arrangement will not increase any premium you pay. We do not currently operate an active referral network.</p>
              <p className="text-sm mt-3">Links to third parties are provided for information only and do not constitute an endorsement or recommendation of any particular provider. Cover is subject to the insurer&apos;s underwriting criteria and acceptance.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">4. Your Obligations</h2>
              <p className="text-sm mb-2">When using this Website, you agree to:</p>
              <ul className="space-y-1.5 text-sm">
                {[
                  'Provide accurate and complete information in any enquiry or form submission',
                  'Use this Website only for lawful purposes and in accordance with these terms',
                  'Not attempt to interfere with the operation of this Website or its underlying systems',
                  'Not use automated means to access, scrape, or extract content from this Website without our prior written consent',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">5. Intellectual Property</h2>
              <p className="text-sm">All content on this Website — including text, images, logos, and layout — is owned by or licensed to Cover4You Group. You may view and print content for personal, non-commercial use. You may not reproduce, republish, distribute, or commercially exploit any content from this Website without our prior written permission.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">6. Third-Party Links</h2>
              <p className="text-sm">This Website contains links to third-party websites including insurance providers, industry bodies, and government agencies. These links are provided for convenience and informational purposes only. We are not responsible for the content, accuracy, or availability of third-party websites, and linking to them does not imply endorsement.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">7. Limitation of Liability</h2>
              <p className="text-sm">To the maximum extent permitted by law, Cover4You Group and its officers, employees, and representatives are not liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of this Website or reliance on any information contained on it. This includes (without limitation) loss arising from decisions made on the basis of general information on this site rather than advice from a licensed adviser.</p>
              <p className="text-sm mt-3">Nothing in these terms limits liability for death or personal injury caused by negligence, or for any other liability that cannot be excluded by law.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">8. Privacy</h2>
              <p className="text-sm">Your use of this Website is also governed by our <Link href="/privacy/" className="font-medium hover:underline" style={{ color: '#0d7377' }}>Privacy Policy</Link>, which is incorporated into these terms by reference. By using this Website, you consent to our collection and use of your information as described in that policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">9. Amendments</h2>
              <p className="text-sm">We may update these Terms of Use from time to time. Updated terms will be posted on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of this Website after any changes constitutes your acceptance of the updated terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">10. Governing Law</h2>
              <p className="text-sm">These terms are governed by the laws of New Zealand. Any disputes arising from your use of this Website or these terms are subject to the exclusive jurisdiction of the New Zealand courts.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">11. Contact</h2>
              <p className="text-sm">For questions about these terms, contact us at: <a href={`mailto:${SITE.email}`} className="font-medium hover:underline" style={{ color: '#0d7377' }}>{SITE.email}</a></p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Legal Pages</h3>
              <ul className="space-y-2">
                {[
                  { href: '/disclaimer/', label: 'Disclaimer' },
                  { href: '/privacy/', label: 'Privacy Policy' },
                  { href: '/terms/', label: 'Terms of Use' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium hover:underline" style={{ color: '#0d7377' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">Governing Law</h3>
              <p className="text-gray-600 text-xs leading-relaxed">These terms are governed by the laws of New Zealand and subject to NZ court jurisdiction.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <h3 className="font-bold text-gray-900 text-sm mb-2">About This Site</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">LivestockInsurance.co.nz publishes independent information about livestock insurance in New Zealand. We are not an insurer, broker, or licensed adviser.</p>
              <a href="https://www.ibanz.co.nz/" target="_blank" rel="noopener noreferrer" className="inline-block text-white text-xs font-semibold px-4 py-2 rounded-lg" style={{ backgroundColor: '#0d7377' }}>
                Find a Broker (IBANZ)
              </a>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <h3 className="font-bold text-gray-900 text-sm mb-2">Questions?</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Contact us at <a href={`mailto:${SITE.email}`} className="font-medium hover:underline" style={{ color: '#0d7377' }}>{SITE.email}</a></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
