import React, { useState, useEffect } from 'react';
import { Section } from '../types';

interface NavbarProps {
  currentSection: Section;
  setSection: (s: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, setSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/95 backdrop-blur-md py-4 shadow-sm border-b border-brand-black/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => setSection(Section.HOME)}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-brand-black text-brand-cream flex items-center justify-center font-serif italic font-bold text-xl rounded-sm group-hover:bg-brand-gold transition-colors">
            A
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-brand-black">AUTHENTIK STUDIO AMAZON 2026</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest font-medium">
          <button 
            onClick={() => setSection(Section.LOGIC)}
            className={`${currentSection === Section.LOGIC ? 'text-brand-black' : 'text-gray-500'} hover:text-brand-black transition-colors`}
          >
            The Logic
          </button>
           <button 
            onClick={() => setSection(Section.PROCESS)}
            className={`${currentSection === Section.PROCESS ? 'text-brand-black' : 'text-gray-500'} hover:text-brand-black transition-colors`}
          >
            Methodology
          </button>
          <button 
            onClick={() => setSection(Section.TOOL)}
            className={`${currentSection === Section.TOOL ? 'text-brand-black' : 'text-gray-500'} hover:text-brand-black transition-colors`}
          >
            Free Audit
          </button>
          <button 
            onClick={() => setSection(Section.CONTACT)}
            className="px-5 py-2 bg-brand-black text-white hover:bg-brand-green transition-colors"
          >
            Apply for Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;