import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="py-20 bg-secondary">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
} 