import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer } from '../../../sections/page/Components/Footer';
import BlogPost from '../../../sections/blog/Components/BlogPost';
import { getArticleById } from '../../../sections/data/blog';

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundArticle = getArticleById(id);
      setArticle(foundArticle);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Article not found</h1>
          <button
            onClick={() => router.push('/en/blog')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const pageTitle = `${article.title.en} | Technical Blog`;
  const pageDescription = article.excerpt.en;
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'}/en/blog/${id}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <meta name="author" content={article.author} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:site_name" content="Technical Blog" />
        <meta property="article:author" content={article.author} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:section" content={article.category} />
        {article.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": article.title.en,
              "description": article.excerpt.en,
              "author": {
                "@type": "Person",
                "name": article.author
              },
              "datePublished": article.date,
              "keywords": article.tags.join(', '),
              "articleSection": article.category,
              "url": pageUrl
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <button
                onClick={() => router.push('/en')}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <span>/</span>
              <button
                onClick={() => router.push('/en/blog')}
                className="hover:text-white transition-colors"
              >
                Blog
              </button>
              <span>/</span>
              <span className="text-white">{article.title.en}</span>
            </div>
          </nav>

          {/* Article Content */}
          <BlogPost
            article={article}
            lang="en"
            onBack={() => router.push('/en/blog')}
            shareUrl={pageUrl}
          />
        </div>
        
        <Footer />
      </div>
    </>
  );
}
