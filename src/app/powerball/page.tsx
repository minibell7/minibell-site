import type { Metadata } from 'next';
import styles from './page.module.css';
import PowerballClient from './PowerballClient';

export const metadata: Metadata = {
    title: 'US Powerball Generator | Random Number Picker',
    description: 'Generate lucky numbers for the US Powerball lottery. Pick 5 white balls and 1 red Powerball instantly. Free and easy to use.',
    keywords: ['powerball generator', 'us lottery picker', 'powerball numbers', 'random number generator', 'lucky numbers'],
    openGraph: {
        title: 'US Powerball Generator | minibell.com',
        description: 'Get your lucky Powerball numbers instantly!',
        type: 'website',
    }
};

export default function PowerballPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>US Powerball Generator</h1>
            <p className={styles.description}>
                Generate your lucky numbers for the Powerball lottery.
            </p>

            <PowerballClient />

            <section className={styles.seoSection}>
                <h2>How to play Powerball</h2>
                <p>
                    Powerball is one of the largest lotteries in the US. To play, you must select 5 numbers from 1 to 69 (White Balls) and 1 number from 1 to 26 (Red Powerball).
                </p>

                <h2>About this Generator</h2>
                <ul>
                    <li><strong>True Randomness:</strong> We use advanced algorithms to ensure fair and random selection.</li>
                    <li><strong>Instant Results:</strong> Click the button and get your numbers in seconds.</li>
                    <li><strong>Mobile Friendly:</strong> Use it on your phone while at the store.</li>
                </ul>

                <h2>Disclaimer</h2>
                <p>
                    This tool is for entertainment purposes only. We do not guarantee any winnings. Please play responsibly.
                </p>
            </section>
        </div>
    );
}
