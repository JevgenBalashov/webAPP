import { ReactNode } from 'react';

// import Header from './Header';
import CookieConsentModal from '../Default/CookieModal/Variant1';
import { cookieModalContent } from '../Default/CookieModal/Variant1/cookies.data';

import Footer from './Footer';
import * as classes from './styles';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div css={classes.wrap}>
      {/* <Header /> */}
      <main css={classes.main}>{children}</main>
      <Footer />
      <CookieConsentModal data={cookieModalContent} />
    </div>
  );
}
