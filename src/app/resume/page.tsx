"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const resumeData = {
  header: {
    name: "Pallav Anand Singh",
    email: "pallavanand@proton.me",
    phone: "+91-9199-511-287",
    github: "github.com/Pallav0099",
  },
  summary:
    "Systems architect and automation engineer. Build production-ready infrastructure with Next.js, TypeScript, and Docker. Arch Linux power user managing custom kernel builds and home lab services (n8n, Postgres, local LLMs via Ollama). Currently pursuing B.Tech IT with Minor in Data Science.",
  education: {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Manipal University Jaipur – Rajasthan, India",
    graduation: "Expected Graduation: 2027",
    current: "6th Semester | Minor Track: Data Science",
    credits: "115 Credits Cleared",
  },
  projects: [
    {
      title: "Skytunnel",
      type: "MVP",
      points: [
        "Built a high-performance reverse proxy for zero-config ingress, providing instant, secure public URLs for local environments via SSH reverse tunnels.",
        "Engineered a zero-knowledge, key-based architecture routing traffic through a distributed VPS network with E2E encryption and zero inspection.",
      ],
    },
    {
      title: "Finalytics AI",
      type: "MVP",
      points: [
        "Built financial auditing pipeline using n8n workflows orchestrating Postgres queries and Ollama local LLM inference, containerized with Docker for isolated execution",
        "Automated profit margin analysis by parsing financial data through Postgres, feeding structured results to local LLM models for pattern detection and anomaly identification",
      ],
    },
    {
      title: "WhoOwes",
      type: "MVP",
      points: [
        "Compiled minimalist expense tracker with Next.js server actions and Supabase real-time subscriptions, using Postgres triggers for automatic balance calculations",
        "Architected state synchronization layer with Supabase RLS policies and real-time event streaming, eliminating client-side state management overhead",
      ],
    },
  ],
  skills: {
    languages: "JavaScript, TypeScript, Python, C++, Java, C",
    frontend: "Next.js, React, Tailwind CSS, Framer Motion",
    backend: "Postgres, Supabase, n8n, libcurl",
    infrastructure: "Docker, VPS Deployment, Home Lab Management",
    automation: "Bash Scripting, n8n Workflows, Systemd Services",
    systems: "Arch Linux, Custom Kernel Management, Bootloaders, System Ricing",
  },
  activities: {
    title: "Tech Team Member – International Student Cell",
    location: "Manipal University Jaipur",
    points: [
      "Contribute to technical operations under Directorate of International Collaboration (DOIC)",
      "Support development and tech infrastructure for global student initiatives",
    ],
  },
  coursework: [
    "Design and Analysis of Algorithms (DAA)",
    "Artificial Intelligence",
    "Foundations of Data Science",
    "Cyber Security",
    "Software Engineering",
    "Data Structures and Algorithms",
    "Object-Oriented Programming (Java, C++, Python)",
    "Operating Systems",
    "Modern Web Technologies",
    "Database Management Systems",
  ],
};

export default function Resume() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <div className="mb-4 text-xs text-white/60 font-mono">
            <span className="text-emerald">$</span> cat resume.txt
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{resumeData.header.name}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/60 font-mono">
            <div>
              <span className="text-emerald">&gt;</span>{" "}
              <span className="text-white/40">email:</span>{" "}
              <a href={`mailto:${resumeData.header.email}`} className="hover:text-emerald transition-colors">
                {resumeData.header.email}
              </a>
            </div>
            <div>
              <span className="text-emerald">&gt;</span>{" "}
              <span className="text-white/40">phone:</span> {resumeData.header.phone}
            </div>
            <div>
              <span className="text-emerald">&gt;</span>{" "}
              <span className="text-white/40">github:</span>{" "}
              <a
                href={`https://${resumeData.header.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald transition-colors"
              >
                {resumeData.header.github}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> ./summary
            </span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">{resumeData.summary}</p>
        </motion.section>

        <div className="border-t border-white/10 my-8"></div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> ./education
            </span>
          </div>
          <div className="text-sm space-y-2">
            <div className="font-bold">{resumeData.education.degree}</div>
            <div className="text-white/60">{resumeData.education.institution}</div>
            <div className="text-xs text-white/40">{resumeData.education.current}</div>
            <div className="text-xs text-white/40">{resumeData.education.credits}</div>
            <div className="text-xs text-white/40 mt-2">{resumeData.education.graduation}</div>
          </div>
        </motion.section>

        <div className="border-t border-white/10 my-8"></div>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> ./projects
            </span>
          </div>
          <div className="space-y-8">
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="border-l border-white/10 pl-6">
                <div className="font-bold text-sm mb-1">
                  {project.title}{" "}
                  <span className="text-xs text-white/40 font-normal">({project.type})</span>
                </div>
                <ul className="space-y-2 text-xs text-white/60 mt-4">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 font-mono">
                      <span className="text-emerald mt-1">&gt;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="border-t border-white/10 my-8"></div>

        {/* Technical Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> ./skills
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-white/40">Languages:</span>{" "}
              <span className="text-white/80">{resumeData.skills.languages}</span>
            </div>
            <div>
              <span className="text-white/40">Frontend:</span>{" "}
              <span className="text-white/80">{resumeData.skills.frontend}</span>
            </div>
            <div>
              <span className="text-white/40">Backend:</span>{" "}
              <span className="text-white/80">{resumeData.skills.backend}</span>
            </div>
            <div>
              <span className="text-white/40">Infrastructure:</span>{" "}
              <span className="text-white/80">{resumeData.skills.infrastructure}</span>
            </div>
            <div>
              <span className="text-white/40">Automation:</span>{" "}
              <span className="text-white/80">{resumeData.skills.automation}</span>
            </div>
            <div>
              <span className="text-white/40">Systems:</span>{" "}
              <span className="text-white/80">{resumeData.skills.systems}</span>
            </div>
          </div>
        </motion.section>

        <div className="border-t border-white/10 my-8"></div>

        {/* Activities */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> ./activities
            </span>
          </div>
          <div className="border-l border-white/10 pl-6">
            <div className="font-bold text-sm mb-1">{resumeData.activities.title}</div>
            <div className="text-xs text-white/40 mb-4">{resumeData.activities.location}</div>
            <ul className="space-y-2 text-xs text-white/60">
              {resumeData.activities.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 font-mono">
                  <span className="text-emerald mt-1">&gt;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <div className="border-t border-white/10 my-8"></div>

        {/* Coursework */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-white/60 font-mono">
              <span className="text-emerald">$</span> ./coursework
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/60 font-mono">
            {resumeData.coursework.map((course, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-emerald">&gt;</span>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}
