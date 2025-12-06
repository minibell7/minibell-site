import styles from './FAQSection.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    className?: string;
}

export default function FAQSection({ items, className = '' }: FAQSectionProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question.replace(/^Q\.\s*/, ''), // Remove potential "Q. " prefix if present in visual text
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer.replace(/^A\.\s*/, ''), // Remove potential "A. " prefix
            },
        })),
    };

    return (
        <section className={`${styles.seoSection} ${className}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h2>FAQ</h2>
            <div className={styles.faqList}>
                {items.map((item, index) => (
                    <div key={index} className={styles.faqItem}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
