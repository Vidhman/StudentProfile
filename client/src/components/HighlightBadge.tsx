import { LucideIcon } from "lucide-react";

interface HighlightBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function HighlightBadge({ icon: Icon, title, description }: HighlightBadgeProps) {
  return (
    <div className="bg-accent rounded-lg p-6 hover-elevate active-elevate-2" data-testid={`badge-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <Icon className="h-8 w-8 text-primary mb-3" />
      <h3 className="font-heading font-semibold text-lg mb-1" data-testid="text-badge-title">{title}</h3>
      <p className="text-sm text-muted-foreground" data-testid="text-badge-description">{description}</p>
    </div>
  );
}
