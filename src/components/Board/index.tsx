import { Cell } from '../Cell';
import { resetGame } from '../../store/store';

export const Board: React.FC = () => {
  
    const handleReset = () => {
      resetGame();
    };
  
    return (
      <div className='flex flex-col '>
        <table >
          <tbody className="tableStyle w-400 h-400">
            <tr >
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
        <button onClick={handleReset} className="rounded-md border bg-gray-400 hover:border-gray-300 px-4 py-2 mt-5 text-white font-medium transition duration-250">Reset Game</button>
      </div>
    );
  };