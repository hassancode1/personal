import ComputerVision from '@/components/technologies/ComputerVision';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import GPT4 from '@/components/technologies/GPT4';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import OpenAI from '@/components/technologies/OpenAI';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Streamlit from '@/components/technologies/Streamlit';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';
import { getImagePath } from '@/lib/utils';

export const projects: Project[] = [
  {
    title: 'SecureSeed UI',
    description:
      'Built a comprehensive full-stack platform that connects startups with investors. Features secure user authentication, investment tracking, startup profiles, investor dashboards, and real-time communication tools to facilitate funding opportunities and business growth.',
    image: getImagePath('/project/secure-seed.png'),
    link: 'https://secureseed-ui.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'NestJS', icon: <NestJs key="nestjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Git', icon: <Github key="git" /> },
    ],
    github: 'https://github.com/hassancode1/secureseed-ui',
    live: 'https://secureseed-ui.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/secureseed-ui',
    isWorking: true,
  },
  {
    title: 'YGIT-AI',
    description:
      'Spearheaded the design and development of YGIT-AI, an AI-based platform aimed at democratizing access to tech careers through personalized guidance and resources. Achieved high user satisfaction with real-time generation of comprehensive career development content.',
    image: getImagePath('/project/advice.png'),
    link: 'https://github.com/hassancode1/ygit',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'OpenAI API', icon: <OpenAI key="openai" /> },
      { name: 'GPT-4', icon: <GPT4 key="gpt4" /> },
      { name: 'Streamlit', icon: <Streamlit key="streamlit" /> },
      { name: 'Git', icon: <Github key="git" /> },
    ],
    github: 'https://github.com/hassancode1/ygit',
    live: 'https://github.com/hassancode1/ygit',
    details: false,
    projectDetailsPageSlug: '/projects/ygit-ai',
    isWorking: true,
  },
  {
    title: 'Hand Sign V2',
    description:
      'Built a full-stack hand-sign recognition platform with a TypeScript client and Node backend. Processes real-time camera input, classifies hand gestures, and exposes a clean API layer for integrating sign-based interactions into modern web apps.',
    image: getImagePath('/project/appwrite.png'),
    link: 'https://github.com/hassancode1/hand-sign-v2',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
            { name: 'Python', icon: <Python key="python" /> },
      { name: 'Computer Vision', icon: <ComputerVision key="cv" /> },
    ],
    github: 'https://github.com/hassancode1/hand-sign-v2',
    live: 'https://github.com/hassancode1/hand-sign-v2',
    details: false,
    projectDetailsPageSlug: '/projects/hand-sign-v2',
    isWorking: true,
  },
  {
    title: 'Form Render',
    description:
      'Developed a form renderer package that takes a DTO of JSON and turns it into a form. Implemented continuous delivery using GitHub Actions to build the package upon new release.',
    image: getImagePath('/project/form-renderer.jpg'),
    link: 'https://github.com/hassancode1',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Git', icon: <Github key="git" /> },
    ],
    github: 'https://github.com/hassancode1',
    live: 'https://github.com/hassancode1',
    details: false,
    projectDetailsPageSlug: '/projects/form-render',
    isWorking: true,
  },

];
