import React from 'react';
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Blog from "../../sections/blog/Components/Blog";
import { Footer } from "../../sections/page/Components/Footer";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Technical Blog - Gabriel Contreras | DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="Technical blog with solutions, research and experiences in software architecture, DevOps, SRE and development. Step-by-step guides for implementing modern technologies."
        />
        <meta name="keywords" content="technical blog, devops, sre, kubernetes, azure, software architecture, microservices, cloud engineering" />
        <meta property="og:title" content="Technical Blog - Gabriel Contreras" />
        <meta property="og:description" content="Technical solutions, research and experiences in software architecture" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technical Blog - Gabriel Contreras" />
        <meta name="twitter:description" content="Technical solutions, research and experiences in software architecture" />
      </Head>
      
      <Blog lang="en" />
      <Footer lang="en" />
    </div>
  );
}
