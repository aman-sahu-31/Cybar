import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 text-white py-16 px-10 text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Suspicious Transaction Detection
        </h1>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          An initiative to safeguard the financial ecosystem under{" "}
          <span className="font-semibold">PMLA 2002</span>, ensuring transparency,
          accountability, and integrity in economic activities.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-red-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To build a reliable detection system that identifies unusual
            transactions, prevents money laundering, and supports law enforcement
            in strengthening India’s financial stability.
          </p>

          <h2 className="text-3xl font-bold text-red-700 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Empower financial institutions with tools to detect suspicious
            activities, protect citizens, and create a fraud-free economy.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <img
            src="https://www.shutterstock.com/image-illustration/fraud-alert-caution-defend-guard-260nw-2429452303.jpg"
            alt="Fraud detection illustration"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Objectives */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-8">
            Key Objectives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Ensure compliance with Prevention of Money Laundering Act (PMLA), 2002.",
              "Assist banks and NBFCs in monitoring unusual transaction patterns.",
              "Reduce risks of fraud, terrorist financing, and illegal activities.",
              "Promote financial transparency & strengthen citizen trust.",
            ].map((objective, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Objective {i + 1}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Definition */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-red-700 mb-6">
            What is a Suspicious Transaction?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A suspicious transaction is any financial activity that raises doubts
            about its legitimacy, complexity, or economic purpose. Such
            transactions may:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Involve proceeds of crime or illegal sources.</li>
            <li>Appear unusually complex or unjustified.</li>
            <li>Lack clear economic rationale or purpose.</li>
            <li>Indicate potential money laundering or fraud.</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <img
            src="https://img.freepik.com/free-vector/financial-analytics-concept-illustration_114360-7966.jpg"
            alt="Suspicious transaction analytics"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-700 to-orange-600 text-white text-center py-6 mt-12">
        <p className="text-sm">
          © {new Date().getFullYear()} Government Hackathon Project | Suspicious
          Transaction Detection | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
