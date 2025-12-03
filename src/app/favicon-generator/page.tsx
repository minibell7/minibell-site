import type { Metadata } from 'next';
import styles from './page.module.css';
import FaviconGeneratorClient from './FaviconGeneratorClient';

export const metadata: Metadata = {
    title: 'Free Favicon Generator | Convert Images to PNG Icons',
    description: 'Convert any image to high-quality favicons (16x16, 32x32, 192x192, 512x512). Free online tool, no upload required. Download instantly.',
    keywords: ['favicon generator', 'create favicon', 'image to favicon', 'png icon converter', 'website icon maker'],
    openGraph: {
        title: 'Free Favicon Generator | minibell.com',
        description: 'Convert any image to high-quality favicons instantly. Free & Secure.',
        type: 'website',
    }
};

export default function FaviconGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Free Favicon Generator</h1>
            <p className={styles.description}>
                Upload an image to convert it into favicons (PNG) of various sizes.
            </p>

            <FaviconGeneratorClient />

            <section className={styles.seoSection}>
                <h2>How to use this Favicon Generator</h2>
                <ol>
                    <li>Click the upload area or drag and drop your image.</li>
                    <li>The tool will automatically generate favicons in standard sizes (16x16, 32x32, 192x192, 512x512).</li>
                    <li>Preview the icons and click "Download PNG" for the sizes you need.</li>
                </ol>

                <h2>Supported Sizes</h2>
                <ul>
                    <li><strong>16x16:</strong> Standard browser tab icon.</li>
                    <li><strong>32x32:</strong> High-resolution taskbar icon.</li>
                    <li><strong>192x192:</strong> Android Chrome home screen icon.</li>
                    <li><strong>512x512:</strong> PWA splash screen icon.</li>
                </ul>
            </section>
        </div>
    );
}
