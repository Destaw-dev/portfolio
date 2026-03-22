import dynamic from "next/dynamic";
import { Navbar } from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";

const Projects = dynamic(() => import("../../components/Projects").then((m) => ({ default: m.Projects })));
const TechStack = dynamic(() => import("../../components/TechStack").then((m) => ({ default: m.TechStack })));
const Contact = dynamic(() => import("../../components/Contact").then((m) => ({ default: m.Contact })));

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
