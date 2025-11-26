import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/client';
import { urlForImage } from '@/sanity/image';
import Image from 'next/image';
import styles from './page.module.css';

interface Post {
    title: string;
    publishedAt: string;
    body: any;
    mainImage?: any;
}

async function getPost(slug: string) {
    try {
        const post = await client.fetch<Post>(
            `*[_type == "post" && slug.current == $slug][0]`,
            { slug }
        );
        return post;
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return null;
    }
}

const components = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 my-8">
                    <Image
                        src={urlForImage(value).url()}
                        alt={value.alt || ' '}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            );
        },
    },
};

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.date}>
                {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            {post.mainImage && (
                <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '2rem' }}>
                    <Image
                        src={urlForImage(post.mainImage).url()}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>
            )}
            <div className="prose">
                <PortableText value={post.body} components={components} />
            </div>
        </div>
    );
}
