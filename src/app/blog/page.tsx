import Link from 'next/link';
import { client } from '@/sanity/client';
import styles from './page.module.css';

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
}

async function getPosts() {
    try {
        const posts = await client.fetch<Post[]>(
            `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt
      }`
        );
        return posts;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}

export default async function Blog() {
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <ul className={styles.list}>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <li className={styles.listItem} key={post._id}>
                            <Link href={`/blog/${post.slug.current}`} className={styles.link}>
                                {post.title}
                            </Link>
                            <br />
                            <small className={styles.date}>
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </small>
                        </li>
                    ))
                ) : (
                    <p>No posts found. Go to <Link href="/studio">/studio</Link> to create one!</p>
                )}
            </ul>
        </div>
    );
}
