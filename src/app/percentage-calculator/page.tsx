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

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. How do I calculate a 20% discount?</h3>
                        <p>A. To calculate a 20% discount, multiply the original price by 0.20. For example, 20% of $100 is $20. The final price would be $80.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. What is the formula for percentage change?</h3>
                        <p>A. The formula is: ((New Value - Old Value) / Old Value) × 100. This tells you how much a number has grown or shrunk in percentage terms.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Can I calculate percentage increase and decrease?</h3>
                        <p>A. Yes, use the "Percentage Change" mode. If the result is positive, it's an increase. If negative, it's a decrease.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
