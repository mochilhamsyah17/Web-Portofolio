import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import ExperienceWith from "@/app/components/experienceWith";
import Project from "./components/project";
import Experience from "@/app/components/experiences";
import Footer from "@/app/components/footer";
import Background from "@/app/components/background";

export default function Home() {
  return (
    <main id="top" className="min-h-screen m-0 p-0 scroll-smooth">
      <Background />
      <Navbar />
      <section>
        <Hero />
        <ExperienceWith />
        <Project />
        <Experience />
      </section>
      <Footer />
    </main>
  );
}
