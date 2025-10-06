import TimelineItem from '../TimelineItem'

export default function TimelineItemExample() {
  return (
    <div className="p-8 bg-background max-w-2xl">
      <TimelineItem
        year="2025"
        title="Published Research"
        description="AI-Based Data Augmentation for Small, Imbalanced Datasets — Curieux Academic Journal"
      />
    </div>
  )
}
