import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/404.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1>¿Te perdiste?</h1>
      <Link href="/">
        <div className={styles.langs}>
          {" "}
          <button className={styles.actions}>Regresar</button>
        </div>
      </Link>
    </div>
  );
}

export default NotFound;
