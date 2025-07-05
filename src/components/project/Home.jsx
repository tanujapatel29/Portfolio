import React from 'react';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">Portfolio Showcase</h2>
          
        </div>

        {/* Showcase Section */}
        <div className="relative flex flex-col lg:flex-row justify-left items-center lg:space-x-8">
          {/* Desktop Screen on Left */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/img/desktop.png"  // Replace with your desktop mockup image
              alt="Desktop Mockup"
              className="w-full shadow-2xl rounded-lg"
            />
          </div>

          {/* Text Section on Right */}
          <div className="w-full lg:w-1/2 text-left mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold text-white">Responsive Design</h3>
            <p className="text-white mt-4">
            I design and build responsive websites using React, Tailwind, and modern web technologies.
I’m passionate about creating clean UIs and learning something new with every project.

 Open to junior dev roles and collaborations <button className="mt-6 px-6 py-3 bg-white text-purple-500 rounded-lg shadow-lg hover:bg-gray-200">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
