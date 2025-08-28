// src/pages/EmployeesCorner.jsx
// import { Card,CardContent } from "antd";
import { FaBullhorn, FaFileAlt, FaUserTie, FaStar, FaLink } from "react-icons/fa";

export default function EmployeesCorner() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        👨‍💼 Employees Corner
      </h1>

      {/* Announcements Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="shadow-lg rounded-2xl border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-700">
              <FaBullhorn className="text-red-500" /> Announcements
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>📌 Training on Suspicious Transaction Detection – Sep 12</li>
              <li>📌 New Security Policy Updates – Effective Oct 1</li>
              <li>📌 Monthly Review Meeting – Sep 20</li>
            </ul>
          </div>
        </div>

        {/* Policies Section */}
        <div className="shadow-lg rounded-2xl border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-700">
              <FaFileAlt className="text-green-600" /> Policies & Guidelines
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔️ Anti-Money Laundering (AML) Guidelines</li>
              <li>✔️ Employee Code of Conduct</li>
              <li>✔️ IT Security Best Practices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Links + Recognition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Links */}
        <div className="shadow-lg rounded-2xl border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-700">
              <FaLink className="text-purple-600" /> Quick Links
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a href="#" className="p-3 bg-blue-100 rounded-lg text-blue-700 font-semibold text-center hover:bg-blue-200">HR Portal</a>
              <a href="#" className="p-3 bg-green-100 rounded-lg text-green-700 font-semibold text-center hover:bg-green-200">Compliance Docs</a>
              <a href="#" className="p-3 bg-red-100 rounded-lg text-red-700 font-semibold text-center hover:bg-red-200">Report Fraud</a>
              <a href="#" className="p-3 bg-yellow-100 rounded-lg text-yellow-700 font-semibold text-center hover:bg-yellow-200">Support Desk</a>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="shadow-lg rounded-2xl border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-700">
              <FaStar className="text-yellow-500" /> Employee Recognition
            </h2>
            <div className="mt-4 space-y-3">
              <div className="p-3 bg-gray-100 rounded-lg">
                <p className="font-semibold text-blue-700">⭐ Ramesh Kumar</p>
                <p className="text-sm text-gray-600">Awarded "Best Analyst – August"</p>
              </div>
              <div className="p-3 bg-gray-100 rounded-lg">
                <p className="font-semibold text-blue-700">⭐ Priya Sharma</p>
                <p className="text-sm text-gray-600">Recognized for "Outstanding Compliance Reporting"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
