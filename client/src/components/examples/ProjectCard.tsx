import ProjectCard from '../ProjectCard'
import soulSoundImage from '@assets/generated_images/SoulSound_app_interface_screenshot_08654efe.png'

export default function ProjectCardExample() {
  return (
    <div className="p-8 bg-background max-w-md">
      <ProjectCard
        title="SoulSound"
        pitch="Quick, context-aware phrase selection for speech/hearing-impaired users."
        summary="I designed an interface that surfaces likely phrases in public settings (transport, clinics, shops), reducing taps to communicate essentials."
        skills={['UI/UX', 'Accessibility', 'User Testing']}
        image={soulSoundImage}
        links={{ demo: '#', docs: '#' }}
      />
    </div>
  )
}
