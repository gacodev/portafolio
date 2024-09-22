import styles from "../../../../styles/Home.module.css";

const migrationProjects = [
  {
    year: 2023,
    projects: [
      {
        name: "Aula Digital Comfama",
        url: "https://auladigital.comfama.com",
        description: {
          es: "Migración integral y automatizada de una plataforma educativa monolítica a una arquitectura de alta disponibilidad, incluyendo la actualización de contenidos(blobs, cursos, notas etc), optimización de plugins y modernización de integraciones",
          en: "Comprehensive and automated migration of a monolithic educational platform to a high-availability architecture, including content updates (videos, course, califications etc), plugin optimization, and modernization of integrations"
        },
        details: {
          sourceOS: "Ubuntu 18.04 LTS",
          targetOS: "Ubuntu 22.04 LTS",
          environments: ["Desarrollo", "Integración", "Producción"],
          activeUsers: 50000
        },
        technologies: [
          "Ansible",
          "Azure DevOps",
          "Azure Virtual Machines",
          "Autoscale sets",
          "PHP",
          "MySQL",
          "Moodle",
          "Git",
          "SQL",
          "Bash",
          "Python", 
          "Vimeo API",
          "Azure Blob Storage",
          "Az cli",
          "Az copy"
        ],
        achievements: {
          es: [
            "Implementación de infraestructura en redes privadas",
            "Aplicación de mejores prácticas de seguridad",
            "Automatización completa del proceso de migración",
            "Mejora en la escalabilidad y rendimiento del sistema"
          ],
          en: [
            "Implementation of infrastructure in private networks",
            "Application of security best practices",
            "Full automation of the migration process",
            "Improvement in system scalability and performance"
          ]
        }
      }
    ]
  }
];

export const MigrationComponent = ({ lang }) => {
  return (
    <div className={styles.migrationsContainer}>
      <h2 className={styles.titles}>{lang === 'es' ? 'Migraciones' : 'Migrations'}</h2>
      {migrationProjects.map((yearData) => (
        <div key={yearData.year} className={styles.yearSection}>
          <h3>{yearData.year}</h3>
          {yearData.projects.map((project, index) => (
            <div key={index} className={styles.migrations}>
              <h3>
                <a href={project.url}>{project.name}</a>
              </h3>
              <p>{project.description[lang]}</p>
              <p>
                {lang === 'es' ? 'Desde' : 'From'} {project.details.sourceOS} &#x27A1; {project.details.targetOS}
              </p>
              <h4>{lang === 'es' ? 'Ambientes' : 'Environments'}:</h4>
              <ul>
                {project.details.environments.map((env, i) => (
                  <li key={i}>{env}</li>
                ))}
              </ul>
              <h4>{lang === 'es' ? 'Tecnologías utilizadas' : 'Technologies used'}:</h4>
              <ul>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <h4>{lang === 'es' ? 'Logros' : 'Achievements'}:</h4>
              <ul>
                {project.achievements[lang].map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <h3>{lang === 'es' ? `Usuarios Activos: ${project.details.activeUsers}` : `Active Users: ${project.details.activeUsers}`}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};