"use client";

import { useEffect, useState, useRef } from "react";

const BIRD_SIZE = 30;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;
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
      setBirdVelocity((v) => v + GRAVITY);
      setBirdPosition((pos) => pos + birdVelocity);

      setPipes((currentPipes) =>
        currentPipes
          .map((pipe) => ({ ...pipe, x: pipe.x - 5 }))
          .filter((pipe) => pipe.x > -PIPE_WIDTH)
      );

      const birdLeft = GAME_WIDTH / 2 - BIRD_SIZE / 2;
      const birdRight = GAME_WIDTH / 2 + BIRD_SIZE / 2;
      const birdTop = birdPosition - BIRD_SIZE / 2;
      const birdBottom = birdPosition + BIRD_SIZE / 2;
      
      if (birdBottom > GAME_HEIGHT || birdTop < 0) {
        setGameOver(true);
        return;
      }

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

    }, 1000 / 60);

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
    if (!gameOver && gameStarted) {
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
    <div className="w-fit mx-auto border border-white/10 p-6 bg-black">
      <div className="mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-emerald pulse-emerald rounded-full"></div>
          <span className="text-xs text-white/60 uppercase tracking-wider font-mono">Flappy Bird</span>
        </div>
        <h2 className="text-2xl font-bold font-mono mb-2">Game</h2>
        <p className="text-sm text-white/60">Click or press spacebar to make the bird jump. Avoid the pipes!</p>
      </div>

      <div
        className="relative overflow-hidden bg-black border border-white/10 cursor-pointer"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        onClick={handleJump}
      >
        {!gameStarted ? (
          <div className="absolute inset-0 flex items-center justify-center border border-white/10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                startGame();
              }}
              className="border border-white/10 px-6 py-3 text-sm font-mono uppercase tracking-wider hover:border-emerald hover:text-emerald transition-colors"
            >
              Start Game
            </button>
          </div>
        ) : (
          <>
            <div
              className="absolute bg-white rounded-full border border-white/20"
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
                  className="absolute bg-white border border-white/20"
                  style={{
                    left: pipe.x,
                    top: 0,
                    width: PIPE_WIDTH,
                    height: pipe.topHeight,
                  }}
                />
                <div
                  className="absolute bg-white border border-white/20"
                  style={{
                    left: pipe.x,
                    top: pipe.topHeight + PIPE_GAP,
                    width: PIPE_WIDTH,
                    height: GAME_HEIGHT - pipe.topHeight - PIPE_GAP,
                  }}
                />
              </div>
            ))}
            <div className="absolute top-4 left-4 text-white text-xl font-bold font-mono">
              Score: {score}
            </div>
            {gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 border border-white/10">
                <p className="text-white text-2xl font-bold font-mono mb-6">Game Over</p>
                <p className="text-white/60 text-sm font-mono mb-4">Final Score: {score}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startGame();
                  }}
                  className="border border-white/10 px-6 py-3 text-sm font-mono uppercase tracking-wider hover:border-emerald hover:text-emerald transition-colors"
                >
                  Play Again
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-4 text-xs text-white/40 font-mono">
        Click to jump • Spacebar supported
      </div>
    </div>
  );
}
