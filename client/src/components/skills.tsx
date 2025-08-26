import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Palette, Server, Settings } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiAmazon,
  SiDocker,
  SiGit,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Palette,
    gradient: "from-primary to-purple-600",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-green-500 to-blue-600",
    skills: [
      { name: "Node.js/Express", level: 88 },
      { name: "Python/Django", level: 82 },
      { name: "PostgreSQL/MongoDB", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    gradient: "from-orange-500 to-red-600",
    skills: [
      { name: "AWS/Docker", level: 75 },
      { name: "Git/GitHub", level: 95 },
      { name: "CI/CD Pipeline", level: 70 },
    ],
  },
];

const technologies = [
  { Icon: SiReact, color: "text-blue-500", name: "React" },
  { Icon: SiNodedotjs, color: "text-green-500", name: "Node.js" },
  { Icon: SiPython, color: "text-yellow-500", name: "Python" },
  { Icon: SiAmazon, color: "text-orange-500", name: "AWS" },
  { Icon: SiDocker, color: "text-blue-600", name: "Docker" },
  { Icon: SiGit, color: "text-red-500", name: "Git" },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!skillsAnimated) {
            setTimeout(() => setSkillsAnimated(true), 500);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skillsAnimated]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "reveal active" : "reveal"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences
          </p>
        </div>

        {/* Tech Stack Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`card-hover transition-all duration-800 delay-${
                (categoryIndex + 1) * 200
              } ${isVisible ? "reveal active" : "reveal"}`}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl mx-auto mb-4 flex items-center justify-center`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skillsAnimated ? skill.level : 0}
                        className="h-2"
                        data-testid={`progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Icons */}
        <div
          className={`transition-all duration-800 delay-600 ${
            isVisible ? "reveal active" : "reveal"
          }`}
        >
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-icon group p-4 bg-card border border-border rounded-xl hover:bg-accent hover:border-primary transition-all duration-300 animate-pulse-hover"
                data-testid={`tech-icon-${tech.name.toLowerCase()}`}
              >
                <tech.Icon
                  className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
