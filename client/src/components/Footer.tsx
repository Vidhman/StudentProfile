import { Link } from "wouter";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
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
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="font-heading font-bold text-xl mb-4"
              data-testid="text-footer-name"
            >
              Vidhman Agarwal
            </h3>
            <p className="text-sm text-muted-foreground">
              Student engineer building accessible tech and sustainable electrical & computational engineering.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a
                      className="text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:vidhman.agarwal106@gmail.com"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vidhman-agarwal-814b92310/"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-copyright"
          >
            © {currentYear} Vidhman Agarwal — Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
