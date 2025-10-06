import { Quote } from "lucide-react";

interface TestimonialQuoteProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialQuote({ quote, author, role }: TestimonialQuoteProps) {
  return (
    <div className="relative bg-card border-l-4 border-primary rounded-lg p-8" data-testid="card-testimonial">
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <blockquote className="text-lg italic text-foreground mb-4 leading-relaxed" data-testid="text-testimonial-quote">
        "{quote}"
      </blockquote>
      <div className="text-sm">
        <p className="font-semibold text-foreground" data-testid="text-testimonial-author">— {author}</p>
        <p className="text-muted-foreground" data-testid="text-testimonial-role">{role}</p>
      </div>
    </div>
  );
}
