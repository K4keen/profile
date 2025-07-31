import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import YouTubePlayer from './YouTubePlayer';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  videoId: string;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with multiple payment methods and real-time inventory management',
      fullDescription: 'This is a fully functional e-commerce platform designed with microservices architecture. The frontend is built with React and TypeScript, and the backend is based on Node.js and Express framework. It integrates Stripe payment system, Redis cache, MongoDB database and other technologies. It supports complete e-commerce processes including user registration and login, product browsing, shopping cart, order management, and payment processing.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'Stripe'],
      videoId: 'dQw4w9WgXcQ', // Example video ID, can be replaced with actual project demo video
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/example/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Team collaboration task management tool with real-time synchronization and multi-user collaboration',
      fullDescription: 'A task management system designed specifically for team collaboration. It uses real-time communication technology to support simultaneous editing and collaboration by multiple users. It features task assignment, progress tracking, time management, file sharing and other functions. The frontend interface is built with Vue.js, the backend uses Python Flask framework, the database uses PostgreSQL, and WebSocket is integrated for real-time communication.',
      technologies: ['Vue.js', 'Python', 'Flask', 'PostgreSQL', 'WebSocket', 'Docker'],
      videoId: 'dQw4w9WgXcQ', // Example video ID, can be replaced with actual project demo video
      demoUrl: 'https://demo-taskmanager.example.com',
      githubUrl: 'https://github.com/example/taskmanager'
    },
    {
      id: 3,
      title: 'Data Visualization Platform',
      description: 'Enterprise-level data analysis and visualization solution supporting multiple chart types',
      fullDescription: 'An enterprise-level data visualization platform that can process large amounts of data and generate various types of charts and reports. It supports real-time data updates, custom dashboards, data export and other functions. The frontend uses React and D3.js to build interactive charts, the backend uses Node.js and Express, data processing uses Python and Pandas, and supports access to multiple data sources.',
      technologies: ['React', 'D3.js', 'Node.js', 'Python', 'Pandas', 'MySQL'],
      videoId: 'dQw4w9WgXcQ', // Example video ID, can be replaced with actual project demo video
      demoUrl: 'https://demo-dataviz.example.com',
      githubUrl: 'https://github.com/example/dataviz'
    }
  ];

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="min-h-screen bg-primary-light/30 py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-8">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some projects I have participated in developing
          </p>

        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-primary-medium/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <YouTubePlayer
                    videoId={project.videoId}
                    title={`${project.title} Demo Video`}
                    className="mb-4"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-primary-dark">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="text-primary-blue hover:text-primary-dark transition-colors duration-200"
                    >
                      {expandedProject === project.id ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-primary-blue mb-4">
                    {project.description}
                  </p>

                  {expandedProject === project.id && (
                    <div className="mb-4 p-4 bg-primary-light/20 rounded-lg">
                      <p className="text-primary-blue leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-medium/20 text-primary-blue rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        View Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-primary-medium/30 text-primary-blue rounded-lg hover:bg-primary-light/20 transition-colors duration-200"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;