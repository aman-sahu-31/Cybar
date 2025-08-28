import React from "react";

export default function Rules() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-600 text-white py-16 px-10 text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Acts & Rules
        </h1>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          Legal framework for monitoring and preventing suspicious transactions in India.  
          Ensuring compliance, transparency, and integrity in the financial system.
        </p>
      </div>

      {/* PMLA 2002 Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Prevention of Money Laundering Act (PMLA), 2002
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The **PMLA, 2002** provides the backbone for anti-money laundering efforts in India.  
            It defines suspicious transactions, mandates reporting, and empowers authorities to track illegal financial activities.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Defines “proceeds of crime”.</li>
            <li>Mandates reporting of suspicious transactions to FIU-IND.</li>
            <li>Prescribes penalties, imprisonment, and attachment of property.</li>
            <li>Empowers investigation & enforcement agencies.</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <img
            src="https://img.freepik.com/free-vector/legal-advice-illustration_1284-74336.jpg"
            alt="PMLA Law Illustration"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* RBI Guidelines */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 order-2 md:order-1">
            <img
              src="https://img.freepik.com/free-vector/mobile-banking-concept_23-2148540437.jpg"
              alt="RBI Guidelines"
              className="rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              RBI Anti-Money Laundering Guidelines
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The **Reserve Bank of India (RBI)** issues guidelines to banks and financial 
              institutions for detecting and reporting suspicious activities.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Know Your Customer (KYC) compliance.</li>
              <li>Record keeping of all transactions above thresholds.</li>
              <li>Customer Due Diligence (CDD) norms.</li>
              <li>Suspicious Transaction Reports (STRs) submission to FIU-IND.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEBI Regulations */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            SEBI Anti-Money Laundering Rules
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The **Securities and Exchange Board of India (SEBI)** regulates suspicious 
            transactions in stock markets and securities trading to prevent misuse.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Regulation of suspicious trades in securities.</li>
            <li>Mandatory KYC norms for investors and brokers.</li>
            <li>Periodic audits & reporting requirements.</li>
            <li>Action against insider trading & fraudulent practices.</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <img
            src="https://img.freepik.com/free-vector/stock-market-concept-illustration_114360-7981.jpg"
            alt="SEBI Rules Illustration"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* FIU-IND Role */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">
            Financial Intelligence Unit – India (FIU-IND)
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            **FIU-IND** is the central agency responsible for receiving, analyzing, 
            and disseminating information about suspicious financial transactions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Collect Suspicious Transaction Reports (STRs).",
              "Monitor large cash transactions.",
              "Share intelligence with enforcement agencies.",
              "Support global AML/CFT initiatives.",
            ].map((point, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Role {i + 1}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-purple-700 text-white text-center py-6 mt-12">
        <p className="text-sm">
          © {new Date().getFullYear()} Government Hackathon Project | Acts &
          Rules on Suspicious Transaction Detection
        </p>
      </footer>
    </div>
  );
}
