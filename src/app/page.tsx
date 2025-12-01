import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          minibell.com
        </h1>
        <p className={styles.description}>
          Something new is coming soon.
        </p>
      </main>
    </div>
  );
}
