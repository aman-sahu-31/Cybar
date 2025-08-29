import React from "react";

function BehavioralRiskAnalytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-indigo-50 px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-6">
          Behavioral Risk Analytics
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Behavioral Risk Analytics (BRA) uses advanced AI and machine learning
          to monitor, analyze, and detect unusual user behaviors that may
          indicate fraudulent activity, insider threats, or cybersecurity
          risks. Unlike static checks, BRA adapts to real-time user behavior,
          offering a proactive defense against evolving threats.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Why Behavioral Risk Analytics?
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Detects threats in real-time by analyzing user actions.</li>
            <li>Goes beyond passwords and device checks.</li>
            <li>Builds unique behavioral profiles for each user.</li>
            <li>Adapts dynamically to emerging fraud techniques.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Core Behavioral Indicators
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Typing speed, mouse movement, touch patterns.</li>
            <li>Login frequency, location, and device usage.</li>
            <li>Transaction flow and navigation sequence.</li>
            <li>Response to security challenges or anomalies.</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
          Real-World Use Cases
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Fraud Detection
            </h3>
            <p className="text-slate-700">
              Identifies unusual login attempts, risky transactions, and bot
              activities before they cause harm.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Insider Threat Monitoring
            </h3>
            <p className="text-slate-700">
              Detects employees accessing sensitive data abnormally or outside
              work patterns.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Compliance & Risk Management
            </h3>
            <p className="text-slate-700">
              Helps organizations meet regulatory requirements by proving
              proactive monitoring of risky activities.
            </p>
          </div>
        </div>
      </div>

      {/* Warning Signs Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
          Warning Signs Detected by BRA
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Logins from unusual geographies or devices.</li>
              <li>Drastic deviation in typing or click speed.</li>
              <li>Multiple failed authentication attempts.</li>
              <li>High-value transactions at odd times.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Accessing restricted data repeatedly.</li>
              <li>Abnormal navigation behavior in apps.</li>
              <li>Sudden change in purchasing habits.</li>
              <li>Use of anonymizers or suspicious VPNs.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prevention Strategies */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
          Prevention & Mitigation Strategies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              For Organizations
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Deploy AI-driven behavioral monitoring tools.</li>
              <li>Integrate BRA with fraud management systems.</li>
              <li>Conduct continuous risk scoring of users.</li>
              <li>Enable adaptive authentication based on behavior.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              For Users
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Use multi-factor authentication.</li>
              <li>Stay alert to account login notifications.</li>
              <li>Avoid risky clicks and phishing traps.</li>
              <li>Report suspicious activity immediately.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Future of BRA */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Future of Behavioral Risk Analytics
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          With AI, machine learning, and deep behavioral modeling, BRA will
          evolve into a standard layer of cybersecurity and fraud prevention.
          Future applications include IoT monitoring, biometric authentication,
          and real-time adaptive trust scoring, making the digital ecosystem
          safer and more resilient.
        </p>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-12 px-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Stay Ahead with BRA</h3>
          <p className="mb-5 text-blue-100">
            Proactively defend your systems, protect user trust, and reduce risk
            with advanced Behavioral Risk Analytics.
          </p>
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-slate-100 transition">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BehavioralRiskAnalytics;
