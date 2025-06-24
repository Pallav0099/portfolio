import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Bird, Grid3x3 } from "lucide-react";

export function GamesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Getting bored? Try these!
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Link href="/games/tic-tac-toe">
            <Card className="hover:border-primary transition-colors">
              <CardHeader className="flex-row items-center gap-4">
                <Grid3x3 className="w-10 h-10 text-primary" />
                <div>
                  <CardTitle>Tic-Tac-Toe</CardTitle>
                  <CardDescription>A classic game of X's and O's.</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/games/flappy-bird">
            <Card className="hover:border-primary transition-colors">
              <CardHeader className="flex-row items-center gap-4">
                <Bird className="w-10 h-10 text-primary" />
                <div>
                  <CardTitle>Flappy Bird</CardTitle>
                  <CardDescription>
                    A simple but addictive bird game.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
} 