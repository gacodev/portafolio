import React from 'react';
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Blog from "../../sections/blog/Components/Blog";
import { Footer } from "../../sections/page/Components/Footer";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Técnico - Gabriel Contreras | DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="Blog técnico con soluciones, investigaciones y experiencias en arquitectura de software, DevOps, SRE y desarrollo. Guías paso a paso para implementar tecnologías modernas."
        />
        <meta name="keywords" content="blog técnico, devops, sre, kubernetes, azure, arquitectura software, microservicios, cloud engineering" />
        <meta property="og:title" content="Blog Técnico - Gabriel Contreras" />
        <meta property="og:description" content="Soluciones técnicas, investigaciones y experiencias en arquitectura de software" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Técnico - Gabriel Contreras" />
        <meta name="twitter:description" content="Soluciones técnicas, investigaciones y experiencias en arquitectura de software" />
      </Head>
      
      <Blog lang="es" />
      <Footer lang="es" />
    </div>
  );
}
