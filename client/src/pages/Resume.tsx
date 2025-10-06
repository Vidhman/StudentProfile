import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import TimelineItem from "@/components/TimelineItem";
import resumeFile from "@assets/generated_images/resume.pdf"; // ✅ import your actual resume file

export default function Resume() {
  const handleDownload = () => {
    // Create a hidden link element for download
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Vidhman_Agarwal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Resume download initiated");
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1
          className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center"
          data-testid="text-resume-heading"
        >
          Résumé
        </h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
          Download my two-page résumé for condensed project, research, and leadership details
        </p>

        <div className="text-center mb-16">
          <Button
            size="lg"
            onClick={handleDownload}
            className="gap-2"
            data-testid="button-download-resume"
          >
            <Download className="h-5 w-5" /> Download Résumé (PDF)
          </Button>
        </div>

        <div className="border-t border-border pt-12">
          <h2
            className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-center"
            data-testid="text-timeline-heading"
          >
            Interactive Timeline (2023–2025)
          </h2>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              year="2025"
              title="Published Research"
              description="Comparative Analysis of Deep Learning Models for Waste Classification Using Small Imbalanced Datasets"
            />

            <TimelineItem
              year="2025"
              title="SoulSound & Community Testing"
              description="Developed assistive communication device with iterative testing at Sarthak NGO for speech/hearing-impaired users."
            />

            <TimelineItem
              year="2025"
              title="Bharati Braille Translator"
              description="Built multi-language text-to-Braille pipeline supporting 7 Indian languages."
            />

            <TimelineItem
              year="2024"
              title="Introduction to Research & Conference Presentation"
              description="SRS Bulgaria 2024 presentation on electrical & computational engineering in waste sorting."
            />

            <TimelineItem
              year="2024"
              title="Health Solution Prototype"
              description="Developed integrated health monitoring system with ECG, temperature, and SpO₂ sensors at YTS Plaksha."
            />

            <TimelineItem
              year="2024"
              title="Collaborative Science Project"
              description="Worked in a team of 8 and created a water rocket and launch system for the IB Mandated Collaboraive Science Project."
            />

            <TimelineItem
              year="2023"
              title="Student Leadership & Black Belt"
              description="Became Vice Head of Service at Pathways Student Council. Achieved Junior Black Belt after 9+ years of training."
            />

            <TimelineItem
              year="2023"
              title="Early Projects"
              description="Began journey in accessible engineering with Exoplanet Simulator and initial electrical & computational engineering explorations."
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
