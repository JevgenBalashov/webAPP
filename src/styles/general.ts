import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const semibold = css`
  font-weight: 500;
`;

export const bold = css`
  font-weight: 600;
`;

export const desktop = (theme: Theme) => css`
  ${theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const mobile = (theme: Theme) => css`
  ${theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const outletPadding = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    padding: 5%;
  }

  ${theme.breakpoints.down('sm')} {
    padding: 30px 15px;
  }
`;

export const layoutPadding = (theme: Theme) => css`
  ${theme.breakpoints.up('lg')} {
    padding: 2% 5%;
  }

  ${theme.breakpoints.between('sm', 'lg')} {
    padding: 2%;
  }

  ${theme.breakpoints.down('sm')} {
    padding: 15px;
  }
`;

export const outletMargin = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    margin: 5% 0%;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 15px 0px;
  }
`;

export const sectionWithBackgroundImage = css`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

export const image = css`
  max-width: 100%;
`;

export const flexbox = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const mainTitle = () => css`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// TODO: Use custom font by variable
export const customFont = (theme: Theme) => css`
  ${theme.customFont.style};
`;
