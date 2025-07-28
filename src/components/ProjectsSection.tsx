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
      title: '电商平台',
      description: '现代化的电商解决方案，支持多种支付方式和实时库存管理',
      fullDescription: '这是一个功能完整的电商平台，采用微服务架构设计。前端使用React和TypeScript构建，后端基于Node.js和Express框架。集成了Stripe支付系统、Redis缓存、MongoDB数据库等技术。支持用户注册登录、商品浏览、购物车、订单管理、支付处理等完整的电商流程。',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'Stripe'],
      videoId: 'dQw4w9WgXcQ', // 示例视频ID，可替换为实际项目演示视频
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/example/ecommerce'
    },
    {
      id: 2,
      title: '任务管理系统',
      description: '团队协作的任务管理工具，支持实时同步和多人协作',
      fullDescription: '一个专为团队协作设计的任务管理系统。采用实时通信技术，支持多人同时编辑和协作。具备任务分配、进度跟踪、时间管理、文件共享等功能。使用Vue.js构建前端界面，后端采用Python Flask框架，数据库使用PostgreSQL，并集成了WebSocket实现实时通信。',
      technologies: ['Vue.js', 'Python', 'Flask', 'PostgreSQL', 'WebSocket', 'Docker'],
      videoId: 'dQw4w9WgXcQ', // 示例视频ID，可替换为实际项目演示视频
      demoUrl: 'https://demo-taskmanager.example.com',
      githubUrl: 'https://github.com/example/taskmanager'
    },
    {
      id: 3,
      title: '数据可视化平台',
      description: '企业级数据分析和可视化解决方案，支持多种图表类型',
      fullDescription: '企业级的数据可视化平台，能够处理大量数据并生成各种类型的图表和报告。支持实时数据更新、自定义仪表板、数据导出等功能。前端使用React和D3.js构建交互式图表，后端采用Node.js和Express，数据处理使用Python和Pandas，支持多种数据源接入。',
      technologies: ['React', 'D3.js', 'Node.js', 'Python', 'Pandas', 'MySQL'],
      videoId: 'dQw4w9WgXcQ', // 示例视频ID，可替换为实际项目演示视频
      demoUrl: 'https://demo-dataviz.example.com',
      githubUrl: 'https://github.com/example/dataviz'
    }
  ];

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="min-h-screen bg-white py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            我的项目
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            以下是我参与开发的一些项目，展示了我在不同技术栈和领域的经验
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-8"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <YouTubePlayer
                    videoId={project.videoId}
                    title={`${project.title} 演示视频`}
                    className="mb-4"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="text-orange-400 hover:text-orange-600 transition-colors duration-200"
                    >
                      {expandedProject === project.id ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {expandedProject === project.id && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
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
                        className="flex items-center gap-2 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        查看演示
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                      >
                        <Github size={16} />
                        源代码
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