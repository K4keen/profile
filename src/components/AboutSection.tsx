import React, { useState, useEffect } from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

// Hero Section Component
const HeroSection: React.FC = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const subtitles = [
    'A Full Stack Developer',
    'A Technology Enthusiast',
    'An Innovation Thinker'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-primary-medium/30">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-dark mb-6">
          Hey, I'm <span className="text-primary-blue">Arthur</span>
        </h1>
        <p className={`text-xl md:text-2xl text-primary-blue max-w-2xl mx-auto transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {subtitles[currentSubtitle]}
        </p>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Proficient in React, TypeScript, Vue and modern frontend tech stack'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Strong design aesthetics and user experience design capabilities'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Project Management',
      description: 'Rich experience in project development and team collaboration'
    }
  ];

  return (
    <>
      <HeroSection />
      <section id="about" className="min-h-screen bg-white py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-8">
              About Me
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <p className="text-lg text-primary-blue leading-relaxed">
                I am a passionate full-stack developer focused on creating elegant and efficient digital solutions.
                With years of development experience, I am proficient in modern web technology stacks and committed to turning creativity into reality.
              </p>
              <p className="text-lg text-primary-blue leading-relaxed">
                I believe in the power of technology to change the world, and creating value through code is my mission.
                In my spare time, I enjoy exploring new technologies, participating in open source projects, and sharing knowledge with the tech community.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-medium/20 text-primary-blue rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-medium to-primary-blue rounded-full opacity-20"></div>
                <img
                  src="/public/arthur.jpeg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover rounded-full border-4 border-primary-medium/30"
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
                <div className="text-primary-medium mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary-dark">{skill.title}</h4>
                <p className="text-primary-blue">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;