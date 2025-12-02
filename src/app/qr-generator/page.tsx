import type { Metadata } from 'next';
import styles from './page.module.css';
import QRGeneratorClient from './QRGeneratorClient';

export const metadata: Metadata = {
    title: 'Free QR Code Generator | Create Custom QR Codes Instantly',
    description: 'Generate high-quality QR codes for your URLs, text, or contact info instantly. Free, fast, and no sign-up required. Download as PNG.',
    keywords: ['QR code generator', 'free QR code', 'create QR code', 'QR code maker', 'online QR tool'],
    openGraph: {
        title: 'Free QR Code Generator | minibell.com',
        description: 'Create custom QR codes instantly for free. No sign-up required.',
        type: 'website',
    }
};

export default function QRGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Free QR Code Generator</h1>
            <p className={styles.description}>
                URL을 입력하면 즉시 QR 코드를 생성해드립니다. 평생 무료, 설치 없음.
            </p>

            <QRGeneratorClient />

            <section className={styles.seoSection}>
                <h2>How to use this QR Code Generator</h2>
                <ol>
                    <li>Enter the URL you want to convert into a QR code.</li>
                    <li>Click the "Generate" button.</li>
                    <li>Preview your QR code instantly.</li>
                    <li>Click "Download PNG" to save it to your device.</li>
                </ol>

                <h2>Why use this tool?</h2>
                <ul>
                    <li><strong>100% Free:</strong> No hidden costs or limits.</li>
                    <li><strong>Privacy Focused:</strong> Everything happens in your browser. We don't store your data.</li>
                    <li><strong>High Quality:</strong> Generate crisp, clear QR codes suitable for printing.</li>
                </ul>
            </section>
        </div>
    );
}
