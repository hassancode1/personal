import Convex from '@/components/technologies/Convex';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { getImagePath } from '@/lib/utils';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Saaspro',
    position: 'Founding Engineer',
    location: 'Remote',
    image: getImagePath('/assets/saaspro.jpeg'),
    description: [
      'Built cross-platform mobile application using React Native with real-time AI-powered clinical documentation features, implementing responsive UI components and optimizing performance for iOS and Android platforms',
      'Developed comprehensive React dashboard with complex state management using Redux and RTK Query, creating intuitive interfaces for managing clinical workflows, patient data, and AI-generated documentation',
      'Integrated Convex as the real-time backend database, leveraging its reactive queries and automatic synchronization capabilities for seamless data flow between frontend and backend, ensuring instant updates across all client applications',
      'Designed and implemented component library with reusable UI elements, establishing design system standards and ensuring consistent user experience across mobile and web platforms',
      'Integrated LLM APIs into frontend workflows, implementing real-time streaming responses, error handling, and loading states for seamless user experience during AI content generation',
      'Built evaluation and annotation interfaces for medical professionals to review and validate AI-generated content, implementing feedback mechanisms and quality scoring systems',
      'Optimized application performance through code splitting, lazy loading, and efficient rendering strategies, reducing initial load time by 50% and improving mobile responsiveness',
      'Implemented comprehensive testing infrastructure for React components including unit tests, integration tests, and edge-case scenarios to ensure UI reliability',
      'Collaborated with healthcare professionals to iterate on UI/UX design, conducting user testing sessions and implementing feedback to improve workflow efficiency',
    ],
    startDate: 'Jan 2025',
    endDate: 'Dec 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'React Native',
        href: 'https://reactnative.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'ShadCN',
        href: 'https://ui.shadcn.com/',
        icon: <Shadcn />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Convex',
        href: 'https://www.convex.dev/',
        icon: <Convex />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Hago',
    position: 'Software Engineer',
    location: 'Remote',
    image: getImagePath('/assets/hago.jpeg'),
    description: [
      'Architected and developed frontend for marketplace platform using React and Next.js, implementing server-side rendering and static generation for optimal SEO and performance',
      'Built responsive user interfaces with Tailwind CSS and ShadCN components, ensuring consistent design across desktop, tablet, and mobile devices with 100% mobile-first approach',
      'Developed complex state management solutions using Redux Toolkit and RTK Query for efficient data fetching, caching, and synchronization across application',
      'Implemented intelligent search interface with autocomplete, filters, and relevance ranking, achieving 30% improvement in user engagement through iterative UX improvements',
      'Created interactive data visualization components for analytics dashboards using Chart.js and D3.js, enabling real-time insights into marketplace metrics',
      'Built automated CI/CD pipelines for frontend deployment using GitHub Actions, implementing automated testing, linting, and bundle size optimization',
      'Optimized frontend performance through lazy loading, code splitting, image optimization, and caching strategies, reducing bundle size by 40% and improving Core Web Vitals scores',
      'Established component documentation and style guides, mentoring two junior frontend engineers on React best practices, testing strategies, and performance optimization',
    ],
    startDate: 'Jan 2025',
    endDate: 'Jun 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'ShadCN',
        href: 'https://ui.shadcn.com/',
        icon: <Shadcn />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Flexisaf Edu Soft',
    position: 'Frontend Engineer',
    location: 'Remote',
    image: getImagePath('/assets/flexisaf.jpeg'),
    description: [
      'Led frontend development across three departments (NECO, SAFapply, Distinction), architecting and maintaining consistent UI/UX patterns and component libraries shared across products',
      'Developed SAFapply application (https://safapply.com/) handling 15,000+ applications, building complex form workflows, real-time validation, and multi-step application processes',
      'Built Progressive Web App (PWA) for Distinction platform with offline capabilities, service workers, and app-like experience, increasing mobile engagement by 45%',
      "Implemented push notification system for Distinction, leveraging Convex's real-time capabilities for instant updates on application status, announcements, and deadlines",
      'Created responsive dashboard interfaces for NECO department using Vue.js, implementing role-based access control and data visualization for examination management',
      'Established frontend testing frameworks with Jest and React Testing Library, implementing automated test suites that reduced regression bugs by 35%',
      'Built reusable component libraries and design systems using Storybook, improving development velocity and maintaining UI consistency across all three department applications',
      'Optimized application performance across departments through bundle analysis, tree shaking, and implementation of modern React patterns including hooks and context',
      'Collaborated with backend teams to design and consume REST APIs, implementing efficient data fetching strategies and error handling for seamless user experiences',
      'Mentored team of 3 frontend developers, conducting code reviews, establishing coding standards, and implementing best practices for maintainable React applications',
    ],
    startDate: 'Jan 2021',
    endDate: 'Jan 2024',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
    ],
    website: '#',
  },
];
