"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TicTacToe } from "@/components/tic-tac-toe";

export default function TicTacToePage() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <TicTacToe />
      </div>
      <Footer />
    </main>
  );
}
