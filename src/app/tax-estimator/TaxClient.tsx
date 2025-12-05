'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

// 2024-2025 Federal Tax Brackets (Simplified for estimation)
const TAX_BRACKETS_2024 = {
    single: [
        { limit: 11600, rate: 0.10 },
        { limit: 47150, rate: 0.12 },
        { limit: 100525, rate: 0.22 },
        { limit: 191950, rate: 0.24 },
        { limit: 243725, rate: 0.32 },
        { limit: 609350, rate: 0.35 },
        { limit: Infinity, rate: 0.37 },
    ],
    married: [
        { limit: 23200, rate: 0.10 },
        { limit: 94300, rate: 0.12 },
        { limit: 201050, rate: 0.22 },
        { limit: 383900, rate: 0.24 },
        { limit: 487450, rate: 0.32 },
        { limit: 731200, rate: 0.35 },
        { limit: Infinity, rate: 0.37 },
    ],
};

const STANDARD_DEDUCTION_2024 = {
    single: 14600,
    married: 29200,
};

// Simplified State Tax Rates (Estimates)
const STATE_TAX_RATES: { [key: string]: number } = {
    'AL': 0.04, 'AK': 0.00, 'AZ': 0.03, 'AR': 0.04, 'CA': 0.06,
    'CO': 0.04, 'CT': 0.05, 'DE': 0.05, 'FL': 0.00, 'GA': 0.04,
    'HI': 0.06, 'ID': 0.04, 'IL': 0.05, 'IN': 0.03, 'IA': 0.04,
    'KS': 0.04, 'KY': 0.04, 'LA': 0.03, 'ME': 0.06, 'MD': 0.05,
    'MA': 0.05, 'MI': 0.04, 'MN': 0.06, 'MS': 0.04, 'MO': 0.04,
    'MT': 0.05, 'NE': 0.05, 'NV': 0.00, 'NH': 0.00, 'NJ': 0.06,
    'NM': 0.04, 'NY': 0.05, 'NC': 0.04, 'ND': 0.02, 'OH': 0.03,
    'OK': 0.03, 'OR': 0.08, 'PA': 0.03, 'RI': 0.04, 'SC': 0.04,
    'SD': 0.00, 'TN': 0.00, 'TX': 0.00, 'UT': 0.05, 'VT': 0.06,
    'VA': 0.04, 'WA': 0.00, 'WV': 0.04, 'WI': 0.05, 'WY': 0.00,
    'DC': 0.06
};

export default function TaxClient() {
    const [income, setIncome] = useState<number | ''>('');
    const [status, setStatus] = useState<'single' | 'married'>('single');
    const [state, setState] = useState<string>('CA');
    const [result, setResult] = useState<any>(null);

    const calculateTax = () => {
        if (!income || income < 0) return;

        const grossIncome = Number(income);
        const standardDeduction = STANDARD_DEDUCTION_2024[status];
        const taxableIncome = Math.max(0, grossIncome - standardDeduction);

        // 1. Self-Employment Tax (15.3% of 92.35% of net earnings)
        // Simplified: 15.3% of gross for gig workers usually
        const selfEmploymentTax = grossIncome * 0.153;

        // 2. Federal Tax
        let federalTax = 0;
        let remainingIncome = taxableIncome;
        let previousLimit = 0;

        const brackets = TAX_BRACKETS_2024[status];

        for (const bracket of brackets) {
            const taxableInBracket = Math.min(remainingIncome, bracket.limit - previousLimit);
            if (taxableInBracket <= 0) break;

            federalTax += taxableInBracket * bracket.rate;
            remainingIncome -= taxableInBracket;
            previousLimit = bracket.limit;
        }

        // 3. State Tax
        const stateRate = STATE_TAX_RATES[state] || 0;
        const stateTax = taxableIncome * stateRate;

        const totalTax = selfEmploymentTax + federalTax + stateTax;
        const netIncome = grossIncome - totalTax;

        setResult({
            federalTax,
            selfEmploymentTax,
            stateTax,
            totalTax,
            netIncome,
            effectiveRate: (totalTax / grossIncome) * 100
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Gig Worker Tax Estimator</h1>
                <p className={styles.subtitle}>Estimate your 2024-2025 taxes real-time</p>

                <div className={styles.inputGroup}>
                    <label>Annual Net Income ($)</label>
                    <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(Number(e.target.value))}
                        placeholder="e.g. 50000"
                        className={styles.input}
                    />
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label>Filing Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value as 'single' | 'married')}
                            className={styles.select}
                        >
                            <option value="single">Single</option>
                            <option value="married">Married Filing Jointly</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>State</label>
                        <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className={styles.select}
                        >
                            {Object.keys(STATE_TAX_RATES).sort().map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <button onClick={calculateTax} className={styles.button}>
                    Calculate Taxes
                </button>

                {result && (
                    <div className={styles.result}>
                        <div className={styles.resultItem}>
                            <span>Federal Tax</span>
                            <span className={styles.value}>${result.federalTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className={styles.resultItem}>
                            <span>Self-Employment Tax</span>
                            <span className={styles.value}>${result.selfEmploymentTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className={styles.resultItem}>
                            <span>State Tax (Est.)</span>
                            <span className={styles.value}>${result.stateTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className={styles.divider} />
                        <div className={`${styles.resultItem} ${styles.total}`}>
                            <span>Total Estimated Tax</span>
                            <span className={styles.highlight}>${result.totalTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className={styles.resultItem}>
                            <span>Net Income (After Tax)</span>
                            <span className={styles.success}>${result.netIncome.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className={styles.rate}>
                            Effective Tax Rate: {result.effectiveRate.toFixed(1)}%
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
