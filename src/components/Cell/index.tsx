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
        <td onClick={handleClick} className="cellStyle">
            {cells.cells[index]}
        </td>
    );
};
