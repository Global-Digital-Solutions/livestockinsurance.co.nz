import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | LivestockInsurance.co.nz`,
    description: post.excerpt,
    alternates: { canonical: `${SITE.domain}/blog/${post.slug}/` },
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.heroImage }],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      key++;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(<p key={key++} className="font-bold text-gray-900 mb-2">{trimmed.slice(2, -2)}</p>);
    } else if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-gray-700 text-base leading-relaxed ml-4 list-disc">
          {trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '$1')}
        </li>
      );
    } else if (trimmed.match(/^\d+\./)) {
      elements.push(
        <li key={key++} className="text-gray-700 text-base leading-relaxed ml-4 list-decimal">
          {trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
        </li>
      );
    } else {
      const html = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      elements.push(
        <p key={key++} className="text-gray-700 text-base leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
  }
  return elements;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'LivestockInsurance.co.nz Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
    },
    url: `${SITE.domain}/blog/${post.slug}/`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.domain}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.domain}/blog/${post.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Image */}
      <div className="h-72 lg:h-96 overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-600 text-white">{post.category}</span>
            <span className="text-gray-300 text-xs">{post.readTime} read</span>
            <span className="text-gray-300 text-xs">
              {new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-2xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl">{post.title}</h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <p className="text-gray-500 text-lg leading-relaxed mb-8 border-l-4 pl-4" style={{ borderColor: '#0d7377' }}>
                {post.excerpt}
              </p>
              <div className="prose max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}/`} className="group">
                        <div className="h-32 rounded-xl overflow-hidden mb-2">
                          <img src={rp.heroImage} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-teal-700 line-clamp-2">{rp.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 space-y-4">
                <QuoteForm />
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">More Guides</h3>
                  <ul className="space-y-2">
                    {BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 5).map((p) => (
                      <li key={p.slug}>
                        <Link href={`/blog/${p.slug}/`} className="text-xs text-gray-600 hover:text-teal-700 leading-snug block line-clamp-2">
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
