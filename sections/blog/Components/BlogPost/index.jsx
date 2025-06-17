import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, ArrowLeft, Share2, Link as LinkIcon, Linkedin } from 'lucide-react';
import { SiX } from 'react-icons/si';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const BlogPost = ({ article, lang = 'es', onBack, shareUrl }) => {
  if (!article) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {lang === 'es' ? 'Artículo no encontrado' : 'Article not found'}
        </h2>
        <button
          onClick={onBack}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
        >
          {lang === 'es' ? 'Volver al blog' : 'Back to blog'}
        </button>
      </div>
    );
  }

  const texts = {
    es: {
      backToBlog: "Volver al blog",
      author: "Autor",
      readTime: "min de lectura",
      publishedOn: "Publicado el",
      shareArticle: "Compartir artículo",
      tags: "Tags",
      tableOfContents: "Tabla de contenidos",
      copyLink: "Copiar enlace",
      shareOnx: "Compartir en x",
      shareOnLinkedin: "Compartir en LinkedIn",
      shareOnFacebook: "Compartir en Facebook"
    },
    en: {
      backToBlog: "Back to blog",
      author: "Author",
      readTime: "min read",
      publishedOn: "Published on",
      shareArticle: "Share article",
      tags: "Tags",
      tableOfContents: "Table of contents",
      copyLink: "Copy link",
      shareOnx: "Share on x",
      shareOnLinkedin: "Share on LinkedIn",
      shareOnFacebook: "Share on Facebook"
    }
  };

  const t = texts[lang];
  const content = article.content[lang] || article.content.es;

  // Custom renderers for ReactMarkdown
  const renderers = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={tomorrow}
          language={match[1]}
          PreTag="div"
          className="rounded-lg my-4"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 mt-5">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 mt-4">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">{children}</ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4 bg-blue-50 py-2">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  };

  const [copied, setCopied] = useState(false);

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title[lang] || article.title.es,
        text: article.excerpt[lang] || article.excerpt.es,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareOnx = () => {
    const tweetUrl = `https://x.com/intent/tweet?url=${shareUrl}&text=${article.title[lang] || article.title.es}`;
    window.open(tweetUrl, '_blank');
  };

  const handleShareOnLinkedin = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share?url=${shareUrl}&title=${article.title[lang] || article.title.es}`;
    window.open(linkedinUrl, '_blank');
  };

  const handleShareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            {t.backToBlog}
          </motion.button>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                {article.category}
              </span>
              
              {/* Sharing Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                {/* Copy Link Feedback */}
                {copied && (
                  <span className="text-green-600 text-sm font-medium order-last sm:order-first">
                    {lang === 'es' ? '¡Enlace copiado!' : 'Link copied!'}
                  </span>
                )}
                
                {/* Share Buttons Container */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  {/* Copy Link Button */}
                  <button
                    onClick={handleCopyLink}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 touch-manipulation ${
                      copied 
                        ? 'bg-green-100 text-green-700 scale-105' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 active:scale-95'
                    }`}
                  >
                    <LinkIcon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm hidden sm:inline">{copied ? (lang === 'es' ? '¡Copiado!' : 'Copied!') : t.copyLink}</span>
                  </button>
                  
                  {/* x Button */}
                  <button
                    onClick={handleShareOnx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-800 transition-all duration-200 active:scale-95 touch-manipulation"
                  >
                    <SiX className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm hidden sm:inline">X.com</span>
                  </button>
                  
                  {/* LinkedIn Button */}
                  <button
                    onClick={handleShareOnLinkedin}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-800 transition-all duration-200 active:scale-95 touch-manipulation"
                  >
                    <Linkedin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm hidden sm:inline">LinkedIn</span>
                  </button>
                  
                  {/* Facebook Button */}
                  <button
                    onClick={handleShareOnFacebook}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-800 transition-all duration-200 active:scale-95 touch-manipulation"
                  >
                    <Share2 className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm hidden sm:inline">Facebook</span>
                  </button>
                  
                  {/* Native Share Button (for mobile devices that support it) */}
                  <button
                    onClick={shareArticle}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 active:scale-95 touch-manipulation sm:hidden"
                  >
                    <Share2 className="h-4 w-4 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {article.title[lang] || article.title.es}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(article.date).toLocaleDateString(lang)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{article.readTime} {t.readTime}</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {article.excerpt[lang] || article.excerpt.es}
            </p>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown components={renderers}>
                {content}
              </ReactMarkdown>
            </div>
          </motion.div>

          {/* Tags Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Tag className="h-5 w-5" />
              {t.tags}
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
