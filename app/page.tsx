import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import ResearchInterests from "@/components/research-interests";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Certifications from "@/components/certifications";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <div className="flex flex-col items-center">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <ResearchInterests />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
