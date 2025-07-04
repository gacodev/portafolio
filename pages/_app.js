import "../styles/globals.css";
import FloatingMenu from "../components/FloatingMenu";
import ScrollArrows from "../components/ScrollArrows";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [language, setLanguage] = useState('es'); // Idioma por defecto es español
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar dispositivo móvil/tablet
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar visibilidad del menú

  // Función para manejar cambios en el tamaño de la pantalla
  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 1280); // Incluye tablets e iPad Pro para floating menu
      // Si cambia a desktop grande, mostrar menú lateral
      if (window.innerWidth >= 1280) {
        setMenuVisible(true);
      } else {
        setMenuVisible(false); // En móvil/tablet, usar floating menu
      }
    }
  }, []);

  // Detectar dispositivo móvil/tablet al cargar y cuando cambie el tamaño
  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize(); // Ejecutar una vez al inicio
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);
  
  // Función para alternar la visibilidad del menú en móviles/tablets
  const toggleMenu = () => {
    if (isMobile) {
      setMenuVisible(prevState => !prevState);
    }
  };

  // Cerrar menu al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Solo aplica en móviles y cuando el menú está visible
      if (isMobile && menuVisible) {
        const menu = document.querySelector('.menu-container');
        const menuButton = document.querySelector('.menu-toggle-button');
        
        // Si hay un clic fuera del menú y del botón de menú
        if (menu && !menu.contains(event.target) && 
            menuButton && !menuButton.contains(event.target)) {
          setMenuVisible(false);
        }
      }
    };

    // Agregar listener solo cuando el menú está visible en móvil
    if (isMobile && menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, menuVisible]);

  useEffect(() => {
    // Detectar el idioma basado en la ruta
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      
      if (path === '/en' || path.startsWith('/en/')) {
        setLanguage('en');
      } else {
        setLanguage('es');
      }
      
      // También verificamos el router para mayor precisión
      if (router.pathname === '/en' || router.pathname.startsWith('/en/')) {
        setLanguage('en');
      }
    }
  }, [router.asPath, router.pathname]);

  return (
    <>
      <div className="grid-layout">
      {/* Botón para mostrar/ocultar menú en móviles/tablets */}
      {isMobile && (
        <button 
          onClick={toggleMenu}
          className="menu-toggle-button fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
          aria-label={menuVisible ? 'Ocultar menú' : 'Mostrar menú'}
        >
          {menuVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      )}
      
      {/* Menú lateral - visible en desktop grande, floating en móviles/tablets */}
      {(!isMobile || (isMobile && menuVisible)) && (
        <aside className={`menu-container ${isMobile ? 'mobile-menu' : ''}`}>
          <FloatingMenu 
            lang={language} 
            menuMode="embedded" 
            isMobile={isMobile} 
            closeMenu={() => isMobile && setMenuVisible(false)}
          />
        </aside>
      )}
      
      {/* Contenido principal */}
      <main className="content-container">
        <Component {...pageProps} />
      </main>


    </div>

      {/* Arrows for quick section navigation (outside grid to avoid layout shifts) */}
      <ScrollArrows />
    </>
  );
}

export default MyApp;
