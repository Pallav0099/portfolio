"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Hermeias",
    description: "A Complete redesign of the website for a privacy centered tech startup.",
    image: "/hermeias.png",
    link: "https://www.hermeias.org/"
  },
  {
    title: "Annaokon",
    description: "A fullstack website for selling and hosting courses with payments portal.",
    image: "/annaokon.png",
    link: "https://annaokon.eu//"
  },
  {
    title: "MNTN - A Hiking Guide",
    description: "A frontend-only project emphasizing smooth animations and responsive UI design..",
    image: "/mntn.png",
    link: "https://mntn-hiking-guide-sepia.vercel.app/"
  },
];

export function PreviousWork() {
  return (
    <section className="pb-20 pt-12">
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
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={250}
                  className="rounded-md object-cover"
                />
                <Link href={project.link}>
                  <CardHeader className="p-3 pt-2 pb-2 pl-0">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                </Link>
                <p className="text-muted-foreground pb-3 pl-0">
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