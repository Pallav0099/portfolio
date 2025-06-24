"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

const Square = ({ value, onClick }: { value: string; onClick: () => void }) => (
  <Button
    variant="outline"
    className="w-20 h-20 text-4xl font-bold"
    onClick={onClick}
  >
    {value}
  </Button>
);

export function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
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
    <Card className="w-fit mx-auto">
      <CardHeader>
        <CardTitle>Tic-Tac-Toe</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="text-xl font-semibold">{status}</div>
        <div className="grid grid-cols-3 gap-1">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid grid-cols-3 gap-1">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid grid-cols-3 gap-1">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <Button onClick={handleReset}>Reset Game</Button>
      </CardContent>
    </Card>
  );
}

function calculateWinner(squares: any[]) {
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

function findBestMove(board: any[]) {
  // 1. AI checks if it can win
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const newBoard = board.slice();
      newBoard[i] = "O";
      if (calculateWinner(newBoard) === "O") {
        return i;
      }
    }
  }

  // 2. AI checks if it needs to block
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const newBoard = board.slice();
      newBoard[i] = "X";
      if (calculateWinner(newBoard) === "X") {
        return i;
      }
    }
  }

  // 3. AI takes the center if available
  if (!board[4]) return 4;

  // 4. AI takes a random corner
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter((i) => !board[i]);
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // 5. AI takes a random side
  const sides = [1, 3, 5, 7];
  const availableSides = sides.filter((i) => !board[i]);
  if (availableSides.length > 0) {
    return availableSides[Math.floor(Math.random() * availableSides.length)];
  }

  return null;
} 