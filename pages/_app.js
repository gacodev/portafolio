import "../styles/globals.css";
import dynamic from "next/dynamic";
import ScrollArrows from "../components/ScrollArrows";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import useLanguageStore from "../store/useLanguageStore";

const FloatingMenu = dynamic(() => import("../components/FloatingMenu"), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { lang, setLang } = useLanguageStore();
  const [isMobile, setIsMobile] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  // Sync lang from URL → Zustand store (on route change or initial load)
  useEffect(() => {
    const path = router.asPath || '';
    if (path.startsWith('/en')) {
      setLang('en');
    } else if (path.startsWith('/pt')) {
      setLang('pt');
    } else {
      setLang('es');
    }
  }, [router.asPath, setLang]);

  // Handle screen resize
  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      const mobile = window.innerWidth < 1280;
      setIsMobile(mobile);
      setMenuVisible(!mobile);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  const toggleMenu = () => {
    if (isMobile) setMenuVisible((prev) => !prev);
  };

  // Close menu on outside click (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && menuVisible) {
        const menu = document.querySelector('.menu-container');
        const menuButton = document.querySelector('.menu-toggle-button');
        if (menu && !menu.contains(event.target) &&
            menuButton && !menuButton.contains(event.target)) {
          setMenuVisible(false);
        }
      }
    };

    if (isMobile && menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, menuVisible]);

  return (
    <>
      <div className="grid-layout">
      {/* Mobile menu toggle */}
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
      
      {/* Sidebar */}
      {(!isMobile || (isMobile && menuVisible)) && (
        <aside className={`menu-container ${isMobile ? 'mobile-menu' : ''}`}>
          <FloatingMenu 
            lang={lang} 
            menuMode="embedded" 
            isMobile={isMobile} 
            closeMenu={() => isMobile && setMenuVisible(false)}
          />
        </aside>
      )}
      
      {/* Main content — lang passed from Zustand */}
      <main className="content-container">
        <Component {...pageProps} lang={lang} />
      </main>

    </div>

      <ScrollArrows />
    </>
  );
}

export default MyApp;
