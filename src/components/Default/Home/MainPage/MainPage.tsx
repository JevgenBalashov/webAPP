// --- START OF FILE MainPage.tsx ---

import Image from 'next/image';
import { Divider } from '@mui/material';

import Container from '../../Container';

import * as classes from './styles';
import { mainPageData } from './mainPage.data';

interface Props {
  className?: string;
}

export default function MainPage({ className }: Props) {
  return (
    <section
      className={className}
      css={classes.mainWrap}>
      <Container>
        <div css={classes.topLogoBar}>
          <Image
            src={mainPageData.headLogoPath}
            width={61}
            height={35}
            alt='logo'
          />
        </div>
        <div css={classes.gameNameBar}>
          <Divider css={classes.divider} />
          <h1>{mainPageData.gameName}</h1>
          <Divider css={classes.divider} />
        </div>
        <div css={classes.countRow}>
          <Image
            src={mainPageData.cashSVGPath}
            width={30}
            height={30}
            alt='cash icon'
          />
          <span>0</span>
        </div>
        <div css={classes.gridSection}>
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              css={classes.gridItem}>
              <span>$</span>
            </div>
          ))}
        </div>

        <div css={classes.totalRow}>
          {mainPageData.totalItems.map((item) => (
            <div
              key={item.alt}
              css={classes.totalItem}>
              <Image
                src={item.iconPath}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
              <span>{item.count}</span>
            </div>
          ))}
        </div>

        <div css={classes.btnBlock}>
          <button css={classes.claim}>{mainPageData.mainButtonText}</button>
        </div>
      </Container>
    </section>
  );
}
