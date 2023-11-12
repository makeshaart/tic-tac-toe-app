import React from 'react';
import { useStore } from 'effector-react';
import { gameStore } from '../../store/store';
import { Board } from '../Board';

export const PlayingField: React.FC = () => {
  const winner = useStore(gameStore).winner;

  return (
    <div className="wrapper  mt-20 mx-32">
      <h1 className="text-3xl sm:text-5xl pb-20">Tic Tac Toe</h1>
      {winner ? <h2 className="text-1xl text-red-500 sm:text-2xl">Winner: {winner}</h2> : null}
      <Board />
    </div>
  );
};

