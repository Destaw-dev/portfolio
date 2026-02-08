import { Navbar } from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Projects } from "../../components/Projects";
import { TechStack } from "../../components/TechStack";
import { Contact } from "../../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}
