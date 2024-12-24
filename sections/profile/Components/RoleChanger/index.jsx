import React, { useState, useEffect } from "react";
import styles from "./RoleChanger.module.css";

export const RoleChanger = ({ lang }) => {
  const roles = lang === "en"
    ? [
        "Backend",
        "DevOps Specialist",
        "Cloud Specialist",
        "Software Specialist",
        "Sql & Nosql Databases",
        "Infrastructure Consultant",
        "Software Architecture",
        "Amazon Web Services",
        "Google Cloud",
        "Microsoft Azure"
      ]
    : [
        "Backend",
        "Especialista en DevOps ",
        "Especialista en Nube",
        "Ingeniería de Software",
        "Bases de datos Sql & Nosql",
        "Consultor de Infraestructura",
        "Arquitectura de software",
        "Amazon Web Services",
        "Google Cloud",
        "Microsoft Azure"
      ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000); 

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <div className={styles.roleChanger}>
      <h2 className={styles.role}>
        {roles[currentRoleIndex]}
      </h2>
    </div>
  );
};
