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

export default function Home() {
  return (
    <div className={styles.container}>
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
