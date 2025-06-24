"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Client One",
    feedback: "Pallav is a great developer to work with. Highly recommended.",
  },
  {
    name: "Client Two",
    feedback: "He delivered the project on time and with great quality.",
  },
  {
    name: "Client Three",
    feedback: "Very professional and skilled. I would hire him again.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border rounded-lg p-4 bg-background"
            >
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <p className="text-right font-bold mt-4">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 