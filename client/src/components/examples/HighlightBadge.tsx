import HighlightBadge from '../HighlightBadge'
import { Award } from 'lucide-react'

export default function HighlightBadgeExample() {
  return (
    <div className="p-8 bg-background">
      <HighlightBadge 
        icon={Award}
        title="Published Researcher"
        description="Curieux Academic Journal, 2025"
      />
    </div>
  )
}
