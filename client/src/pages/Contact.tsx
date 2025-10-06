import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
          data-testid="text-contact-heading"
        >
          Let's Build Something Accessible
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          I'm happy to share code, schematics, or run a quick demo
        </p>

        <div>
          <h2
            className="text-xl font-heading font-semibold mb-6"
            data-testid="text-direct-links"
          >
            Direct Links
          </h2>

          {/* Centered contact links */}
          <div className="flex flex-col items-center space-y-6">
            {/* Email */}
            <a
              href="mailto:vidhman@example.com"
              className="flex flex-col items-center text-center gap-2 p-4 rounded-lg hover:bg-muted transition-all w-full max-w-xs"
              data-testid="link-contact-email"
            >
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">vidhman.agarwal106@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/vidhman"
              className="flex flex-col items-center text-center gap-2 p-4 rounded-lg hover:bg-muted transition-all w-full max-w-xs"
              data-testid="link-contact-linkedin"
            >
              <Linkedin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">
                  linkedin.com/in/vidhman-agarwal
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
