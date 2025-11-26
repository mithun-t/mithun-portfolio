import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import CareerStats from "@/components/CareerStats";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
     <CareerStats />
      <Timeline />
      <Projects />
      <Testimonials />
      <GitHubStats />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
