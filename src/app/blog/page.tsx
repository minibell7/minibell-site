import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import styles from './page.module.css';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <ul className={styles.list}>
                {allPostsData.map(({ id, date, title, excerpt }) => (
                    <li key={id} className={styles.listItem}>
                        <Link href={`/blog/${id}`} className={styles.link}>
                            <h2 className={styles.postTitle}>{title}</h2>
                            <small className={styles.date}>{date}</small>
                            <p className={styles.excerpt}>{excerpt}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
