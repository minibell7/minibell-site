import styles from './page.module.css';
import { projects } from '../lib/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          minibell.com
        </h1>
        <p className={styles.description}>
          PWA의 미래를 만들어갑니다
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
