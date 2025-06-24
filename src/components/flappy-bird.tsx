"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const BIRD_SIZE = 30;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 0.4;
const JUMP_STRENGTH = 6.5;
const PIPE_WIDTH = 60;
const PIPE_GAP = 150;
const PIPE_INTERVAL = 1500; // ms

export function FlappyBird() {
  const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT / 2);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const gameLoopRef = useRef<any>(null);
  const pipeTimeoutRef = useRef<any>(null);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    gameLoopRef.current = setInterval(() => {
      // Gravity
      setBirdVelocity((v) => v + GRAVITY);
      setBirdPosition((pos) => pos + birdVelocity);

      // Move pipes
      setPipes((currentPipes) =>
        currentPipes
          .map((pipe) => ({ ...pipe, x: pipe.x - 5 }))
          .filter((pipe) => pipe.x > -PIPE_WIDTH)
      );

      // Collision detection
      const birdLeft = GAME_WIDTH / 2 - BIRD_SIZE / 2;
      const birdRight = GAME_WIDTH / 2 + BIRD_SIZE / 2;
      const birdTop = birdPosition - BIRD_SIZE / 2;
      const birdBottom = birdPosition + BIRD_SIZE / 2;
      
      // Ground collision
      if (birdBottom > GAME_HEIGHT) {
        setGameOver(true);
        return;
      }

      // Pipe collision
      for (let pipe of pipes) {
        const pipeLeft = pipe.x;
        const pipeRight = pipe.x + PIPE_WIDTH;
        const pipeTopEnd = pipe.topHeight;
        const pipeBottomStart = pipe.topHeight + PIPE_GAP;

        if (
          birdRight > pipeLeft &&
          birdLeft < pipeRight &&
          (birdTop < pipeTopEnd || birdBottom > pipeBottomStart)
        ) {
          setGameOver(true);
          return;
        }
      }
      
       // Scoring
      const passedPipe = pipes.find(
        (p) => p.x + PIPE_WIDTH < birdLeft && !p.passed
      );
      if (passedPipe) {
        setScore((s) => s + 1);
        setPipes((currentPipes) =>
          currentPipes.map((p) =>
            p.id === passedPipe.id ? { ...p, passed: true } : p
          )
        );
      }

    }, 1000 / 60); // 60 FPS

    return () => clearInterval(gameLoopRef.current);
  }, [gameStarted, gameOver, birdVelocity, pipes]);
  
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    pipeTimeoutRef.current = setInterval(() => {
        const topHeight = Math.floor(Math.random() * (GAME_HEIGHT - PIPE_GAP - 50)) + 25;
        setPipes((p) => [...p, { id: Date.now(), x: GAME_WIDTH, topHeight: topHeight, passed: false }]);
    }, PIPE_INTERVAL) as any;

    return () => clearInterval(pipeTimeoutRef.current);
  }, [gameStarted, gameOver]);

  const handleJump = () => {
    if (!gameOver) {
      setBirdVelocity(-JUMP_STRENGTH);
    }
  };
  
  const startGame = () => {
    setBirdPosition(GAME_HEIGHT / 2);
    setBirdVelocity(0);
    setPipes([]);
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  }

  return (
    <Card className="w-fit mx-auto">
      <CardHeader>
        <CardTitle>Flappy Bird</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="relative overflow-hidden bg-blue-300 dark:bg-blue-800"
          style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
          onClick={handleJump}
        >
          {!gameStarted ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  startGame();
                }}
              >
                Start Game
              </Button>
            </div>
          ) : (
            <>
              <div
                className="absolute bg-yellow-400 rounded-full"
                style={{
                  width: BIRD_SIZE,
                  height: BIRD_SIZE,
                  top: birdPosition - BIRD_SIZE / 2,
                  left: GAME_WIDTH / 2 - BIRD_SIZE / 2,
                  transform: `rotate(${birdVelocity * 3}deg)`,
                  transition: "transform 150ms linear",
                }}
              />
              {pipes.map((pipe) => (
                <div key={pipe.id}>
                  <div
                    className="absolute bg-green-500 border-2 border-gray-800"
                    style={{
                      left: pipe.x,
                      top: 0,
                      width: PIPE_WIDTH,
                      height: pipe.topHeight,
                    }}
                  />
                  <div
                    className="absolute bg-green-500 border-2 border-gray-800"
                    style={{
                      left: pipe.x,
                      top: pipe.topHeight + PIPE_GAP,
                      width: PIPE_WIDTH,
                      height: GAME_HEIGHT - pipe.topHeight - PIPE_GAP,
                    }}
                  />
                </div>
              ))}
              <div className="absolute top-4 left-4 text-white text-3xl font-bold [text-shadow:2px_2px_4px_#000]">
                Score: {score}
              </div>
              {gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                    <p className="text-white text-4xl font-bold mb-4 [text-shadow:2px_2px_4px_#000]">Game Over</p>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        startGame();
                      }}
                    >
                      Play Again
                    </Button>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 