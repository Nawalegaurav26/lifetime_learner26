import Hero from "@/components/Hero";
import About from "@/components/AboutHome";
import Projects from "@/components/ProjectsHome";
import Posts from "@/components/Posts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="py-20 relative z-10">
        <About />
      </div>
      <div className="relative z-10">
        <Projects />
      </div>
      <div className="relative z-10">
        <Posts />
      </div>
      <div className="relative z-10">
        <Contact />
      </div>
    </main>
  );
}
