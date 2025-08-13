import localFont from 'next/font/local';

// TODO: Change fonts' name and path to your own
export const customFont = localFont({
  variable: '--custom-font',
  src: [
    { path: '../fonts/kyivTypeSans/KyivTypeSans-Regular-.otf', weight: '400', style: 'normal' },
    { path: '../fonts/kyivTypeSans/KyivTypeSans-Bold-.otf', weight: '700', style: 'bold' },
  ],
});
