import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookOpen, Presentation, Users, FileText } from "lucide-react";

export default function Research() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center" data-testid="text-research-heading">
          Research
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Publications, conference presentations, and ongoing work
        </p>
        
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-semibold" data-testid="text-published-heading">
                Published
              </h2>
            </div>
            
            <Card>
              <CardHeader>
                <h3 className="text-xl font-heading font-semibold" data-testid="text-publication-title">
                  Comparative Analysis of Deep Learning Models for Waste Classification Using Small Imbalanced Datasets
                </h3>
                <p className="text-sm text-primary font-medium">Curieux Academic Journal (2025)</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compared CNNs (e.g., VGG16, ResNet, YOLO variants) and augmentation strategies to stabilize 
                  accuracy on limited data.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Presentation className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-semibold" data-testid="text-conference-heading">
                Conference / Talks
              </h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-heading font-semibold" data-testid="text-conference-title">
                    Electrical & Computational Engineering in Waste Sorting: Scope & Challenges
                  </h3>
                  <p className="text-sm text-primary font-medium">SRS Bulgaria 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Presented a review and a concept proposal; Q&A on sensors, cost, and throughput.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-heading font-semibold" data-testid="text-conference-title">
                    Electrical & Computational Engineering in an Integrated Health Solution: Functionality & Future
                  </h3>
                  <p className="text-sm text-primary font-medium">YTS Plaksha 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Presented the integration of sensors, ML, and user interfaces for a holistic health solution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>


          {/* 
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-semibold" data-testid="text-mentors-heading">
                Mentors & Collaboration
              </h2>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold mb-1" data-testid="text-mentor-1">
                    Dr. CVS Kiran (Skyroot Aerospace)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Feedback on clarity and technical rigor
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold mb-1" data-testid="text-mentor-2">
                    Ivan Dimitrov (Bulgarian Academy of Sciences)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Guidance on review structure
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          */}


          <section>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-semibold" data-testid="text-inprogress-heading">
                In Progress
              </h2>
            </div>
            
            <div className="space-y-6">
              

              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    CREST validation report for Research Paper (model accuracy, processing latency, reviewer satisfaction with methods).
                  </p>
                </CardContent>
              </Card>
            </div>


          </section>
        </div>
      </div>
    </div>
  );
}
