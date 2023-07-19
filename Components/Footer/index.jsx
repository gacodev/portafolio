import Image from "next/image";
import styles from "../../styles/Home.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Orgullosamente</p>
      <div>
        <Image
          src="/bandera.png"
          alt="nacionalidad"
          width={50}
          height={50}
          className={styles.images}
        />
      </div>
    </footer>
  );
};
