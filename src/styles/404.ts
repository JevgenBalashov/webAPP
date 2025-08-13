import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: linear-gradient(180deg, rgba(205, 216, 226, 1) 0%, rgba(118, 140, 162, 1) 100%);
`;

export const text = css`
  color: #fff;
`;

export const button = (theme: Theme) => css`
  & .MuiButtonBase-root {
    padding: 20px 70px;
    border-radius: 50px;
    background: linear-gradient(180deg, rgba(62, 100, 195, 1) 0%, rgba(30, 48, 93, 1) 100%);
    font-weight: 900;
    letter-spacing: 0.1em;
    text-align: center;

    ${theme.breakpoints.up('sm')} {
      padding: 20px 70px;
      font-size: 22px;
    }

    ${theme.breakpoints.down('sm')} {
      padding: 20px 35px;
      font-size: 18px;
    }
  }
`;
