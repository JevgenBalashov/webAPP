import Image from 'next/image';

import * as classes from './styles';

interface Props {
  type: 'BOMB' | 'GAME_OVER';
  score: number;
  onTakeHit: () => void;
  onKeepScore: () => void;
}

export default function GameModal({ type, score, onTakeHit, onKeepScore }: Props) {
  const isBomb = type === 'BOMB';

  return (
    <div css={classes.overlay}>
      <div css={classes.modalContent}>
        <Image
          src={isBomb ? '/icons/bomb.svg' : '/icons/stop.svg'}
          width={80}
          height={80}
          alt={isBomb ? 'bomb icon' : 'stop icon'}
        />
        <h2 css={classes.title}>{isBomb ? 'Danger Ahead!' : 'Game Over!'}</h2>
        <p css={classes.description}>
          {isBomb
            ? 'You hit a bomb! You can take the hit and lose rewards, or defuse it to save your run.'
            : "You've reached the end of this run..."}
        </p>

        <div css={classes.scoreContainer}>
          <Image
            src='/icons/cash.svg'
            width={32}
            height={32}
            alt='cash'
          />
          <span>{score}</span>
        </div>

        {isBomb ? (
          <div css={classes.buttonRow}>
            <button
              type='button'
              onClick={onTakeHit}
              css={[classes.button, classes.takeHitButton]}>
              Take a hit
            </button>
            <button
              type='button'
              onClick={onKeepScore}
              css={[classes.button, classes.defuseButton]}>
              Defuse for
              <Image
                src='/icons/cash.svg'
                width={16}
                height={16}
                alt='gem'
              />
              49
            </button>
          </div>
        ) : (
          <button
            type='button'
            onClick={onKeepScore}
            css={[classes.button, classes.claimButton]}>
            Claim
          </button>
        )}
      </div>
    </div>
  );
}
