/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable default-case */
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import Image from 'next/image';
import { Divider } from '@mui/material';

import Container from '../../Container';

import GameModal from './GameModal/GameModal';
import * as classes from './styles';
import { mainPageData, totalItemsData, shuffleArray } from './mainPage.data';

interface GridItem {
  id: string;
  type: 'cash' | 'bomb' | 'x2' | 'null' | 'stop';
  value: number;
  iconPath: string;
  revealed: boolean;
}

interface FlyingAnim {
  id: number;
  startRect: DOMRect;
  endRect: DOMRect;
  delay: number;
}

interface Props {
  className?: string;
}

export default function MainPage({ className }: Props) {
  const [gridItems, setGridItems] = useState<GridItem[]>([]);
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);
  const [isMultiplierActive, setIsMultiplierActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'BOMB' | 'GAME_OVER' | null;
  }>({ isOpen: false, type: null });

  const [flyingAnims, setFlyingAnims] = useState<FlyingAnim[]>([]);
  const scoreRef = useRef<HTMLDivElement>(null);

  const initializeGrid = () => {
    const newGrid = shuffleArray(totalItemsData).map((item, index) => ({
      ...item,
      id: `${item.type}-${item.value}-${index}`,
      type: item.type as GridItem['type'],
    }));
    setGridItems(newGrid);
    setScore(0);
    setPrevScore(0);
    setIsMultiplierActive(false);
    setIsGameOver(false);
    setIsShaking(false);
    setModalState({ isOpen: false, type: null });
    setFlyingAnims([]);
  };

  useEffect(() => {
    initializeGrid();
  }, []);

  const triggerFlyingAnimation = (startElement: HTMLElement) => {
    if (!scoreRef.current || !startElement) return;

    const startRect = startElement.getBoundingClientRect();
    const endRect = scoreRef.current.getBoundingClientRect();

    const newAnims = Array.from({ length: 3 }).map((_, i) => ({
      id: Date.now() + i,
      startRect,
      endRect,
      delay: i * 80,
    }));

    setFlyingAnims((prev) => [...prev, ...newAnims]);
  };

  const handleCardClick = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (gridItems[index].revealed || isGameOver) {
      return;
    }

    const newGridItems = [...gridItems];
    const clickedItem = newGridItems[index];
    clickedItem.revealed = true;

    setPrevScore(score);

    switch (clickedItem.type) {
      case 'cash':
        setScore((prev) => prev + (isMultiplierActive ? clickedItem.value * 2 : clickedItem.value));
        triggerFlyingAnimation(event.currentTarget);
        break;
      case 'x2':
        setIsMultiplierActive(true);
        setScore((prev) => prev * 2);
        break;
      case 'bomb': {
        setIsGameOver(true);
        const allRevealed = newGridItems.map((item) => ({ ...item, revealed: true }));
        setGridItems(allRevealed);
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
        setTimeout(() => setModalState({ isOpen: true, type: 'BOMB' }), 300);

        return;
      }
      case 'stop':
        setIsGameOver(true);
        setModalState({ isOpen: true, type: 'GAME_OVER' });
        break;
      case 'null':
        break;
    }

    setGridItems(newGridItems);
  };

  const handleAnimationEnd = (id: number) => {
    setFlyingAnims((prev) => prev.filter((anim) => anim.id !== id));
  };

  const handleKeepScoreAndReset = () => {
    setModalState({ isOpen: false, type: null });
    setTimeout(() => initializeGrid(), 500);
  };

  const handleLoseScoreAndReset = () => {
    setModalState({ isOpen: false, type: null });
    setScore(0);
    setPrevScore(0);
    setTimeout(() => initializeGrid(), 500);
  };

  return (
    <section
      className={className}
      css={[classes.mainWrap, isShaking && classes.shakeEffect]}>
      {flyingAnims.map(({ id, startRect, endRect, delay }) => (
        <div
          key={id}
          onAnimationEnd={() => handleAnimationEnd(id)}
          css={classes.flyingCashAnimation(startRect, endRect, delay)}>
          <Image
            src={mainPageData.cashSVGPath}
            width={30}
            height={30}
            alt='flying cash'
          />
        </div>
      ))}

      {modalState.isOpen && modalState.type && (
        <GameModal
          type={modalState.type}
          score={score}
          onTakeHit={handleLoseScoreAndReset}
          onKeepScore={handleKeepScoreAndReset}
        />
      )}
      <Container>
        <div css={classes.topLogoBar}>
          <Image
            src={mainPageData.headLogoPath}
            width={61}
            height={35}
            alt='logo'
          />
        </div>
        <div css={classes.gameNameBar}>
          <Divider css={classes.divider} />
          <h1>{mainPageData.gameName}</h1>
          <Divider css={classes.divider} />
        </div>
        <div
          ref={scoreRef}
          css={classes.countRow}>
          <Image
            src={mainPageData.cashSVGPath}
            width={30}
            height={30}
            alt='cash icon'
          />
          <span>
            <CountUp
              start={prevScore}
              end={score}
              duration={1.0}
              separator=' '
            />
          </span>
        </div>
        <div css={classes.gridSection}>
          {gridItems.map((item, i) => (
            <div
              key={item.id}
              css={classes.gridItem(item.revealed)}
              onClick={(e) => handleCardClick(i, e)}>
              <div className='card-inner'>
                <div className='card-front'>
                  <span>$</span>
                </div>
                <div className='card-back'>
                  <Image
                    src={item.iconPath}
                    width={48}
                    height={48}
                    alt={item.type}
                  />
                  {item.type === 'cash' && item.value > 0 && <span>{item.value}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div css={classes.totalRow}>
          {mainPageData.totalItems.map((item) => (
            <div
              key={item.alt}
              css={classes.totalItem}>
              <Image
                src={item.iconPath}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
              <span>{item.count}</span>
            </div>
          ))}
        </div>

        <div css={classes.btnBlock}>
          <button
            type='button'
            css={classes.claim(score > 0 && !isGameOver)}
            onClick={isGameOver ? initializeGrid : () => setModalState({ isOpen: true, type: 'GAME_OVER' })}>
            {isGameOver ? 'Play Again' : 'Claim'}
          </button>
        </div>
      </Container>
    </section>
  );
}
