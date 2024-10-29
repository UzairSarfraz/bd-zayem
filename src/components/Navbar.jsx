import React from 'react';
import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
import { ImPower } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      {""}
      <div className="flex items-center space-x-2 w-[120px]  h-[40px]">
        <img src="src\images\logo.png"></img>
      </div>

      {/* Middle: Navigation Links */}
      <div className="flex space-x-10 bg-gray-800 rounded-full px-4 py-4 items-center border border-gray-500 leading-tight">
  <a href="#stories" className="text-teal-400 hover:text-teal-400 bg-slate-600 p-2 rounded-full px-4">STORIES</a>
  <a href="#events" className="hover:text-teal-400">EVENTS</a>
  <a href="#community" className="hover:text-teal-400">COMMUNITY</a>

  <div className="relative group">
    <button className="hover:text-teal-400  flex items-center">About ▾</button>
    {/* Dropdown */}
    <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-6  rounded shadow-lg w-[200px] h-[200px] ">

      <a href="#about-us" className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group">
        <CiHome /> <span>Contribute</span>
        <MdKeyboardArrowRight className="opacity-1" />
      </a>
      <a href="#about-us" className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group">
        <IoCallOutline /> <span>Courses</span>
        <MdKeyboardArrowRight className="opacity-1" />
      </a>
      <a href="#about-us" className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group">
        <ImPower /> <span>Career</span>
        <MdKeyboardArrowRight className="opacity-1" />
      </a>
      <a href="#about-us" className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group">
        <IoIosUnlock /> <span>About Us</span>
        <MdKeyboardArrowRight className="opacity-1" />
      </a>
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

        
        
  