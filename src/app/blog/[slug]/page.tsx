import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';
import { supabase } from '@/lib/supabase';
import styles from './page.module.css';

export const revalidate = 0;

async function getPost(slug: string) {
    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

    return post;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const processedContent = await remark()
        .use(html)
        .process(post.content || '');
    const contentHtml = processedContent.toString();

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.meta}>
                    <time>{new Date(post.created_at).toLocaleDateString()}</time>
                </div>
            </header>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </article>
    );
}
