import Link from 'next/link';
import styles from './page.module.css';
import { getFeaturedProjects } from '@/lib/projects';

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
          <a href="https://mini-bell7.blogspot.com" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
            Read Blog
          </a>
        </div>
      </section>

      {/* Featured Section - Updated for Vercel Trigger */}
      <section className={styles.featured}>
        <h2>Featured Projects</h2>
        <div className={styles.grid}>
          {getFeaturedProjects().map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className={styles.tag}>Live Demo</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
