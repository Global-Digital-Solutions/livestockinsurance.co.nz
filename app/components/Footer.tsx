import Link from 'next/link';
import { LIVESTOCK_TYPES } from '@/data/livestock-types';
import { COVERAGE_TYPES } from '@/data/coverage-types';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-1 mb-3">
              <span className="text-lg font-bold" style={{ color: '#0d7377' }}>Livestock</span>
              <span className="text-lg font-bold text-white">Insurance</span>
              <span className="text-gray-400 text-sm">.co.nz</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {"NZ's independent livestock insurance comparison. Free expert advice from licensed rural advisers."}
            </p>
            <p className="text-gray-500 text-xs mt-3">
              <a href="mailto:hello@cover4you.co.nz" className="hover:text-gray-300 transition-colors">
                hello@cover4you.co.nz
              </a>
            </p>
          </div>

          {/* Livestock */}
          <div>
            <h4 className="text-gray-200 font-semibold text-sm mb-3 uppercase tracking-wider">Livestock</h4>
            <ul className="space-y-2">
              {LIVESTOCK_TYPES.map((lt) => (
                <li key={lt.slug}>
                  <Link href={`/livestock/${lt.slug}/`} className="text-gray-400 hover:text-gray-200 text-sm transition-colors flex items-center space-x-1">
                    <span>{lt.icon}</span>
                    <span>{lt.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-gray-200 font-semibold text-sm mb-3 uppercase tracking-wider">Coverage</h4>
            <ul className="space-y-2">
              {COVERAGE_TYPES.map((ct) => (
                <li key={ct.slug}>
                  <Link href={`/types/${ct.slug}/`} className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
                    {ct.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-200 font-semibold text-sm mb-3 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {[
                { href: '/about/', label: 'About Us' },
                { href: '/blog/', label: 'Blog' },
                { href: '/contact/', label: 'Contact' },
                { href: '/faqs/', label: 'FAQs' },
                { href: '/compare/', label: 'Compare Providers' },
                { href: '/disclaimer/', label: 'Disclaimer' },
                { href: '/privacy/', label: 'Privacy Policy' },
                { href: '/terms/', label: 'Terms of Use' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-xs leading-relaxed mb-3">
            LivestockInsurance.co.nz is operated by Cover4You Group. We connect farmers with licensed NZ rural insurance advisers. We do not sell insurance directly. The advisers we refer you to are licensed under the Financial Markets Conduct Act 2013.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} LivestockInsurance.co.nz. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs">
              <Link href="/disclaimer/" className="text-gray-600 hover:text-gray-400 transition-colors">Disclaimer</Link>
              <Link href="/privacy/" className="text-gray-600 hover:text-gray-400 transition-colors">Privacy</Link>
              <Link href="/terms/" className="text-gray-600 hover:text-gray-400 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
