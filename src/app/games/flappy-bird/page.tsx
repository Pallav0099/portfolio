"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FlappyBird } from "@/components/flappy-bird";

export default function FlappyBirdPage() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <FlappyBird />
      </div>
      <Footer />
    </main>
  );
}
