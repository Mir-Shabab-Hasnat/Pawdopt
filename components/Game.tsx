import React, { useState } from "react";
import Player from "./tictactoe/Player";
import GameBoard from "./tictactoe/GameBoard";
import GameOver from "./tictactoe/GameOver";
import Log from "./tictactoe/Log";
import { WINNING_COMBINATIONS } from "../data";

const initialGameBoard: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface Square {
  row: number;
  col: number;
}

interface Turn {
  player: string;
  square: Square;
}

function deriveActivePlayer(gameTurns: Turn[]): string {
  return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
}

const Game: React.FC = () => {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner: string | null = null;

  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    const firstSquareSymbol = gameBoard[first.row][first.column];
    const secondSquareSymbol = gameBoard[second.row][second.column];
    const thirdSquareSymbol = gameBoard[third.row][third.column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      break;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main className="mb-20
    
    
    ">
      <div
        id="game-container"
        className="max-w-4xl mx-auto p-8 rounded-3xl bg-gray-800 shadow-lg relative"
      >
        <div className="flex flex-col justify-center items-center">
          <ol
            id="players"
            className="flex justify-center items-center gap-8 mb-4"
          >
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
      </div>
      
    </main>
  );
};

export default Game;
