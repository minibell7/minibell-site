import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            minibell.com
          </Link>
          <ul className={styles.links}>
            <li><Link href="/projects">Projects</Link></li>
            <li><a href="https://mini-bell7.blogspot.com" target="_blank" rel="noopener noreferrer">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
