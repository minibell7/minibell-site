export interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'pet-bti',
        title: 'Pet BTI',
        description: 'Discover your pet\'s personality type with this fun and interactive PWA.',
        url: 'https://pet-bti.mini-bell.com/',
        tags: ['PWA', 'Next.js', 'Interactive'],
        featured: true
    },
    {
        id: 'dreamflow',
        title: 'zombiecheck',
        description: '당신이 잊고 있거나 사용하지 않는 정기구독을 관리해줍니다. 은행/카드연동이 없어서 개인정보가 유출되지 않습니다.',
        url: 'https://zombiecheck.mini-bell.com/',
        tags: ['PWA', 'Dreamflow'],
        featured: true
    },
    {
        id: 'qr-menu',
        title: 'QR Menu Maker',
        description: 'Create your own restaurant menu and share it via QR code.',
        url: 'https://qrmenu.mini-bell.com',
        tags: ['PWA', 'Utility', 'QR Code'],
        featured: true
    },
    {
        id: 'qr-creator',
        title: 'QR Creator',
        description: 'Generate a QR code with a custom description for your YouTube channel or website link.',
        url: 'https://qr.mini-bell.com',
        tags: ['PWA', 'Utility', 'QR Code'],
        featured: true
    },
    {
        id: 'recipe-blog',
        title: '실제 사장님들을 위한 판매용 메뉴 레시피',
        description: '식당 운영에 도움이 되는 실전 레시피와 노하우를 공유합니다.',
        url: 'https://facilitator-y.tistory.com/',
        tags: ['Blog', 'Recipe', 'Business'],
        featured: true
    },
    {
        id: 'quiz-blog',
        title: '재미있는 상식 퀴즈',
        description: '심심할 때 풀기 좋은 다양한 상식 퀴즈를 만나보세요.',
        url: 'https://5-hint-quiz.tistory.com/',
        tags: ['Blog', 'Quiz', 'Fun'],
        featured: true
    }
];

export function getFeaturedProjects() {
    return projects.filter(project => project.featured);
}
