import Link from "next/link";
import styles from "../../styles/Home.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <Link href="/">
          <div className={styles.langs}>Español</div>
        </Link>
        <Link href="/en">
          <div className={styles.langs}>English</div>
        </Link>
      </div>
    </div>
  );
};
