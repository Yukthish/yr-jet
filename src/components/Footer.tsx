// import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} YR, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;