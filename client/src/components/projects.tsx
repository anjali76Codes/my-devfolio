import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink, Calendar, Star, Code } from "lucide-react";

const filterOptions = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "AI/ML", label: "AI/ML" },
  { id: "fullstack", label: "Full Stack" },
];

const projects = [
  {
    id: 1,
    title: "LegalMitra",
    description:
      "Multilingual AI legal assistant with RAG-based PDF insights, legal news, and lawyer directory.",
    image: "/images/prj/legal.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Gemini API", "RAG", "Pinecone"],
    category: ["web", "fullstack"],
    year: "2024",
    github: "https://github.com/anjali76Codes/legal-mitra",
    demo: "https://drive.google.com/file/d/1pflmcgrIwELEMpyJXOtDDviWjJvRM0ck/view?usp=sharing",
    features: [
      "Supports 6+ Indian languages",
      "RAG-based contextual PDF insights",
      "Real-time legal news updates",
      "Lawyer directory integration"
    ]
  },
  {
    id: 2,
    title: "AgriCircle",
    description:
      "Farmer platform with equipment rentals, marketplace, AI crop insights, and multi-language support.",
    image: "/images/prj/agrii.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Gemini ", "React i18n", "Cloudinary"],
    category: ["web", "fullstack"],
    year: "2024",
    github: "https://github.com/anjali76Codes/Agriculture_Management_System",
    demo: "https://drive.google.com/file/d/1YMqV5eqyHRIix46zU-EV--unzglEBPKc/view?usp=sharing",
    features: [
      "Equipment rental & marketplace",
      "AI-powered crop insights",
      "Multi-language dashboard",
      "Razorpay payment integration"
    ]
  },
  {
    id: 3,
    title: "Scorezy",
    description:
      "Proctored exam tool with scheduling, student forms, live monitoring, and result analytics.",
    image: "/images/prj/scrozy.png",
    technologies: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS", "JWT", "Socket.io", "WebRTC", "Redux Toolkit"],
    category: ["web", "fullstack"],
    year: "2024",
    github: "https://github.com/anjali76Codes/PEAMT",
    demo: "https://drive.google.com/file/d/1VhxZcEWahYNWSJc0Qb1GWGLiRAro37Ub/view?usp=sharing",
    features: [
      "Live proctoring via WebRTC",
      "Exam scheduling & form submission",
      "Secure admin dashboard",
      "Result analytics & reporting"
    ]
  },
  {
    id: 4,
    title: "DocuLens",
    description:
      "Document verification system using OCR & Face API with admin dashboard for mismatches.",
    image: "/images/prj/doculens.png",
    technologies: ["Python", "React", "Node.js", "OCR", "Face API"],
    category: [ "fullstack" , "AI/ML"],
    year: "2023",
    github: "https://github.com/anjali76Codes/DocuLens---Automatic_Document_Verification",
    demo: "https://drive.google.com/file/d/1X_03PZA65dtr7OYk2F4tlQLtNok8e37W/view?usp=sharing",
    features: [
      "Aadhar-based verification using OCR & Face API",
      "Admin dashboard for mismatches",
      "Automated key text extraction"
    ]
  },
  {
    id: 5,
    title: "SealSure",
    description:
      "Real-time AI document validation detecting forgeries and cross-verifying data.",
    image: "/images/prj/sealsure.png",
    technologies: ["React", "Node.js", "Tailwind CSS", "OCR", "API Integration"],
    category: [ "AI/ML","fullstack"],
    year: "2023",
    github: "https://github.com/anjali76Codes/Intelligent_Document_Processing",
    demo: "https://drive.google.com/file/d/1CB4x2WQ-WL7_lCMlgNymSYf5N8TSLb7P/view?usp=drive_link",
    features: [
      "Real-time document validation",
      "Forgery detection",
      "OCR-based extraction",
      "Cross-verification with external sources"
    ]
  },
  {
    id: 6,
    title: "Sceneseer",
    description:
      "AI video analyzer performing scene understanding and generating summaries.",
    image: "/images/prj/video.png",
    technologies: ["Phi Agent", "Google Generative AI", "Streamlit", "DuckDuckGo API"],
    category: ["AI/ML"],
    year: "2024",
    github: "https://github.com/anjali76Codes/Agent-Project-Smart-Video-Analyzer",
    demo: "#",
    features: [
      "Contextual scene understanding",
      "Real-time video analysis",
      "Generates summarized insights"
    ]
  },
 {
  id: 7,
  title: "ToolSuite",
  description:
    "A unified, intuitive web platform offering a suite of productivity tools for developers, designers, students, and everyday users. Features include online terminals, data converters, graphic generators, and more.",
  image: "/images/prj/toolsuite.png", // Update with actual image path
  technologies: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Python",
    "SQLite3"
  ],
  category: ["web", "Full Stack"],
  year: "2024",
  github: "https://github.com/anjali76Codes/ToolSuite",
  demo: "https://drive.google.com/file/d/179IpqkGFL1-3VnhEyQBRuCkGNVCzX1jY/view?usp=sharing",
  features: [
    "Secure user authentication and subscription system",
    "Online Linux terminal for basic command execution",
    "SQL query simulator with mock data generation",
    "User dashboard with saved tools and preferences",
    "Daily/weekly productivity challenges (typing tests, coding puzzles)",
    "QR & barcode generator",
    "Color palette tools (including pick from image)",
    "Image format converter with batch processing",
    "Universal format converter (JSON, CSV, YAML, XML)",
    "Data formatter and validator for multiple data types",
    "API testing tool with dummy API documentation",
    "Developer community for sharing and upvoting tools"
  ],
  futureFeatures: [
    "Cloud storage integration for file management",
    "Team collaboration with shared workspaces",
    "Automatic API documentation generation from code"
  ]
}
,
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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setFilteredProjects(
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category.includes(activeFilter))
    );
  }, [activeFilter]);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-primary/10 text-primary",
      "Node.js": "bg-green-500/10 text-green-600",
      MongoDB: "bg-blue-500/10 text-blue-600",
      Tailwind: "bg-blue-500/10 text-blue-600",
      Redux: "bg-red-500/10 text-red-600",
      "Framer Motion": "bg-green-500/10 text-green-600",
      Python: "bg-primary/10 text-primary",
      "Next.js": "bg-primary/10 text-primary",
      "Socket.io": "bg-green-500/10 text-green-600",
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? "reveal active" : "reveal"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work in web development with innovative solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center mb-12 transition-all duration-800 delay-200 ${isVisible ? "reveal active" : "reveal"}`}>
          <div className="bg-card rounded-lg p-1 border border-border">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                variant={activeFilter === option.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(option.id)}
                className="text-sm font-medium transition-all duration-200"
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
              className={`card-hover overflow-hidden transition-all duration-800 delay-${(index + 1) * 100} ${isVisible ? "reveal active" : "reveal"} flex flex-col h-full`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <CardContent className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                  <Button size="sm" onClick={() => openProjectModal(project)} className="hover:bg-primary/90 transition-colors duration-200">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/anjali76Codes"
            target="_blank"
            className="bg-primary text-white hover:bg-primary/80 px-6 py-2 rounded-full transition-colors duration-200 inline-block"
          >
            View All Projects on GitHub
          </a>
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg" />

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card><CardContent className="p-4 text-center"><Calendar className="w-6 h-6 text-primary mx-auto mb-2" /><h4 className="font-medium text-foreground">Release</h4><p className="text-sm text-muted-foreground">{selectedProject.year}</p></CardContent></Card>
                    <Card><CardContent className="p-4 text-center"><Code className="w-6 h-6 text-primary mx-auto mb-2" /><h4 className="font-medium text-foreground">Technologies</h4><p className="text-sm text-muted-foreground">{selectedProject.technologies.length} Tech Stack</p></CardContent></Card>
                    <Card><CardContent className="p-4 text-center"><Star className="w-6 h-6 text-primary mx-auto mb-2" /><h4 className="font-medium text-foreground">Category</h4><p className="text-sm text-muted-foreground capitalize">{selectedProject.category.join(", ")}</p></CardContent></Card>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Project Description</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className={`text-xs ${getTechColor(tech)}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button asChild className="flex-1">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" /><span>Live Demo</span>
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2">
                        <Github className="w-4 h-4" /><span>View Code</span>
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
