import { getImagePath } from '@/lib/utils';

export const certificates = [
  {
    file: getImagePath('/certificates/hackathon.jpeg'),
    title: 'Third Place Winner - C-CODE Hackathon UNIABUJA',
    issuer: 'University of Abuja',
    date: '2023-11',
  },
];

export const education = [
  {
    degree: 'Diploma In Computer Science',
    institution: 'Institute Of Information Technology Kazaure',
    location: 'Kazaure, Nigeria',
    graduationDate: 'June 2024',
  },
];

export const achievements = [
  {
    title: 'Third Place Winner - C-CODE Hackathon UNIABUJA',
    organization: 'University of Abuja',
    date: 'November 2023',
    project: 'Ed Quest',
    description: 'Collaborated with Team Cool - Coders to design innovative digital solutions aimed at advancing educational development. Awarded third place for exceptional skills and dedication in a competitive and technology-driven environment.',
  },
];

const achievementsConfig = {
  certificates,
  education,
  achievements,
};

export default achievementsConfig;