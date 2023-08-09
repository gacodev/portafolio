import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { TechList } from "../Components/TechList";
import { CloudProviderList } from "../Components/CloudProviderList";
import { ProfileContainer } from "../Components/Profile";
import { Header } from "../Components/Header";
import { ProjectList } from "../Components/ProjectList";
import { TechParagraph } from "../Components/TechData";
import { Footer } from "../Components/Footer";
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Backend Developer</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <Header />
      <div className={styles.main}>
        <ProfileContainer />
        <TechList />
        <CloudProviderList />
        <TechParagraph />
        <ProjectList />
      </div>
      <Footer />
    </div>
  );
}
