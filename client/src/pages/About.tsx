export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center" data-testid="text-about-heading">
          About Me
        </h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4" data-testid="text-section-why">
              My Why
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ant colonies taught me the beauty of routine and robust systems. I apply that lens to engineering: 
              quiet, reliable tools that make daily life simpler for those who are excluded by default settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4" data-testid="text-section-today">
              Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              IB Diploma (Math AA HL, Physics HL, Economics HL, Chemistry SL, Hindi B SL, English A SL). Building assistive interfaces and sustainable systems — 
              from SoulSound to a multi-language Braille translator — and documenting results with real users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4" data-testid="text-section-tomorrow">
              Tomorrow
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At university, I hope to explore embedded systems, low-power ML, and human-computer interaction for accessibility. 
              I want my work in the lab to travel to clinics, classrooms, and crowded public spaces.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
