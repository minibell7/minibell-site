import type { Metadata } from 'next';
import styles from './page.module.css';
import PercentageClient from './PercentageClient';

export const metadata: Metadata = {
    title: 'Percentage Calculator | Discount, Ratio, & Change',
    description: 'Free online percentage calculator. Calculate discounts, find percentage of a number, and calculate percentage increase/decrease.',
    keywords: ['percentage calculator', 'percent change', 'discount calculator', 'math tool', 'ratio calculator'],
    openGraph: {
        title: 'Percentage Calculator | minibell.com',
        description: 'Solve all your percentage problems instantly!',
        type: 'website',
    }
};

export default function PercentagePage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Percentage Calculator</h1>
            <p className={styles.description}>
                Calculate discounts, ratios, and percentage changes easily.
            </p>

            <PercentageClient />

            <section className={styles.seoSection}>
                <h2>Common Uses</h2>
                <ul>
                    <li><strong>Discounts:</strong> Calculate how much you save during a sale (e.g., 20% off $50).</li>
                    <li><strong>Tips:</strong> Calculate the tip amount for a restaurant bill.</li>
                    <li><strong>Growth:</strong> Measure the percentage increase in sales or traffic.</li>
                    <li><strong>Proportions:</strong> Find out what percentage one number is of another.</li>
                </ul>

                <h2>Formulas</h2>
                <ul>
                    <li><strong>Percentage Value:</strong> (Percentage / 100) × Total Value</li>
                    <li><strong>Percentage Ratio:</strong> (Part / Total) × 100</li>
                    <li><strong>Percentage Change:</strong> ((New Value - Old Value) / Old Value) × 100</li>
                </ul>
            </section>
        </div>
    );
}
