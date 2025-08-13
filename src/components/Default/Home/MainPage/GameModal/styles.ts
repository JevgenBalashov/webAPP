import { css } from '@emotion/react';

export const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const modalContent = css`
  background: linear-gradient(180deg, #2a2d3a 0%, #1e2029 100%);
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 350px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

export const title = css`
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  margin: 16px 0 8px;
`;

export const description = css`
  font-size: 16px;
  color: #b0b0b0;
  margin-bottom: 24px;
  line-height: 1.5;
`;

export const scoreContainer = css`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 8px 16px;
  border-radius: 12px;
`;

export const buttonRow = css`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const button = css`
  flex: 1;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:active {
    transform: scale(0.95);
  }
`;

export const takeHitButton = css`
  background: linear-gradient(180deg, #ff6b6b 0%, #e03131 100%);
  color: white;
  box-shadow: 0 2px 8px 0 rgba(224, 49, 49, 0.4);
`;

export const defuseButton = css`
  background: linear-gradient(180deg, #8c67ff 0%, #6d44e8 100%);
  color: white;
  box-shadow: 0 2px 8px 0 rgba(109, 68, 232, 0.4);
`;

export const claimButton = css`
  width: 100%;
  background: linear-gradient(180deg, #82d938 0%, #68b528 100%);
  color: white;
  box-shadow: 0 2px 8px 0 rgba(118, 185, 42, 0.5);
`;
