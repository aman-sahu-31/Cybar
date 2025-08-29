import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import tech from "../../assets/tech-ninja 1.png";

// ---------------- Navbar ----------------
const Navbar = () => {
  return (
    <div className="w-full shadow-md shadow-gray-400 min-h-screen flex flex-col">
      {/* Logo + Department */}
      <div className="flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-4">
          <img src={tech} alt="logo" className="w-16 h-16" />
          <div>
            <h1 className="text-xl font-bold">संदिग्ध लेन-देन निष्क्रियता</h1>
            <h1 className="text-lg font-bold">
              Suspicious Transaction Detection
            </h1>
          </div>
        </div>
        <div className="flex space-x-4">
          <img
            src="https://dor.gov.in/sites/default/files/inline-images/make-india.png"
            alt="makeinindia"
            className="h-10"
          />
          <img
            src="https://dor.gov.in/sites/default/files/inline-images/g20.png"
            alt="g20"
            className="h-10"
          />
          <img
            src="https://dor.gov.in/sites/default/files/inline-images/swachbharat.png"
            alt="swachh"
            className="h-10"
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex gap-6 text-white px-10 py-3 bg-gray-900">
        {[
          { to: "/", label: "Home" },
          { to: "/dashboard", label: "Dashboard" },
          { to: "/About", label: "About Us" },
          { to: "/Divisions", label: "Divisions" },
          { to: "/Rules", label: "Act & Rules" },
          { to: "/Data", label: "Data & Statistics" },
          { to: "/EmployeesCorner", label: "Employees Corner" },
          { to: "/RTI", label: "RTI" },
          { to: "/GrievanceRedressal", label: "Grievance Redressal" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `hover:underline ${isActive ? "text-yellow-400 font-bold" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

        <Outlet />
    </div>
  );
};

export default Navbar;
