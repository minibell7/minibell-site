import styles from './page.module.css';
import { projects } from '@/lib/projects';

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My PWA Projects</h1>
            <p className={styles.subtitle}>A collection of Progressive Web Apps I&apos;m working on.</p>

            <div className={styles.grid}>
                {projects.map((project) => (
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
        </div>
    );
}
