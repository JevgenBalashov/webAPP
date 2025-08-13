import { css } from '@emotion/react';
// import { Theme } from '@mui/material';

export const footer = () => css``;

export const footerContent = () => css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 400px;
  margin: 0 auto;
`;

export const footerItem = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  h6 {
    color: #7a7984;
    font-size: 10px;
  }
`;
