import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink, Calendar, Users, Star, Code } from "lucide-react";

const filterOptions = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "fullstack", label: "Full Stack" },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: ["web", "fullstack"],
    year: "2024",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Cross-platform mobile app built with React Native. Features real-time collaboration, push notifications, and offline synchronization.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "Firebase", "Redux"],
    category: ["mobile"],
    year: "2023",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization dashboard built with D3.js and React. Features real-time data updates and customizable chart configurations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "D3.js", "TypeScript"],
    category: ["web"],
    year: "2023",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "Full-featured social media platform with real-time messaging, post interactions, and user profiles. Built with modern tech stack and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
    category: ["fullstack"],
    year: "2024",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Personal portfolio website with modern design, smooth animations, and responsive layout. Features dark/light mode toggle and project showcases.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: ["web"],
    year: "2024",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "AI Chat Application",
    description:
      "AI-powered chat application with natural language processing. Features include conversation history, multiple AI models, and real-time responses.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "FastAPI", "OpenAI API", "React"],
    category: ["fullstack"],
    year: "2024",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-primary/10 text-primary",
      "Node.js": "bg-green-500/10 text-green-600",
      MongoDB: "bg-blue-500/10 text-blue-600",
      Stripe: "bg-purple-500/10 text-purple-600",
      "React Native": "bg-primary/10 text-primary",
      Firebase: "bg-yellow-500/10 text-yellow-600",
      Redux: "bg-red-500/10 text-red-600",
      "D3.js": "bg-orange-500/10 text-orange-600",
      TypeScript: "bg-blue-500/10 text-blue-600",
      "Next.js": "bg-primary/10 text-primary",
      "Socket.io": "bg-green-500/10 text-green-600",
      PostgreSQL: "bg-blue-500/10 text-blue-600",
      Prisma: "bg-purple-500/10 text-purple-600",
      "Tailwind CSS": "bg-blue-500/10 text-blue-600",
      "Framer Motion": "bg-green-500/10 text-green-600",
      Python: "bg-primary/10 text-primary",
      FastAPI: "bg-green-500/10 text-green-600",
      "OpenAI API": "bg-purple-500/10 text-purple-600",
    };
    return colors[tech] || "bg-gray-500/10 text-gray-600";
  };

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-muted/30 dark:bg-muted/10 relative overflow-hidden"
    >
      {/* Moving circles */}
      <div className="section-circle circle-1"></div>
      <div className="section-circle circle-3"></div>
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
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work in web development, featuring innovative
            solutions and cutting-edge technologies
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center mb-12 transition-all duration-800 delay-200 ${
            isVisible ? "reveal active" : "reveal"
          }`}
        >
          <div className="bg-card rounded-lg p-1 border border-border">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                variant={activeFilter === option.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(option.id)}
                className="text-sm font-medium transition-all duration-200"
                data-testid={`filter-${option.id}`}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`card-hover overflow-hidden transition-all duration-800 delay-${
                (index + 1) * 100
              } ${isVisible ? "reveal active" : "reveal"}`}
              data-testid={`project-card-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      data-testid={`github-link-${project.id}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      data-testid={`demo-link-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs ${getTechColor(tech)}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => openProjectModal(project)}
                    className="hover:bg-primary/90 transition-colors duration-200"
                    data-testid={`view-details-${project.id}`}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div
          className={`text-center mt-12 transition-all duration-800 delay-800 ${
            isVisible ? "reveal active" : "reveal"
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-colors duration-200"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
              data-testid="view-all-projects"
            >
              <Github className="w-4 h-4" />
              <span>View All Projects on GitHub</span>
            </a>
          </Button>
        </div>

        {/* Project Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        {selectedProject.year}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                        <h4 className="font-medium text-foreground">Release Date</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.year}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Code className="w-6 h-6 text-primary mx-auto mb-2" />
                        <h4 className="font-medium text-foreground">Technologies</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.technologies.length} Tech Stack</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                        <h4 className="font-medium text-foreground">Category</h4>
                        <p className="text-sm text-muted-foreground capitalize">{selectedProject.category.join(", ")}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Project Description</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`text-sm ${getTechColor(tech)}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Responsive design optimized for all devices</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Modern user interface with smooth animations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">High performance and optimized loading times</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Secure authentication and data protection</span>
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button asChild className="flex-1">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    
                    <Button variant="outline" asChild className="flex-1">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
