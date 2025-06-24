import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import { Scheduler } from "@/components/scheduler";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4">
        <section className="py-20">
          <h1 className="text-4xl font-bold text-center">Contact Me</h1>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>
        <section className="py-20 bg-secondary">
          <h2 className="text-3xl font-bold text-center">Schedule a Meeting</h2>
          <div className="mt-8">
            <Scheduler />
          </div>
        </section>
      </div>
    </main>
  );
} 