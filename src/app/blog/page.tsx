import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import styles from './page.module.css';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <ul className={styles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={styles.listItem} key={id}>
                        <Link href={`/blog/${id}`} className={styles.link}>
                            {title}
                        </Link>
                        <br />
                        <small className={styles.date}>
                            {date}
                        </small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
