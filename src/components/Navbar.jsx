import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      {""}
      <div className="flex items-center space-x-2">
        <span className="text-4xl font-bold text-teal-400">B</span>
        <span className="text-xl font-semibold">ehinDev</span>
      </div>

      {/* Middle: Navigation Links */}
      <div className="flex space-x-6 bg-gray-800 rounded-full px-4 py-2">
        <a href="#stories" className="text-teal-400 hover:text-white">STORIES</a>
        <a href="#events" className="hover:text-teal-400">EVENTS</a>
        <a href="#community" className="hover:text-teal-400">COMMUNITY</a>
        <div className="relative group">
          <button className="hover:text-teal-400 flex items-center">About ▾</button>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
            <a href="#about-us" className="block px-4 py-2 hover:bg-gray-700">About Us</a>
            <a href="#team" className="block px-4 py-2 hover:bg-gray-700">Our Team</a>
          </div>
        </div>
      </div>

      {/* Right Side: Button */}
      <button className="bg-teal-400 text-black rounded-full px-6 py-2 hover:bg-teal-500">
        LET'S START - IT'S FREE
      </button>
    </nav>
  );
};

export default Navbar;

        
        
  