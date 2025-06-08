import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

/**
 * Menú flotante con búsqueda integrada para navegación del portafolio
 * Diseñado según principios UX: accesible, responsivo, y no intrusivo
 * @param {Object} props - Propiedades del componente
 * @param {string} props.lang - Idioma del menú (es, en)
 * @param {string} props.devPosition - Posición del menú en modo desarrollo ('left' o 'right')
 */
const FloatingMenu = ({ lang = 'es', devPosition = null }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
  
  // Usar el idioma proporcionado como prop directamente
  // No usamos un estado local para evitar posibles desincronizaciones
  const currentLang = lang;
  
  // Registrar cambios de idioma para ayudar en la depuración
  useEffect(() => {
    console.log('FloatingMenu: Language updated to', lang);
  }, [lang]);
  
  // Usar el idioma actual para las etiquetas
  const labels = menuLabels[currentLang] || menuLabels.es;
  
  // Definición de las secciones principales del portafolio
  // Esta información podría venir de un archivo de configuración o API
  const sections = [
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
  ];

  // Inicialización de los menú items
  useEffect(() => {
    setMenuItems(sections);
    setFilteredItems(sections);
  }, []);

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
  }, [sections]);

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
    console.log(`Intentando navegar a sección: ${sectionRef} con idioma: ${currentLang}`);
    
    // Intentar encontrar el elemento de varias maneras
    let element = document.getElementById(sectionRef);
    
    if (!element) {
      // Intentar con prefijos de idioma
      const langPrefix = currentLang === 'en' ? 'en-' : 'es-';
      element = document.getElementById(`${langPrefix}${sectionRef}`);
      console.log(`Buscando elemento con prefijo de idioma: ${langPrefix}${sectionRef}`);
    }
    
    if (element) {
      console.log(`Sección encontrada, navegando a: ${sectionRef}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Actualizar la sección activa
      const activeItem = sections.find(item => item.ref === sectionRef);
      if (activeItem) {
        setActiveSection(activeItem.id);
      }
    } else {
      console.warn(`No se encontró la sección: ${sectionRef} con idioma: ${currentLang}`);
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

  // Determinar clases de posición basadas en el modo desarrollo
  let positionClasses = '';
  
  if (devPosition === 'right') {
    positionClasses = `fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ease-in-out ${
      isExpanded ? 'translate-x-0' : 'translate-x-[calc(100%-3rem)]'
    }`;
  } else {
    positionClasses = `fixed left-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ease-in-out ${
      isExpanded ? 'translate-x-0' : 'translate-x-[calc(-100%+3rem)]'
    }`;
  }
  
  return (
    <div className={positionClasses}>
      {/* Contenedor principal con efecto glassmorphism */}
      <div className="flex rounded-r-xl overflow-hidden shadow-xl">
        {/* Panel de menú */}
        <div 
          className={`bg-gray-900 bg-opacity-90 backdrop-blur-md text-white py-4 transition-all duration-300 ${
            isExpanded ? 'w-64 border-r border-blue-500' : 'w-0'
          }`}
        >
          <div className="px-4 mb-4">
            <SearchBar onSearch={handleSearch} isExpanded={isExpanded} lang={currentLang} />
          </div>
          
          <div className="max-h-[70vh] overflow-y-auto px-2 hide-scrollbar no-scrollbar">
            <div className="px-3 mb-2 text-blue-400 text-xs uppercase font-semibold">
              {currentLang === 'en' ? 'Navigation' : 'Navegación'}
            </div>
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
                {labels.noResults} "{searchTerm}"
              </div>
            )}
          </div>
        </div>

        {/* Botón de alternar menú con ícono más descriptivo */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md ${
            isExpanded ? 'rounded-none' : devPosition === 'right' ? 'rounded-l-xl' : 'rounded-r-xl'
          }`}
          aria-expanded={isExpanded}
          aria-label={currentLang === 'en' ? 'Open navigation menu' : 'Abrir menú de navegación'}
        >
          {devPosition === 'right' ? (
            <span className="text-white font-semibold ml-2">{labels.menu} ({currentLang.toUpperCase()})</span>
          ) : (
            <span className="text-white font-semibold mr-2">{labels.menu} ({currentLang.toUpperCase()})</span>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isExpanded ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

FloatingMenu.propTypes = {
  lang: PropTypes.string,
  devPosition: PropTypes.string
};

export default FloatingMenu;
