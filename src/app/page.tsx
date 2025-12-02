import styles from './page.module.css';
import { projects } from '../lib/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const utilities = projects.filter(p => p.category === 'utility');
  const apps = projects.filter(p => p.category === 'app');
  const contents = projects.filter(p => p.category === 'content');

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            minibell.com
          </h1>
          <p className={styles.description}>
            AI와 함께 만드는 웹의 미래
            <br />
            <span className={styles.subDescription}>Chef & AI Developer</span>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Web Utilities</h2>
          <p className={styles.sectionDesc}>누구나 무료로 사용할 수 있는 웹 도구 모음</p>
          <div className={styles.grid}>
            {utilities.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>AI-Powered Projects</h2>
          <p className={styles.sectionDesc}>비개발자 셰프가 AI와 함께 만든 서비스들</p>
          <div className={styles.grid}>
            {apps.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Content & Stories</h2>
          <p className={styles.sectionDesc}>개발 이야기와 일상, 그리고 노하우</p>
          <div className={styles.grid}>
            {contents.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
