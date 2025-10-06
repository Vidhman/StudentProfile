import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart } from "lucide-react";

export default function Leadership() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center" data-testid="text-leadership-heading">
          Leadership & Service
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Impact through student governance and community tech projects
        </p>
        
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-semibold" data-testid="text-council-heading">
                Student Leadership
              </h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-heading font-semibold mb-3" data-testid="text-position">
                  Vice Head of Service — Pathways Student Council
                </h3>
                <p className="text-muted-foreground mb-4">
                  Led earthquake-relief bake sales, a climate-action committee, and the "Leisure Time" pilot 
                  that safely opened outdoor spaces during breaks. Coordinated volunteers, logistics, and outreach.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-semibold" data-testid="text-community-heading">
                Community Projects
              </h2>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2" data-testid="text-project-soulsound">SoulSound × Sarthak</h3>
                  <p className="text-sm text-muted-foreground">
                    Iterative testing and feedback loops with community members.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2" data-testid="text-project-braille">Bharati Braille Translator</h3>
                  <p className="text-sm text-muted-foreground">
                    Advocacy for multilingual literacy and tactile accessibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-accent rounded-lg p-8">
            <h2 className="text-xl font-heading font-semibold mb-4" data-testid="text-reflection-heading">
              Reflection
            </h2>
            <p className="text-muted-foreground italic">
              Leadership means shipping helpful systems and staying reachable for feedback. 
              Service is part of the engineering spec — not an afterthought.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
