// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JetsSection from './components/JetsSection';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-space text-gray-100">
      <Header />
      <Hero />
      <JetsSection />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;