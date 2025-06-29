"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { TextGenerateEffect } from "@/animations/Textgenerateeffect";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js","MySQL","Supabase"];

export function Hero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-background to-background opacity-10"></div>
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        >
          <Image
            src="/pfp.png"
            alt="Pallav Singh"
            width={224}
            height={224}
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">Pallav Singh</h1>
          <TextGenerateEffect 
            className="text-sm sm:text-base lg:text-xl xl:text-2xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed" 
            delay={0} 
            duration={1} 
            filter={true} 
            words="I'm a passionate developer specializing in web and app development, with a keen interest in creating modern and intuitive user experiences." 
          />
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 lg:mb-8">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
            <Link href="https://github.com/Pallav0099" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-10 w-10 sm:h-12 sm:w-12">
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/pallav-singh-aa11a2338" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-10 w-10 sm:h-12 sm:w-12">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 