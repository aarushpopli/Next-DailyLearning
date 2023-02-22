import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Daily Learning</h1>

        <p className={styles.description}>
          Here I post about my day-to-day learnings
        </p>
        {/* Cannot use <Image /> when buidling a static site */}
        <Image src="/learn.jpg" alt="homeimage" width={240} height={240} className={styles.image}/>
        {/* <picture>
          <img src="/learn.jpg" alt="homeimage" width={240} height={240} className={styles.image} />
        </picture> */}
        <div className={styles.info}>
          <span className={styles.badge}>Web Development</span>
          <span className={styles.badge}>Animation</span>
          <span className={styles.badge}>Chess</span>
          <span className={styles.badge}>Cryptocurrency</span>
          <span className={styles.badge}>Blender</span>
          <span className={styles.badge}>Finance</span>
          <span className={styles.badge}>Bootstrap</span>
          <span className={styles.badge}>Front end</span>
          <span className={styles.badge}>Insurance</span>
          <span className={styles.badge}>Angular</span>
          <span className={styles.badge}>Science</span>
          <span className={styles.badge}>React JS</span>
        </div>

      </main>
    </div>
  );
}
