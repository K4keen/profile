import React from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import YouTubePlayer from './YouTubePlayer';
import TechTag from './TechTag';
import Button from './Button';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  videoId: string;
  demoUrl?: string;
  githubUrl?: string;
  isExpanded: boolean;
  onToggle: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  fullDescription,
  technologies,
  videoId,
  demoUrl,
  githubUrl,
  isExpanded,
  onToggle
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-primary-medium/20 hover:shadow-lg transition-all duration-300">
      <div className="md:flex">
        <div className="md:w-1/2 p-8">
          <YouTubePlayer
            videoId={videoId}
            title={`${title} Demo Video`}
            className="mb-4"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-primary-dark">
              {title}
            </h3>
            <button
              onClick={() => onToggle(id)}
              className="text-primary-blue hover:text-primary-dark transition-colors duration-200"
            >
              {isExpanded ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </button>
          </div>
          
          <p className="text-primary-blue mb-4">
            {description}
          </p>

          {isExpanded && (
            <div className="mb-4 p-4 bg-primary-light/20 rounded-lg">
              <p className="text-primary-blue leading-relaxed">
                {fullDescription}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <TechTag key={tech} text={tech} />
            ))}
          </div>

          <div className="flex gap-4">
            {demoUrl && (
              <Button
                href={demoUrl}
                variant="primary"
                icon={<ExternalLink size={16} />}
                external
              >
                View Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                href={githubUrl}
                variant="secondary"
                icon={<Github size={16} />}
                external
              >
                Source Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;