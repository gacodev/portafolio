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
          content="Explora mi portafolio que muestra experiencia en desarrollo backend, desarrollo en la nube y RPA. Descubre mis proyectos y habilidades en JavaScript, TypeScript, patrones de diseño, arquitectura de software, código limpio, pruebas unitarias y pipelines."
        />
      </Head>

      <Header />
      <ProfileContainer lang="es" />
      <Journey2024 lang="es" />
      <TechList lang="es" />
      <CloudProviderList lang="es" />
      <ProjectList lang="es" />
      <MigrationComponent lang="es" />
      <Footer lang="es" />
    </div>
  );
}