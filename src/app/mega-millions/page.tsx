import type { Metadata } from 'next';
import styles from './page.module.css';
import MegaMillionsClient from './MegaMillionsClient';

export const metadata: Metadata = {
    title: 'US Mega Millions Generator | Random Number Picker',
    description: 'Generate lucky numbers for the Mega Millions lottery. Pick 5 white balls and 1 gold Mega Ball instantly. Free and easy to use.',
    keywords: ['mega millions generator', 'us lottery picker', 'mega millions numbers', 'random number generator', 'lucky numbers'],
    openGraph: {
        title: 'US Mega Millions Generator | minibell.com',
        description: 'Get your lucky Mega Millions numbers instantly!',
        type: 'website',
    }
};

export default function MegaMillionsPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>US Mega Millions Generator</h1>
            <p className={styles.description}>
                Generate your lucky numbers for the Mega Millions lottery.
            </p>

            <MegaMillionsClient />

            <section className={styles.seoSection}>
                <h2>How to play Mega Millions</h2>
                <p>
                    Mega Millions is another major US lottery. Players pick 5 numbers from 1 to 70 (White Balls) and 1 number from 1 to 25 (Gold Mega Ball).
                </p>

                <h2>Why use this tool?</h2>
                <ul>
                    <li><strong>Quick Picks:</strong> Don't know what to play? Let our algorithm decide.</li>
                    <li><strong>Fun & Easy:</strong> A simple interface to get your numbers fast.</li>
                    <li><strong>Always Free:</strong> No cost to use, ever.</li>
                </ul>

                <h2>Disclaimer</h2>
                <p>
                    This tool is for entertainment purposes only. We do not guarantee any winnings. Please play responsibly.
                </p>
            </section>
        </div>
    );
}
