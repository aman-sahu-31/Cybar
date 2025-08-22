import React from "react";
import tech from "../../assets/tech-ninja 1.png";
import satya from "../../assets/satya.png";
import {
  FaHome,
  FaChartBar,
  FaFileAlt,
  FaBook,
  FaEnvelope,
  FaUser,
  FaBell,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="flex flex-col md:flex-row px-4 md:px-10 py-4 items-center justify-between bg-white border-b-2 border-gray-200 shadow-sm">
        {/* Left Logo */}
        <div className="flex items-center mb-3 md:mb-0">
          <img src={tech} alt="Logo Left" className="h-12 md:h-16 w-auto" />
        </div>

        {/* Center Title */}
        <div className="text-center px-2 mb-3 md:mb-0">
          <h1 className="text-sm md:text-xl lg:text-2xl font-bold leading-tight">
            डिजिटल चैनलों के माध्यम से फर्जी बम धमकियों पर नज़र रखना
          </h1>
          <p className="text-xs md:text-sm lg:text-lg font-semibold">
            Tracking Hoax Bomb Threats Via Digital Channels
          </p>
        </div>

        {/* Right Logo */}
        <div className="flex items-center">
          <img src={satya} alt="Logo Right" className="h-12 md:h-16 w-auto" />
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-3">
        <div className="container mx-auto px-4">
          {/* Mobile Layout (3 rows) */}
          <div className="md:hidden flex flex-col gap-3">
            {/* Row 1: Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaHome className="mr-1" />
                <span className="hidden xs:inline">Home</span>
              </a>
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaChartBar className="mr-1" />
                <span className="hidden xs:inline">Dashboard</span>
              </a>
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaFileAlt className="mr-1" />
                <span className="hidden xs:inline">Reports</span>
              </a>
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaBook className="mr-1" />
                <span className="hidden xs:inline">Resources</span>
              </a>
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaEnvelope className="mr-1" />
                <span className="hidden xs:inline">Contact</span>
              </a>
            </div>

            {/* Row 2: Icons */}
            <div className="flex justify-center gap-6">
              <button className="p-1 rounded-full hover:bg-blue-700 transition-colors">
                <FaSearch className="text-base" />
              </button>
              <button className="p-1 rounded-full hover:bg-blue-700 transition-colors">
                <FaBell className="text-base" />
              </button>
              <button className="p-1 rounded-full hover:bg-blue-700 transition-colors">
                <FaUser className="text-base" />
              </button>
            </div>

            {/* Row 3: Additional info (optional) */}
            <div className="text-center text-xs text-blue-200">
              Security Monitoring System
            </div>
          </div>

          {/* Desktop/Laptop Layout (single row) */}
          <div className="hidden md:flex flex-row justify-between items-center">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm lg:text-base">
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaHome className="mr-2" />
                Home
              </a>
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaChartBar className="mr-2" />
                Dashboard
              </a>
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaFileAlt className="mr-2" />
                Reports
              </a>
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaBook className="mr-2" />
                Resources
              </a>
              <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
                <FaEnvelope className="mr-2" />
                Contact
              </a>
            </div>

            {/* Right Icons */}
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
    </div>
  );
}

export default Navbar;