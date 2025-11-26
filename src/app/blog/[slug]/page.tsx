import { getAllPostIds, getPostData } from '@/lib/posts';
import styles from './page.module.css';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{postData.title}</h1>
            <div className={styles.date}>{postData.date}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
        </div>
    );
}
