import styles from './page.module.css';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';
import Link from 'next/link';

export default function Home() {
  const allProjects = getFeaturedProjects();

  // Define Categories
  const dailyToolsIds = ['d-day-calculator', 'percentage-calculator', 'unit-converter', 'character-counter'];
  const creatorToolsIds = ['youtube-thumbnail', 'image-converter', 'qr-creator', 'favicon-generator', 'og-generator'];
  const funLuckIds = ['fortune-cookie', 'zodiac-calculator', 'pomodoro-timer', 'powerball', 'mega-millions', 'euromillions'];

  const dailyTools = allProjects.filter(p => dailyToolsIds.includes(p.id));
  const creatorTools = allProjects.filter(p => creatorToolsIds.includes(p.id));
  const funLuckTools = allProjects.filter(p => funLuckIds.includes(p.id));

  // Helper for compact list item (Mobile)
  const CompactItem = ({ project }: { project: any }) => (
    <Link href={project.url} className="glass-panel" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      borderRadius: '12px',
      textDecoration: 'none',
      color: 'inherit'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontSize: '1.5rem' }}>
          {project.tags.includes('Lotto') ? '🎱' :
            project.tags.includes('YouTube') ? '📹' :
              project.tags.includes('Image') ? '🖼️' :
                project.tags.includes('QR Code') ? '📱' :
                  project.tags.includes('Text') ? '📝' :
                    project.tags.includes('Date') ? '📅' :
                      project.tags.includes('Math') ? '🔢' :
                        project.tags.includes('Unit') ? '⚖️' :
                          project.tags.includes('Focus') ? '🍅' :
                            project.tags.includes('Fortune') ? '🥠' :
                              project.tags.includes('Zodiac') ? '🐉' : '🛠️'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <span style={{ fontWeight: '700', fontSize: '1rem' }}>{project.title}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
            {project.description}
          </span>
        </div>
      </div>
      <div style={{ color: 'var(--text-secondary)' }}>›</div>
    </Link>
  );

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Web Utilities</h1>
        <p className={styles.subtitle}>
          Free Web Utilities for Everyone
        </p>
      </section>

      {/* Daily Tools Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Daily Tools</h2>
          <p className={styles.sectionDesc}>Essential calculators and converters for everyday use</p>
        </div>
        {/* PC Grid */}
        <div className={`${styles.grid} ${styles.utilityGrid}`}>
          {dailyTools.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Mobile List */}
        <div className={`${styles.compactList} ${styles.utilityList}`}>
          {dailyTools.map((project) => (
            <CompactItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Creator Tools Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Creator Tools</h2>
          <p className={styles.sectionDesc}>Utilities for content creators and developers</p>
        </div>
        <div className={`${styles.grid} ${styles.utilityGrid}`}>
          {creatorTools.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className={`${styles.compactList} ${styles.utilityList}`}>
          {creatorTools.map((project) => (
            <CompactItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Fun & Luck Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Fun & Luck</h2>
          <p className={styles.sectionDesc}>Test your luck and have some fun</p>
        </div>
        <div className={`${styles.grid} ${styles.utilityGrid}`}>
          {funLuckTools.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className={`${styles.compactList} ${styles.utilityList}`}>
          {funLuckTools.map((project) => (
            <CompactItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Featured Apps Section (Restored) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Apps</h2>
          <p className={styles.sectionDesc}>Special services built with AI</p>
        </div>
        <div className={styles.grid}>
          {allProjects.filter(p => p.category === 'app').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
