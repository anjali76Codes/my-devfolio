import Navigation from "../components/navigation";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Achievements from "../components/achievements";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { GlobalCertificateModal } from "../components/certificate-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Floating background shapes */}
      <div className="floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        <div className="floating-shape shape-6"></div>
        <div className="floating-shape particle-1"></div>
        <div className="floating-shape particle-2"></div>
        <div className="floating-shape particle-3"></div>
        <div className="floating-shape orbit-1"></div>
        <div className="floating-shape orbit-2"></div>
      </div>

      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <GlobalCertificateModal />
    </div>
  );
}
