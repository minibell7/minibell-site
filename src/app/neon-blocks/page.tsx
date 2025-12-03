import BlocksClient from './BlocksClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Neon Blocks - mini-bell.com',
    description: 'Classic block puzzle game with a Cyberpunk Neon twist.',
};

export default function BlocksPage() {
    return <BlocksClient />;
}
