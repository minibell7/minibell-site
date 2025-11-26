'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './page.module.css';

export default function WritePage() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('Publishing...');

        // Simple password protection (Hardcoded for now, can be improved later)
        if (password !== 'minibell1234') {
            setMessage('Incorrect password!');
            return;
        }

        try {
            const { error } = await supabase
                .from('posts')
                .insert([{ title, slug, content, excerpt, published: true }]);

            if (error) throw error;

            setMessage('Post published successfully!');
            setTitle('');
            setSlug('');
            setContent('');
            setExcerpt('');
        } catch (error: any) {
            setMessage('Error: ' + error.message);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Write New Post</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.group}>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.group}>
                    <label>Slug (URL)</label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        required
                        placeholder="my-first-post"
                    />
                </div>
                <div className={styles.group}>
                    <label>Excerpt</label>
                    <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        rows={3}
                    />
                </div>
                <div className={styles.group}>
                    <label>Content (Markdown)</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={15}
                        required
                    />
                </div>
                <div className={styles.group}>
                    <label>Admin Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn">Publish</button>
                {message && <p className={styles.message}>{message}</p>}
            </form>
        </div>
    );
}
