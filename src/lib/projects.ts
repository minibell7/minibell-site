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
        description: '재미있는 인터랙티브 PWA로 반려동물의 성격 유형을 알아보세요.',
        url: 'https://pet-bti.mini-bell.com/',
        tags: ['PWA', 'Next.js', 'Interactive'],
        featured: true
    },
    {
        id: 'dreamflow',
        title: 'zombiecheck',
        description: '사용하지 않는 구독을 관리하세요. 은행 연동 없이 안전합니다.',
        url: 'https://zombiecheck.mini-bell.com/',
        tags: ['PWA', 'Dreamflow'],
        featured: true
    },
    {
        id: 'qr-menu',
        title: 'QR Menu Maker',
        description: '나만의 레스토랑 메뉴를 만들고 QR 코드로 공유하세요.',
        url: 'https://qrmenu.mini-bell.com',
        tags: ['PWA', 'Utility', 'QR Code'],
        featured: true
    },
    {
        id: 'qr-creator',
        title: 'QR Code Generator',
        description: 'URL을 입력하여 즉시 QR 코드를 생성하고 다운로드하세요.',
        url: '/qr-generator',
        tags: ['Tool', 'Utility', 'QR Code'],
        featured: true
    },
    {
        id: 'favicon-generator',
        title: 'Favicon Generator',
        description: '이미지를 업로드하여 다양한 사이즈의 파비콘(PNG)을 생성하세요.',
        url: '/favicon-generator',
        tags: ['Tool', 'Image', 'Utility'],
        featured: true
    },
    {
        id: 'og-generator',
        title: 'Open Graph Generator',
        description: 'SNS 공유를 위한 메타 태그와 미리보기 카드를 생성하세요.',
        url: '/og-generator',
        tags: ['Tool', 'SEO', 'Social'],
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
