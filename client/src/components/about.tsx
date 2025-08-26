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
            Passionate developer with expertise in building scalable
            applications and solving complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible ? "reveal active" : "reveal"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional headshot"
              className="rounded-xl shadow-lg w-full h-auto mb-6 card-hover"
            />

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Personal Introduction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with 5+ years of
                  experience in creating innovative digital solutions. I love
                  turning complex problems into simple, beautiful, and intuitive
                  designs. When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or
                  mentoring aspiring developers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <h4 className="font-medium text-foreground">Location</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <h4 className="font-medium text-foreground">Experience</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">5+ Years</p>
                  </CardContent>
                </Card>
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
                            B.S. Computer Science
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Stanford University • 2016-2020
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Graduated Magna Cum Laude, GPA: 3.8/4.0
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
                  <Card className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">
                            Senior Full Stack Developer
                          </h4>
                          <p className="text-sm text-primary">
                            TechCorp Inc. • 2022-Present
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Leading development of scalable web applications
                            using React, Node.js, and AWS
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">
                            Full Stack Developer
                          </h4>
                          <p className="text-sm text-primary">
                            StartupXYZ • 2020-2022
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Built and maintained multiple client applications,
                            improved performance by 40%
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
