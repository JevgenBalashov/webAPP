export interface CookieModalContent {
  title: string;
  text: string;
  acceptButtonText: string;
  declineButtonText: string;
  privacyPolicyLinkText: string;
  privacyPolicyLinkHref: string;
}

export const cookieModalContent: CookieModalContent = {
  title: 'We use Cookies',
  text: 'This website uses cookies to improve user experience and analytics. By continuing to use our website, you agree to our privacy policy.',
  acceptButtonText: 'Accept',
  declineButtonText: 'Decline',
  privacyPolicyLinkText: 'Privacy Policy',
  privacyPolicyLinkHref: '/privacy-policy',
};
