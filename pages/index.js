import styles from "../styles/Home.module.css";

import { TechList } from "../Components/TechList";
import { CloudProviderList } from "../Components/CloudProviderList";
import { ProfileContainer } from "../Components/Profile";
import { Header } from "../Components/Header";
import { ProjectList } from "../Components/ProjectList";
import { TechParagraph } from "../Components/TechData";
import { Footer } from "../Components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Backend Developer</title>
        <meta
          name="description"
          content="Explore my portfolio showcasing expertise in backend development, cloud development, and robotics. Discover my projects and skills in JavaScript, TypeScript, design patterns, software architecture, clean code, unit tests, and pipelines."
        />
      </Head>
      <Header />
      <div className={styles.main}>
        <ProfileContainer />
        <TechList lang={"es"} />
        <CloudProviderList lang={"es"} />
        <TechParagraph />
        <ProjectList lang={"es"} />
      </div>
      <Footer />
    </div>
  );
}
