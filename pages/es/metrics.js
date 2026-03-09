import React from 'react';
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import ProjectBreakdown from "../../sections/2024/Components/ProjectBreakdown";
import { Footer } from "../../sections/page/Components/Footer";
import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';

export default function MetricsPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Métricas de Observabilidad - DevOps & SRE</title>
        <meta
          name="description"
          content="Métricas detalladas de observabilidad, SLOs, incidentes y DevOps por proyecto"
        />
      </Head>

      {/* Botón de regreso */}
      <div className="w-full px-4 py-6">
        <button
          onClick={() => router.push('/es')}
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Volver al Portafolio</span>
        </button>
      </div>

      <ProjectBreakdown lang="es" />
      <Footer lang="es" />
    </div>
  );
}
