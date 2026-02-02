"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Code, 
  Type, 
  Atom, 
  Palette, 
  Move, 
  Database, 
  Box, 
  Globe, 
  Container, 
  Terminal, 
  Network, 
  GitBranch, 
  Workflow, 
  FileCode, 
  Brain, 
  Cpu, 
  TrendingUp,
  Layers,
  Zap
} from "lucide-react";

const commandModules = [
  { id: "RESUME", label: "Resume", href: "/resume", status: "ACTIVE", desc: "View my professional experience and skills" },
  { id: "CONTACT", label: "Contact", href: "/contact", status: "ACTIVE", desc: "Get in touch with me" },
  { id: "FLAPPY_BIRD", label: "Flappy Bird", href: "/games/flappy-bird", status: "ACTIVE", desc: "Play the classic game" },
  { id: "TIC_TAC_TOE", label: "Tic Tac Toe", href: "/games/tic-tac-toe", status: "ACTIVE", desc: "Challenge the AI" },
];

const skills = [
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: Type },
  { name: "React", icon: Atom },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Framer Motion", icon: Move },
  { name: "Postgres", icon: Database },
  { name: "Supabase", icon: Database },
  { name: "Neondb", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "libcurl", icon: Globe },
  { name: "Docker", icon: Container },
  { name: "SSH Tunneling", icon: Terminal },
  { name: "Reverse Proxies", icon: Network },
  { name: "n8n", icon: Workflow },
  { name: "Python", icon: FileCode },
  { name: "Ollama", icon: Brain },
  { name: "PyTorch", icon: Cpu },
  { name: "Scikit-Learn", icon: TrendingUp },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Navbar />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-white/10"
            >
              <Image
                src="/pfp.png"
                alt="Pallav Singh"
                width={192}
                height={192}
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-2 h-2 bg-emerald pulse-emerald rounded-full"></div>
                <span className="text-xs text-white/60 uppercase tracking-wider">Available</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Pallav Singh
              </h1>
              <div className="mb-4 text-sm text-white/60 font-mono">
                <span className="text-emerald">$</span> whoami
              </div>
              <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I build systems that work. Currently ricing Arch and tunneling through the void.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-white/60 font-mono">
                <div>
                  <span className="text-emerald">$</span>{" "}
                  <span className="text-white/40">location:</span> Remote
                </div>
                <div>
                  <span className="text-emerald">$</span>{" "}
                  <span className="text-white/40">status:</span>{" "}
                  <span className="text-emerald">available</span>
                </div>
                <div>
                  <span className="text-emerald">$</span>{" "}
                  <span className="text-white/40">stack:</span> Next.js, TypeScript, Docker
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> ls -la
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commandModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={module.href}
                  className="block border border-white/10 p-6 hover:border-emerald hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
                      <span className="text-emerald">./</span>{module.id.toLowerCase()}
                    </span>
                    <span className="text-xs text-emerald font-bold font-mono">{module.status}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald transition-colors">
                    {module.label}
                  </h3>
                  <p className="text-sm text-white/60 mb-3">{module.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-white/60 font-mono">
                    <span className="text-emerald">&gt;</span>
                    <span>cd {module.id.toLowerCase()}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16 border-t border-white/10 pt-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> tech --list
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border border-white/10 p-4 text-center hover:border-emerald transition-all group cursor-default"
                >
                  <div className="flex flex-col items-center gap-2">
                    <IconComponent className="h-6 w-6 text-white/60 group-hover:text-emerald transition-colors" />
                    <div className="text-xs font-bold font-mono">{skill.name}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> cat contact.txt
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-mono">
            <div>
              <div className="mb-3 text-white/80 font-semibold">Contact</div>
              <div className="space-y-2 text-white/60">
                <a
                  href="mailto:pallavanand@proton.me"
                  className="block hover:text-emerald transition-colors"
                >
                  <span className="text-emerald">&gt;</span> email: pallavanand@proton.me
                </a>
                <a
                  href="https://github.com/Pallav0099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-emerald transition-colors"
                >
                  <span className="text-emerald">&gt;</span> github: Pallav0099
                </a>
              </div>
            </div>
            <div>
              <div className="mb-3 text-white/80 font-semibold">About</div>
              <div className="space-y-2 text-white/60">
                <div><span className="text-emerald">&gt;</span> Building systems & infrastructure</div>
                <div><span className="text-emerald">&gt;</span> Managing home lab services</div>
                <div><span className="text-emerald">&gt;</span> Compiling production-ready MVPs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
