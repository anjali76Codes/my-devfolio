import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin, Clock } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-muted/30 dark:bg-muted/10 relative overflow-hidden"
    >
      {/* Moving circles */}
      <div className="section-circle circle-1"></div>
      <div className="section-circle circle-2"></div>
      <div className="section-circle circle-4"></div>
      <div className="section-circle circle-5"></div>
      <div className="section-circle circle-6"></div>
      <div className="section-circle circle-7"></div>
      <div className="section-circle circle-8"></div>
      <div className="section-circle circle-9"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "reveal active" : "reveal"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Full Stack Developer with 2+ years of experience in
            building scalable applications, solving real-world problems, and
            contributing to innovative projects in web development and AI.
          </p>
        </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Personal Info */}
  <div
    className={`transition-all duration-800 delay-200 ${
      isVisible ? "reveal active" : "reveal"
    }`}
  >
   <div className="flex flex-col items-center justify-start h-full">
      {/* Adjusted Image Styling */}
   <img
  src="/images/anj.png"
  alt="Professional headshot"
  className="rounded-xl shadow-lg mb-6 card-hover w-full max-w-xs sm:max-w-md lg:max-w-lg h-80 object-cover"
/>

      <div className="space-y-6 flex-1">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Personal Introduction
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm Anjali Gupta, a driven Full Stack Developer pursuing a B.E. in Computer Engineering (CGPA 9.24). With 2+ years of hands-on experience, I specialize in MERN stack, AI-powered solutions, and scalable web applications. I enjoy exploring new technologies, working on impactful projects, and collaborating in hackathons and open-source communities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-1">
                <MapPin className="w-4 h-4 text-primary" />
                <h4 className="font-medium text-foreground">Location</h4>
              </div>
              <p className="text-sm text-muted-foreground">Mumbai, India</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-1">
                <Clock className="w-4 h-4 text-primary" />
                <h4 className="font-medium text-foreground">Experience</h4>
              </div>
              <p className="text-sm text-muted-foreground">2+ Years</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>

  {/* Education & Experience Timeline */}
  <div
    className={`transition-all duration-800 delay-400 ${
      isVisible ? "reveal active" : "reveal"
    }`}
  >
    <div className="space-y-8">
      {/* Education */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
          <GraduationCap className="w-5 h-5 text-primary mr-2" />
          Education
        </h3>
        <div className="space-y-4">
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    B.E. in Computer Engineering
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Vidyavardhini's college of engineering and technology, Vasai • 2022 – Present
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Current CGPA: 9.24/10
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
          <Briefcase className="w-5 h-5 text-primary mr-2" />
          Experience
        </h3>
        <div className="space-y-4">
          {/* Quizitt Internship */}
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">
                    Software Engineer Intern
                  </h4>
                  <p className="text-sm text-primary">
                    Quizitt India Pvt. Ltd. • May 2025 – Jul 2025
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Developed and enhanced ed-tech features, implemented OAuth authentication, integrated payments, and built scalable APIs using the MERN stack.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prodify Internship */}
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">
                    Web Developer Intern
                  </h4>
                  <p className="text-sm text-primary">
                    Prodify Infotech • 2023
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Worked on front-end and back-end development using MERN stack, optimized UI components, and assisted in building responsive client applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Codesoft Internship */}
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">
                    Web Developer Intern
                  </h4>
                  <p className="text-sm text-primary">
                    Codesoft • 2024
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Built and tested dynamic web modules, contributed to API integrations, and improved UI/UX for internal projects during internship.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
