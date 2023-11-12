import { createEvent, createStore } from 'effector';

type CellValue = 'X' | 'O' | '';

interface GameState {
  cells: CellValue[];
  currentPlayer: CellValue;
  winner: CellValue | null;
}

const makeMoveEvent = createEvent<number>();

export const makeMove = makeMoveEvent;

export const resetGame = createEvent();

export const gameStore = createStore<GameState>({
  cells: Array(9).fill('') as CellValue[],
  currentPlayer: 'X',
  winner: null,
})
  .on(makeMoveEvent, (state, index) => {
    if (state.cells[index] === '' && !state.winner) {
      const cells = state.cells.slice();
      cells[index] = state.currentPlayer;

      const winner = calculateWinner(cells);

      return {
        ...state,
        cells,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
        winner,
      };
    }

    return state;
  })
  .reset(resetGame);

function calculateWinner(cells: CellValue[]): CellValue | null {
  const combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const comb of combs) {
    const [a, b, c] = comb;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }

  return null;
}