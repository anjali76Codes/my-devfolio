import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 relative overflow-hidden px-4"
    >
      {/* Moving circles */}
      <div className="section-circle circle-1"></div>
      <div className="section-circle circle-2"></div>
      <div className="section-circle circle-3"></div>
      <div className="section-circle circle-4"></div>
      <div className="section-circle circle-5"></div>
      <div className="section-circle circle-6"></div>
      <div className="section-circle circle-7"></div>
      <div className="section-circle circle-8"></div>
      <div className="section-circle circle-9"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/10 to-transparent rounded-full animate-pulse [animation-delay:1s]"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col-reverse sm:flex-row items-center justify-center gap-8 sm:gap-20">
        {/* Text Section */}
       <div className="text-center sm:text-left max-w-xl pt-20">
          <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "" }`}>
           <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-snug sm:leading-tight">
  <span className="block text-foreground">Hi, I'm</span>
  <span className="block text-foreground">Anjali Gupta</span>
  <span className="block gradient-text text-4xl sm:text-6xl lg:text-8xl mt-4">
    Anjali Gupta
  </span>
</h1>

<p
  className={`-mt-20 text-base sm:text-xl md:text-xl text-muted-foreground mb-5 transition-all duration-800 delay-200 ${
    isVisible ? "animate-fade-in-up" : ""
  } text-left`}
>
  Full Stack Developer & Software Engineer passionate about creating
  innovative digital solutions
</p>



            <div
              className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-800 delay-400 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-border text-foreground hover:bg-accent transition-all duration-300"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`mt-1 sm:mt-12 transition-all duration-800 delay-600 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            <div className="flex justify-center sm:justify-start space-x-6">
              <a
                href="https://github.com/anjali76Codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                data-testid="link-github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/anjaligupta76"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                data-testid="link-twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:anjaligupta92958@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
       {/* Image Section */}
<div className="w-52 h-52 sm:w-52 sm:h-52 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-green-200 shadow-lg hover:scale-105 transition-transform duration-300 sm:absolute sm:top-20 sm:right-10 z-10">
  <img
    src="/images/mee.png"
    alt="Anjali Gupta"
    className="w-full h-full object-cover"
  />
</div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
          data-testid="scroll-indicator"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
