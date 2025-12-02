import type { Metadata } from 'next';
import styles from './page.module.css';
import CounterClient from './CounterClient';

export const metadata: Metadata = {
    title: 'Free Character Counter | Word & Letter Count Tool',
    description: 'Calculate characters, words, and lines instantly. Check text length for SEO, social media posts, and essays. Free online tool.',
    keywords: ['character counter', 'word counter', 'letter count', 'text length', 'online counter'],
    openGraph: {
        title: 'Free Character Counter | minibell.com',
        description: 'Count characters and words instantly. Perfect for writers and marketers.',
        type: 'website',
    }
};

export default function CharacterCounterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Character Counter</h1>
            <p className={styles.description}>
                글자 수(공백 포함/제외), 단어 수, 줄 수를 실시간으로 확인하세요.
            </p>

            <CounterClient />

            <section className={styles.seoSection}>
                <h2>Why use a Character Counter?</h2>
                <p>
                    Whether you are writing a tweet, a blog post meta description, or an essay, knowing the exact character count is essential.
                </p>

                <h2>Common Character Limits</h2>
                <ul>
                    <li><strong>Twitter (X):</strong> 280 characters</li>
                    <li><strong>Instagram Caption:</strong> 2,200 characters</li>
                    <li><strong>Google Meta Description:</strong> ~160 characters</li>
                    <li><strong>Google Title Tag:</strong> ~60 characters</li>
                </ul>

                <h2>Features</h2>
                <ul>
                    <li><strong>Real-time Counting:</strong> See results as you type.</li>
                    <li><strong>Privacy First:</strong> Your text is never sent to any server.</li>
                    <li><strong>Detailed Stats:</strong> Words, lines, and characters (with/without spaces).</li>
                </ul>
            </section>
        </div>
    );
}
