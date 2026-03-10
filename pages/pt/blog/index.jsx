import React from 'react';
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Blog from "../../../sections/blog/Components/Blog";
import { Footer } from "../../../sections/page/Components/Footer";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Técnico - Gabriel Contreras | DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="Blog técnico com soluções, pesquisas e experiências em arquitetura de software, DevOps, SRE e desenvolvimento. Guias passo a passo para implementar tecnologias modernas."
        />
        <meta name="keywords" content="blog técnico, devops, sre, kubernetes, azure, arquitetura de software, microsserviços, cloud engineering" />
        <meta property="og:title" content="Blog Técnico - Gabriel Contreras" />
        <meta property="og:description" content="Soluções técnicas, pesquisas e experiências em arquitetura de software" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Técnico - Gabriel Contreras" />
        <meta name="twitter:description" content="Soluções técnicas, pesquisas e experiências em arquitetura de software" />
      </Head>

      <Blog lang="pt" />
      <Footer lang="pt" />
    </div>
  );
}
