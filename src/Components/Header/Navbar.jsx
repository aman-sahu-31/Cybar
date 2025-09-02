import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaShieldAlt } from "react-icons/fa";
import tech from "../../assets/tech-ninja 1.png";

// ---------------- Navbar ----------------
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { to: "/", label: "होम", englishLabel: "Home" },
    { to: "/dashboard", label: "डैशबोर्ड", englishLabel: "Dashboard" },
    { to: "/About", label: "हमारे बारे में", englishLabel: "About Us" },
    { to: "/Divisions", label: "विभाग", englishLabel: "Divisions" },
    { to: "/Rules", label: "अधिनियम और नियम", englishLabel: "Act & Rules" },
    { to: "/Data", label: "डेटा और आंकड़े", englishLabel: "Data & Statistics" },
    { to: "/EmployeesCorner", label: "कर्मचारी कॉर्नर", englishLabel: "Employees Corner" },
    { to: "/RTI", label: "आरटीआई", englishLabel: "RTI" },
    { to: "/GrievanceRedressal", label: "शिकायत निवारण", englishLabel: "Grievance Redressal" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top Government Bar */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 py-1">
        <div className="text-center text-sm font-bold text-gray-800">
          🇮🇳 भारत सरकार | Government of India | साइबर सुरक्षा विभाग
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 shadow-2xl">
        {/* Logo + Department */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img src={tech} alt="logo" className="w-20 h-16 drop-shadow-lg" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-white text-xs" />
              </div>
            </div>
            <div className="text-white ml-10">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                साइबर सुरक्षा और धोखाधड़ी रोकथाम
              </h1>
              <h2 className="text-lg font-semibold text-blue-200">
                Cyber Security & Fraud Prevention
              </h2>
              <p className="text-sm text-blue-300">भारत सरकार | Government of India</p>
            </div>
          </div>
          
          {/* Government Logos */}
          <div className="hidden md:flex items-center space-x-6">
            <img
              src="https://dor.gov.in/sites/default/files/inline-images/make-india.png"
              alt="makeinindia"
              className="h-12 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            />
            <img
              src="https://dor.gov.in/sites/default/files/inline-images/g20.png"
              alt="g20"
              className="h-12 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            />
            <img
              src="https://dor.gov.in/sites/default/files/inline-images/swachbharat.png"
              alt="swachh"
              className="h-12 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors duration-300"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Bar */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-t border-blue-700`}>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-white px-6 md:px-10 py-4">
            {navigationItems.map(({ to, label, englishLabel }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                    isActive 
                      ? "bg-gradient-to-r from-orange-500 to-green-500 text-white font-bold shadow-lg" 
                      : "hover:text-orange-400"
                  }`
                }
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold">{label}</span>
                  <span className="text-xs opacity-75">{englishLabel}</span>
                </div>
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
