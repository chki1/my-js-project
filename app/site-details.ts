import { getMaxListeners } from 'events';
import { profile } from './portfolio-data';

/** Extra details for the About and Contact pages. */
export const siteDetails = {
  // Enter your real number, including country code: '+976 YOUR_8_DIGIT_NUMBER'.
  telephone: '+976 99145848',

  // Edit profile.email in app/portfolio-data.ts to update it on every page.
  email: profile.email,

  // Replace this with a public street/office address if you want more detail.
  address: profile.location,

  // Put a photo in public/images, then enter '/images/profile.jpg'.
  // Leave empty to display your initials instead of a missing image.
  profilePhoto: '/images/optimusprime.jpg',
  profilePhotoAlt: `Portrait of ${profile.name}`,
};
