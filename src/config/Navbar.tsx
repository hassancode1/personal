export interface NavItem {
  label: string;
  href: string;
}

import { getImagePath } from '@/lib/utils';

export const navbarConfig = {
  logo: {
    src: getImagePath('/assets/logo.png'),
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Blogs',
      href: '/blog',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ] as NavItem[],
};
