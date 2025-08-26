import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Server, Settings, Brain } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiAmazon,
  SiDocker,
  SiGit,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Palette,
    gradient: "from-primary to-purple-600",
    technologies: [
      { Icon: SiReact, color: "text-blue-500", name: "React.js" },
      { Icon: SiNextdotjs, color: "text-black dark:text-white", name: "Next.js Framework" },
      { Icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
      { Icon: SiTailwindcss, color: "text-cyan-500", name: "Tailwind CSS" },
      { Icon: SiJavascript, color: "text-yellow-500", name: "JavaScript ES6+" },
      { Icon: SiHtml5, color: "text-orange-500", name: "HTML5" },
      { Icon: SiCss3, color: "text-blue-500", name: "CSS3" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-green-500 to-blue-600",
    technologies: [
      { Icon: SiNodedotjs, color: "text-green-500", name: "Node.js Runtime" },
      { Icon: SiExpress, color: "text-gray-600 dark:text-gray-300", name: "Express.js" },
      { Icon: SiPython, color: "text-yellow-500", name: "Python 3.x" },
      { Icon: SiPostgresql, color: "text-blue-600", name: "PostgreSQL" },
      { Icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    gradient: "from-orange-500 to-red-600",
    technologies: [
      { Icon: SiAmazon, color: "text-orange-500", name: "Amazon AWS" },
      { Icon: SiDocker, color: "text-blue-600", name: "Docker Containers" },
      { Icon: SiKubernetes, color: "text-blue-500", name: "Kubernetes" },
      { Icon: SiGit, color: "text-red-500", name: "Git Version Control" },
      { Icon: SiJenkins, color: "text-blue-700", name: "Jenkins CI/CD" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    gradient: "from-purple-500 to-pink-600",
    technologies: [
      { Icon: SiTensorflow, color: "text-orange-500", name: "TensorFlow ML" },
      { Icon: SiPytorch, color: "text-red-500", name: "PyTorch" },
      { Icon: SiOpenai, color: "text-green-500", name: "OpenAI GPT" },
      { Icon: SiPython, color: "text-yellow-500", name: "Python ML/AI" },
    ],
  },
];


export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background relative overflow-hidden"
    >
      {/* Moving circles */}
      <div className="section-circle circle-2"></div>
      <div className="section-circle circle-3"></div>
      <div className="section-circle circle-1"></div>
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences
          </p>
        </div>

        {/* Tech Stack Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="tech-icon group p-4 bg-gradient-to-br from-card to-card/80 border-2 border-border rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-pulse-hover relative overflow-hidden min-h-[120px] flex flex-col items-center justify-center"
                      data-testid={`tech-icon-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 rounded-xl"></div>
                      
                      <tech.Icon
                        className={`text-4xl ${tech.color} group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300 mx-auto relative z-10 mb-2`}
                      />
                      <p className="text-sm text-center text-muted-foreground group-hover:text-foreground group-hover:font-medium transition-all duration-300 relative z-10 leading-tight">
                        {tech.name}
                      </p>
                      
                      {/* Animated border on hover */}
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 group-hover:animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
