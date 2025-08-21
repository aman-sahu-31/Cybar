import React from "react";
import tech from '../../assets/tech-ninja 1.png';
import Footer  from "../Header/fooder";

function Navbar() {
  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between  bg-white border-b-2 border-gray-200 shadow-sm">
        {/* Left Logo */}
        <div className="flex items-center  md:mb-0">
          <img
            src={tech}
            alt="Emblem of India"
            className="h-30 w-auto"
          />
        </div>

        {/* Center Title */}
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold">
            राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल
          </h1>
          <p className="text-sm md:text-base">
            National Cyber Crime Reporting Portal
          </p>
        </div>

        {/* Right Logo */}
        <div className="flex items-center mt-3 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Azadi_Ka_Amrit_Mahotsav_Logo.png"
            alt="Azadi Ka Amrit Mahotsav"
            className="h-16 w-auto"
          />
        </div>
      </header>
      <div>
        <Footer/>
{/* <span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span> */}
    </div>
    </div>
  );
}

export default Navbar;
