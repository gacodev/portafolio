import React, { useState, useEffect } from "react";
import styles from "./RoleChanger.module.css"; // Importa un archivo CSS para las transiciones

export const RoleChanger = ({ lang }) => {
  let roles;

  if (lang === "en") {
    roles = [
      "Backend Developer",
      "DevOps Engineer",
      "Frontend Engineer",
      "Infrastructure Consultant",
    ];
  } else {
    roles = [
      "Desarrollador Backend",
      "Ingeniero DevOps",
      "Ingeniero Frontend",
      "Consultor de Infraestructura",
    ];
  }

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(roles[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextIndex = (currentRoleIndex + 1) % roles.length;
      setDisplayedRole(roles[nextIndex]);
      setCurrentRoleIndex(nextIndex);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentRoleIndex, roles]);

  return (
    <div className={styles.roleChanger}>
      <h1 className={styles.role}>
        <span className={styles.typedText}>{displayedRole}</span>
      </h1>
    </div>
  );
};
