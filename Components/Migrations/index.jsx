import styles from "../../styles/Home.module.css";

export const MigrationComponent = ({ lang }) => {
  const getTexts = (lang) => {
    return lang === "es"
      ? {
          title: "Migraciones",
          projectName: "Aula Digital Comfama",
          sourceOS: "Ubuntu 18.04LTS",
          targetOS: "Ubuntu 22.04LTS",
          environmentsTitle: "Ambientes:",
          toolsTitle: "Herramientas utilizadas:",
          activeUsers: "Usuarios Activos: 50000",
          environments: ["Desarrollo", "Integracion", "Producción"],
          tools: [
            "ansible",
            "azuredevops",
            "azure virtual manchines",
            "git",
            "sql",
            "bash",
          ],
        }
      : {
          title: "Migrations",
          projectName: "Digital Classroom Comfama",
          sourceOS: "Ubuntu 18.04LTS",
          targetOS: "Ubuntu 22.04LTS",
          environmentsTitle: "Environments:",
          toolsTitle: "Tools used:",
          activeUsers: "Active Users: 50000",
          environments: ["Development", "Integration", "Production"],
          tools: [
            "ansible",
            "azuredevops",
            "azure virtual manchines",
            "git",
            "sql",
            "bash",
          ],
        };
  };

  const texts = getTexts(lang);

  return (
    <div className={styles.migrationsContainer}>
      <h2 className={styles.titles}>{texts.title}</h2>
      <div className={styles.migrations}>
        <h3>{texts.projectName}</h3>
        <p>
          {texts.projectName} desde {texts.sourceOS} &#x27A1; {texts.targetOS}
        </p>
        <h4>{texts.environmentsTitle}</h4>
        <ul>
          {texts.environments.map((env, index) => (
            <li key={index}>{env}</li>
          ))}
        </ul>
        <h4>{texts.toolsTitle}</h4>
        <ul>
          {texts.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <h3>{texts.activeUsers}</h3>
      </div>
    </div>
  );
};
