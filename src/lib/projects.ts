export interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
    featured: boolean;
    category: 'app' | 'utility' | 'content' | 'game';
    section?: 'finance-health' | 'daily-essentials' | 'creator-tools' | 'fun-arcade' | 'featured-app';
}

export const projects: Project[] = [
    // --- Section 1: Finance & Health ---
    {
        id: 'tax-estimator',
        title: 'US Gig Worker Tax Estimator',
        description: 'Estimate your 2024-2025 federal and state taxes as a freelancer. Real-time calculation.',
        url: '/tax-estimator',
        tags: ['Tool', 'Finance', 'Tax'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'fasting-tracker',
        title: 'Intermittent Fasting Tracker',
        description: 'Simple 16:8 fasting timer with progress tracking. Saves your status automatically.',
        url: '/fasting-tracker',
        tags: ['Tool', 'Health', 'Timer'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'loan-calculator',
        title: 'Loan Calculator',
        description: 'Estimate monthly payments and total interest.',
        url: '/loan-calculator',
        tags: ['Tool', 'Finance', 'Calc'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'salary-converter',
        title: 'Salary Converter',
        description: 'Convert hourly wages to yearly salary instantly.',
        url: '/salary-converter',
        tags: ['Tool', 'Finance', 'Income'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'tip-calculator',
        title: 'Tip Calculator',
        description: 'Calculate gratuity and split bills instantly.',
        url: '/tip-calculator',
        tags: ['Tool', 'Finance', 'Calc'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'bmi-calculator',
        title: 'BMI Calculator',
        description: 'Check your Body Mass Index and health category.',
        url: '/bmi-calculator',
        tags: ['Tool', 'Health', 'Fitness'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },

    // --- Section 2: Daily Essentials ---
    {
        id: 'password-generator',
        title: 'Password Generator',
        description: 'Generate strong, secure, and random passwords.',
        url: '/password-generator',
        tags: ['Tool', 'Security', 'Privacy'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'unit-converter',
        title: 'Unit Converter',
        description: 'Convert Length, Weight, Area, and Temperature units.',
        url: '/unit-converter',
        tags: ['Tool', 'Unit', 'Convert'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'percentage-calculator',
        title: 'Percentage Calculator',
        description: 'Calculate discounts, ratios, and percentage changes.',
        url: '/percentage-calculator',
        tags: ['Tool', 'Math', 'Calc'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'character-counter',
        title: 'Character Counter',
        description: 'Calculate character, word, and line counts in real-time.',
        url: '/character-counter',
        tags: ['Tool', 'Text', 'Writing'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'd-day-calculator',
        title: 'D-Day Calculator',
        description: 'Calculate days remaining or passed since a special date.',
        url: '/d-day-calculator',
        tags: ['Tool', 'Date', 'Anniversary'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'pomodoro-timer',
        title: 'Pomodoro Timer',
        description: 'Boost productivity with 25m work / 5m break timer.',
        url: '/pomodoro-timer',
        tags: ['Tool', 'Focus', 'Timer'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },

    // --- Section 3: Creator Tools ---
    {
        id: 'qr-creator',
        title: 'QR Code Generator',
        description: 'Generate and download QR codes instantly.',
        url: '/qr-generator',
        tags: ['Tool', 'Utility', 'QR Code'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'lorem-ipsum',
        title: 'Lorem Ipsum Generator',
        description: 'Generate standard dummy text for design projects.',
        url: '/lorem-ipsum',
        tags: ['Tool', 'Design', 'Text'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'youtube-thumbnail',
        title: 'YouTube Thumbnail Downloader',
        description: 'Extract high-quality thumbnails from YouTube videos.',
        url: '/youtube-thumbnail',
        tags: ['Tool', 'YouTube', 'Image'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'favicon-generator',
        title: 'Favicon Generator',
        description: 'Generate favicons (PNG) in various sizes.',
        url: '/favicon-generator',
        tags: ['Tool', 'Image', 'Utility'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'image-converter',
        title: 'WebP Image Converter',
        description: 'Convert images to WebP for better performance.',
        url: '/image-converter',
        tags: ['Tool', 'Image', 'Performance'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'og-generator',
        title: 'Open Graph Generator',
        description: 'Generate meta tags and preview cards for social media.',
        url: '/og-generator',
        tags: ['Tool', 'SEO', 'Social'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },

    // --- Section 4: Fun & Arcade ---
    {
        id: 'powerball',
        title: 'US Powerball',
        description: 'Generate lucky numbers for the US Powerball lottery.',
        url: '/powerball',
        tags: ['Lotto', 'USA', 'Powerball'],
        featured: true,
        category: 'utility',
        section: 'fun-arcade'
    },
    {
        id: 'mega-millions',
        title: 'US Mega Millions',
        description: 'Generate lucky numbers for the US Mega Millions lottery.',
        url: '/mega-millions',
        tags: ['Lotto', 'USA', 'Mega Millions'],
        featured: true,
        category: 'utility',
        section: 'fun-arcade'
    },
    {
        id: 'euromillions',
        title: 'EuroMillions',
        description: 'Generate lucky numbers for the EuroMillions lottery.',
        url: '/euromillions',
        tags: ['Lotto', 'Europe', 'EuroMillions'],
        featured: true,
        category: 'utility',
        section: 'fun-arcade'
    },
    {
        id: 'zodiac-calculator',
        title: 'Zodiac Calculator',
        description: 'Discover your Western and Chinese Zodiac signs.',
        url: '/zodiac-calculator',
        tags: ['Fun', 'Zodiac', 'Astrology'],
        featured: true,
        category: 'utility',
        section: 'fun-arcade'
    },
    {
        id: 'fortune-cookie',
        title: 'Digital Fortune Cookie',
        description: 'Crack open a cookie to reveal your daily fortune.',
        url: '/fortune-cookie',
        tags: ['Fun', 'Fortune', 'Daily'],
        featured: true,
        category: 'utility',
        section: 'fun-arcade'
    },
    {
        id: 'neon-blocks',
        title: 'Neon Blocks',
        description: 'Cyberpunk style block puzzle game.',
        url: '/neon-blocks',
        tags: ['Game', 'Puzzle', 'Neon'],
        featured: true,
        category: 'game',
        section: 'fun-arcade'
    },
    {
        id: 'neon-minesweeper',
        title: 'Neon Minesweeper',
        description: 'Classic puzzle game with a Cyberpunk Neon aesthetic.',
        url: '/neon-minesweeper',
        tags: ['Game', 'Puzzle', 'Neon'],
        featured: true,
        category: 'game',
        section: 'fun-arcade'
    },

    // --- Section 5: Featured Apps (Personal Projects) ---
    {
        id: 'dreamflow',
        title: 'zombiecheck',
        description: 'Find forgotten "zombie" subscriptions that silently drain your wallet. 100% Local & Private - no bank connection required. Compare your memory vs actual bills to spot hidden costs. Born from a real experience of paying for a closed shop\'s insurance for 1.5 years!',
        url: 'https://zombiecheck.mini-bell.com/',
        tags: ['PWA', 'Finance', 'Privacy'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },
    {
        id: 'pet-bti',
        title: 'Pet BTI',
        description: 'My first "Vibe Coding" project as a non-developer. Built with AI to prove that ideas can become reality. This project turned my doubt into confidence and started my journey.',
        url: 'https://pet-bti.mini-bell.com/',
        tags: ['PWA', 'Fun', 'AI'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },

    // --- Content / Blogs ---
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
