import React from 'react';
import { 
  FaHome, 
  FaChartBar, 
  FaFileAlt, 
  FaBook, 
  FaEnvelope, 
  FaUser, 
  FaBell, 
  FaSearch 
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-3">
      <div className="container mx-auto px-4">

        {/* ---- Mobile Layout (3 Rows) ---- */}
        <div className="md:hidden flex flex-col gap-4">
          
          {/* Row 1: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaHome className="mr-1" />
              Home
            </a>
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaChartBar className="mr-1" />
              Dashboard
            </a>
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaFileAlt className="mr-1" />
              Reports
            </a>
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaBook className="mr-1" />
              Resources
            </a>
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaEnvelope className="mr-1" />
              Contact
            </a>
          </div>

          {/* Row 2: Icons */}
          <div className="flex justify-center gap-6">
            <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaSearch className="text-base" />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaBell className="text-base" />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaUser className="text-base" />
            </button>
          </div>

          {/* Row 3: Extra info */}
          <div className="text-center text-xs text-blue-200">
            Security Monitoring System
          </div>
        </div>

        {/* ---- Desktop / Laptop Layout (Single Row) ---- */}
        <div className="hidden md:flex flex-row justify-between items-center">
          
          {/* Left: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm lg:text-base">
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaHome className="mr-2" /> Home
            </a>
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaChartBar className="mr-2" /> Dashboard
            </a>
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaFileAlt className="mr-2" /> Reports
            </a>
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaBook className="mr-2" /> Resources
            </a>
            <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
              <FaEnvelope className="mr-2" /> Contact
            </a>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaSearch className="text-lg" />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaBell className="text-lg" />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaUser className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
