import "../styles/globals.css";
import FloatingMenu from "../components/FloatingMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [language, setLanguage] = useState('es'); // Idioma por defecto es español
  const [devMode, setDevMode] = useState(false); // Modo desarrollo para mostrar ambos menús

  useEffect(() => {
    // Detectar el idioma basado en la ruta
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      console.log('Current path:', path);
      
      if (path === '/en' || path.startsWith('/en/')) {
        console.log('Setting language to English');
        setLanguage('en');
      } else {
        console.log('Setting language to Spanish');
        setLanguage('es');
      }
      
      // También verificamos el router para mayor precisión
      if (router.pathname === '/en' || router.pathname.startsWith('/en/')) {
        console.log('Router path indicates English');
        setLanguage('en');
      }
    }
    
    // Verificar si estamos en modo desarrollo para internacionalización
    if (typeof window !== 'undefined') {
      try {
        const isDevMode = localStorage.getItem('i18n_dev_mode');
        if (isDevMode === 'true') {
          setDevMode(true);
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
    }
  }, [router.asPath, router.pathname]);

  // Función para alternar el modo desarrollo
  const toggleDevMode = () => {
    const newDevMode = !devMode;
    setDevMode(newDevMode);
    localStorage.setItem('i18n_dev_mode', String(newDevMode));
  };

  return (
    <>
      <Component {...pageProps} />
      
      {/* Botón para activar/desactivar modo desarrollo para internacionalización */}
      <button
        onClick={toggleDevMode}
        className="fixed bottom-4 right-4 z-50 bg-purple-600 text-white px-3 py-2 rounded-lg shadow-lg text-xs font-bold hover:bg-purple-700"
      >
        {devMode ? 'Desactivar modo i18n' : 'Activar modo i18n'}
      </button>
      
      {devMode ? (
        <>
          {/* Menú en español (a la izquierda) */}
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
            <FloatingMenu lang="es" devPosition="left" />
          </div>
          
          {/* Menú en inglés (a la derecha) */}
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
            <FloatingMenu lang="en" devPosition="right" />
          </div>
        </>
      ) : (
        <FloatingMenu lang={language} />
      )}
    </>
  );
}

export default MyApp;
