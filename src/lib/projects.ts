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
        description: '재미있는 인터랙티브 PWA로 반려동물의 성격 유형을 알아보세요.',
        url: 'https://pet-bti.mini-bell.com/',
        tags: ['PWA', 'Next.js', 'Interactive'],
        featured: true,
        category: 'app'
    },
    {
        id: 'dreamflow',
        title: 'zombiecheck',
        description: '사용하지 않는 구독을 관리하세요. 은행 연동 없이 안전합니다.',
        url: 'https://zombiecheck.mini-bell.com/',
        tags: ['PWA', 'Dreamflow'],
        featured: true,
        category: 'app'
    },
    {
        id: 'qr-menu',
        title: 'QR Menu Maker',
        description: '나만의 레스토랑 메뉴를 만들고 QR 코드로 공유하세요.',
        url: 'https://qrmenu.mini-bell.com',
        tags: ['PWA', 'Utility', 'QR Code'],
        featured: true,
        category: 'app'
    },
    {
        id: 'qr-creator',
        title: 'QR Code Generator',
        description: 'URL을 입력하여 즉시 QR 코드를 생성하고 다운로드하세요.',
        url: '/qr-generator',
        tags: ['Tool', 'Utility', 'QR Code'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'favicon-generator',
        title: 'Favicon Generator',
        description: '이미지를 업로드하여 다양한 사이즈의 파비콘(PNG)을 생성하세요.',
        url: '/favicon-generator',
        tags: ['Tool', 'Image', 'Utility'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'youtube-thumbnail',
        title: 'YouTube Thumbnail Downloader',
        description: '유튜브 영상의 고화질 썸네일을 추출하고 다운로드하세요.',
        url: '/youtube-thumbnail',
        tags: ['Tool', 'YouTube', 'Image'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'image-converter',
        title: 'WebP Image Converter',
        description: '이미지를 WebP로 변환하여 웹사이트 속도를 최적화하세요.',
        url: '/image-converter',
        tags: ['Tool', 'Image', 'Performance'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'character-counter',
        title: 'Character Counter',
        description: '글자 수, 단어 수, 줄 수를 실시간으로 계산하세요.',
        url: '/character-counter',
        tags: ['Tool', 'Text', 'Writing'],
        featured: true,
        category: 'utility'
    },

    {
        id: 'powerball',
        title: 'US Powerball',
        description: 'Generate lucky numbers for the US Powerball lottery.',
        url: '/powerball',
        tags: ['Lotto', 'USA', 'Powerball'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'mega-millions',
        title: 'US Mega Millions',
        description: 'Generate lucky numbers for the US Mega Millions lottery.',
        url: '/mega-millions',
        tags: ['Lotto', 'USA', 'Mega Millions'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'euromillions',
        title: 'EuroMillions',
        description: 'Generate lucky numbers for the EuroMillions lottery.',
        url: '/euromillions',
        tags: ['Lotto', 'Europe', 'EuroMillions'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'fortune-cookie',
        title: 'Digital Fortune Cookie',
        description: 'Crack open a cookie to reveal your daily fortune.',
        url: '/fortune-cookie',
        tags: ['Fun', 'Fortune', 'Daily'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'zodiac-calculator',
        title: 'Zodiac Calculator',
        description: 'Discover your Western and Chinese Zodiac signs.',
        url: '/zodiac-calculator',
        tags: ['Fun', 'Zodiac', 'Astrology'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'd-day-calculator',
        title: 'D-Day Calculator',
        description: 'Calculate days remaining or passed since a special date.',
        url: '/d-day-calculator',
        tags: ['Tool', 'Date', 'Anniversary'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'percentage-calculator',
        title: 'Percentage Calculator',
        description: 'Calculate discounts, ratios, and percentage changes.',
        url: '/percentage-calculator',
        tags: ['Tool', 'Math', 'Calc'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'unit-converter',
        title: 'Unit Converter',
        description: 'Convert Length, Weight, Area, and Temperature units.',
        url: '/unit-converter',
        tags: ['Tool', 'Unit', 'Convert'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'pomodoro-timer',
        title: 'Pomodoro Timer',
        description: 'Boost productivity with 25m work / 5m break timer.',
        url: '/pomodoro-timer',
        tags: ['Tool', 'Focus', 'Timer'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'og-generator',
        title: 'Open Graph Generator',
        description: 'SNS 공유를 위한 메타 태그와 미리보기 카드를 생성하세요.',
        url: '/og-generator',
        tags: ['Tool', 'SEO', 'Social'],
        featured: true,
        category: 'utility'
    },
    {
        id: 'recipe-blog',
        title: '실제 사장님들을 위한 판매용 메뉴 레시피',
        description: '식당 운영에 도움이 되는 실전 레시피와 노하우를 공유합니다.',
        url: 'https://facilitator-y.tistory.com/',
        tags: ['Blog', 'Recipe', 'Business'],
        featured: true,
        category: 'content'
    },
    {
        id: 'quiz-blog',
        title: '재미있는 상식 퀴즈',
        description: '심심할 때 풀기 좋은 다양한 상식 퀴즈를 만나보세요.',
        url: 'https://5-hint-quiz.tistory.com/',
        tags: ['Blog', 'Quiz', 'Fun'],
        featured: true,
        category: 'content'
    }
];

export function getFeaturedProjects() {
    return projects.filter(project => project.featured);
}
