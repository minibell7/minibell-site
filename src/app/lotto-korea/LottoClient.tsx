'use client';

import { useState } from 'react';
import styles from './page.module.css';
import LotteryBall from '../../components/LotteryBall';

export default function LottoClient() {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const generateNumbers = () => {
        setIsAnimating(true);
        setNumbers([]); // Reset

        // Simulate animation delay
        setTimeout(() => {
            const newNumbers: number[] = [];
            while (newNumbers.length < 6) {
                const num = Math.floor(Math.random() * 45) + 1;
                if (!newNumbers.includes(num)) {
                    newNumbers.push(num);
                }
            }
            newNumbers.sort((a, b) => a - b);
            setNumbers(newNumbers);
            setIsAnimating(false);
        }, 500);
    };

    const getBallColor = (num: number) => {
        if (num <= 10) return '#fbc400'; // Yellow
        if (num <= 20) return '#69c8f2'; // Blue
        if (num <= 30) return '#ff7272'; // Red
        if (num <= 40) return '#aaaaaa'; // Grey
        return '#b0d840'; // Green
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.generatorCard} glass-panel`}>
                <div className={styles.ballContainer}>
                    {numbers.length > 0 ? (
                        numbers.map((num) => (
                            <LotteryBall key={num} number={num} color={getBallColor(num)} />
                        ))
                    ) : (
                        <div className={styles.placeholder}>
                            <span>행운의 번호를 뽑아보세요!</span>
                        </div>
                    )}
                </div>

                <button
                    onClick={generateNumbers}
                    className={styles.generateBtn}
                    disabled={isAnimating}
                >
                    {isAnimating ? '추첨 중...' : '번호 생성하기'}
                </button>
            </div>
        </div>
    );
}
