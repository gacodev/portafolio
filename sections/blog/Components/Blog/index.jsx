import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlogList from '../BlogList';
import BlogPost from '../BlogPost';
import { getArticleById } from '../../../data/blog';

const Blog = ({ lang = 'es' }) => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState('list');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Handle query parameter for direct article access
  useEffect(() => {
    const { article } = router.query;
    if (article) {
      const foundArticle = getArticleById(article);
      if (foundArticle) {
        setSelectedArticle(foundArticle);
        setCurrentView('article');
      }
    } else {
      setCurrentView('list');
      setSelectedArticle(null);
    }
  }, [router.query]);

  const handleArticleSelect = (articleId) => {
    const article = getArticleById(articleId);
    if (article) {
      // Update URL with query parameter for sharing
      router.push(`/${lang}/blog?article=${articleId}`, undefined, { shallow: true });
      setSelectedArticle(article);
      setCurrentView('article');
      // Scroll to top when viewing article
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToList = () => {
    // Remove query parameter
    router.push(`/${lang}/blog`, undefined, { shallow: true });
    setCurrentView('list');
    setSelectedArticle(null);
    // Scroll to top when returning to list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate share URL for the current article
  const getShareUrl = () => {
    if (selectedArticle) {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      return `${baseUrl}/${lang}/blog?article=${selectedArticle.id}`;
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {currentView === 'list' ? (
          <>
            {/* Blog Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {lang === 'en' ? 'Architecture Decision Records' : 'ADR - Registros de Decisiones'}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {lang === 'en' 
                  ? 'Documenting architectural and technical decisions'
                  : 'Documentando decisiones arquitectónicas y técnicas'
                }
              </p>
            </div>

            {/* Blog List */}
            <BlogList 
              lang={lang} 
              onArticleSelect={handleArticleSelect}
            />
          </>
        ) : (
          <BlogPost 
            article={selectedArticle}
            lang={lang}
            onBack={handleBackToList}
            shareUrl={getShareUrl()}
          />
        )}
      </div>
    </div>
  );
};

export default Blog;
