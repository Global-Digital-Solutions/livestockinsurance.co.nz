import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Disclaimer | LivestockInsurance.co.nz',
  description: 'Important disclaimer about the nature of LivestockInsurance.co.nz — an insurance referral service connecting NZ farmers with licensed rural insurance advisers.',
  alternates: { canonical: `${SITE.domain}/disclaimer/` },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Disclaimer</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-white mb-1">Disclaimer</h1>
          <p className="text-gray-400 text-sm">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main text */}
          <div className="lg:col-span-2 space-y-7 text-gray-700 leading-relaxed">

            {/* Amber callout */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <p className="font-semibold text-amber-800 text-sm">Important: LivestockInsurance.co.nz is an insurance referral service — not an insurer, underwriter, or financial adviser.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Referral Service Only</h2>
              <p className="text-sm">LivestockInsurance.co.nz is operated as an insurance referral service by Cover4You Group. We connect New Zealand farmers and livestock owners with licensed rural insurance advisers and brokers. We are not an insurer, underwriter, or Financial Advice Provider (FAP), and we do not provide regulated financial advice.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Licensed Advisers</h2>
              <p className="text-sm">The rural insurance advisers and brokers we refer you to are independently licensed Financial Advice Providers (FAPs) under the Financial Markets Conduct Act 2013. They are regulated by the Financial Markets Authority (FMA). Before providing insurance advice, they are required by law to give you a disclosure statement outlining their licence, any conflicts of interest, and the basis on which they provide advice.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">General Information Only</h2>
              <p className="text-sm">All content on this website — including coverage descriptions, livestock insurance guides, pricing guides, blog articles, and FAQs — is provided as general information only. It does not constitute financial advice and should not be relied upon as such. Coverage terms, conditions, exclusions, and premiums vary by insurer, policy, and individual circumstances.</p>
              <p className="text-sm mt-3">The information on this site does not take into account your individual livestock values, farm risk profile, financial situation, or specific coverage requirements. You should seek advice from a licensed rural insurance adviser before making any insurance decision.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Pricing Information</h2>
              <p className="text-sm">Any pricing information on this website (such as &quot;from $80/year&quot;) represents indicative entry-level pricing only, based on publicly available market information. Actual premiums will depend on your specific livestock values, species, farm location, risk factors, and coverage requirements, and will be confirmed by your licensed adviser following a proper needs assessment.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Provider Information</h2>
              <p className="text-sm">References to insurance providers including FMG, Aon, Gallagher, and NZI are provided for general information purposes only. We are not affiliated with, endorsed by, or acting as agent for any of these providers. Product details, availability, and pricing are subject to change without notice. Always confirm current offerings directly with the insurer or your licensed adviser.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">No Guarantee of Cover</h2>
              <p className="text-sm">Connecting with an adviser through our service does not guarantee that insurance cover will be offered or arranged. Cover is subject to the insurers&apos; underwriting criteria, acceptance of the risk, and completion of any application requirements. Certain livestock, breeds, or risk profiles may not be insurable under standard policies.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Third-Party Links</h2>
              <p className="text-sm">This website may contain links to third-party websites including industry bodies, government agencies, and insurers. We are not responsible for the content, accuracy, or privacy practices of those sites. Links are provided for informational purposes only.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Accuracy &amp; Updates</h2>
              <p className="text-sm">We make every effort to keep the information on this website accurate and current. However, livestock insurance products, premiums, and regulatory requirements change regularly. We do not warrant the accuracy, completeness, or currency of any content on this site. Always confirm current details with a licensed adviser or the relevant insurer.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
              <p className="text-sm">For questions about this disclaimer, please contact us at: <a href={`mailto:${SITE.email}`} className="font-medium hover:underline" style={{ color: '#0d7377' }}>{SITE.email}</a></p>
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

            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <h3 className="font-bold text-gray-900 text-sm mb-2">About Our Service</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">We connect NZ farmers with licensed rural insurance advisers who compare FMG, Aon, Gallagher and NZI. All advisers hold current FAP licences under the Financial Markets Conduct Act 2013.</p>
              <Link href="/contact/" className="inline-block text-white text-xs font-semibold px-4 py-2 rounded-lg" style={{ backgroundColor: '#0d7377' }}>
                Request Quotes
              </Link>
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
