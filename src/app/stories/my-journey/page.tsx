import Link from 'next/link';
import styles from './page.module.css';

export default function MyJourney() {
    return (
        <article className={styles.container}>
            {/* Hero Section */}
            <header className={styles.header}>
                <div className={styles.meta}>
                    <span className={styles.date}>2025. 11. 27.</span>
                    <span className={styles.tag}>Dev Story</span>
                </div>
                <h1 className={styles.title}>
                    From Restaurant Owner to <br />
                    <span className={styles.highlight}>App Creator</span>: My Journey with AI
                </h1>
            </header>

            {/* Main Content */}
            <div className={styles.content}>
                <p className={styles.intro}>
                    Hello, I am just an ordinary restaurant owner with absolutely no prior background in software development.
                </p>

                <div className={styles.timeline}>
                    {/* Timeline Item 1 */}
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>October 15, 2025</div>
                        <div className={styles.timelineContent}>
                            <h3>The Spark ✨</h3>
                            <p>
                                I stumbled upon a YouTube video about <strong className={styles.keyword}>"Vibe Coding"</strong> with AI.
                                That sparked my curiosity. Could I really build something?
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>October 30, 2025</div>
                        <div className={styles.timelineContent}>
                            <h3>First Success 🚀</h3>
                            <p>
                                Using <strong className={styles.keyword}>Replit</strong>, I successfully built and deployed my first PWA,
                                <a href="https://pet-bti.mini-bell.com" target="_blank" className={styles.link}>[PET-BTI.MINI-BELL.COM]</a>
                                —an app that analyzes pet behavior and matches it with the owner's personality type.
                            </p>
                            <div className={styles.quote}>
                                "Building and deploying an app in a single day was a turning point. It gave me the confidence to create more."
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>Now</div>
                        <div className={styles.timelineContent}>
                            <h3>Unstoppable Momentum 🔥</h3>
                            <p>
                                Since then, I have developed my second, third, and fourth apps using tools like
                                <strong className={styles.keyword}>Dream Flow</strong> and <strong className={styles.keyword}>Google Antigravity</strong>.
                            </p>
                            <p>
                                Now, just 50 days later, I built this website to share my journey.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.outro}>
                    <p>
                        This site is a record of how an ordinary business owner creates and shares services in the online world.
                        I plan to share not only the services I build but also the process of learning and improving.
                    </p>
                    <p>
                        I may still have a lot to learn, but I hope my small projects can provide even a little bit of value to you.
                        Thank you for visiting, and please look forward to what's next!
                    </p>
                </div>
            </div>

            {/* Navigation Footer */}
            <footer className={styles.footer}>
                <Link href="/stories" className={styles.backLink}>
                    &larr; Back to Stories
                </Link>
            </footer>
        </article>
    );
}
