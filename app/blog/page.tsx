import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Livestock Insurance Blog NZ | Guides, Costs & Coverage Advice',
  description: 'Expert livestock insurance guides for farmers — coverage advice, cost guides, natural disaster protection, and provider comparisons.',
  alternates: { canonical: `${SITE.domain}/blog/` },
};

const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: `url(https://images.pexels.com/photos/1574547/pexels-photo-1574547.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Blog</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Livestock Insurance Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Expert guides, cost breakdowns, and coverage advice for livestock farmers.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {categories.map((cat) => (
              <span key={cat} className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime} read</span>
                  </div>
                  <h2 className="font-bold text-gray-900 mb-2 group-hover:text-teal-700 leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-3">
                    {new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
