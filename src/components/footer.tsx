"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8 mt-12 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl xl:max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2024 Pallav Anand Singh. All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
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