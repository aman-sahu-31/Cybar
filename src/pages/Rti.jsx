// src/pages/RTI.jsx
import { FaInfoCircle, FaFileAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function RTI() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        📜 Right to Information (RTI)
      </h1>

      {/* About RTI */}
      <section className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <FaInfoCircle className="text-blue-500" /> About RTI
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The Right to Information (RTI) Act, 2005 empowers every citizen of India 
          to seek information from public authorities, promoting transparency and 
          accountability in governance. Under this act, citizens can request details 
          about government operations, decisions, and expenditures.
        </p>
      </section>

      {/* How to Apply */}
      <section className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <FaFileAlt className="text-green-600" /> How to Apply for RTI
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Prepare your RTI application with clear questions.</li>
          <li>Submit it to the concerned Public Information Officer (PIO).</li>
          <li>Pay the prescribed application fee (usually ₹10).</li>
          <li>Await a response within 30 days as per RTI rules.</li>
        </ol>
      </section>

      {/* Contact Information */}
      <section className="bg-white rounded-xl shadow p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <FaEnvelope className="text-purple-600" /> Contact Information
        </h2>
        <div className="space-y-2 text-gray-700">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" /> Email: rti-help@gov.in
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-green-500" /> Helpline: 1800-123-456
          </p>
          <p className="text-gray-500 text-sm">
            (Available Monday to Friday, 9 AM – 6 PM)
          </p>
        </div>
      </section>
    </div>
  );
}
