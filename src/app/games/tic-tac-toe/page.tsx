import { Navbar } from "@/components/navbar";
import { TicTacToe } from "@/components/tic-tac-toe";

export default function TicTacToePage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <TicTacToe />
      </div>
    </main>
  );
} 