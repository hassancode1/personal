import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

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
    company: 'Hago',
    position: 'Software Engineer',
    location: 'Remote',
    image: '/assets/hago.jpeg',
    description: [
      'Architected and developed a full-stack marketplace platform connecting service providers with customers, delivering seamless experiences across web and mobile platforms with scalable infrastructure supporting thousands of concurrent users',
      'Designed and implemented the marketplace feature enabling vendors to list products and services, with advanced search capabilities, intelligent filtering, and category management that improved product discovery by 60%',
      'Built a comprehensive escrow payment system securing transactions between buyers and sellers, implementing milestone-based payment releases, automated dispute resolution workflows, and multi-gateway payment processing that reduced transaction disputes by 35%',
      'Engineered a real-time messaging system supporting multiple message types with instant delivery, read receipts, and push notifications, enabling efficient buyer-seller communication that reduced response times by 50%',
      'Delivered a native mobile application with offline capabilities and real-time synchronization, providing consistent user experiences across platforms and increasing mobile engagement by 55%',
      'Optimized application performance through strategic caching, database query optimization, and frontend code splitting, achieving 40% reduction in load times and 25% improvement in overall system responsiveness'
    ],
    startDate: 'Jan 2025',
    endDate: 'June 2025',
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
        name: 'React Native',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Saaspro',
    position: 'Software Engineer',
    location: 'Remote',
    image: '/assets/saaspro.jpeg',
    description: [
      'Sole frontend engineer developing healthcare applications with Next.js and React Native',
      'Built mobile app for secure doctor-patient communication',
      'Ensured HIPAA compliance and maintainable code for medical data handling',
      'Mentored two team members in frontend development best practices',
      " Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms",
      " Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations"
    ],
    startDate: 'June 2024',
    endDate: 'Jan 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      
       {
        name: 'React Native',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Flexisaf Edu Soft',
    position: 'Software Engineer',
    location: 'Remote',
    image: '/assets/flexisaf.jpeg',
    description: [
      'Mentored team of 3 frontend developers',
      'Contributed to SAFapply, onboarding 12 schools and 20,000+ applicants',
      'Ensured full responsive design across all devices',
      'Defined coding standards and best practices for maintainable code',
    ],
    startDate: 'Jan 2021',
    endDate: 'June 2024',
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
