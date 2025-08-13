
import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const mainWrap = () => css`
  padding: calc(env(safe-area-inset-top, 0px) + 16px) 16px calc(env(safe-area-inset-bottom, 0px) + 16px);
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const topLogoBar = () => css`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;
`;

export const gameNameBar = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  gap: 16px;
  margin-bottom: 32px;
  h1 {
    color: ${theme.palette.text.primary};
    display: block;
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-size: 24px;
    font-weight: 800;
    line-height: 100%;
    white-space: nowrap;
    ${theme.breakpoints.down('xs')} {
      font-size: 16px;
    }
  }
`;

export const divider = (theme: Theme) => css`
  height: 2px;
  width: 100%;
  background-color: ${theme.palette.text.secondary};
`;

export const countRow = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  span {
    color: ${theme.palette.text.primary};
    font-size: 24px;
    font-weight: 800;
    line-height: 100%;
    ${theme.breakpoints.down('xs')} {
      font-size: 16px;
    }
  }
`;

export const gridSection = () => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 33px;
`;

export const gridItem = (theme: Theme) => css`
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.2) inset,
    0 4px 8px 0 rgba(24, 26, 32, 0.3);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 32px;
    color: ${theme.palette.text.secondary};
    font-weight: 800;
    ${theme.breakpoints.down('xs')} {
      font-size: 24px;
    }
  }
`;

export const totalRow = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 32px;
`;

export const totalItem = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: ${theme.palette.text.primary};
    font-size: 16px;
    font-weight: 700;
  }
`;

export const btnBlock = () => css`
  display: flex;
  justify-content: center;
`;

export const claim = (theme: Theme) => css`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  background-color: transparent;
  border: 2px dashed ${theme.palette.text.secondary};
  color: ${theme.palette.text.secondary};

  &:active {
    background: linear-gradient(180deg, #82d938 0%, #68b528 100%);
    color: ${theme.palette.common.white};
    border-color: transparent;
    box-shadow: 0 2px 8px 0 rgba(118, 185, 42, 0.5);
  }
`;