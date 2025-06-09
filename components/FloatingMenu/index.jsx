import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import { useRouter } from "next/router";

/**
 * Menú flotante con búsqueda integrada para navegación del portafolio
 * Diseñado según principios UX: accesible, responsivo, y no intrusivo
 * @param {Object} props - Propiedades del componente
 * @param {string} props.lang - Idioma del menú (es, en)
 * @param {string} props.menuMode - Modo de visualización ('floating' o 'embedded')
 */
const FloatingMenu = ({ lang = 'es', menuMode = 'floating' }) => {
  // Estados principales del componente
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Definiciones para soporte de idiomas
  const menuLabels = {
    es: {
      profile: 'Perfil & Contacto',
      summary: 'Resumen Profesional',
      technologies: 'Herramientas y Tecnologías',
      achievements: 'Logros Clave',
      kubernetes: 'Experiencia Kubernetes',
      kafka: 'Experiencia Kafka',
      elastic: 'Experiencia Elastic',
      metrics: 'Métricas de Rendimiento',
      projects: 'Proyectos',
      agile: 'Agile & CI/CD',
      timeline: 'Timeline',
      search: 'Buscar...',
      noResults: 'No se encontraron resultados para',
      menu: 'MENÚ'
    },
    en: {
      profile: 'Profile & Contact',
      summary: 'Professional Summary',
      technologies: 'Tools & Technologies',
      achievements: 'Key Achievements',
      kubernetes: 'Kubernetes Experience',
      kafka: 'Kafka Experience',
      elastic: 'Elastic Experience',
      metrics: 'Performance Metrics',
      projects: 'Projects',
      agile: 'Agile & CI/CD',
      timeline: 'Timeline',
      search: 'Search...',
      noResults: 'No results found for',
      menu: 'MENU'
    }
  };
  
  // Usar el idioma proporcionado como prop
  
  // Usar el idioma actual para las etiquetas
  const labels = menuLabels[lang] || menuLabels.es;
  
  // Definición de las secciones principales del portafolio
  // Generar secciones basadas en el idioma actual
  const sections = React.useMemo(() => [
    { id: 'profile', name: labels.profile, icon: 'user', ref: 'profile' },
    { id: 'resumen', name: labels.summary, icon: 'file-text', ref: 'professional-summary' },
    { id: 'tecnologias', name: labels.technologies, icon: 'code', ref: 'tools-technologies' },
    { id: 'logros', name: labels.achievements, icon: 'award', ref: 'key-achievements' },
    { id: 'kubernetes', name: labels.kubernetes, icon: 'cloud', ref: 'kubernetes-experience' },
    { id: 'kafka', name: labels.kafka, icon: 'database', ref: 'kafka-experience' },
    { id: 'elastic', name: labels.elastic, icon: 'search', ref: 'elastic-experience' },
    { id: 'metricas', name: labels.metrics, icon: 'chart', ref: 'performance-metrics' },
    { id: 'proyectos', name: labels.projects, icon: 'folder', ref: 'project-breakdown' },
    { id: 'agile', name: labels.agile, icon: 'refresh', ref: 'agile-cicd' },
    { id: 'timeline', name: labels.timeline, icon: 'clock', ref: 'timeline' }
  ], [labels]);

  // Actualizar menú items cuando cambia el idioma o las secciones
  useEffect(() => {
    setMenuItems(sections);
    setFilteredItems(sections);
  }, [lang]);

  // Detectar sección activa según la posición de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.ref);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtra los items del menú según la búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredItems(menuItems);
      return;
    }

    const filtered = menuItems.filter(item => 
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.id.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  // Scroll suave a la sección correspondiente
  const scrollToSection = (sectionRef) => {
    const element = document.getElementById(sectionRef);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // En móvil, contraer el menú después de la navegación
    if (window.innerWidth < 768) {
      setIsExpanded(false);
    }
  };

  // Renderiza el icono según el tipo
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'user':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        );
      case 'code':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        );
      case 'award':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
        );
      case 'cloud':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        );
      case 'database':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
          </svg>
        );
      case 'search':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        );
      case 'folder':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
          </svg>
        );
      case 'refresh':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        );
      case 'mail':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
    }
  };

  // Determinar clases de posición basadas en el modo de visualización
  let positionClasses = '';
  
  if (menuMode === 'embedded') {
    // Modo embebido dentro del grid layout - no necesita posicionamiento flotante
    positionClasses = 'w-full transition-all duration-300 ease-in-out';
  } else {
    // Modo flotante tradicional
    positionClasses = `fixed left-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ease-in-out ${
      isExpanded ? 'translate-x-0' : 'translate-x-[calc(-100%+3rem)]'
    }`;
  }

  return (
    <div className={`${menuMode === 'floating' ? 'fixed top-4 left-0 z-50 ' : 'relative block w-full'} font-sans`}>
      <div className="flex">
        {/* Menú principal */}
        <div
          className={`${menuMode === 'floating'
            ? `bg-gray-900 bg-opacity-90 text-white shadow-xl transform transition-all duration-300 ease-in-out ${isMobile ? (isExpanded ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}`
            : 'w-full bg-gray-900 text-white'}`}
          role="navigation"
          aria-expanded={isExpanded || !isMobile}
        >
          <div className="px-4 mb-4">
            <SearchBar onSearch={handleSearch} isExpanded={isExpanded} />
          </div>
          
          <div className="px-3 mb-4 text-blue-400 text-xs uppercase font-semibold">
            {lang === 'en' ? 'Language / Idioma' : 'Idioma / Language'}
          </div>
          
          {/* Botones de idioma */}
          <div className="flex justify-center space-x-1 mb-4 px-4">
            <LanguageButtons currentLang={lang} />
          </div>
          
          <div className="max-h-[70vh] overflow-y-auto px-2 hide-scrollbar">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`w-full flex items-center p-3 mb-1 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="mr-3">{renderIcon(item.icon)}</span>
                  <span className="font-medium">{item.name}</span>
                </button>
              ))
            ) : (
              <div className="text-center text-gray-400 py-4">
                {labels.noResults} &quot;{searchTerm}&quot;
              </div>
            )}
          </div>
        </div>

        {/* Botón de alternar menú - solo visible en modo flotante */}
        {menuMode === 'floating' && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center justify-center px-2 py-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md ${(isExpanded || !isMobile) ? 'rounded-none' : 'rounded-r-xl'}`}
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-label={currentLang === 'en' ? 'Open navigation menu' : 'Abrir menú de navegación'}
          >
            {(isExpanded || !isMobile) ? (
              <>
                {/* Solo mostrar el texto cuando no es móvil o está expandido */}
                {(!isMobile || isExpanded) && (
                  <span className="text-white font-semibold mr-2 text-sm md:text-base">{labels.menu} ({currentLang.toUpperCase()})</span>
                )}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

FloatingMenu.propTypes = {
  lang: PropTypes.string,
  menuMode: PropTypes.string
};

// Componente para los botones de idioma
const LanguageButtons = ({ currentLang }) => {
  const router = useRouter();
  
  // Navegación entre idiomas - vamos a usar la navegación directa para forzar recarga
  const handleLanguageChange = (lang) => {
    if (currentLang !== lang) {
      // Forzamos la recarga completa usando window.location
      window.location.href = `/${lang}`;
    }
  };
  
  return (
    <>
  {/* Español */}
  <a 
    href="#"
    onClick={(e) => {
      e.preventDefault();
      handleLanguageChange('es');
    }}
    className={`${currentLang === "es" 
      ? "bg-gradient-to-r from-blue-700 to-blue-600 text-white font-medium shadow-inner" 
      : "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-blue-800 hover:to-blue-700 hover:text-white"}
    px-4 py-2 rounded-l-lg transition-all duration-300 flex items-center justify-center cursor-pointer`}
  >
    <span className={currentLang === "es" ? "border-b-2 border-blue-300" : ""}>Español</span>
    {currentLang === "es" && (
      <span className="ml-2 text-xs bg-blue-500 text-white px-1 rounded-full">✓</span>
    )}
  </a>

  {/* English */}
  <a 
    href="#"
    onClick={(e) => {
      e.preventDefault();
      handleLanguageChange('en');
    }}
    className={`${currentLang === "en" 
      ? "bg-gradient-to-r from-blue-700 to-blue-600 text-white font-medium shadow-inner" 
      : "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-blue-800 hover:to-blue-700 hover:text-white"}
    px-4 py-2 rounded-r-lg transition-all duration-300 flex items-center justify-center cursor-pointer`}
  >
    <span className={currentLang === "en" ? "border-b-2 border-blue-300" : ""}>English</span>
    {currentLang === "en" && (
      <span className="ml-2 text-xs bg-blue-500 text-white px-1 rounded-full">✓</span>
    )}
  </a>
</>

  );
};

export default FloatingMenu;
