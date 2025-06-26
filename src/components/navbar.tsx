"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-lg font-bold">
        <Link href="/">Pallav Singh</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  );
} 