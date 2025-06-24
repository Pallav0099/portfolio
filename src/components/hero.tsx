"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"];

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-background to-background opacity-50"></div>
      <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl font-bold">Pallav Singh</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-xl">
            I'm a passionate developer specializing in web and app development,
            with a keen interest in creating modern and intuitive user
            experiences.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link href="https://github.com/PallavSingh" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/pallav-singh" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 