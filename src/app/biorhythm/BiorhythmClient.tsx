'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function BiorhythmClient() {
    const [birthDate, setBirthDate] = useState('');
    const [result, setResult] = useState<{ physical: number, emotional: number, intellectual: number } | null>(null);

    const calculateBiorhythm = () => {
        if (!birthDate) return;

        const birth = new Date(birthDate);
        const today = new Date();

        // Difference in days
        const diffTime = Math.abs(today.getTime() - birth.getTime());
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const physical = Math.sin((2 * Math.PI * days) / 23);
        const emotional = Math.sin((2 * Math.PI * days) / 28);
        const intellectual = Math.sin((2 * Math.PI * days) / 33);

        setResult({
            physical: Math.round(physical * 100),
            emotional: Math.round(emotional * 100),
            intellectual: Math.round(intellectual * 100)
        });
    };

    const getBarColor = (value: number) => {
        if (value > 50) return '#22c55e'; // Green
        if (value > 0) return '#84cc16'; // Lime
        if (value > -50) return '#f59e0b'; // Orange
        return '#ef4444'; // Red
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.inputCard} glass-panel`}>
                <label className={styles.label}>Enter your Birth Date:</label>
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className={styles.dateInput}
                />
                <button onClick={calculateBiorhythm} className={styles.calcBtn}>
                    Check Today's Rhythm
                </button>
            </div>

            {result && (
                <div className={`${styles.resultCard} glass-panel`}>
                    <div className={styles.rhythmRow}>
                        <div className={styles.rhythmLabel}>
                            <span>Physical</span>
                            <span className={styles.cycleInfo}>(23 days)</span>
                        </div>
                        <div className={styles.barContainer}>
                            <div
                                className={styles.bar}
                                style={{
                                    width: `${Math.abs(result.physical)}%`,
                                    backgroundColor: getBarColor(result.physical),
                                    left: result.physical >= 0 ? '50%' : 'auto',
                                    right: result.physical < 0 ? '50%' : 'auto'
                                }}
                            />
                            <div className={styles.centerLine} />
                        </div>
                        <div className={styles.value}>{result.physical}%</div>
                    </div>

                    <div className={styles.rhythmRow}>
                        <div className={styles.rhythmLabel}>
                            <span>Emotional</span>
                            <span className={styles.cycleInfo}>(28 days)</span>
                        </div>
                        <div className={styles.barContainer}>
                            <div
                                className={styles.bar}
                                style={{
                                    width: `${Math.abs(result.emotional)}%`,
                                    backgroundColor: getBarColor(result.emotional),
                                    left: result.emotional >= 0 ? '50%' : 'auto',
                                    right: result.emotional < 0 ? '50%' : 'auto'
                                }}
                            />
                            <div className={styles.centerLine} />
                        </div>
                        <div className={styles.value}>{result.emotional}%</div>
                    </div>

                    <div className={styles.rhythmRow}>
                        <div className={styles.rhythmLabel}>
                            <span>Intellectual</span>
                            <span className={styles.cycleInfo}>(33 days)</span>
                        </div>
                        <div className={styles.barContainer}>
                            <div
                                className={styles.bar}
                                style={{
                                    width: `${Math.abs(result.intellectual)}%`,
                                    backgroundColor: getBarColor(result.intellectual),
                                    left: result.intellectual >= 0 ? '50%' : 'auto',
                                    right: result.intellectual < 0 ? '50%' : 'auto'
                                }}
                            />
                            <div className={styles.centerLine} />
                        </div>
                        <div className={styles.value}>{result.intellectual}%</div>
                    </div>
                </div>
            )}
        </div>
    );
}
