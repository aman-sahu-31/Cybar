// src/pages/GrievanceRedressal.jsx
import { FaUserShield, FaFileSignature, FaRegClock, FaPhone, FaEnvelope } from "react-icons/fa";

export default function GrievanceRedressal() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
        🛡️ Grievance Redressal System
      </h1>

      {/* Intro Section */}
      <section className="bg-white p-6 rounded-xl shadow border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
          <FaUserShield className="text-red-600" /> About Grievance Redressal
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The Grievance Redressal Mechanism provides a structured process for 
          citizens to raise complaints, feedback, or concerns regarding government 
          services. Our goal is to ensure transparency, accountability, and 
          timely resolution of grievances.
        </p>
      </section>

      {/* Process Section */}
      <section className="bg-white p-6 rounded-xl shadow border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
          <FaFileSignature className="text-green-600" /> How to File a Grievance
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Register your grievance through the official portal or email.</li>
          <li>Provide details including name, contact, and issue description.</li>
          <li>Receive an acknowledgement with a unique grievance ID.</li>
          <li>Track status online or through helpline support.</li>
        </ol>
      </section>

      {/* Timeline Section */}
      <section className="bg-white p-6 rounded-xl shadow border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
          <FaRegClock className="text-blue-600" /> Resolution Timeline
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>3 days</strong> – Acknowledgement of grievance.</li>
          <li><strong>15 days</strong> – Review and response by the concerned department.</li>
          <li><strong>30 days</strong> – Final resolution (may vary based on case complexity).</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
          <FaPhone className="text-purple-600" /> Contact for Assistance
        </h2>
        <div className="space-y-2 text-gray-700">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" /> Email: grievance@gov.in
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-green-500" /> Helpline: 1800-111-222
          </p>
          <p className="text-gray-500 text-sm">
            (Available Monday – Saturday, 9:30 AM – 6:00 PM)
          </p>
        </div>
      </section>
    </div>
  );
}
