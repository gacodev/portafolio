import React from 'react';
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../sections/page/Components/Footer";
import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';

const ProjectBreakdown = dynamic(
  () => import("../../sections/2024/Components/ProjectBreakdown"),
  { ssr: false, loading: () => <div className="w-full h-96 animate-pulse bg-gray-800 rounded-lg" /> }
);

export default function MetricsPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Métricas de Observabilidade - DevOps & SRE</title>
        <meta
          name="description"
          content="Métricas detalhadas de observabilidade, SLOs, incidentes e DevOps por projeto"
        />
      </Head>

      {/* Botão de retorno */}
      <div className="w-full px-4 py-6">
        <button
          onClick={() => router.push('/pt')}
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Voltar ao Portfólio</span>
        </button>
      </div>

      <ProjectBreakdown lang="pt" />
      <Footer lang="pt" />
    </div>
  );
}