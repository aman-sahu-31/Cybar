import React from "react";
import { NavLink } from "react-router-dom";
import tech from "../../assets/tech-ninja 1.png";

// Recharts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// ---------------- Navbar ----------------
const Navbar = () => {
  return (
    <div className="w-full shadow-md shadow-gray-400">
      {/* Logo + Department */}
      <div className="flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-4">
          <img src={tech} alt="logo" className="w-16 h-16" />
          <div>
            <h1 className="text-xl font-bold">संदिग्ध लेन-देन निष्क्रियता</h1>
            <h1 className="text-lg font-bold">Suspicious Transaction Detection</h1>
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
      <div className="flex gap-6  text-white px-10 py-3 bg-gray-900">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/dashboard" className="hover:underline">
          Dashboard
        </NavLink>
        <NavLink to="/About" className="hover:underline">
          About Us
        </NavLink>
        <NavLink to={'/Divisions'} className="hover:underline">
          Divisions
        </NavLink>
        <NavLink to={'/Rules'} className="hover:underline">
          Act & Rules
        </NavLink>
        <NavLink to={'/Data'} className="hover:underline">
          Data & Statistics
        </NavLink>
        <NavLink to={'/EmployeesCorner'} className="hover:underline">
          Employees Corner
        </NavLink>
        <NavLink to={'/RTI'} className="hover:underline">
          RTI
        </NavLink>
        <NavLink to={'/GrievanceRedressal'} className="hover:underline">
          Grievance Redressal
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
