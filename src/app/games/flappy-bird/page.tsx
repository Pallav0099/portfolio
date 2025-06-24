import { Navbar } from "@/components/navbar";
import { FlappyBird } from "@/components/flappy-bird";

export default function FlappyBirdPage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <FlappyBird />
      </div>
    </main>
  );
} 