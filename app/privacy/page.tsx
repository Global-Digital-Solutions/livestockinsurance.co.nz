import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | LivestockInsurance.co.nz',
  description: 'Privacy policy for LivestockInsurance.co.nz — how we collect, use, store and protect your personal information in accordance with the Privacy Act 2020.',
  alternates: { canonical: `${SITE.domain}/privacy/` },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-white mb-1">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main text */}
          <div className="lg:col-span-2 space-y-7 text-gray-700 leading-relaxed">

            <p className="text-sm">LivestockInsurance.co.nz (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is operated by Cover4You Group as an insurance referral service. This Privacy Policy explains how we collect, use, store and protect your personal information in accordance with the <strong>Privacy Act 2020 (NZ)</strong>.</p>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Information We Collect</h2>
              <p className="text-sm mb-3">We collect personal information you provide directly via our quote request and contact forms, including:</p>
              <ul className="space-y-1.5 text-sm">
                {[
                  'Full name',
                  'Email address',
                  'Phone number',
                  'Livestock type and approximate herd or flock size',
                  'Cover type interest',
                  'Any additional information you choose to provide in the message field',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm mt-3">We also collect standard website analytics data (page views, referrer sources, device type, geographic region) through privacy-respecting analytics tools. This data is aggregated and does not identify individual users.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">How We Use Your Information</h2>
              <p className="text-sm mb-2">We use the personal information you provide for the following purposes:</p>
              <ul className="space-y-1.5 text-sm">
                {[
                  'To forward your enquiry to a licensed NZ rural insurance adviser who can assist with your livestock insurance requirements',
                  'To follow up on your enquiry and confirm it has been received by an adviser',
                  'To improve the quality of our referral service',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm mt-3">We do <strong>not</strong> use your information for unsolicited marketing purposes, and we do <strong>not</strong> sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Who We Share Your Information With</h2>
              <p className="text-sm">When you submit an enquiry, your contact details and insurance requirements are shared with one or more licensed NZ rural insurance advisers who are part of our referral network. These advisers are independently licensed Financial Advice Providers (FAPs) under the Financial Markets Conduct Act 2013 and are obligated to handle your information in accordance with applicable privacy laws.</p>
              <p className="text-sm mt-3">We do not share your personal information with any other third party without your consent, except where required by law.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Cookies &amp; Analytics</h2>
              <p className="text-sm">This website may use cookies and analytics tools to understand how visitors use our site. Analytics data is aggregated and anonymised — it does not identify you personally. You can disable cookies in your browser settings, though this may affect the functionality of certain features.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Data Storage &amp; Security</h2>
              <p className="text-sm">Enquiry data submitted through our forms is processed and stored securely. We take reasonable technical and organisational measures to protect your personal information against unauthorised access, disclosure, or loss. However, no internet transmission is completely secure, and we cannot guarantee the security of information transmitted to us online.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Data Retention</h2>
              <p className="text-sm">We retain enquiry data for the period necessary to manage the referral relationship and for any applicable legal or compliance obligations. You may request deletion of your personal information at any time by contacting us at <a href={`mailto:${SITE.email}`} className="font-medium hover:underline" style={{ color: '#0d7377' }}>{SITE.email}</a>. We will action deletion requests within a reasonable timeframe.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your Rights Under the Privacy Act 2020</h2>
              <p className="text-sm mb-2">Under the Privacy Act 2020, you have the right to:</p>
              <ul className="space-y-1.5 text-sm">
                {[
                  'Access personal information we hold about you',
                  'Request correction of any inaccurate personal information',
                  'Request deletion of your personal information (subject to any legal retention obligations)',
                  'Lodge a complaint with the Office of the Privacy Commissioner if you believe your privacy rights have been breached',
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
              <h2 className="text-xl font-bold text-gray-900 mb-2">Changes to This Policy</h2>
              <p className="text-sm">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Updated policies will be posted on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of this website after any changes constitutes your acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
              <p className="text-sm">For privacy enquiries, requests to access or correct your information, or to request deletion, contact us at: <a href={`mailto:${SITE.email}`} className="font-medium hover:underline" style={{ color: '#0d7377' }}>{SITE.email}</a></p>
              <p className="text-sm mt-2">You may also contact the Office of the Privacy Commissioner at <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: '#0d7377' }}>www.privacy.org.nz</a>.</p>
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
              <h3 className="font-bold text-gray-900 text-sm mb-2">Privacy Act 2020</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Our privacy practices comply with the Privacy Act 2020 (NZ). For more information visit the <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: '#0d7377' }}>Office of the Privacy Commissioner</a>.</p>
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
