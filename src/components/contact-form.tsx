"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xgvypbjr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-mono">
          NAME
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-emerald transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-mono">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-emerald transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-mono">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-emerald transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full border border-white/10 px-6 py-3 text-sm font-mono uppercase tracking-wider hover:border-emerald hover:text-emerald transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "SENDING..." : status === "success" ? "MESSAGE_SENT" : "SEND_MESSAGE"}
      </button>
      {status === "success" && (
        <div className="text-xs text-emerald font-mono text-center">
          &gt; MESSAGE_SUCCESSFULLY_TRANSMITTED
        </div>
      )}
      {status === "error" && (
        <div className="text-xs text-white/60 font-mono text-center">
          &gt; ERROR: TRANSMISSION_FAILED
        </div>
      )}
    </form>
  );
}
