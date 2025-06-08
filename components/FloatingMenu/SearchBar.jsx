import React, { useState } from 'react';

/**
 * Componente de barra de búsqueda para filtrar secciones y contenido del portafolio
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onSearch - Función que se ejecuta al buscar
 * @param {boolean} props.isExpanded - Estado que indica si el menú está expandido
 * @param {string} props.lang - Idioma de la barra de búsqueda (es, en, etc.)
 * @param {string} props.placeholder - Texto del placeholder de la barra de búsqueda
 */
const SearchBar = ({ onSearch, lang = 'es', placeholder, isExpanded }) => {
  const [query, setQuery] = useState('');

  // Traducciones para los textos
  const placeholders = {
    es: 'Buscar...',
    en: 'Search...'
  };

  // Usar el placeholder proporcionado o el predeterminado según el idioma
  const searchPlaceholder = placeholder || placeholders[lang] || placeholders.es;

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className={`relative transition-all duration-300 ${isExpanded ? 'w-full' : 'w-0 overflow-hidden'}`}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={searchPlaceholder}
        className="w-full bg-opacity-80 bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        aria-label="Buscar en el portafolio"
      />
      <div className="absolute left-3 top-2.5 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      {query && (
        <button 
          onClick={() => {
            setQuery('');
            onSearch('');
          }}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
          aria-label="Limpiar búsqueda"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
