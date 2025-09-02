import React from "react";
import { FaGavel, FaUniversity, FaEye, FaShieldAlt, FaBalanceScale, FaFileContract, FaFlag, FaChartLine, FaExclamationTriangle, FaUserShield, FaDatabase, FaNetworkWired, FaLock, FaCertificate, FaClipboardCheck, FaSearch } from "react-icons/fa";

export default function Rules() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 text-center py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-blue-900/90"></div>
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-4 mb-6">
            <FaFlag className="text-orange-400 text-4xl" />
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              साइबर सुरक्षा नियम
            </h1>
            <FaFlag className="text-green-400 text-4xl" />
          </div>
          <p className="text-2xl font-semibold text-orange-200 mb-4">Cyber Security Rules</p>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            भारत में साइबर सुरक्षा, डिजिटल अपराध रोकथाम और वित्तीय धोखाधड़ी के खिलाफ व्यापक कानूनी ढांचा।
          </p>
          <p className="text-blue-200 max-w-4xl mx-auto leading-relaxed mt-2">
            Comprehensive legal framework against cyber security threats, digital crime prevention and financial fraud in India.
          </p>
        </div>
      </div>

      {/* Cyber Security Rules Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "धन शोधन निवारण अधिनियम",
              english: "Prevention of Money Laundering Act (PMLA), 2002",
              desc: "संदिग्ध वित्तीय लेनदेन की पहचान, रिपोर्टिंग और जांच के लिए व्यापक कानूनी ढांचा। अपराध की आय की जब्ती और दोषियों के लिए कड़ी सजा।",
              englishDesc: "Comprehensive legal framework for identifying, reporting and investigating suspicious financial transactions. Confiscation of proceeds of crime and strict punishment for offenders.",
              icon: <FaBalanceScale />,
              gradient: "from-blue-500 to-indigo-600",
              bgGradient: "from-blue-50 to-indigo-50"
            },
            {
              title: "सूचना प्रौद्योगिकी अधिनियम",
              english: "Information Technology Act, 2000 (Amended 2008)",
              desc: "साइबर अपराध, डेटा चोरी, हैकिंग और डिजिटल धोखाधड़ी के खिलाफ कानूनी सुरक्षा। इलेक्ट्रॉनिक लेनदेन की सुरक्षा और डिजिटल साक्ष्य की वैधता।",
              englishDesc: "Legal protection against cyber crimes, data theft, hacking and digital fraud. Security of electronic transactions and validity of digital evidence.",
              icon: <FaDatabase />,
              gradient: "from-green-500 to-emerald-600",
              bgGradient: "from-green-50 to-emerald-50"
            },
            {
              title: "विदेशी मुद्रा प्रबंधन अधिनियम",
              english: "Foreign Exchange Management Act (FEMA), 1999",
              desc: "विदेशी मुद्रा लेनदेन का नियंत्रण, अवैध फॉरेक्स डीलिंग की रोकथाम और सीमा पार वित्तीय गतिविधियों की निगरानी।",
              englishDesc: "Control of foreign exchange transactions, prevention of illegal forex dealing and monitoring of cross-border financial activities.",
              icon: <FaNetworkWired />,
              gradient: "from-purple-500 to-pink-600",
              bgGradient: "from-purple-50 to-pink-50"
            },
            {
              title: "बैंकिंग विनियमन अधिनियम",
              english: "Banking Regulation Act, 1949",
              desc: "बैंकिंग संचालन का नियंत्रण, ग्राहक सुरक्षा, संदिग्ध गतिविधि रिपोर्टिंग और वित्तीय संस्थानों के लिए अनुपालन मानक।",
              englishDesc: "Control of banking operations, customer protection, suspicious activity reporting and compliance standards for financial institutions.",
              icon: <FaUniversity />,
              gradient: "from-red-500 to-orange-600",
              bgGradient: "from-red-50 to-orange-50"
            },
            {
              title: "साइबर सुरक्षा नीति",
              english: "National Cyber Security Policy, 2013",
              desc: "राष्ट्रीय साइबर सुरक्षा रणनीति, महत्वपूर्ण अवसंरचना सुरक्षा, साइबर खतरा प्रबंधन और डिजिटल भारत सुरक्षा।",
              englishDesc: "National cyber security strategy, critical infrastructure protection, cyber threat management and Digital India security.",
              icon: <FaShieldAlt />,
              gradient: "from-teal-500 to-cyan-600",
              bgGradient: "from-teal-50 to-cyan-50"
            },
            {
              title: "डिजिटल व्यक्तिगत डेटा संरक्षण",
              english: "Digital Personal Data Protection Act, 2023",
              desc: "व्यक्तिगत डेटा की सुरक्षा, गोपनीयता अधिकार, डेटा उल्लंघन की रोकथाम और डिजिटल अधिकारों का संरक्षण।",
              englishDesc: "Protection of personal data, privacy rights, prevention of data breaches and protection of digital rights.",
              icon: <FaLock />,
              gradient: "from-yellow-500 to-amber-600",
              bgGradient: "from-yellow-50 to-amber-50"
            }
          ].map((rule, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${rule.bgGradient} p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200`}
            >
              <div className={`p-4 bg-gradient-to-r ${rule.gradient} rounded-xl w-fit mx-auto mb-6 shadow-lg`}>
                <div className="text-white text-3xl">{rule.icon}</div>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {rule.title}
              </h2>
              <p className="text-lg font-semibold text-gray-600 mb-4 text-center">{rule.english}</p>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {rule.desc}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm italic border-t pt-3">
                  {rule.englishDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction Thresholds & Red Flags */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            लेनदेन सीमा और चेतावनी संकेत | Transaction Thresholds & Red Flags
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaExclamationTriangle className="text-red-600 mr-3" />
                Reporting Thresholds
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-red-700">Cash Transactions: ₹10 Lakhs</h4>
                  <p className="text-sm text-gray-600">Single or series of connected transactions</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-orange-700">Cross-border: ₹5 Lakhs</h4>
                  <p className="text-sm text-gray-600">International wire transfers and remittances</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-blue-700">Digital Transactions: ₹50 Lakhs</h4>
                  <p className="text-sm text-gray-600">UPI, NEFT, RTGS transactions</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-purple-700">Suspicious Activity: Any Amount</h4>
                  <p className="text-sm text-gray-600">Regardless of transaction value</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaSearch className="text-blue-600 mr-3" />
                Common Red Flags
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FaFlag className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Multiple transactions just below reporting thresholds</span>
                </li>
                <li className="flex items-start">
                  <FaFlag className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Unusual transaction patterns or timing</span>
                </li>
                <li className="flex items-start">
                  <FaFlag className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Transactions inconsistent with customer profile</span>
                </li>
                <li className="flex items-start">
                  <FaFlag className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Use of multiple accounts for single transaction</span>
                </li>
                <li className="flex items-start">
                  <FaFlag className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Rapid movement of funds between accounts</span>
                </li>
                <li className="flex items-start">
                  <FaFlag className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Transactions with high-risk countries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Government Enforcement Agencies */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          प्रवर्तन एजेंसियां | Enforcement Agencies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaSearch className="text-4xl text-blue-600 mb-4" />,
              name: "Enforcement Directorate (ED)",
              nameHindi: "प्रवर्तन निदेशालय",
              role: "Investigates money laundering cases under PMLA",
              powers: ["Asset attachment", "Search & seizure", "Arrest powers", "International cooperation"]
            },
            {
              icon: <FaEye className="text-4xl text-green-600 mb-4" />,
              name: "Central Bureau of Investigation (CBI)",
              nameHindi: "केंद्रीय जांच ब्यूरो",
              role: "Investigates financial crimes and corruption",
              powers: ["Criminal investigation", "Inter-state cases", "Banking frauds", "Corruption cases"]
            },
            {
              icon: <FaNetworkWired className="text-4xl text-purple-600 mb-4" />,
              name: "Financial Intelligence Unit (FIU-IND)",
              nameHindi: "वित्तीय खुफिया इकाई",
              role: "Central agency for financial intelligence",
              powers: ["STR analysis", "Intelligence sharing", "Pattern recognition", "International coordination"]
            },
            {
              icon: <FaFlag className="text-4xl text-orange-600 mb-4" />,
              name: "Income Tax Department",
              nameHindi: "आयकर विभाग",
              role: "Monitors tax evasion and undisclosed income",
              powers: ["Tax investigations", "Asset verification", "Penalty imposition", "Prosecution"]
            }
          ].map((agency, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                {agency.icon}
                <h3 className="text-lg font-bold text-gray-800 mb-1">{agency.name}</h3>
                <p className="text-sm text-orange-600 font-semibold mb-3">{agency.nameHindi}</p>
                <p className="text-xs text-gray-600 mb-4">{agency.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Powers:</h4>
                <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                  {agency.powers.map((power, j) => (
                    <li key={j}>{power}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Requirements */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            अनुपालन आवश्यकताएं | Compliance Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Banking Sector</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FaCertificate className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>KYC Compliance:</strong> Mandatory customer verification and documentation</span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>STR Filing:</strong> Report suspicious transactions within 7 days</span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Cash Transaction Reporting:</strong> Report cash transactions above ₹10 lakhs</span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Record Maintenance:</strong> Maintain transaction records for 5 years</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaChartLine className="text-3xl text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Securities Market</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FaCertificate className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Trade Monitoring:</strong> Real-time surveillance of unusual trading patterns</span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Investor KYC:</strong> Enhanced due diligence for high-value transactions</span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Insider Trading Prevention:</strong> Monitor and prevent unauthorized trading</span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Market Manipulation:</strong> Detect and report suspicious market activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Penalties and Enforcement */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          दंड और प्रवर्तन | Penalties & Enforcement
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-2xl text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-red-800">Money Laundering</h3>
            </div>
            <ul className="text-red-700 space-y-2 text-sm">
              <li><strong>Imprisonment:</strong> 3-7 years</li>
              <li><strong>Fine:</strong> Up to ₹5 lakhs</li>
              <li><strong>Asset Forfeiture:</strong> Proceeds of crime</li>
              <li><strong>Additional:</strong> Disqualification from holding office</li>
            </ul>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FaFileContract className="text-2xl text-orange-600 mr-3" />
              <h3 className="text-xl font-bold text-orange-800">Non-Compliance</h3>
            </div>
            <ul className="text-orange-700 space-y-2 text-sm">
              <li><strong>Monetary Penalty:</strong> ₹10,000 to ₹1 lakh per day</li>
              <li><strong>License Suspension:</strong> Temporary or permanent</li>
              <li><strong>Criminal Liability:</strong> For willful non-compliance</li>
              <li><strong>Regulatory Action:</strong> RBI/SEBI sanctions</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FaLock className="text-2xl text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-blue-800">Asset Freezing</h3>
            </div>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li><strong>Provisional Attachment:</strong> Immediate asset freezing</li>
              <li><strong>Confiscation:</strong> Court-ordered asset seizure</li>
              <li><strong>International Cooperation:</strong> Cross-border asset recovery</li>
              <li><strong>Victim Compensation:</strong> Asset distribution to victims</li>
            </ul>
          </div>
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

      {/* Government Reporting Mechanisms */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            सरकारी रिपोर्टिंग तंत्र | Government Reporting Mechanisms
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Mandatory Reporting Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaFileContract className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Suspicious Transaction Reports (STRs)</h4>
                    <p className="text-sm text-gray-600">Must be filed within 7 days of detection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaFileContract className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Cash Transaction Reports (CTRs)</h4>
                    <p className="text-sm text-gray-600">For transactions above ₹10 lakhs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaFileContract className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Cross-border Transaction Reports</h4>
                    <p className="text-sm text-gray-600">For international wire transfers above ₹5 lakhs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Digital Reporting Portal</h3>
              <p className="text-gray-700 mb-4">
                Government's unified digital platform for all financial intelligence reporting
              </p>
              <ul className="list-disc pl-4 text-gray-700 space-y-2 text-sm">
                <li>24/7 online submission system</li>
                <li>Real-time validation and acknowledgment</li>
                <li>Secure encrypted data transmission</li>
                <li>Automated compliance tracking</li>
                <li>Integration with enforcement databases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Guidelines */}
      <div className="bg-gradient-to-r from-gray-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            कार्यान्वयन दिशानिर्देश | Implementation Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaClipboardCheck className="text-green-600 mr-3" />
                For Financial Institutions
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="font-bold text-green-800 mb-2">Daily Operations</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Monitor all transactions in real-time</li>
                    <li>• Maintain updated customer risk profiles</li>
                    <li>• Conduct periodic KYC reviews</li>
                    <li>• Train staff on suspicious activity detection</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">Reporting Obligations</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• File STRs within 7 days of detection</li>
                    <li>• Submit CTRs for cash transactions ≥ ₹10L</li>
                    <li>• Report cross-border transfers ≥ ₹5L</li>
                    <li>• Maintain audit trails for 5 years</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUserShield className="text-purple-600 mr-3" />
                For Government Officials
              </h3>
              <div className="space-y-4">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <h4 className="font-bold text-purple-800 mb-2">Investigation Process</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Analyze STR patterns and trends</li>
                    <li>• Coordinate with multiple agencies</li>
                    <li>• Follow due process for asset attachment</li>
                    <li>• Maintain case documentation standards</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <h4 className="font-bold text-orange-800 mb-2">Inter-Agency Coordination</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Share intelligence with relevant agencies</li>
                    <li>• Coordinate joint operations when needed</li>
                    <li>• Ensure data security and confidentiality</li>
                    <li>• Follow international cooperation protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference Guide */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          त्वरित संदर्भ गाइड | Quick Reference Guide
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <FaExclamationTriangle className="mr-3" />
              Immediate Action Required
            </h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li>• Suspicious transaction detected</li>
              <li>• File STR within 7 days</li>
              <li>• Preserve all transaction records</li>
              <li>• Do not alert the customer</li>
              <li>• Coordinate with compliance officer</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
              <FaClipboardCheck className="mr-3" />
              Regular Compliance
            </h3>
            <ul className="space-y-2 text-orange-700 text-sm">
              <li>• Conduct monthly KYC reviews</li>
              <li>• Update customer risk assessments</li>
              <li>• Train staff quarterly</li>
              <li>• Audit transaction monitoring systems</li>
              <li>• Review and update policies annually</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <FaShieldAlt className="mr-3" />
              Best Practices
            </h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• Implement robust transaction monitoring</li>
              <li>• Maintain comprehensive audit trails</li>
              <li>• Ensure data security and confidentiality</li>
              <li>• Regular staff training and awareness</li>
              <li>• Proactive risk assessment updates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            संपर्क जानकारी | Contact Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                agency: "FIU-IND",
                phone: "011-23092136",
                email: "fiuindia@nic.in",
                address: "6th Floor, Hotel Samrat, Chanakyapuri, New Delhi"
              },
              {
                agency: "Enforcement Directorate",
                phone: "011-24651000",
                email: "ed.hq@gov.in",
                address: "Lok Nayak Bhawan, Khan Market, New Delhi"
              },
              {
                agency: "RBI (AML Division)",
                phone: "022-22610261",
                email: "amlcell@rbi.org.in",
                address: "Central Office, Shahid Bhagat Singh Road, Mumbai"
              },
              {
                agency: "SEBI (Investigation)",
                phone: "022-26449000",
                email: "sebi@sebi.gov.in",
                address: "SEBI Bhavan, Plot No.C4-A, Bandra Kurla Complex, Mumbai"
              }
            ].map((contact, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3 text-yellow-300">{contact.agency}</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Phone:</strong> {contact.phone}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Address:</strong> {contact.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">साइबर सुरक्षा नियम प्रणाली</h3>
            <p className="text-blue-200 text-sm">Cyber Security Rules System</p>
          </div>
          <div className="border-t border-blue-700 pt-4">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} साइबर सुरक्षा विभाग | Cyber Security Department | 
              सरकारी नियम प्रबंधन प्रणाली | Government Rules Management System
            </p>
            <p className="text-xs text-blue-300 mt-2">
              भारत सरकार के तहत विकसित | Developed under Government of India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
