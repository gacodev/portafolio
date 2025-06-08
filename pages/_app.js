import "../styles/globals.css";
import FloatingMenu from "../components/FloatingMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [language, setLanguage] = useState('es'); // Idioma por defecto es español

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
  }, [router.asPath, router.pathname]);

  return (
    <div className="grid-layout">
      {/* Menú lateral */}
      <aside className="menu-container">
        <FloatingMenu lang={language} menuMode="embedded" />
      </aside>
      
      {/* Contenido principal */}
      <main className="content-container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
