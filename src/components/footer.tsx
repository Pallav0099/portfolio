"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Pallav Anand Singh. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link 
              href="mailto:pallavanand@proton.me" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="https://github.com/Pallav0099" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 