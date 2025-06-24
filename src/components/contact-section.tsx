import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
} 