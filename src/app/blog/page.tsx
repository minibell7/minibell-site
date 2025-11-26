import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './page.module.css';

export const revalidate = 0;

async function getPosts() {
    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

    return posts || [];
}

export default async function Blog() {
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <article key={post.id} className={styles.card}>
                        <Link href={`/blog/${post.slug}`}>
                            <h2>{post.title}</h2>
                            <div className={styles.meta}>
                                <time>{new Date(post.created_at).toLocaleDateString()}</time>
                            </div>
                            <p>{post.excerpt}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
