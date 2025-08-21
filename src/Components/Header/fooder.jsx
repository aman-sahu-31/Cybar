import React from "react";

function Footer() {
  return (
    <div className=" bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white shadow-md">
        <div className="flex items-center justify-between px-3 ">
          {/* Home */}
          <a href="#" className="flex items-center font-bold hover:bg-blue-600 px-3 py-2 rounded">
            🏠 Home
          </a>

          {/* Register a Complaint (Dropdown) */}
          <div className="relative group">
            <button className="font-bold hover:bg-blue-600 px-3 py-2 rounded">
              Register a Complaint +
            </button>
            <div className="absolute left-0 text-sm hidden group-hover:block bg-blue-600 text-white w-60 shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-blue-700">Women/Children Related Crime</a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-700">Financial Fraud</a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-700">Other Cyber Crime</a>
            </div>
          </div>

          {/* Track Complaint */}
          <a href="#" className="font-bold hover:bg-blue-600 px-3 py-2 rounded">
            Track your Complaint
          </a>

          {/* Report & Check Suspect (Dropdown) */}
          <div className="relative group">
            <button className="font-bold hover:bg-blue-600 px-3 py-2 rounded">
              Report & Check Suspect +
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-blue-600 w-60 shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-blue-700">Report Suspect</a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-700">Check Suspect</a>
            </div>
          </div>

          {/* Cyber Volunteers */}
          <a href="#" className="font-bold hover:bg-blue-600 px-3 py-2 rounded">
            Cyber Volunteers +
          </a>

          {/* Learning Corner */}
          <a href="#" className="font-bold hover:bg-blue-600 px-3 py-2 rounded">
            Learning Corner +
          </a>

          {/* Contact Us */}
          <a href="#" className="font-bold hover:bg-blue-600 px-3 py-2 rounded">
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
