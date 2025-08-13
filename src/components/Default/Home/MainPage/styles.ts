import { css } from '@emotion/react';
import { Theme } from '@mui/material';

const flyToScore = css`
  @keyframes flyToScore {
    0% {
      transform: translate(0, 0) scale(1.2);
      opacity: 1;
    }
    100% {
      transform: var(--transform-end);
      opacity: 0;
    }
  }
`;

const shake = css`
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const shakeEffect = css`
  ${shake}
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

export const flyingCashAnimation = (startRect: DOMRect, endRect: DOMRect, delay: number) => {
  const startX = startRect.left + startRect.width / 4;
  const startY = startRect.top + startRect.height / 4;
  const endX = endRect.left + endRect.width / 2;
  const endY = endRect.top + endRect.height / 2;

  const translateX = endX - startX;
  const translateY = endY - startY;

  return css`
    ${flyToScore}
    position: fixed;
    left: ${startX}px;
    top: ${startY}px;
    z-index: 2000;
    pointer-events: none;
    --transform-end: translate(${translateX}px, ${translateY}px) scale(0.5);

    animation: flyToScore 0.8s ease-in forwards;
    animation-delay: ${delay}ms;
  `;
};

export const mainWrap = () => css`
  max-width: 400px;
  margin: 0 auto;
  position: relative;
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
  position: relative;
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
  perspective: 1000px;
`;
export const gridItem = (isRevealed: boolean) => css`
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)'};

  .card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow:
      0 1px 0 0 rgba(255, 255, 255, 0.2) inset,
      0 4px 8px 0 rgba(24, 26, 32, 0.3);
    border-radius: 12px;
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
  }

  .card-front {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: blur(8px);
    span {
      font-size: 32px;
      color: #ccc;
      font-weight: 800;
    }
  }

  .card-back {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    transform: rotateY(180deg);
    span {
      color: white;
      font-weight: 700;
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

export const totalItems = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;

  ${theme.breakpoints.down('sm')} {
    flex-wrap: wrap;
    gap: 10px;
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
export const claim = (isActive: boolean) => (theme: Theme) => css`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  background-color: transparent;
  border: 2px dashed ${theme.palette.text.secondary};
  color: ${theme.palette.text.secondary};

  ${isActive &&
  `
    background: linear-gradient(180deg, #82d938 0%, #68b528 100%);
    color: ${theme.palette.common.white};
    border-color: transparent;
    box-shadow: 0 2px 8px 0 rgba(118, 185, 42, 0.5);
  `}

  &:active {
    transform: scale(0.95);
  }
`;
