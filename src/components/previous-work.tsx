"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Project One",
    description: "A description of the first project.",
    image: "/project1.png",
  },
  {
    title: "Project Two",
    description: "A description of the second project.",
    image: "/project2.png",
  },
  {
    title: "Project Three",
    description: "A description of the third project.",
    image: "/project3.png",
  },
];

export function PreviousWork() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">Previous Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-md mb-4"
                />
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 