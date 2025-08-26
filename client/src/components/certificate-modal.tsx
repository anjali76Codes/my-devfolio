import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { SiAmazon, SiGoogle, SiReact } from "react-icons/si";

const certificateData = {
  "aws-cert": {
    title: "AWS Certified Solutions Architect",
    icon: SiAmazon,
    gradient: "from-orange-500 to-red-600",
    issuer: "Amazon Web Services",
    level: "Associate Level",
    issued: "March 2024",
    expires: "March 2027",
    credentialId: "AWS-12345",
    verifyUrl: "https://aws.amazon.com",
  },
  "gcp-cert": {
    title: "Google Cloud Professional Developer",
    icon: SiGoogle,
    gradient: "from-blue-500 to-purple-600",
    issuer: "Google Cloud Platform",
    level: "Professional Level",
    issued: "January 2024",
    expires: "January 2026",
    credentialId: "GCP-67890",
    verifyUrl: "https://cloud.google.com",
  },
  "react-cert": {
    title: "Meta React Developer Certificate",
    icon: SiReact,
    gradient: "from-blue-600 to-cyan-500",
    issuer: "Meta (Facebook)",
    level: "Professional Certificate",
    issued: "December 2023",
    expires: "No expiration",
    credentialId: "META-11111",
    verifyUrl: "https://coursera.org",
  },
};

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateId: string | null;
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificateId,
}: CertificateModalProps) {
  if (!certificateId || !certificateData[certificateId as keyof typeof certificateData]) {
    return null;
  }

  const certificate = certificateData[certificateId as keyof typeof certificateData];
  const IconComponent = certificate.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{certificate.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <div
              className={`w-32 h-32 bg-gradient-to-br ${certificate.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}
            >
              <IconComponent className="w-16 h-16 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">
              {certificate.title}
            </h4>
            <p className="text-muted-foreground">{certificate.level}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-3">
                <h5 className="font-medium text-foreground mb-1">Issued By</h5>
                <p className="text-sm text-muted-foreground">
                  {certificate.issuer}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-3">
                <h5 className="font-medium text-foreground mb-1">Issue Date</h5>
                <p className="text-sm text-muted-foreground">
                  {certificate.issued}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-3">
                <h5 className="font-medium text-foreground mb-1">Valid Until</h5>
                <p className="text-sm text-muted-foreground">
                  {certificate.expires}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-3">
                <h5 className="font-medium text-foreground mb-1">
                  Credential ID
                </h5>
                <p className="text-sm text-muted-foreground">
                  {certificate.credentialId}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild>
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2"
                data-testid="verify-certificate"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verify Certificate</span>
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Global certificate modal component that can be controlled by achievements
export function GlobalCertificateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);

  // Make the open function available globally
  if (typeof window !== "undefined") {
    (window as any).openCertificateModal = (certId: string) => {
      setActiveCertificate(certId);
      setIsOpen(true);
    };
  }

  return (
    <CertificateModal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        setActiveCertificate(null);
      }}
      certificateId={activeCertificate}
    />
  );
}
