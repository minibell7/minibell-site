import MinesweeperClient from './MinesweeperClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Neon Minesweeper - mini-bell.com',
    description: 'Classic Minesweeper with a Cyberpunk Neon twist.',
};

export default function MinesweeperPage() {
    return <MinesweeperClient />;
}
