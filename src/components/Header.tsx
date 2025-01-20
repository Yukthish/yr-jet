// import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/vite.svg" alt="Glowing Jet Icon" className="w-8 h-96"/>
            <h1 className="font-display text-2xl gradient-text flex items-center">YR</h1>
          </div>
          
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`${isMenuOpen ? 'block absolute top-20 left-0 right-0 bg-gray-900/95 border-b border-cyan-500/20 p-4' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {['Jets', 'Technology', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-mono text-sm hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

