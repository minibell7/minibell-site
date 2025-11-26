import Link from 'next/link';
import styles from './page.module.css';

export default function Stories() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dev Stories</h1>
            <p className={styles.subtitle}>
                Behind the scenes of my development journey.
                <br />
                Hand-crafted stories about challenges, learning, and growth.
            </p>

            <div className={styles.grid}>
                {/* Story Card 1 */}
                <Link href="/stories/my-journey" className={styles.card}>
                    <div className={styles.cardContent}>
                        <span className={styles.date}>2025. 11. 27.</span>
                        <h2 className={styles.cardTitle}>From Restaurant Owner to App Creator</h2>
                        <p className={styles.cardExcerpt}>
                            How an ordinary business owner built 4 apps in 50 days using AI tools like Replit and Cursor.
                        </p>
                        <span className={styles.readMore}>Read Story &rarr;</span>
                    </div>
                </Link>

                {/* Placeholder for future stories */}
                <div className={styles.placeholder}>
                    <p>More stories coming soon...</p>
                </div>
            </div>
        </div>
    );
}
