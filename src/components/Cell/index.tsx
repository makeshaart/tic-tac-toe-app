import { gameStore, makeMove } from "../../store/store";
import { useStore } from "effector-react";

interface GameState {
    cells: string[];
    winner: string | null;
}

export const Cell: React.FC<{ index: number }> = ({ index }) => {
    const cells = useStore(gameStore) as GameState;

    const handleClick = () => {
        if (cells.cells[index] === '' && !cells.winner) {
            makeMove(index);
        }
    };

    return (
        <td onClick={handleClick} className="cellStyle w-20 h-20 sm:w-40 sm:h-40 border border-gray-100">
            {cells.cells[index]}
        </td>
    );
};
