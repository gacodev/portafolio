import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../../components/Footer';
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
        <div className="text-white text-xl">Cargando artículo...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Artículo no encontrado</h1>
          <button
            onClick={() => router.push('/es/blog')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Volver al Blog
          </button>
        </div>
      </div>
    );
  }

  const pageTitle = `${article.title.es} | Blog Técnico`;
  const pageDescription = article.excerpt.es;
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'}/es/blog/${id}`;

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
        <meta property="og:site_name" content="Blog Técnico" />
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
              "headline": article.title.es,
              "description": article.excerpt.es,
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
                onClick={() => router.push('/es')}
                className="hover:text-white transition-colors"
              >
                Inicio
              </button>
              <span>/</span>
              <button
                onClick={() => router.push('/es/blog')}
                className="hover:text-white transition-colors"
              >
                Blog
              </button>
              <span>/</span>
              <span className="text-white">{article.title.es}</span>
            </div>
          </nav>

          {/* Article Content */}
          <BlogPost
            article={article}
            lang="es"
            onBack={() => router.push('/es/blog')}
            shareUrl={pageUrl}
          />
        </div>
        
        <Footer />
      </div>
    </>
  );
}
