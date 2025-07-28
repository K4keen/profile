import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-slate-800 text-white flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
          你好，我是 <span className="text-orange-400">Arthur</span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 mb-12">
          全栈开发工程师 & 技术爱好者
        </p>
        <div className="w-32 h-1 bg-orange-400 mx-auto"></div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '前端开发',
      description: '精通React、TypeScript、Vue等现代前端技术栈'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX设计',
      description: '具备良好的设计审美和用户体验设计能力'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: '项目管理',
      description: '丰富的项目开发和团队协作经验'
    }
  ];

  return (
    <>
      <HeroSection />
      <section id="about" className="min-h-screen bg-white py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
              关于我
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                我是一名充满热情的全栈开发工程师，专注于创建优雅、高效的数字解决方案。
                拥有多年的开发经验，熟练掌握现代Web技术栈，致力于将创意转化为现实。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                我相信技术的力量能够改变世界，通过代码创造价值是我的使命。
                在工作之余，我喜欢探索新技术、参与开源项目，并与技术社区分享知识。
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse"></div>
                <img
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20young%20software%20developer%2C%20clean%20background%2C%20modern%20style%2C%20confident%20expression&image_size=square_hd"
                  alt="个人照片"
                  className="w-full h-full object-cover rounded-full border-4 border-orange-400/30"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 border border-gray-200"
              >
                <div className="text-orange-400 mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-800">{skill.title}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;