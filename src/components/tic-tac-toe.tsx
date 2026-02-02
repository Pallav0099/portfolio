"use client";

import { useState, useEffect } from "react";

const Square = ({ value, onClick }: { value: string | null; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-20 h-20 text-3xl font-bold font-mono border border-white/10 bg-black hover:border-emerald hover:text-emerald transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={!!value}
  >
    {value || "_"}
  </button>
);

export function TicTacToe() {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  useEffect(() => {
    if (!isXNext && !winner) {
      const timeout = setTimeout(() => {
        const aiMove = findBestMove(board);
        if (aiMove !== null) {
          handleClick(aiMove);
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isXNext, board, winner]);

  const handleClick = (i: number) => {
    if (winner || board[i]) return;

    const newBoard = board.slice();
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (i: number) => (
    <Square value={board[i]} onClick={() => handleClick(i)} />
  );

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every(Boolean)) {
    status = "Draw!";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="w-fit mx-auto border border-white/10 p-6 bg-black">
      <div className="mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-emerald pulse-emerald rounded-full"></div>
          <span className="text-xs text-white/60 uppercase tracking-wider font-mono">Tic Tac Toe</span>
        </div>
        <h2 className="text-2xl font-bold font-mono mb-2">Game</h2>
        <p className="text-sm text-white/60">Play against the AI. You are X, the AI is O.</p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="text-sm font-mono uppercase tracking-wider text-white/80 border border-white/10 px-4 py-2">
          {status}
        </div>
        <div className="grid grid-cols-3 gap-1 border border-white/10 p-2">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid grid-cols-3 gap-1 border border-white/10 p-2">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid grid-cols-3 gap-1 border border-white/10 p-2">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button
          onClick={handleReset}
          className="border border-white/10 px-6 py-3 text-sm font-mono uppercase tracking-wider hover:border-emerald hover:text-emerald transition-colors"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function findBestMove(board: Array<string | null>): number | null {
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const newBoard = board.slice();
      newBoard[i] = "O";
      if (calculateWinner(newBoard) === "O") {
        return i;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const newBoard = board.slice();
      newBoard[i] = "X";
      if (calculateWinner(newBoard) === "X") {
        return i;
      }
    }
  }

  if (!board[4]) return 4;

  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter((i) => !board[i]);
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  const sides = [1, 3, 5, 7];
  const availableSides = sides.filter((i) => !board[i]);
  if (availableSides.length > 0) {
    return availableSides[Math.floor(Math.random() * availableSides.length)];
  }

  return null;
}
