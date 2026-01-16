import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Section, ProjectModal } from '../components';
import { PROJECTS } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects">
      {/* your JSX stays the same */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
};

export default Projects;