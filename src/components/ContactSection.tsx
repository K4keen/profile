import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-16 h-16" />,
      link: 'mailto:arthurkan@163.com',
      color: 'hover:text-red-400'
    },
    {
      icon: <Phone className="w-16 h-16" />,
      link: 'tel:+1 604-368-9428',
      color: 'hover:text-green-400'
    },
    {
      icon: <Github className="w-16 h-16" />,
      link: 'https://github.com/K4keen',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-16 h-16" />,
      link: 'https://www.linkedin.com/in/arthurkan/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-32 pb-32 bg-white ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-primary-dark mb-16">
          Contact Me
        </h2>
        <div className="text-center mb-20">
          <p className="text-xl text-primary-blue max-w-3xl mx-auto">
            If you are interested in my work or would like to discuss collaboration opportunities, feel free to contact me anytime
          </p>

        </div>

        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group bg-primary-light p-8 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-110 hover:shadow-xl flex items-center justify-center border border-primary-medium/20 ${contact.color}`}
            >
              <div className="text-primary-blue group-hover:scale-125 transition-all duration-300">
                {contact.icon}
              </div>
            </a>
          ))}
        </div>



        {/* Footer
        <div className="mt-32 pt-8 text-center">
          <p className="text-primary-dark">
            &copy; 2024 Arthur Kan. 保留所有权利。
          </p>
          <p className="text-primary-blue mt-2">
            使用 React & TypeScript 构建，部署在云端
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;