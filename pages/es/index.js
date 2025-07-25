import React from 'react';
import Head from "next/head";
import styles from "../../styles/Home.module.css";
// Header eliminado para evitar duplicación de botones de idioma
import { ProfileContainer } from "../../sections/profile/Components/Profile";
import Journey2024 from "../../sections/2024/Components/Journey2024";
import AIMLExperience from "../../sections/2024/Components/AIMLExperience";
import KubernetesExperience from "../../sections/2024/Components/KubernetesExperience";
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
          content="Explora el conjunto de habilidades que muestran mi experiencia en desarrollo backend, desarrollo en la nube y Automatización. Descubre mis proyectos y habilidades en JavaScript, TypeScript, patrones de diseño, arquitectura de software, código limpio, pruebas unitarias y pipelines."
        />
      </Head>
      <ProfileContainer lang="es" />
      <Journey2024 lang="es" />
      <AIMLExperience lang="es" />
      <KubernetesExperience lang="es" />
      <TechList lang="es" />
      <CloudProviderList lang="es" />
      <ProjectList lang="es" />
      <MigrationComponent lang="es" />
      <Footer lang="es" />
    </div>
  );
}