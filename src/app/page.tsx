import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PreviousWork } from "@/components/previous-work";
import { Testimonials } from "@/components/testimonials";
import { GitHubActivity } from "@/components/github-activity";
import { ContactSection } from "@/components/contact-section";
import { GamesSection } from "@/components/games-section";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <PreviousWork />
      </div>
      <GamesSection />
      <Footer />
    </main>
  );
}
