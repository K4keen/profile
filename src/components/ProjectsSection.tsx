import React, { useState } from 'react';
import ProjectCard from './ui/ProjectCard';

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
            <ProjectCard
              key={project.id}
              {...project}
              isExpanded={expandedProject === project.id}
              onToggle={toggleProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;