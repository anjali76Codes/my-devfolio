import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, CheckCircle } from "lucide-react";

const featuredAchievements = [
  {
    id: "hackathon-wins",
    title: "3x Hackathon Winner",
    description: "Secured 1st place in three national-level hackathons for innovative projects.",
    icon: "🏆",
    category: "Competition",
  },
  {
    id: "research-paper",
    title: "Published Research Paper",
    description: "Published a paper in IEEE on sustainable software solutions.",
    icon: "📄",
    category: "Research",
  },
  {
    id: "copyright",
    title: "Registered Copyright",
    description: "Official copyright registered for an innovative software project.",
    icon: "©️",
    category: "Intellectual Property",
  },
  {
    id: "patent",
    title: "Granted Patent",
    description: "Patent granted for a novel AI-powered system.",
    icon: "🛡️",
    category: "Patent",
  },
];

const achievements = [
  {
    id: 1,
    title: "Code-o-fiesta",
    description: "Secured 1st place in a college hackathon for the AgriCircle project.",
    icon: "🥇",
    year: "2024",
    category: "Competition",
  },
  {
    id: 2,
    title: "Coderverse 2.0",
    description: "Won 1st prize in the Coderverse 2.0 hackathon for an innovative project.",
    icon: "🥇",
    year: "2024",
    category: "Hackathon",
  },
  {
    id: 3,
    title: "Academic Excellence",
    description: "Maintained a strong academic performance with a CGPA of 9.24.",
    icon: "🎓",
    year: "2024",
    category: "Academics",
  },
  {
    id: 4,
    title: "VNPS'25",
    description: "Won 1st prize at the National Level Project Showcase event.",
    icon: "🏅",
    year: "2025",
    category: "Competition",
  },
  {
    id: 5,
    title: "Codeshashtra XI",
    description: "Selected among the top 11 teams out of 60 at DJSCI as a hackathon finalist.",
    icon: "💡",
    year: "2025",
    category: "Hackathon",
  },
  {
    id: 6,
    title: "Hackscript 6.0",
    description: "Ranked in the top 5 teams out of 58 participants at APSIT hackathon.",
    icon: "🧠",
    year: "2025",
    category: "Hackathon",
  },
];

const certificates = [
  {
    id: "web-dev",
    title: "Web Developer",
    issuer: "Prodigy Infotech",
    icon: "🌐",
    year: "2023",
    verified: true,
  },
  {
    id: "kotlin-app",
    title: "Android Application Development with Kotlin",
    issuer: "Student Development Program",
    icon: "📱",
    year: "2023",
    verified: true,
  },
  {
    id: "oscillations",
    title: "OSCILLATIONS'24",
    issuer: "VCET",
    icon: "⚙️",
    year: "2024",
    verified: true,
  },
  {
    id: "vnps24",
    title: "VNPS'24",
    issuer: "VCET",
    icon: "📘",
    year: "2024",
    verified: true,
  },
  {
    id: "quasar",
    title: "Quasar 3.0 Hackathon",
    issuer: "Vasantdada Patil Pratishthan's College of Engineering and Visual Arts, Mumbai",
    icon: "💻",
    year: "2024",
    verified: true,
  },
  {
    id: "ds-algo",
    title: "Data Structures & Algorithms",
    issuer: "Course Completion Certificate",
    icon: "🧩",
    year: "2025",
    verified: true,
  },
  {
    id: "java",
    title: "Java Programming",
    issuer: "Course Completion Certificate",
    icon: "☕",
    year: "2024",
    verified: true,
  },
];

interface AchievementsProps {
  onCertificateClick?: (certId: string) => void;
}

export default function Achievements({ onCertificateClick }: AchievementsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "reveal active" : "reveal"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and certifications showcasing continuous learning and excellence
          </p>
        </div>

        {/* Featured Achievements */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center flex justify-center items-center gap-2">
            <Award className="w-6 h-6 text-primary" /> Featured Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAchievements.map((feat, index) => (
              <Card
                key={feat.id}
                className={`card-hover rounded-xl p-6 text-center bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-300 dark:border-yellow-700 transition-transform duration-500 transform hover:scale-110 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{feat.title}</h4>
                <p className="text-sm text-muted-foreground">{feat.description}</p>
                <span className="text-xs font-semibold mt-2 inline-block bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200 px-3 py-1 rounded-full">
                  {feat.category}
                </span>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div
            className={`space-y-6 transition-all duration-800 delay-200 ${
              isVisible ? "reveal active" : "reveal"
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Trophy className="w-6 h-6 text-primary mr-3" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach) => (
                <Card
                  key={ach.id}
                  className="card-hover bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 border border-gray-200 dark:border-gray-700 animate-slide-in-left"
                  style={{ animationDelay: `${ach.id * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl">
                        {ach.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{ach.title}</h4>
                          <span className="text-sm px-3 py-1 rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-200">
                            {ach.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{ach.description}</p>
                        <Badge className="text-xs">{ach.category}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div
            className={`space-y-6 transition-all duration-800 delay-400 ${
              isVisible ? "reveal active" : "reveal"
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="w-6 h-6 text-primary mr-3" />
              Certificates
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <Card
                  key={cert.id}
                  className={`card-hover cursor-pointer transition-transform duration-500 transform hover:scale-105 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => onCertificateClick?.(cert.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                        <span className="text-xs text-muted-foreground">Year: {cert.year}</span>
                        {cert.verified && (
                          <Badge
                            variant="secondary"
                            className="inline-flex items-center text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-2"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" /> Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
