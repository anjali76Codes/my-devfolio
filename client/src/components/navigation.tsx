import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";
import { useScrollSpy } from "../hooks/use-scroll-spy";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sun, Moon, Menu } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(navLinks.map(link => link.id));
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold gradient-text"
              data-testid="logo-link"
            >
              AJ
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? "text-foreground nav-active"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="p-2 bg-muted hover:bg-accent"
              data-testid="theme-toggle"
            >
              {theme === "light" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="p-2 bg-muted hover:bg-accent"
                    data-testid="mobile-menu-button"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={`text-left px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          activeSection === link.id
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                        data-testid={`mobile-nav-link-${link.id}`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
