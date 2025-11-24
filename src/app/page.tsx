import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Building the Future of <span className={styles.highlight}>PWA</span>
        </h1>
        <p className={styles.description}>
          Welcome to my personal space where I showcase my Progressive Web Apps and share my thoughts on web development.
        </p>
        <div className={styles.cta}>
          <Link href="/projects" className="btn">
            View Projects
          </Link>
          <Link href="/blog" className={styles.secondaryBtn}>
            Read Blog
          </Link>
        </div>
      </section>

      {/* Featured Section placeholder */}
      <section className={styles.featured}>
        <h2>Latest Updates</h2>
        <div className={styles.grid}>
          <div className="card">
            <h3>Coming Soon</h3>
            <p>Stay tuned for my first PWA release.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
