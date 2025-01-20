// import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 gradient-text">
            The Future of Defence Aviation
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Pushing the boundaries of aerospace technology with next-generation military aircraft
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
