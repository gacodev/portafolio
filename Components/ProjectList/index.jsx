import Image from "next/image";
import styles from "../../styles/Home.module.css";

export const ProjectList = ({ lang }) => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsSecondSection}>
        <h1 className={styles.titles}>
          {lang === "en" ? "Software Projects" : "Proyectos de software"}
        </h1>
        <div className={styles.experienceCard}>
          <a href="https://auladigital.comfama.com">
            <h1 className={styles.title}>Aula digital comfama</h1>
            <Image
              src="/projects/comfama.png"
              alt="auladigital"
              width={150}
              height={150}
              className={styles.images}
            />
            <p>
              Backend <br></br> Developer
            </p>
            <ul className={styles.stack}>
              <li>MySQL</li>
              <li>PHP</li>
              <li>Moodle</li>
              <li>Docker</li>
              <li>AzureDevops</li>
              <li>JavaScript</li>
              <li>Azure portal</li>
              <li>Linux Servers</li>
            </ul>
          </a>
          <h3>2023</h3>
        </div>
        <div className={styles.experienceCard}>
          <a href="https://www.instagram.com/mideberesmiderecho/?hl=es-la">
            <h1 className={styles.title}>Mi deber es mi derecho</h1>
            <Image
              src="/projects/mideber.png"
              alt="gabriel profiel"
              width={150}
              height={150}
              className={styles.images}
            />
            <p>
              FullStack <br></br> Developer
            </p>
            <ul className={styles.stack}>
              <li>MySQL</li>
              <li>PHP</li>
              <li>ReactJS</li>
              <li>Styled Components</li>
              <li>Axios</li>
              <li>MongoDB</li>
              <li>Vercel</li>
              <li>Gitlab</li>
            </ul>
          </a>
          <h3>2022</h3>
        </div>

        <div className={styles.experienceCard}>
          <a href="https://www.emavi.edu.co/interescuelas2022">
            <h1 className={styles.title}>Interescuelas FFMM</h1>
            <Image
              src="/projects/interescuelas.png"
              alt="gabriel profile"
              width={150}
              height={150}
              className={styles.images}
            />
            <p>
              FullStack <br></br> Developer
            </p>
            <ul className={styles.stack}>
              <li>MySQL</li>
              <li>Laravel</li>
              <li>Psysh</li>
              <li>Styled Components</li>
              <li>ReactJS - INERTIA</li>
              <li>MongoDB</li>
              <li>Gitlab On premise</li>
              <li>Azure Portal</li>
            </ul>
          </a>
          <h3>2022</h3>
        </div>
      </div>
    </div>
  );
};
