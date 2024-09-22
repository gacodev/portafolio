import React, { useState, useEffect } from "react";
import styles from "./RoleChanger.module.css";

export const RoleChanger = ({ lang }) => {
  const roles = lang === "en"
    ? [
        "Backend",
        "DevOps",
        "Azure Cloud Specialist",
        "Software Specialist",
        "Sql & Nosql Databases",
        "Consultant",
        "Infrastructure",
        "Software Architecture",
        "AWS",
        "GCP"
      ]
    : [
        "Backend",
        "DevOps",
        "Especialista en Azure Cloud",
        "Ingeniería de Software",
        "Bases de datos Sql & Nosql",
        "Consultor",
        "Infraestructura",
        "Arquitectura de software",
        "AWS",
        "GCP"
      ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <div className={styles.roleChanger}>
      <h1 className={styles.role}>
        {roles[currentRoleIndex]}
      </h1>
    </div>
  );
};
