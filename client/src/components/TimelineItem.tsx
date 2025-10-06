interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="flex gap-6 group" data-testid={`timeline-item-${year}`}>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0" data-testid="text-timeline-year">
          {year}
        </div>
        <div className="w-0.5 h-full bg-border mt-2 group-last:hidden" />
      </div>
      
      <div className="pb-12 flex-1">
        <h3 className="text-xl font-heading font-semibold mb-2" data-testid="text-timeline-title">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-timeline-description">{description}</p>
      </div>
    </div>
  );
}
