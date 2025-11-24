import styles from './page.module.css';

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My PWA Projects</h1>
            <p className={styles.subtitle}>A collection of Progressive Web Apps I&apos;m working on.</p>

            <div className={styles.grid}>
                <a href="https://pet-bti.com" target="_blank" rel="noopener noreferrer" className="card">
                    <h3>Pet BTI</h3>
                    <p>Discover your pet&apos;s personality type with this fun and interactive PWA.</p>
                    <span className={styles.tag}>Live Demo</span>
                </a>
                <a href="https://rvqskvxip8o1yio3z9yw.share.dreamflow.app/" target="_blank" rel="noopener noreferrer" className="card">
                    <h3>Dreamflow App</h3>
                    <p>My second PWA project created with Dreamflow.</p>
                    <span className={styles.tag}>Live Demo</span>
                </a>
            </div>
        </div>
    );
}
