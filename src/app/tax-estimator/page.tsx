import React from 'react';
import TaxClient from './TaxClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'US Gig Worker Tax Estimator | Freelance Tax Calculator 2024',
    description: 'Estimate your 2024-2025 federal and state taxes as a gig worker or freelancer. Calculate self-employment tax and effective tax rate instantly.',
};

export default function TaxEstimatorPage() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
            <TaxClient />

            <section style={{ maxWidth: '800px', margin: '4rem auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                    Understanding Taxes for Gig Workers
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    As a freelancer, independent contractor, or gig worker (Uber, DoorDash, Upwork, etc.), you are considered self-employed by the IRS. This means taxes are not automatically withheld from your paycheck. You are responsible for paying both <strong>Income Tax</strong> and <strong>Self-Employment Tax</strong>.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    What is Self-Employment Tax?
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    Self-Employment Tax is primarily for Social Security and Medicare taxes. The current rate is <strong>15.3%</strong>.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li><strong>12.4%</strong> for Social Security</li>
                    <li><strong>2.9%</strong> for Medicare</li>
                </ul>
                <p style={{ marginBottom: '1.5rem' }}>
                    Typically, an employer pays half of this, but as a gig worker, you pay the full amount. However, you can deduct the "employer-equivalent" portion of your self-employment tax when calculating your adjusted gross income.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    How to Use This Estimator
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    1. <strong>Enter Net Income:</strong> Input your total earnings minus business expenses (mileage, supplies, software, etc.).<br />
                    2. <strong>Select Filing Status:</strong> Choose Single or Married Filing Jointly to apply the correct standard deduction and tax brackets.<br />
                    3. <strong>Choose State:</strong> Select your state to get an estimated state tax calculation based on simplified flat rates.
                </p>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
                    <strong style={{ color: 'var(--accent-primary)' }}>Disclaimer:</strong> This tool provides an estimate for planning purposes only. It uses simplified tax brackets and does not account for all deductions, credits, or complex tax situations. Always consult with a qualified CPA or tax professional for your official tax filing.
                </div>
            </section>
        </main>
    );
}
