import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: '关于我' },
    { id: 'projects', label: '项目展示' },
    { id: 'contact', label: '联系方式' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-primary-medium/20' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-dark cursor-pointer" 
                onClick={() => scrollToSection('about')}>
              个人简介
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-all duration-200 border-2 ${
                    activeSection === item.id
                      ? 'text-white bg-primary-blue border-primary-blue'
                      : 'text-primary-dark hover:text-white hover:bg-primary-blue border-transparent hover:border-primary-blue'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Resume Download Button */}
              <a
                href="/resume.pdf"
                download="Arthur_Kan_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3 bg-primary-blue hover:bg-primary-dark text-white rounded-md text-base font-medium transition-all duration-200 hover:transform hover:scale-105"
              >
                <Download size={16} />
                简历
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-dark hover:text-primary-blue transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-primary-medium/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 border-2 ${
                  activeSection === item.id
                    ? 'text-white bg-primary-blue border-primary-blue'
                    : 'text-primary-dark hover:text-white hover:bg-primary-blue border-transparent hover:border-primary-blue'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Arthur_Kan_Resume.pdf"
              className="flex items-center gap-2 w-full px-3 py-2 bg-primary-blue hover:bg-primary-dark text-white rounded-md text-base font-medium transition-colors duration-200"
            >
              <Download size={16} />
              下载简历
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;