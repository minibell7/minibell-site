import type { Metadata } from 'next';
import styles from './page.module.css';
import DDayClient from './DDayClient';

export const metadata: Metadata = {
    title: 'D-Day Calculator | Date Counter & Anniversary Checker',
    description: 'Calculate days remaining or passed since a special date. Perfect for couples, exams, birthdays, and project deadlines. Features "Today is Day 1" option.',
    keywords: ['d-day calculator', 'date counter', 'days since', 'countdown', 'anniversary calculator', 'love days'],
    openGraph: {
        title: 'D-Day Calculator | minibell.com',
        description: 'Check your D-Day instantly!',
        type: 'website',
    }
};

export default function DDayPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>D-Day Calculator</h1>
            <p className={styles.description}>
                Count the days until or since your special event.
            </p>

            <DDayClient />

            <section className={styles.seoSection}>
                <h2>How to use</h2>
                <ul>
                    <li><strong>Title:</strong> Enter the name of your event (e.g., "My Birthday").</li>
                    <li><strong>Target Date:</strong> Select the date from the calendar.</li>
                    <li><strong>Include Today:</strong> Check "Include today as Day 1" for anniversaries where the start date counts as the first day (common in Korea).</li>
                </ul>

                <h2>Features</h2>
                <ul>
                    <li><strong>Countdown:</strong> See how many days are left until a future event (D-).</li>
                    <li><strong>Days Passed:</strong> See how many days have passed since a past event (D+).</li>
                    <li><strong>Anniversaries:</strong> Automatically calculates 100th, 200th, 365th days for past events.</li>
                </ul>
            </section>
        </div>
    );
}
