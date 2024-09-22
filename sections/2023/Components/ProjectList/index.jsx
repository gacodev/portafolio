import Image from "next/image";
import React from "react";
import styles from "../../../../styles/Home.module.css";

const projects = [
  {
    title: "Aula digital comfama",
    image: "/projects/comfama.png",
    url: "https://auladigital.comfama.com",
    role: "Backend Developer",
    year: "2023",
    technologies: ["MySQL", "PHP", "Moodle", "Docker", "AzureDevops", "JavaScript", "Azure portal", "Linux Servers"]
  },
  {
    title: "Mi deber es mi derecho",
    image: "/projects/mideber.png",
    url: "https://www.instagram.com/mideberesmiderecho/?hl=es-la",
    role: "FullStack Developer",
    year: "2022",
    technologies: ["MySQL", "PHP", "ReactJS", "Styled Components", "Axios", "MongoDB", "Vercel", "Gitlab"]
  },
  {
    title: "Interescuelas FFMM",
    image: "/projects/interescuelas.png",
    url: "https://www.emavi.edu.co/interescuelas2022",
    role: "FullStack Developer",
    year: "2022",
    technologies: ["MySQL", "Laravel", "Psysh", "Styled Components", "ReactJS - INERTIA", "MongoDB", "Gitlab On premise", "Azure Portal"]
  }
];

export const ProjectList = ({ lang }) => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsSecondSection}>
        <h1 className={styles.titles}>
          {lang === "en" ? "Software Projects" : "Proyectos de software"}
        </h1>
        {projects.map((project, index) => (
          <div key={index} className={styles.experienceCard}>
            <a href={project.url}>
              <h1 className={styles.title}>{project.title}</h1>
              <Image
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className={styles.images}
              />
              <p>
                {project.role.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <ul className={styles.stack}>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </a>
            <h3>{project.year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};