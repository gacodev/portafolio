import styles from "../../styles/Home.module.css";
import { TechList } from "../../sections/2023/Components/TechList";
import { CloudProviderList } from "../../sections/profile/Components/CloudProviderList";
import { ProfileContainer } from "../../sections/2023/Components/Profile";
import { Header } from "../../sections/page/Components/Header";
import { ProjectList } from "../../sections/2023/Components/ProjectList";
import { Footer } from "../../sections/page/Components/Footer";
import Head from "next/head";
import { MigrationComponent } from "../../sections/2023/Components/Migrations";
import Journey2024 from "../../sections/2024/Components/Journey2024";

export default function Home() {
  return (<>
    <div className={styles.container}>
      <Head>
        <title>Senior DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="Explore my portfolio showcasing expertise in backend development, cloud development, and RPA. Discover my projects and skills in JavaScript, TypeScript, design patterns, software architecture, clean code, unit tests, and pipelines."
        />
      </Head>
      <Header />
      <div>
        <ProfileContainer />
      </div>

      <div>
        <Journey2024 lang="en" />
      </div>
      <div className={styles.main}>

        <TechList lang="en" />
        <CloudProviderList lang="en" />
        <ProjectList lang="en" />
        <MigrationComponent lang="en" />
      </div>
      <Footer lang="en" />
    </div>

  </>
  );
}