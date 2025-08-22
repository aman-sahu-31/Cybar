import React from "react";
import tech from "../../assets/tech-ninja 1.png";
import Footer from "../Header/fooder";
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
   <Footer />
    </div>
  );
}

export default Navbar;