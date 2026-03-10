import React from 'react';
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";
import { ProfileContainer } from "../../sections/profile/Components/Profile";
import { CloudProviderList } from "../../sections/profile/Components/CloudProviderList";
import { Footer } from "../../sections/page/Components/Footer";
import { useLang } from "../../store/useLanguageStore";

const Journey2024 = dynamic(() => import("../../sections/2024/Components/Journey2024"), { ssr: false });
const AIMLExperience = dynamic(() => import("../../sections/2024/Components/AIMLExperience"), { ssr: false });
const KubernetesExperience = dynamic(() => import("../../sections/2024/Components/KubernetesExperience"), { ssr: false });
const AIAgentsLeadership = dynamic(() => import("../../sections/2024/Components/AIAgentsLeadership"), { ssr: false });
const ProjectList = dynamic(() => import("../../sections/2023/Components/ProjectList").then(mod => mod.ProjectList), { ssr: false });

const MigrationComponent = dynamic(() => import("../../sections/2023/Components/Migrations").then(mod => mod.MigrationComponent), { ssr: false });

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
      <ProjectList lang={lang} />
      <MigrationComponent lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
