'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LIVESTOCK_TYPES } from '@/data/livestock-types';

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [livestockOpen, setLivestockOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold" style={{ color: '#0d7377' }}>Livestock</span>
            <span className="text-xl font-bold text-white">Insurance</span>
            <span className="text-gray-400 text-sm font-medium">.co.nz</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Home
            </Link>

            {/* Livestock Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLivestockOpen(!livestockOpen)}
                onBlur={() => setTimeout(() => setLivestockOpen(false), 150)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <span>Livestock</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {livestockOpen && (
                <div className="absolute top-8 left-0 bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-64 z-50">
                  {LIVESTOCK_TYPES.map((lt) => (
                    <Link
                      key={lt.slug}
                      href={`/livestock/${lt.slug}/`}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <span>{lt.icon}</span>
                      <span>{lt.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/types/" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Coverage
            </Link>
            <Link href="/compare/" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Compare
            </Link>
            <Link href="/blog/" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link
              href="/contact/"
              className="text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: '#0d7377' }}
            >
              Get Quotes
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 py-4 space-y-3">
          <Link href="/" className="block text-gray-300 hover:text-white text-sm font-medium py-1" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Livestock Types</p>
            {LIVESTOCK_TYPES.map((lt) => (
              <Link
                key={lt.slug}
                href={`/livestock/${lt.slug}/`}
                className="flex items-center space-x-2 py-1.5 text-sm text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                <span>{lt.icon}</span>
                <span>{lt.name}</span>
              </Link>
            ))}
          </div>
          <Link href="/types/" className="block text-gray-300 hover:text-white text-sm font-medium py-1" onClick={() => setMobileOpen(false)}>
            Coverage Types
          </Link>
          <Link href="/compare/" className="block text-gray-300 hover:text-white text-sm font-medium py-1" onClick={() => setMobileOpen(false)}>
            Compare Providers
          </Link>
          <Link href="/blog/" className="block text-gray-300 hover:text-white text-sm font-medium py-1" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link
            href="/contact/"
            className="block text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
            style={{ backgroundColor: '#0d7377' }}
            onClick={() => setMobileOpen(false)}
          >
            Get Free Quotes
          </Link>
        </div>
      )}
    </nav>
  );
}
