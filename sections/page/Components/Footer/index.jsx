import Image from "next/image";
import styles from "../../../../styles/Home.module.css";

export const Footer = ({ lang }) => {
  const getFooterContent = () => {
    if (lang === "es") {
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
    } else if (lang === "en") {
      return (
        <footer className={styles.footer}>
          <p>Proudly</p>
          <div>
            <Image
              src="/bandera.png"
              alt="nationality"
              width={50}
              height={50}
              className={styles.images}
            />
          </div>
        </footer>
      );
    }

    // Default to the Spanish version if the lang prop is not recognized
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

  return getFooterContent();
};

