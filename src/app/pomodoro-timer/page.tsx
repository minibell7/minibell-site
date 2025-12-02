import type { Metadata } from 'next';
import styles from './page.module.css';
import PomodoroClient from './PomodoroClient';

export const metadata: Metadata = {
    title: 'Pomodoro Timer | Focus & Study Timer',
    description: 'Boost your productivity with this free online Pomodoro Timer. 25 minutes work, 5 minutes break. Simple, effective, and distraction-free.',
    keywords: ['pomodoro timer', 'study timer', 'focus timer', 'tomato timer', 'productivity tool', 'online timer'],
    openGraph: {
        title: 'Pomodoro Timer | minibell.com',
        description: 'Stay focused with the Pomodoro technique.',
        type: 'website',
    }
};

export default function PomodoroPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Pomodoro Timer</h1>
            <p className={styles.description}>
                Stay focused and productive with the Pomodoro technique.
            </p>

            <PomodoroClient />

            <section className={styles.seoSection}>
                <h2>What is the Pomodoro Technique?</h2>
                <p>
                    The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.
                </p>

                <h2>How to use</h2>
                <ol>
                    <li><strong>Decide on the task</strong> to be done.</li>
                    <li><strong>Set the timer</strong> to 25 minutes (Work mode).</li>
                    <li><strong>Work on the task</strong> until the timer rings.</li>
                    <li><strong>Take a short break</strong> (5 minutes).</li>
                    <li><strong>Repeat</strong> the cycle. After 4 pomodoros, take a longer break.</li>
                </ol>

                <h2>Benefits</h2>
                <ul>
                    <li>Improves focus and concentration.</li>
                    <li>Prevents mental fatigue.</li>
                    <li>Helps manage distractions.</li>
                </ul>
            </section>
        </div>
    );
}
