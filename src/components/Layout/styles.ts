import { css } from '@emotion/react';

export const wrap = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('/images/backgrounds/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const main = css`
  flex: 1 1 auto;
`;
