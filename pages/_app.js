import "../styles/globals.css";
import FloatingMenu from "../components/FloatingMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [language, setLanguage] = useState('es'); // Idioma por defecto es español

  useEffect(() => {
    // Detectar el idioma basado en la ruta
    const path = router.asPath;
    if (path.startsWith('/en') || router.pathname.startsWith('/en')) {
      setLanguage('en');
    } else {
      setLanguage('es');
    }
  }, [router.asPath, router.pathname]);

  return (
    <>
      <Component {...pageProps} />
      <FloatingMenu lang={language} />
    </>
  );
}

export default MyApp;
