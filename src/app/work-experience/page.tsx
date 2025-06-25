import { Navbar } from "@/components/navbar";
import { StaggeredList } from "@/animations/StaggeredList";

export default function WorkExperience() {
  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Work Experience</h1>
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Web Developer</h2>
              <p className="text-lg text-muted-foreground">Hermeias | Jan 2025 - May 2025</p>
              <StaggeredList
                delay={0} staggerdelay={0.3} duration={1} filter={true} bulleted={true} className="pl-5"
                List="Developed and maintained web applications using React and Node.js. | Collaborated with cross-functional teams to deliver high-quality products. | Used advanced libraries like React-three-fiber and Framer-motion to give the website a full redesign."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 