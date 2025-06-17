import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Search, Filter } from 'lucide-react';
import { 
  getPublishedArticles, 
  getFilteredArticles,
  getArticlesByCategory,
  getCategories,
  getTags
} from '../../../data/blog';

const BlogList = ({ lang = 'es', onArticleSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const articles = getPublishedArticles();
  const categories = getCategories();
  const tags = getTags();

  // Filtrar artículos basado en búsqueda y filtros
  const filteredArticles = articles.filter(article => {
    const title = article.title[lang] || article.title.es;
    const excerpt = article.excerpt[lang] || article.excerpt.es;
    const matchesSearch = searchTerm === '' || 
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || article.category === selectedCategory;
    const matchesTag = selectedTag === '' || article.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const texts = {
    es: {
      title: "Blog Técnico",
      subtitle: "Soluciones, investigaciones y experiencias en arquitectura de software",
      search: "Buscar artículos...",
      allCategories: "Todas las categorías",
      allTags: "Todos los tags",
      readMore: "Leer más",
      author: "Autor",
      readTime: "min de lectura",
      noResults: "No se encontraron artículos que coincidan con los filtros.",
      clearFilters: "Limpiar filtros"
    },
    en: {
      title: "Technical Blog",
      subtitle: "Solutions, research and experiences in software architecture",
      search: "Search articles...",
      allCategories: "All categories",
      allTags: "All tags",
      readMore: "Read more",
      author: "Author",
      readTime: "min read",
      noResults: "No articles found matching the filters.",
      clearFilters: "Clear filters"
    }
  };

  const t = texts[lang];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 bg-white rounded-lg shadow-md p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">{t.allCategories}</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="relative">
              <Tag className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">{t.allTags}</option>
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {t.clearFilters}
            </button>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Article Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {article.title[lang] || article.title.es}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt[lang] || article.excerpt.es}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        +{article.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString(lang)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime} {t.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={() => onArticleSelect(article.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium block text-center"
                  >
                    {t.readMore}
                  </button>
                </div>
              </motion.article>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-gray-600 text-lg mb-4">{t.noResults}</p>
              <button
                onClick={clearFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
              >
                {t.clearFilters}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
