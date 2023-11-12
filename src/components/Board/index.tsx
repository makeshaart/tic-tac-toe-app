import { Cell } from '../Cell';
import { resetGame } from '../../store/store';

export const Board: React.FC = () => {
  
    const handleReset = () => {
      resetGame();
    };
  
    return (
      <div>
        <table className="tableStyle">
          <tbody>
            <tr>
              <Cell index={0} />
              <Cell index={1} />
              <Cell index={2} />
            </tr>
            <tr>
              <Cell index={3} />
              <Cell index={4} />
              <Cell index={5} />
            </tr>
            <tr>
              <Cell index={6} />
              <Cell index={7} />
              <Cell index={8} />
            </tr>
          </tbody>
        </table>
        <button onClick={handleReset}>Reset Game</button>
      </div>
    );
  };