import React from 'react';
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Header } from "../../sections/page/Components/Header";
import { ProfileContainer } from "../../sections/profile/Components/Profile";
import Journey2024 from "../../sections/2024/Components/Journey2024";
import { TechList } from "../../sections/2023/Components/TechList";
import { CloudProviderList } from "../../sections/profile/Components/CloudProviderList";
import { ProjectList } from "../../sections/2023/Components/ProjectList";
import { MigrationComponent } from "../../sections/2023/Components/Migrations";
import { Footer } from "../../sections/page/Components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senior DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="Explore my portfolio showcasing expertise in backend development, cloud development, and RPA. Discover my projects and skills in JavaScript, TypeScript, design patterns, software architecture, clean code, unit tests, and pipelines."
        />
      </Head>
      <Header />
      <ProfileContainer lang="en" />
      <Journey2024 lang="en" />
      <TechList lang="en" />
      <CloudProviderList lang="en" />
      <ProjectList lang="en" />
      <MigrationComponent lang="en" />
      <Footer lang="en" />
    </div>
  );
}