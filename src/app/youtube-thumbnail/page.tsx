import type { Metadata } from 'next';
import styles from './page.module.css';
import ThumbnailClient from './ThumbnailClient';

export const metadata: Metadata = {
    title: 'Free YouTube Thumbnail Downloader | Save HD Thumbnails',
    description: 'Download high-quality YouTube thumbnails (HD, SD, HQ) instantly. Free online tool, no software required. Just paste the URL.',
    keywords: ['youtube thumbnail downloader', 'save youtube thumbnail', 'get youtube thumbnail', 'youtube image extractor', 'hd thumbnail'],
    openGraph: {
        title: 'Free YouTube Thumbnail Downloader | minibell.com',
        description: 'Download high-quality YouTube thumbnails instantly. Free & Fast.',
        type: 'website',
    }
};

export default function YoutubeThumbnailPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>YouTube Thumbnail Downloader</h1>
            <p className={styles.description}>
                유튜브 영상의 고화질 썸네일을 즉시 추출하여 다운로드하세요.
            </p>

            <ThumbnailClient />

            <section className={styles.seoSection}>
                <h2>How to download YouTube Thumbnails</h2>
                <ol>
                    <li>Copy the URL of the YouTube video (e.g., https://www.youtube.com/watch?v=...).</li>
                    <li>Paste the URL into the input box above.</li>
                    <li>Click "Get Thumbnails".</li>
                    <li>Choose your preferred quality (HD or SD) and click "Download".</li>
                </ol>

                <h2>Features</h2>
                <ul>
                    <li><strong>Max Resolution:</strong> Get the highest quality image available (1280x720).</li>
                    <li><strong>Fast & Free:</strong> No waiting time, completely free to use.</li>
                    <li><strong>No Software:</strong> Works directly in your browser.</li>
                </ul>
            </section>
        </div>
    );
}
