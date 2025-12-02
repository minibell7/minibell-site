import type { Metadata } from 'next';
import styles from './page.module.css';
import EuroMillionsClient from './EuroMillionsClient';

export const metadata: Metadata = {
    title: 'EuroMillions Generator | Random Number Picker',
    description: 'Generate lucky numbers for the EuroMillions lottery. Pick 5 main numbers and 2 Lucky Stars instantly. Free and easy to use.',
    keywords: ['euromillions generator', 'euro lottery picker', 'euromillions numbers', 'random number generator', 'lucky dip'],
    openGraph: {
        title: 'EuroMillions Generator | minibell.com',
        description: 'Get your lucky EuroMillions numbers instantly!',
        type: 'website',
    }
};

export default function EuroMillionsPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>EuroMillions Generator</h1>
            <p className={styles.description}>
                Generate your lucky numbers for the EuroMillions lottery.
            </p>

            <EuroMillionsClient />

            <section className={styles.seoSection}>
                <h2>How to play EuroMillions</h2>
                <p>
                    EuroMillions is a transnational lottery that requires 7 correct numbers to win the jackpot. You must select 5 main numbers from 1 to 50 and 2 Lucky Stars from 1 to 12.
                </p>

                <h2>About this Generator</h2>
                <ul>
                    <li><strong>Smart Algorithm:</strong> Ensures a random and fair selection of numbers.</li>
                    <li><strong>Easy to Use:</strong> Just click the button to generate your lucky dip.</li>
                    <li><strong>Free Forever:</strong> No hidden fees or subscriptions.</li>
                </ul>

                <h2>Disclaimer</h2>
                <p>
                    This tool is for entertainment purposes only. We do not guarantee any winnings. Please play responsibly.
                </p>
            </section>
        </div>
    );
}
