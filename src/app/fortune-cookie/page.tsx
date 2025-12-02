import type { Metadata } from 'next';
import styles from './page.module.css';
import FortuneClient from './FortuneClient';

export const metadata: Metadata = {
    title: 'Digital Fortune Cookie | Daily Wisdom & Luck',
    description: 'Open your daily fortune cookie online. Get instant wisdom, motivation, and lucky numbers. Free and fun!',
    keywords: ['fortune cookie', 'online fortune', 'daily wisdom', 'lucky message', 'fortune teller'],
    openGraph: {
        title: 'Digital Fortune Cookie | minibell.com',
        description: 'Crack open a cookie and see what the future holds!',
        type: 'website',
    }
};

export default function FortuneCookiePage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Digital Fortune Cookie</h1>
            <p className={styles.description}>
                Crack open a cookie to reveal your daily fortune.
            </p>

            <FortuneClient />

            <section className={styles.seoSection}>
                <h2>History of Fortune Cookies</h2>
                <p>
                    Did you know? Fortune cookies actually originated in California, USA, in the early 20th century, drawing inspiration from Japanese crackers. They have since become a beloved tradition in Chinese restaurants worldwide.
                </p>

                <h2>How to use</h2>
                <ul>
                    <li><strong>Focus:</strong> Think about a question or just clear your mind.</li>
                    <li><strong>Click:</strong> Tap the cookie to break it open.</li>
                    <li><strong>Read:</strong> Reflect on the message inside.</li>
                </ul>

                <h2>Why play daily?</h2>
                <p>
                    Starting your day with a small piece of wisdom or a positive affirmation can set the tone for a great day ahead. Come back every day for a new message!
                </p>
            </section>
        </div>
    );
}
