import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Trophy, Mic } from "lucide-react";

export default function Awards() {
  const awards = [
    
    {
      icon: Award,
      year: "2025",
      title: "CREST Gold Award",
      description: "Awarded CREST Gold for project SoulSound",
    },
    {
      icon: BookOpen,
      year: "2025",
      title: "Published Research Author",
      description: "Curieux Academic Journal",
    },
    {
      icon: Award,
      year: "2024",
      title: "Conference Presenter",
      description: "SRS Bulgaria - Electrical & Computational Engineering in waste sorting",
    },

    {
      icon: Award,
      year: "2024",
      title: "Conference Presenter",
      description: "YTS Plaksha - Electrical & Computational Engineering in an Integrated Health Solution",
    },
    
    {
      icon: Trophy,
      year: "2024",
      title: "IB DP 1: 40/42",
      description: "7s in HL Math AA, Physics, Economics",
    },

    {
      icon: Trophy,
      year: "2023",
      title: "IB MYP 5 Boards: 54/56",
      description: "Awarded Honour Roll for being one of the top scorers",
    },

    {
      icon: Trophy,
      year: "2022",
      title: "IB MYP 4: 54/56",
      description: "7s in Extended Math, Physics, Chemistry",
    },

    {
      icon: Trophy,
      year: "2022-2023",
      title: "IEO Gold Medalist",
      description: "2x Gold Medal of Excellence in Grades 9 & 10, School Rank 1 in 2023",
    },
    
    {
      icon: Mic,
      year: "2020-2023",
      title: "Competitive Team Debater - First Speaker",
      description: "WSDA Slovenia; Behes National Debate Competitions; School Competitions; Adjudication at School Events",
    },

    {
      icon: Trophy,
      year: "2015-2023",
      title: "Junior Black Belt",
      description: "9+ years of training; medals in sub-junior tournaments",
    },
    
    
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center" data-testid="text-awards-heading">
          Awards & Milestones
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Academic, research, service, and sports recognitions
        </p>
        
        <div className="grid gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-award-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-heading font-semibold" data-testid="text-award-title">
                          {award.title}
                        </h3>
                        <span className="text-sm font-semibold text-muted-foreground" data-testid="text-award-year">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground" data-testid="text-award-description">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
