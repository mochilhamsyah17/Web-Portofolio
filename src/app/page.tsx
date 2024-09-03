import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import ExperienceWith from "@/app/components/experienceWith";
import Project from "./components/project";
import Experience from "@/app/components/experiences";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
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
