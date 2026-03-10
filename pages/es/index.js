import React from 'react';
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { ProfileContainer } from "../../sections/profile/Components/Profile";
import Journey2024 from "../../sections/2024/Components/Journey2024";
import AIMLExperience from "../../sections/2024/Components/AIMLExperience";
import KubernetesExperience from "../../sections/2024/Components/KubernetesExperience";
import { TechList } from "../../sections/2023/Components/TechList";
import { CloudProviderList } from "../../sections/profile/Components/CloudProviderList";
import { ProjectList } from "../../sections/2023/Components/ProjectList";
import { MigrationComponent } from "../../sections/2023/Components/Migrations";
import AIAgentsLeadership from "../../sections/2024/Components/AIAgentsLeadership";
import { Footer } from "../../sections/page/Components/Footer";
import { useLang } from "../../store/useLanguageStore";

export default function Home() {
  const lang = useLang();
  return (
    <div className={styles.container}>
      <Head>
        <title>Senior DevOps &amp; Cloud Engineer</title>
        <meta
          name="description"
          content="especialista en la migración y despliegue de aplicaciones en nube"
        />
      </Head>
      <ProfileContainer lang={lang} />
      <AIAgentsLeadership lang={lang} />
      <AIMLExperience lang={lang} />
      <CloudProviderList lang={lang} />
      <Journey2024 lang={lang} />
      <KubernetesExperience lang={lang} />
      <TechList lang={lang} />
      <ProjectList lang={lang} />
      <MigrationComponent lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}