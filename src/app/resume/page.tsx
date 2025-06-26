"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { StaggeredList } from "@/animations/StaggeredList";
import Image from "next/image";
import { TextGenerateEffect } from "@/animations/Textgenerateeffect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Resume() {
  return (
    <main>
      <Navbar />
      <section className="py-12 min-h-screen bg-background">
        <motion.div
          className="container mx-auto px-4 max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div
            className="flex items-center flex-col md:flex-row gap-6 mb-8"
            variants={fadeInUp}
          >
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
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">Pallav Singh</h1>
              <div className="mt-2 text-base text-muted-foreground flex flex-col gap-1">
                <span>📧 <a href="mailto:pallavanand@proton.me" className="underline">pallavanand@proton.me</a></span>
              </div>
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <Link href="https://github.com/Pallav0099" target="_blank" rel="noopener noreferrer">
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
            </div>
          </motion.div>

          {/* About me */}
          <motion.section className="mb-8" variants={fadeInUp}>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">🎯 Summary</h2>
            <TextGenerateEffect
              className="text-base leading-relaxed"
              filter={true}
              duration={0.5}
              words="Aspiring full-stack developer with hands-on experience building production-ready websites, system tools, and interactive UIs. Proficient in JavaScript, Python, and modern frontend stacks. Passionate about Linux systems, open-source development, and creating elegant, high-performance solutions."
            />
          </motion.section>

          <div className="border-t border-border my-8"></div>

          {/* Education */}
          <motion.section className="mb-8" variants={fadeInUp}>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">🎓 Education</h2>
            <div className="font-medium text-lg">Bachelor of Technology in Information Technology</div>
            <div className="text-muted-foreground">Manipal University Jaipur – Rajasthan, India</div>
            <div className="text-sm text-muted-foreground mt-1">Expected Graduation: 2027</div>
          </motion.section>

          <div className="border-t border-border my-8"></div>

          {/* Experience */}
          <motion.section className="mb-8" variants={fadeInUp}>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">💼 Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="font-medium text-lg">Full Stack Web Developer at HERMEiAS</div>
                <div className="text-sm text-muted-foreground mb-3">Remote | Dec 2024 – Present</div>
                <StaggeredList
                  List="Developed and deployed two production-ready company websites with React.js and Tailwind CSS|Integrated 3D visuals and animations using React Three Fiber and Framer Motion to enhance interactivity|Maintained the current production site while working on feature-rich future iterations|Collaborated with backend and design teams to ensure seamless UI/UX and feature delivery"
                  bulleted={true}
                  filter={true}
                  delay={0.3}
                  staggerdelay={0.3}
                  duration={0.9}
                  className="pl-4"
                />
              </div>
              <div>
                <div className="font-medium text-lg">Freelance Graphic Designer</div>
                <div className="text-sm text-muted-foreground mb-3">Remote | 2019 – 2020</div>
                <ul className="space-y-1 text-sm">
                  <li className="ml-4 list-disc">
                    <span>Delivered logos, thumbnails, and cinematic intros to YouTube creators using Adobe Photoshop and Premiere Pro</span>
                  </li>
                  <li className="ml-4 list-disc">
                    <span>Created engaging video assets and visual identities that improved viewer retention by 15%</span>
                  </li>
                  <li className="ml-4 list-disc">
                    <span>Managed multiple projects simultaneously with consistent client satisfaction and timely delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          <div className="border-t border-border my-8"></div>

          {/* Projects */}
          <motion.section className="mb-8" variants={fadeInUp}>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">💻 Projects</h2>
            <div className="space-y-6">
              <div>
                <div className="font-medium text-lg">System Monitor Widget for GNOME <span className="text-xs text-muted-foreground">(Personal Project)</span></div>
                <ul className="mt-3 space-y-1 text-sm">
                  <li className="ml-4 list-disc">
                    <span>Built a Python-based GNOME widget for real-time system monitoring using Psutil, GTK, GDK, and GLib</span>
                  </li>
                  <li className="ml-4 list-disc">
                    <span>Included autostart functionality with .service files and custom-themed CSS for a modern UI</span>
                  </li>
                  <li className="ml-4 list-disc">
                    <span>Tailored for Linux enthusiasts</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-lg">Student Database Management System <span className="text-xs text-muted-foreground">(Academic Project)</span></div>
                <ul className="mt-3 space-y-1 text-sm">
                  <li className="ml-4 list-disc">
                    <span>Created a CRUD web app for managing student records</span>
                  </li>
                  <li className="ml-4 list-disc">
                    <span>Version 1: Flask + HTML/CSS + MySQL</span>
                  </li>
                  <li className="ml-4 list-disc">
                    <span>Version 2: PHP + Apache Server + MySQL with improved backend logic and security</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          <div className="border-t border-border my-8"></div>

          {/* Technical Skills */}
          <motion.section className="mb-8" variants={fadeInUp}>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">🌐 Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Languages:</strong> JavaScript, Python, C++, Java, C, PHP</div>
              <div><strong>Frontend:</strong> React.js, Tailwind CSS, React Three Fiber, Framer Motion</div>
              <div><strong>Backend & DB:</strong> Flask, PHP, MySQL, MongoDB, SQLite3</div>
              <div><strong>Dev Tools:</strong> Git, GitHub, Vercel</div>
              <div><strong>Design:</strong> Adobe Photoshop, Premiere Pro, Logo Design, Video Editing</div>
              <div><strong>Operating Systems:</strong> Arch Linux, Manjaro, Fedora, Ubuntu (Daily driver since 2022)</div>
            </div>
          </motion.section>

          <div className="border-t border-border my-8"></div>

          {/* Activities & Leadership */}
          <motion.section className="mb-8" variants={fadeInUp}>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">🌍 Activities & Leadership</h2>
            <div className="font-medium text-lg">Tech Team Member – International Student Cell</div>
            <div className="text-sm text-muted-foreground mb-3">Manipal University Jaipur</div>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span>Contribute to technical operations under Directorate of International Collaboration (DOIC)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>Support development and tech infrastructure for global student initiatives</span>
              </li>
            </ul>
          </motion.section>

          <div className="border-t border-border my-8"></div>

          {/* Relevant Coursework */}
          <motion.section className="mb-8" variants={fadeInUp}>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">📚 Relevant Coursework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div>• Data Structures and Algorithms</div>
              <div>• Object-Oriented Programming in Java</div>
              <div>• Object-Oriented Programming in C++</div>
              <div>• Object-Oriented Programming in Python</div>
              <div>• Operating Systems</div>
              <div>• Modern Web Technologies</div>
              <div>• Probability & Statistics</div>
              <div>• Database Management Systems</div>
            </div>
          </motion.section>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
} 