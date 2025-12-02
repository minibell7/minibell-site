import type { Metadata } from 'next';
import styles from './page.module.css';
import ZodiacClient from './ZodiacClient';

export const metadata: Metadata = {
    title: 'Zodiac Sign Calculator | Western & Chinese Zodiac',
    description: 'Find out your Western Zodiac sign and Chinese Zodiac animal instantly. Just enter your birth date. Discover your astrological profile.',
    keywords: ['zodiac calculator', 'what is my sign', 'chinese zodiac', 'star sign', 'horoscope'],
    openGraph: {
        title: 'Zodiac Sign Calculator | minibell.com',
        description: 'Discover your Western and Chinese Zodiac signs!',
        type: 'website',
    }
};

export default function ZodiacCalculatorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Zodiac Calculator</h1>
            <p className={styles.description}>
                Discover your Western Star Sign and Chinese Zodiac Animal.
            </p>

            <ZodiacClient />

            <section className={styles.seoSection}>
                <h2>Western Zodiac</h2>
                <p>
                    The Western zodiac is based on the position of the sun at the time of your birth. There are 12 signs, each representing different personality traits and characteristics.
                </p>

                <h2>Chinese Zodiac</h2>
                <p>
                    The Chinese zodiac is based on a 12-year cycle, with each year associated with an animal sign. Your sign is determined by your birth year.
                </p>

                <h2>Why know your signs?</h2>
                <ul>
                    <li><strong>Self-Discovery:</strong> Gain insights into your personality.</li>
                    <li><strong>Compatibility:</strong> Check compatibility with friends and partners.</li>
                    <li><strong>Fun:</strong> It's a fun way to explore astrology and culture.</li>
                </ul>
            </section>
        </div>
    );
}
