import ProjectCard from "@/components/ProjectCard";
import soulSoundImage from "@assets/generated_images/SoulSound_app_interface_screenshot_08654efe.jpg";
import brailleImage from "@assets/generated_images/Braille_translator_code_screenshot_92dfecb0.png";
import wasteRobotImage from "@assets/generated_images/Waste_robot_concept_diagram_f4296e47.png";
import healthImage from "@assets/generated_images/ecg.png";
import exoplanetImage from "@assets/generated_images/planet.png";
import rocketImage from "@assets/generated_images/rocket.png";

export default function Projects() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center" data-testid="text-projects-heading">
          Projects
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Building accessible technology and sustainable electrical & computational engineering systems
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="SoulSound"
            pitch="Quick, context-aware phrase selection for speech/hearing-impaired users."
            summary="SoulSound is an assistive communication device enabling speech- and hearing-impaired individuals to convey essential messages quickly in public spaces. It integrates pre-programmed phrases, tactile feedback, and customizable voice outputs. Developed in collaboration with Sarthak NGO, it emphasizes accessibility, empathy, and inclusive design through affordable hardware and intuitive real-world usability."
            skills={['UI/UX', 'Embedded Logic', 'Accessibility', 'User Testing', 'Electrical & Computational Engineering Fundamentals', 'Arduino']}
            image={soulSoundImage}
            links={{ demo: '#', github: '#', docs: '#' }}
          />
          
          <ProjectCard
            title="Bharati Braille Translator"
            pitch="Converts English, Hindi, Gujarati, Tamil, Malayalam, Telugu, and Bengali text to Bharati Braille."
            summary="A multilingual Bharati Braille translator that converts digital text from English, Hindi, Gujarati, Tamil, Malayalam, Telugu, and Bengali into precise Braille output. Built using a dictionary-based mapping system, it bridges regional languages through accessibility. The project aims to expand literacy by integrating translation software with affordable Braille printing hardware backed by AI correction."
            skills={['Python', 'Text Processing', 'Data Validation', 'i18n']}
            image={brailleImage}
            links={{ github: '#', docs: '#', demo: '#' }}
          />
          
          <ProjectCard
            title="Autonomous Waste Recycling Robot"
            pitch="Survey of sensing, grasping, and sorting approaches for urban recycling for a Mobile Autonomous Waste Segregating Robot."
            summary="A review paper on a mobile, AI-driven robot that autonomously detects, sorts, and recycles waste using sensors, cameras, and a robotic arm. Presented at the SRS Bulgaria Conference, it combines mechanical design with deep-learning-based object classification to enhance urban sustainability. The system demonstrates robotics’ potential in automating circular waste management efficiently."
            skills={['Literature Review', 'System Design', 'Electrical & Computational Engineering Fundamentals']}
            image={wasteRobotImage}
            links={{ docs: '#' }}
          />
          
          <ProjectCard
            title="Integrated Health Solution"
            pitch="Modular vitals package with ECG, temperature, and SpO₂."
            summary="A health device integrating ECG, body temperature, and blood-oxygen sensors for real-time health monitoring. Developed during Plaksha University’s Young Tech Scholars program, it collects multi-parameter physiological data and visualizes it through an Arduino-based dashboard. The solution demonstrates biomedical-engineering innovation through affordability, accessibility, and interdisciplinary problem-solving."
            skills={['Sensors', 'Signal Basics', 'Prototyping', 'Electrical & Computational Engineering Fundamentals', 'Arduino']}
            image={healthImage}
            links={{ docs: '#', github: '#' }}
          />
          
          <ProjectCard
            title="Exoplanet Simulator"
            pitch="Educational visualization of orbital dynamics."
            summary="A Python and Streamlit-based text simulator that predicts the likelihood of life on exoplanets using astrophysical models and basic machine learning. Users input parameters like star mass, temperature, and orbital distance to assess habitability and planet type. It merges coding, data science, and astronomy for accessible space research in classrooms."
            skills={['Python', 'Physics Modeling', 'UI for Learnability','Machine Learning']}
            image={exoplanetImage}
            links={{ demo: '#', github: '#' }}
          />

          <ProjectCard
            title="Collaborative Science Project: Water Rockets"
            pitch="Built a water rocket and its launch system in a team of 8."
            summary="Led an eight-member team in designing and launching a water rocket. Oversaw measurements, fin configuration, and water-to-air ratio optimization to maximize flight distance. Applied physics and aerodynamics principles to improve stability and performance, achieving a record horizontal distance of 38 meters, demonstrating teamwork, analytical precision, and practical problem-solving.

          "
            skills={['Experimental Physics', 'Aerodynamics', 'Projectile Motion Analysis', 'Engineering Design', 'Team Leadership', 'Data Measurement & Optimization']}
            image={rocketImage}
            links={{ docs: '#' }}
          />
          
        </div>
      </div>
    </div>
  );
}
