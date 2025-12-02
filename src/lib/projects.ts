export interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
    featured: boolean;
    category: 'app' | 'utility' | 'content';
}

export const projects: Project[] = [
    {
        id: 'pet-bti',
        title: 'Pet BTI',
        description: 'My first "Vibe Coding" project as a non-developer. Built with AI to prove that ideas can become reality. This project turned my doubt into confidence and started my journey.',
        url: 'https://pet-bti.mini-bell.com/',
        tags: ['PWA', 'Next.js', 'Interactive'],
        featured: true,
        category: 'app'
    },
    {
        id: 'dreamflow',
        title: 'zombiecheck',
        description: 'Find forgotten "zombie" subscriptions. 100% Local & Private. Compare your memory vs actual bills. Born from a real experience of paying for a closed shop\'s insurance for 1.5 years!',
        url: 'https://zombiecheck.mini-bell.com/',
        tags: ['PWA', 'Dreamflow'],
        featured: true,
        category: 'app'
    },
    {
        id: 'qr-menu',
        title: 'QR Menu Maker',
        description: 'Created by a restaurant owner to help fellow business owners. Build digital menus easily. Continuous updates and advanced features planned.',
        url: 'https://qrmenu.mini-bell.com',
        tags: ['PWA', 'Utility', 'QR Code'],
        featured: true,
        category: 'app'
    },
    {
        id: 'qr-creator',
        title: 'QR Code Generator',
        description: 'Generate and download QR codes instantly by entering a URL.',
        url: '/qr-generator',
        tags: ['Tool', 'Utility', 'QR Code'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'favicon-generator',
        title: 'Favicon Generator',
        description: 'Upload an image to generate favicons (PNG) in various sizes.',
        url: '/favicon-generator',
        tags: ['Tool', 'Image', 'Utility'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'youtube-thumbnail',
        title: 'YouTube Thumbnail Downloader',
        description: 'Extract and download high-quality thumbnails from YouTube videos.',
        url: '/youtube-thumbnail',
        tags: ['Tool', 'YouTube', 'Image'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'image-converter',
        title: 'WebP Image Converter',
        description: 'Convert images to WebP to optimize website performance.',
        url: '/image-converter',
        tags: ['Tool', 'Image', 'Performance'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'character-counter',
        title: 'Character Counter',
        description: 'Calculate character, word, and line counts in real-time.',
        url: '/character-counter',
        tags: ['Tool', 'Text', 'Writing'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'og-generator',
        title: 'Open Graph Generator',
        description: 'Generate meta tags and preview cards for social media sharing.',
        url: '/og-generator',
        tags: ['Tool', 'SEO', 'Social'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'recipe-blog',
        title: 'Commercial Recipes for Owners',
        description: 'Sharing practical recipes and know-how for restaurant operations.',
        url: 'https://facilitator-y.tistory.com/',
        tags: ['Blog', 'Recipe', 'Business'],
        featured: true,
        category: 'content'
    },
    {
        id: 'quiz-blog',
        title: 'Fun Trivia Quizzes',
        description: 'Enjoy various trivia quizzes when you need a break.',
        url: 'https://5-hint-quiz.tistory.com/',
        tags: ['Blog', 'Quiz', 'Fun'],
        featured: true,
        category: 'content'
    }
];

export function getFeaturedProjects() {
    return projects.filter(project => project.featured);
}
