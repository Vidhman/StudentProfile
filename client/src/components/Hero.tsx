import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Engineering_workspace_hero_image_e790e021.png";
// 👇 Import your resume file
import resumeFile from "@assets/generated_images/resume.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 18, 32, 0.7), rgba(11, 18, 32, 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <h1
          className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight"
          data-testid="text-hero-headline"
        >
          Engineering Empathy through Innovation
        </h1>

        <p
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          data-testid="text-hero-subheadline"
        >
          I'm Vidhman Agarwal, a high-school engineer. From a Multi-Lingual Bharati Braille Translator to SoulSound, a quick-communication device co-tested with the Sarthak community, I build tools that make access tangible.

        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* View Projects */}
          <Link href="/projects">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground border border-primary-border"
              data-testid="button-hero-projects"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          {/* Download Résumé */}
          <a
            href={resumeFile}
            download="Vidhman_Agarwal_Resume.pdf"
          >
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-background/20 backdrop-blur border-white/30 text-white hover:bg-background/30"
              data-testid="button-hero-resume"
            >
              <Download className="h-4 w-4" /> Download Résumé
            </Button>
          </a>

          {/* Contact */}
          <Link href="/contact">
            <Button
              size="lg"
              variant="ghost"
              className="gap-2 text-white hover:bg-white/10"
              data-testid="button-hero-contact"
            >
              <Mail className="h-4 w-4" /> Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
