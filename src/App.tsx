import React from 'react';
import Navbar from './components/ui/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary-dark text-primary-light py-8 mt-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Arthur Kan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
