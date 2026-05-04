import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Clients } from "@/components/clients";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      {/* <Clients /> */}
      {/* <About /> */}
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
