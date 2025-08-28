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
      <div className="flex gap-6 text-white px-10 py-3 bg-orange-600">
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

// ---------------- Dashboard Cards ----------------
// const DashboardCards = () => {
//   const cards = [
//     { title: "Critical Alerts", value: 245, color: "bg-red-700" },
//     { title: "High Level Alerts", value: 39, color: "bg-orange-600" },
//     { title: "Medium Level Alerts", value: 10, color: "bg-yellow-500" },
//     { title: "Low Level Alerts", value: 50, color: "bg-green-600" },
//     { title: "Very Low-Level Alerts", value: 220, color: "bg-blue-600" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-10 py-6">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`p-6 rounded-lg shadow-lg text-white ${card.color} hover:scale-105 transition-transform`}
//         >
//           <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
//           <p className="text-3xl font-bold">{card.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// // ---------------- Dashboard Charts ----------------
// const DashboardCharts = () => {
//   const lineData = [
//     { month: "Feb", Critical: 100, High: 80, Medium: 50, Low: 70, VeryLow: 120 },
//     { month: "Mar", Critical: 150, High: 100, Medium: 70, Low: 90, VeryLow: 160 },
//     { month: "Apr", Critical: 250, High: 200, Medium: 100, Low: 180, VeryLow: 220 },
//     { month: "May", Critical: 180, High: 150, Medium: 90, Low: 130, VeryLow: 200 },
//     { month: "Jun", Critical: 300, High: 250, Medium: 150, Low: 200, VeryLow: 400 },
//   ];

//   const pieData = [
//     { name: "Critical", value: 19, color: "#b91c1c" },
//     { name: "High", value: 21, color: "#f97316" },
//     { name: "Medium", value: 20, color: "#facc15" },
//     { name: "Low", value: 21, color: "#4ade80" },
//     { name: "Very Low", value: 19, color: "#22c55e" },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-6">
//       {/* Line Chart */}
//       <div className="bg-white p-6 rounded-xl shadow-lg">
//         <h2 className="text-lg font-semibold mb-4 text-blue-600">Transactions</h2>
//         <p className="text-sm text-gray-500 mb-2">Total Transactions: 1400 (Year 2023)</p>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={lineData}>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="Critical" stroke="#b91c1c" strokeWidth={2} />
//             <Line type="monotone" dataKey="High" stroke="#f97316" strokeWidth={2} />
//             <Line type="monotone" dataKey="Medium" stroke="#facc15" strokeWidth={2} />
//             <Line type="monotone" dataKey="Low" stroke="#4ade80" strokeWidth={2} />
//             <Line type="monotone" dataKey="VeryLow" stroke="#22c55e" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Pie Chart */}
//       <div className="bg-white p-6 rounded-xl shadow-lg">
//         <h2 className="text-lg font-semibold mb-4 text-blue-600">Alerts by Level</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={pieData}
//               cx="50%"
//               cy="50%"
//               innerRadius={60}
//               outerRadius={100}
//               paddingAngle={5}
//               dataKey="value"
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//             <Legend />
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// // ---------------- Main Dashboard Page ----------------
// const DashboardPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <DashboardCards />
//       <DashboardCharts />
//     </div>
//   );
// };

export default Navbar;
