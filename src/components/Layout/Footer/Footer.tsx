import Link from 'next/link';
import { Typography } from '@mui/material';
import Image from 'next/image';

import { footerData } from './footer.data';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <footer
      className={className}
      css={classes.footer}>
      <div css={classes.footerContent}>
        {footerData.items.map(({ id, iconPath, alt, lable, path }) => (
          <Link href={path}>
            <div
              key={id}
              css={classes.footerItem}>
              <Image
                src={iconPath}
                width={40}
                height={40}
                alt={alt}
              />
              <Typography component='h6'>{lable}</Typography>
            </div>
          </Link>
        ))}
      </div>
    </footer>
  );
}
