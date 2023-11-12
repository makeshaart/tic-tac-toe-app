import React from 'react';
import { useStore } from 'effector-react';
import { gameStore } from '../../store/store';
import { Board } from '../Board';

export const PlayingField: React.FC = () => {
  const winner = useStore(gameStore).winner;

  return (
    <div className='wrapper'>
      <h1>Tic Tac Toe</h1>
      {winner ? <h2>Winner: {winner}</h2> : null}
      <Board />
    </div>
  );
};

