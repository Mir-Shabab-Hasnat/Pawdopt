import React from "react";

interface Square {
  row: number;
  col: number;
}

interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: (string | null)[][];
}

const GameBoard: React.FC<GameBoardProps> = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board" className="flex flex-col gap-4">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="flex">
          <ol className="flex gap-4">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                  className="w-20 h-20 bg-gray-400 text-black-100 text-5xl font-bold rounded"
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
