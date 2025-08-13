import { css } from '@emotion/react';

export const wrap = css`
  min-height: 100vh;
  min-width: 100vw;
  filter: blur(100px);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const infinityLoader = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
