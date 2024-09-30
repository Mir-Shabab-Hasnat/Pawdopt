import React from "react";

interface Square {
  row: number;
  col: number;
}

interface Turn {
  player: string;
  square: Square;
}

interface LogProps {
  turns: Turn[];
}

const Log: React.FC<LogProps> = ({ turns }) => {
  return (
    <ol id="log" className="max-w-xs mx-auto text-gray-900 list-none mt-8 p-0 text-center">
      {turns.map((turn, index) => (
        <li key={index} className="rounded border p-2 mb-2 bg-gray-100">
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
