// locales/en.ts

// import experience from '@/app/data/experience.json';
import labels from './labels.json';
import experience from './experience.json';

export default {
    experience: {...experience},
    labels: {...labels},
    'hello': 'Hello',
    'hello.world': 'Hello world!',
    'welcome': 'Hello {name}!',
    'about': {
        p1: "I'm a fullstack developer. I don't just write code, I craft solutions. Passionate about software development, I believe that clean, structured, and maintainable code is the foundation of scalable applications. My detail-oriented mindset drives me to create systems that are not only functional but also elegant in their simplicity.",
        p2: "For me, software development is more than just implementing features; it's about solving problems thoughtfully, optimizing for performance, and continuously improving. I’m always exploring new best practices and architectural patterns to refine my approach and build software that stands the test of time.",
        p3: "Currently, I'm looking for a new opportunity to work with a team of talented individuals who are passionate about building great software products.",
        p4: "When I'm not coding, you can find me watching movies with my wife or playing a video games."
    }
} as const