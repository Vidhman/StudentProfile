import { BookOpen, Presentation, Users, Award } from "lucide-react";
import Hero from "@/components/Hero";
import HighlightBadge from "@/components/HighlightBadge";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import soulSoundImage from "@assets/generated_images/SoulSound_app_interface_screenshot_08654efe.jpg";
import brailleImage from "@assets/generated_images/Braille_translator_code_screenshot_92dfecb0.png";
import wasteRobotImage from "@assets/generated_images/Waste_robot_concept_diagram_f4296e47.png";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12" data-testid="text-highlights-heading">
            Key Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HighlightBadge
              icon={BookOpen}
              title="Published Researcher"
              description="Curieux Academic Journal, 2025"
            />
            <HighlightBadge
              icon={Users}
              title="Student Leader"
              description="Vice Head of Service, Pathways School Gurgaon, 2022-23"
            />
            <HighlightBadge
              icon={Award}
              title="Junior Black Belt"
              description="9+ years training, participated in sub-junior tournaments."
            />
            <HighlightBadge
              icon={Award}
              title="First Speaker - Team Debater"
              description="Participated in Inter-School & National Debate Competitions. Attended WSDA 2024."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4" data-testid="text-pillars-heading">
            What I Care About
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Three pillars that guide my engineering work
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-2" data-testid="text-pillar-1">
                Accessibility by Design
              </h3>
              <p className="text-sm text-muted-foreground">
                Building tools that work for everyone from the ground up
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-2" data-testid="text-pillar-2">
                Responsible Engineering
              </h3>
              <p className="text-sm text-muted-foreground">
                Energy-aware, sustainable approaches to technology
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-2" data-testid="text-pillar-3">
                Learning in Public
              </h3>
              <p className="text-sm text-muted-foreground">
                Open documentation, demos, and community outreach
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4" data-testid="text-featured-heading">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A selection of my recent work in assistive technology and electrical & computational engineering
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ProjectCard
              title="SoulSound"
              pitch="Quick, context-aware phrase selection for speech/hearing-impaired users."
              summary="SoulSound is an assistive communication device enabling speech- and hearing-impaired individuals to convey essential messages quickly in public spaces. It integrates pre-programmed phrases, tactile feedback, and customizable voice outputs. Developed in collaboration with Sarthak NGO, it emphasizes accessibility, empathy, and inclusive design through affordable hardware and intuitive real-world usability."
              skills={['UI/UX', 'Embedded Logic', 'Accessibility', 'User Testing', 'Electrical & Computational Engineering Fundamentals', 'Arduino']}
              image={soulSoundImage}
              links={{ demo: '#', github: '#', docs: '#' }}
            />

            <ProjectCard
              title="Bharati Braille Translator"
              pitch="Converts English, Hindi, Gujarati, Tamil, Malayalam, Telugu, and Bengali text to Bharati Braille."
              summary="A multilingual Bharati Braille translator that converts digital text from English, Hindi, Gujarati, Tamil, Malayalam, Telugu, and Bengali into precise Braille output. Built using a dictionary-based mapping system, it bridges regional languages through accessibility. The project aims to expand literacy by integrating translation software with affordable Braille printing hardware backed by AI correction."
              skills={['Python', 'Text Processing', 'Data Validation', 'i18n']}
              image={brailleImage}
              links={{ github: '#', docs: '#', demo: '#' }}
            />

            <ProjectCard
              title="Autonomous Waste Recycling Robot"
              pitch="Survey of sensing, grasping, and sorting approaches for urban recycling for a Mobile Autonomous Waste Segregating Robot."
              summary="A review paper on a mobile, AI-driven robot that autonomously detects, sorts, and recycles waste using sensors, cameras, and a robotic arm. Presented at the SRS Bulgaria Conference, it combines mechanical design with deep-learning-based object classification to enhance urban sustainability. The system demonstrates robotics’ potential in automating circular waste management efficiently."
              skills={['Literature Review', 'System Design', 'Electrical & Computational Engineering Fundamentals']}
              image={wasteRobotImage}
              links={{ docs: '#' }}
            />
            
          </div>
          
          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" data-testid="button-view-all-projects">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
