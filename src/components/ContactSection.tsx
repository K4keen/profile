import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, Download } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-12 h-12" />,
      label: '邮箱',
      value: 'arthur@example.com',
      link: 'mailto:arthur@example.com',
      description: '点击直接发送邮件',
      color: 'hover:bg-red-50 hover:text-red-600'
    },
    {
      icon: <Phone className="w-12 h-12" />,
      label: '电话',
      value: '+86 138 0000 0000',
      link: 'tel:+8613800000000',
      description: '点击直接拨打电话',
      color: 'hover:bg-green-50 hover:text-green-600'
    },
    {
      icon: <Github className="w-12 h-12" />,
      label: 'GitHub',
      value: 'K4keen',
      link: 'https://github.com/K4keen',
      description: '查看我的开源项目',
      color: 'hover:bg-gray-50 hover:text-gray-800'
    },
    {
      icon: <Linkedin className="w-12 h-12" />,
      label: 'LinkedIn',
      value: 'Arthur Kan',
      link: 'https://linkedin.com/in/arthur-kan',
      description: '查看我的职业档案',
      color: 'hover:bg-blue-50 hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-slate-800 py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            联系我
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            如果您对我的工作感兴趣，或者想要讨论合作机会，欢迎随时联系我
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group bg-white p-8 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${contact.color}`}
            >
              <div className="flex justify-center mb-6 text-gray-600 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {contact.label}
              </h3>
              <p className="text-slate-600 mb-3 font-medium">
                {contact.value}
              </p>
              <p className="text-sm text-gray-500">
                {contact.description}
              </p>
            </a>
          ))}
        </div>

        {/* Resume Download Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/resume.pdf"
            download="Arthur_Kan_Resume.pdf"
            className="group bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            下载我的简历
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            &copy; 2024 Arthur Kan. 保留所有权利。
          </p>
          <p className="text-gray-500 mt-2">
            使用 React & TypeScript 构建，部署在云端
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;