import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  pitch: string;
  summary: string;
  skills: string[];
  image: string;
  links?: {
    demo?: string;
    github?: string;
    docs?: string;
  };
}

export default function ProjectCard({ title, pitch, summary, skills, image, links }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 h-full flex flex-col" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover"
          data-testid="img-project"
        />
      </div>
      
      <CardHeader>
        <h3 className="text-2xl font-heading font-semibold mb-2" data-testid="text-project-title">{title}</h3>
        <p className="text-sm text-primary font-medium" data-testid="text-project-pitch">{pitch}</p>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid="text-project-summary">{summary}</p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs" data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      {/*
      {links && (
        <CardFooter className="flex gap-2 flex-wrap">
          {links.demo && (
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              data-testid="button-project-demo"
            >
              <ExternalLink className="h-3 w-3" /> Demo
            </Button>
          )}

          {links.github && (
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              data-testid="button-project-github"
            >
              <Github className="h-3 w-3" /> GitHub
            </Button>
          )}

          {links.docs && (
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              data-testid="button-project-docs"
            >
              <ExternalLink className="h-3 w-3" /> Docs
            </Button>
          )}
        </CardFooter>
      )}
      */}

    </Card>
  );
}
