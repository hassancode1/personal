/*
 * Call to Action (CTA) Configuration
 *
 * This file contains the configuration for the CTA component.
 * Customize the call-to-action section of your portfolio.
 */

import { getImagePath } from '@/lib/utils';

export const ctaConfig = {
  // Profile image settings
  profileImage: getImagePath('/assets/logo.png'),
  profileAlt: 'Profile',

  // CTA button settings
  linkText: 'Book a Free Call',
  calLink: 'ramxcodes/meeting',

  // Pre-text message
  preText: "Hey, you scrolled this far, let's talk.",
};
