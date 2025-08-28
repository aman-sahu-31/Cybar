// src/pages/Divisions.jsx
import { FaBuilding, FaUsers, FaChartPie, FaShieldAlt, FaRegLightbulb } from "react-icons/fa";

export default function Divisions() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        🏛️ Government Divisions
      </h1>

      {/* Intro */}
      <section className="bg-white p-6 rounded-xl shadow border border-gray-200 mb-8">
        <p className="text-gray-600 leading-relaxed">
          Our organization is structured into specialized divisions to ensure
          effective governance, transparency, and citizen-centric service
          delivery. Each division is focused on distinct functions that contribute
          towards national development and public welfare.
        </p>
      </section>

      {/* Divisions List */}
      <section className="space-y-6">
        {/* Division 1 */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
            <FaBuilding className="text-blue-600" /> Administrative Division
          </h2>
          <p className="text-gray-600">
            Handles policy making, human resources, coordination among ministries,
            and ensures smooth functioning of government offices.
          </p>
        </div>

        {/* Division 2 */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
            <FaUsers className="text-green-600" /> Citizen Services Division
          </h2>
          <p className="text-gray-600">
            Focuses on direct interaction with citizens, including grievance
            redressal, RTI, digital services, and public awareness programs.
          </p>
        </div>

        {/* Division 3 */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
            <FaChartPie className="text-purple-600" /> Data & Statistics Division
          </h2>
          <p className="text-gray-600">
            Responsible for collecting, analyzing, and publishing data for
            evidence-based policy making and transparent governance.
          </p>
        </div>

        {/* Division 4 */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
            <FaShieldAlt className="text-red-600" /> Vigilance & Compliance Division
          </h2>
          <p className="text-gray-600">
            Ensures compliance with laws, monitors suspicious transactions,
            prevents corruption, and strengthens accountability.
          </p>
        </div>

        {/* Division 5 */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
            <FaRegLightbulb className="text-yellow-500" /> Innovation & Research Division
          </h2>
          <p className="text-gray-600">
            Encourages adoption of modern technologies, digital platforms, and
            innovative solutions to improve governance efficiency.
          </p>
        </div>
      </section>
    </div>
  );
}
