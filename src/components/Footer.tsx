import styles from './Footer.module.css';
import AdSense from './AdSense';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '0.5rem' }}>
                <AdSense slot="2059978046" style={{ width: '100%', maxWidth: '1000px' }} />
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} <span className="gradient-text" style={{ fontWeight: 600 }}>minibell.com</span>. All rights reserved.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.7 }}>
                    Designed with ❤️ for creators
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', opacity: 0.5, marginTop: '0.5rem' }}>
                    Contact: tjdudaud@gmail.com
                </p>
            </div>
        </footer>
    );
}
