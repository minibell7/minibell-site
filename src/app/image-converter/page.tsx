import type { Metadata } from 'next';
import styles from './page.module.css';
import ConverterClient from './ConverterClient';

export const metadata: Metadata = {
    title: 'Free WebP Converter | Convert JPG/PNG to WebP',
    description: 'Convert your images to WebP format online for free. Reduce file size without losing quality. Improve your website speed and SEO.',
    keywords: ['webp converter', 'jpg to webp', 'png to webp', 'image converter', 'compress image'],
    openGraph: {
        title: 'Free WebP Converter | minibell.com',
        description: 'Convert images to WebP instantly. Boost your site speed.',
        type: 'website',
    }
};

export default function ImageConverterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>WebP Image Converter</h1>
            <p className={styles.description}>
                이미지를 WebP로 변환하여 웹사이트 속도를 최적화하세요.
            </p>

            <ConverterClient />

            <section className={styles.seoSection}>
                <h2>Why use WebP?</h2>
                <p>
                    WebP is a modern image format that provides superior lossless and lossy compression for images on the web. Using WebP, webmasters and web developers can create smaller, richer images that make the web faster.
                </p>

                <h2>How to convert to WebP</h2>
                <ol>
                    <li>Click the upload box to select your JPG or PNG image.</li>
                    <li>The tool will automatically convert it to WebP format.</li>
                    <li>Check the file size reduction.</li>
                    <li>Click "Download WebP" to save the optimized image.</li>
                </ol>

                <h2>Benefits</h2>
                <ul>
                    <li><strong>Smaller File Size:</strong> WebP images are 26% smaller than PNGs.</li>
                    <li><strong>Faster Loading:</strong> Improve your Core Web Vitals and SEO score.</li>
                    <li><strong>Privacy Safe:</strong> All conversion happens in your browser.</li>
                </ul>
            </section>
        </div>
    );
}
