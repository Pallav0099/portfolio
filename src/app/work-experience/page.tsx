import { Navbar } from "@/components/navbar";

export default function WorkExperience() {
  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Work Experience</h1>
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Software Engineer</h2>
              <p className="text-lg text-muted-foreground">Company A | 2022 - Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed and maintained web applications using React and Node.js.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
                <li>Implemented new features and fixed bugs in existing applications.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Junior Developer</h2>
              <p className="text-lg text-muted-foreground">Company B | 2020 - 2022</p>
              <ul className="list-disc list-inside mt-2">
                <li>Assisted in the development of a new e-commerce platform.</li>
                <li>Wrote clean, maintainable, and efficient code.</li>
                <li>Participated in code reviews and team meetings.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 