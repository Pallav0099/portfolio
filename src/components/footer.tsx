"use client";

import Link from "next/link";
import { Github, Mail, Home } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">About</h3>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              Full-stack developer passionate about building modern web applications 
              and creating exceptional user experiences.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <div className="w-2 h-2 bg-emerald pulse-emerald rounded-full"></div>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href="/resume" 
                  className="text-white/60 hover:text-emerald transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald">&gt;</span>
                  <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-white/60 hover:text-emerald transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald">&gt;</span>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/games/flappy-bird" 
                  className="text-white/60 hover:text-emerald transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald">&gt;</span>
                  <span>Flappy Bird</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/games/tic-tac-toe" 
                  className="text-white/60 hover:text-emerald transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald">&gt;</span>
                  <span>Tic Tac Toe</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Connect</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="mailto:pallavanand@proton.me"
                  className="text-white/60 hover:text-emerald transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>pallavanand@proton.me</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pallav0099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-emerald transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <div className="text-center sm:text-left">
              © {currentYear} Pallav Anand Singh. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link 
                href="/" 
                className="hover:text-emerald transition-colors flex items-center gap-2"
              >
                <Home className="h-3 w-3" />
                <span>Home</span>
              </Link>
              <Link 
                href="/resume" 
                className="hover:text-emerald transition-colors"
              >
                Resume
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-emerald transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
