import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";
import WhatsAppButton from "./components/ui/WhatsappButton";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Experience />
          <Contact />
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}