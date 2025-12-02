import type { Metadata } from 'next';
import styles from './page.module.css';
import BiorhythmClient from './BiorhythmClient';

export const metadata: Metadata = {
    title: 'Biorhythm Calculator | Physical, Emotional, Intellectual Cycles',
    description: 'Calculate your daily biorhythm cycles. Check your physical, emotional, and intellectual energy levels based on your birth date. Free online tool.',
    keywords: ['biorhythm calculator', 'daily biorhythm', 'physical cycle', 'emotional cycle', 'intellectual cycle', 'energy levels'],
    openGraph: {
        title: 'Biorhythm Calculator | minibell.com',
        description: 'Check your daily energy cycles instantly!',
        type: 'website',
    }
};

export default function BiorhythmPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Biorhythm Calculator</h1>
            <p className={styles.description}>
                Check your Physical, Emotional, and Intellectual cycles for today.
            </p>

            <BiorhythmClient />

            <section className={styles.seoSection}>
                <h2>What is Biorhythm?</h2>
                <p>
                    Biorhythm theory suggests that human life moves in predictable cycles involving physical, emotional, and intellectual energy. These cycles start at birth and oscillate between positive (high) and negative (low) phases.
                </p>

                <h2>The Three Cycles</h2>
                <ul>
                    <li><strong>Physical (23 days):</strong> Affects strength, coordination, and well-being.</li>
                    <li><strong>Emotional (28 days):</strong> Affects mood, creativity, and sensitivity.</li>
                    <li><strong>Intellectual (33 days):</strong> Affects analytical ability, logic, and memory.</li>
                </ul>

                <h2>How to use</h2>
                <p>
                    Simply enter your birth date to see where you are in each cycle today. Positive values indicate high energy, while negative values suggest a recharge period.
                </p>
            </section>
        </div>
    );
}
