import React from 'react';
import CV from '@/components/svgs/CV';

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const journeyItems: JourneyItem[] = [

  {
    name: 'Certificates & Achievements',
    description: 'A curated list of certificates and achievements.',
    icon: CV,
    href: '/journey/certificates',
  },
];

export default {
  journeyItems,
};