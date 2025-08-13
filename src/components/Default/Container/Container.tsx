import { ReactNode } from 'react';

import * as classes from './styles';

interface ContainerProps {
  children: ReactNode;
}

// TODO: Add a container to blocks inside a section or use MUI Container
export default function Container({ children }: ContainerProps) {
  return <div css={classes.container}>{children}</div>;
}
