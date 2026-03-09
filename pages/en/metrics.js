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
        <title>Observability Metrics - DevOps & SRE</title>
        <meta
          name="description"
          content="Detailed observability metrics, SLOs, incidents and DevOps by project"
        />
      </Head>

      {/* Back button */}
      <div className="w-full px-4 py-6">
        <button
          onClick={() => router.push('/en')}
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Portfolio</span>
        </button>
      </div>

      <ProjectBreakdown lang="en" />
      <Footer lang="en" />
    </div>
  );
}
