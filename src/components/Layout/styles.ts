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
  padding: calc(env(safe-area-inset-top, 0px) + 16px) 16px calc(env(safe-area-inset-bottom, 0px) + 16px);
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const main = css`
  flex: 1 1 auto;
`;
