"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xgvypbjr"
      method="POST"
      className="space-y-4 max-w-xl mx-auto"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
        />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
