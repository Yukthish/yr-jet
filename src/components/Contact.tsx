// import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl text-center mb-12 gradient-text">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-800/50 border border-cyan-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800/50 border border-cyan-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400/50"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-gray-800/50 border border-cyan-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400/50"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-mono hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;