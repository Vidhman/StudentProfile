import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/research", label: "Research" },
    { path: "/leadership", label: "Leadership" },
    { path: "/awards", label: "Awards" },
    { path: "/resume", label: "Résumé" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="hover-elevate active-elevate-2 rounded-md">
            <h2 className="text-xl font-heading font-bold" data-testid="text-logo">Vidhman Agarwal</h2>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`text-sm font-medium transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md ${
                    location === link.path ? "text-primary" : "text-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/projects">
              <Button variant="outline" size="sm" data-testid="button-view-projects">
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" data-testid="button-contact">
                Contact
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`block px-3 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2 ${
                    location === link.path ? "text-primary bg-accent" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/projects">
                <Button variant="outline" className="w-full" data-testid="button-mobile-projects">
                  View Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full" data-testid="button-mobile-contact">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
