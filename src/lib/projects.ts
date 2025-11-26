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
        url: 'https://pet-bti.com',
        tags: ['PWA', 'Next.js', 'Interactive'],
        featured: true
    },
    {
        id: 'dreamflow',
        title: 'Dreamflow App',
        description: 'My second PWA project created with Dreamflow.',
        url: 'https://rvqskvxip8o1yio3z9yw.share.dreamflow.app/',
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
    }
];

export function getFeaturedProjects() {
    return projects.filter(project => project.featured);
}
