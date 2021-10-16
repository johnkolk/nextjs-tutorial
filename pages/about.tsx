import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/about.tsx</code>
        </p>
      </main>
    </div>
  );
};

export default About;
