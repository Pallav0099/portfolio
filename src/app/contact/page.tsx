"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <div className="mb-4 text-xs text-white/60 font-mono">
            <span className="text-emerald">$</span> cat contact.txt
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-emerald pulse-emerald rounded-full"></div>
            <span className="text-xs text-white/60 uppercase tracking-wider">Get in touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="mb-4 text-xs text-white/60 font-mono">
            <span className="text-emerald">$</span> ./contact-form
          </div>
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="mb-4 text-xs text-white/60 font-mono">
            <span className="text-emerald">$</span> cat other-ways.txt
          </div>
          <h2 className="text-sm font-bold mb-4 uppercase tracking-wider">Other ways to reach me</h2>
          <div className="space-y-4 text-sm font-mono">
            <div className="border border-white/10 p-4 hover:border-emerald transition-colors">
              <div className="text-white/40 mb-1">Email</div>
              <a 
                href="mailto:pallavanand@proton.me" 
                className="text-white/80 hover:text-emerald transition-colors"
              >
                <span className="text-emerald">&gt;</span> pallavanand@proton.me
              </a>
            </div>
            <div className="border border-white/10 p-4 hover:border-emerald transition-colors">
              <div className="text-white/40 mb-1">GitHub</div>
              <a
                href="https://github.com/Pallav0099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-emerald transition-colors"
              >
                <span className="text-emerald">&gt;</span> github.com/Pallav0099
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
