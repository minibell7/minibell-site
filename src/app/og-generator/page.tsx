import type { Metadata } from 'next';
import styles from './page.module.css';
import OGGeneratorClient from './OGGeneratorClient';

export const metadata: Metadata = {
    title: 'Free Open Graph Generator | Preview Social Media Cards',
    description: 'Create and preview Open Graph (OG) meta tags for Facebook, Twitter, LinkedIn, and more. Optimize your link previews instantly.',
    keywords: ['open graph generator', 'og tag generator', 'social media preview', 'meta tag generator', 'seo tool'],
    openGraph: {
        title: 'Free Open Graph Generator | minibell.com',
        description: 'Create and preview Open Graph meta tags instantly. Optimize your social media sharing.',
        type: 'website',
    }
};

export default function OGGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Open Graph Generator</h1>
            <p className={styles.description}>
                SNS 공유 시 보여질 미리보기 카드를 만들고 메타 태그를 생성하세요.
            </p>

            <OGGeneratorClient />

            <section className={styles.seoSection}>
                <h2>What are Open Graph Tags?</h2>
                <p>
                    Open Graph (OG) tags are snippets of code that control how URLs are displayed when shared on social media like Facebook, LinkedIn, and Twitter.
                </p>

                <h2>How to use this tool</h2>
                <ol>
                    <li>Enter your page title, description, and image URL.</li>
                    <li>See the real-time preview of how your link will look.</li>
                    <li>Copy the generated meta tags.</li>
                    <li>Paste them into the <code>&lt;head&gt;</code> section of your HTML.</li>
                </ol>

                <h2>Why is this important?</h2>
                <ul>
                    <li><strong>Better Click-Through Rates:</strong> Attractive cards get more clicks.</li>
                    <li><strong>Professional Look:</strong> Ensure your brand looks consistent across platforms.</li>
                    <li><strong>SEO Benefits:</strong> While not a direct ranking factor, social signals are important.</li>
                </ul>
            </section>
        </div>
    );
}
