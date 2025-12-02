import type { Metadata } from 'next';
import styles from './page.module.css';
import UnitClient from './UnitClient';

export const metadata: Metadata = {
    title: 'Unit Converter | Length, Weight, Area, Temperature',
    description: 'Convert between common units of measurement. Length (m, ft, inch), Weight (kg, lb), Area (pyeong, m2), and Temperature (C, F).',
    keywords: ['unit converter', 'length converter', 'weight converter', 'pyeong to m2', 'celsius to fahrenheit', 'measurement converter'],
    openGraph: {
        title: 'Unit Converter | minibell.com',
        description: 'Convert units instantly!',
        type: 'website',
    }
};

export default function UnitConverterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Unit Converter</h1>
            <p className={styles.description}>
                Convert Length, Weight, Area, and Temperature units.
            </p>

            <UnitClient />

            <section className={styles.seoSection}>
                <h2>Supported Units</h2>
                <ul>
                    <li><strong>Length:</strong> Meter, Centimeter, Inch, Foot, Yard, Kilometer, Mile</li>
                    <li><strong>Weight:</strong> Kilogram, Gram, Pound, Ounce</li>
                    <li><strong>Area:</strong> Square Meter, Pyeong (KR), Square Foot, Acre</li>
                    <li><strong>Temperature:</strong> Celsius, Fahrenheit, Kelvin</li>
                </ul>

                <h2>Popular Conversions</h2>
                <ul>
                    <li><strong>Pyeong to m²:</strong> Essential for Korean real estate. 1 Pyeong ≈ 3.3 m².</li>
                    <li><strong>Inch to cm:</strong> Useful for screen sizes and clothing. 1 Inch = 2.54 cm.</li>
                    <li><strong>Kg to Lb:</strong> Common for body weight. 1 Kg ≈ 2.2 lbs.</li>
                </ul>
            </section>
        </div>
    );
}
