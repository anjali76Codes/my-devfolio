import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Trophy,
  Star,
  Code,
  Github,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { SiAmazon, SiGoogle, SiReact } from "react-icons/si";

const certifications = [
  {
    id: "aws-cert",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    level: "Associate Level",
    issued: "March 2024",
    expires: "March 2027",
    credentialId: "AWS-12345",
    icon: SiAmazon,
    gradient: "from-orange-500 to-red-600",
    verified: true,
    link: "https://aws.amazon.com",
  },
  {
    id: "gcp-cert",
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud Platform",
    level: "Professional Level",
    issued: "January 2024",
    expires: "January 2026",
    credentialId: "GCP-67890",
    icon: SiGoogle,
    gradient: "from-blue-500 to-purple-600",
    verified: true,
    link: "https://cloud.google.com",
  },
  {
    id: "react-cert",
    title: "Meta React Developer Certificate",
    issuer: "Meta (Facebook)",
    level: "Professional Certificate",
    issued: "December 2023",
    expires: "No expiration",
    credentialId: "META-11111",
    icon: SiReact,
    gradient: "from-blue-600 to-cyan-500",
    verified: true,
    link: "https://coursera.org",
  },
];

const awards = [
  {
    id: 1,
    title: "Best Innovation Award",
    organization: "TechCorp Inc.",
    event: "Annual Innovation Challenge 2024",
    description:
      "Recognized for developing an AI-powered customer service automation system that reduced response time by 60%",
    icon: Award,
    gradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-700",
    iconGradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    title: "Employee of the Year",
    organization: "StartupXYZ",
    event: "2022",
    description:
      "Awarded for outstanding performance, leadership in critical projects, and mentoring junior developers",
    icon: Star,
    gradient: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    iconGradient: "from-blue-500 to-purple-500",
  },
  {
    id: 3,
    title: "Hackathon Winner",
    organization: "Silicon Valley Code Challenge",
    event: "2023",
    description:
      "First place winner for developing a sustainability tracking app in 48 hours",
    icon: Trophy,
    gradient: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    borderColor: "border-green-200 dark:border-green-700",
    iconGradient: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    organization: "Active GitHub Contributor",
    event: "2020-Present",
    description:
      "500+ contributions to various open-source projects including React, Node.js ecosystem",
    icon: Github,
    gradient: "from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20",
    borderColor: "border-gray-200 dark:border-gray-700",
    iconGradient: "from-gray-600 to-slate-600",
    stats: ["🌟 1.2K+ Stars", "🍴 200+ Forks", "📦 15+ Repositories"],
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
      id="achievements"
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background relative overflow-hidden"
    >
      {/* Moving circles */}
      <div className="section-circle circle-2"></div>
      <div className="section-circle circle-1"></div>
      <div className="section-circle circle-3"></div>
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
            Achievements & Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognitions and certifications that showcase my commitment to
            continuous learning and professional excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div
            className={`space-y-6 transition-all duration-800 delay-200 ${
              isVisible ? "reveal active" : "reveal"
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="w-6 h-6 text-primary mr-3" />
              Professional Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="card-hover cursor-pointer"
                  onClick={() => onCertificateClick?.(cert.id)}
                  data-testid={`certificate-card-${cert.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-lg flex items-center justify-center`}
                      >
                        <cert.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {cert.issuer} • {cert.level}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Issued: {cert.issued} • Valid until: {cert.expires}
                        </p>
                        <div className="flex items-center mt-2">
                          <Badge
                            variant="secondary"
                            className="inline-flex items-center text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div
            className={`space-y-6 transition-all duration-800 delay-400 ${
              isVisible ? "reveal active" : "reveal"
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Trophy className="w-6 h-6 text-primary mr-3" />
              Awards & Recognition
            </h3>

            <div className="space-y-4">
              {awards.map((award) => (
                <Card
                  key={award.id}
                  className={`card-hover bg-gradient-to-br ${award.gradient} border ${award.borderColor}`}
                  data-testid={`award-card-${award.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${award.iconGradient} rounded-lg flex items-center justify-center`}
                      >
                        <award.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {award.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {award.organization} • {award.event}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {award.description}
                        </p>
                        {award.stats && (
                          <div className="flex space-x-4 text-xs text-muted-foreground mt-2">
                            {award.stats.map((stat, index) => (
                              <span key={index}>{stat}</span>
                            ))}
                          </div>
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
