import { getPostData, getSortedPostsData } from '@/lib/posts';
import styles from './page.module.css';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = getPostData(slug);

    const processedContent = await remark()
        .use(html)
        .process(postData.content);
    const contentHtml = processedContent.toString();

    return (
        <article className={styles.article}>
            <h1 className={styles.title}>{postData.title}</h1>
            <div className={styles.date}>{postData.date}</div>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </article>
    );
}
