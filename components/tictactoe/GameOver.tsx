import React from "react";

interface GameOverProps {
  winner: string | null;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ winner, onRestart }) => {
  return (
    <div id="game-over" className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 animate-pop-in">
      <h2 className="text-white text-4xl mb-4">Game Over!</h2>
      <p className="text-gray-200 text-2xl mb-4">
        {winner ? `${winner} won!` : "It is a draw!!"}
      </p>
      <button
        onClick={onRestart}
        className="bg-purple text-white border-2 border-purple rounded py-2 px-4 text-xl transition-transform transform hover:scale-110"
      >
        Rematch!
      </button>
    </div>
  );
};

export default GameOver;
