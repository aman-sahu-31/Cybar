import React, { useState } from "react";
import { Smartphone, Shield, AlertTriangle, Lock, BarChart, Zap, Clock, UserCheck, FileText, ChevronDown, ChevronUp, Globe, Eye } from "lucide-react";

function AppScam() {
  const [openSection, setOpenSection] = useState(null);
  const [selectedTab, setSelectedTab] = useState("overview");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Scam statistics
  const scamStats = [
    { value: "3.4M+", label: "Mobile apps flagged as malicious yearly", icon: Smartphone },
    { value: "$65B", label: "Global losses from app-related scams", icon: BarChart },
    { value: "70%", label: "Users who can't identify fake apps", icon: AlertTriangle }
  ];

  // Types of scams
  const scamTypes = [
    {
      title: "Fake Banking Apps",
      description: "Apps disguised as official bank apps to steal login credentials and financial data.",
      percentage: "40%",
      icon: Lock
    },
    {
      title: "Subscription Traps",
      description: "Apps that lure users with free trials but secretly charge recurring hidden fees.",
      percentage: "25%",
      icon: FileText
    },
    {
      title: "Spyware Apps",
      description: "Malicious apps that secretly track user activities, calls, and messages.",
      percentage: "20%",
      icon: Eye
    },
    {
      title: "Phishing Apps",
      description: "Applications mimicking popular brands to trick users into entering sensitive details.",
      percentage: "15%",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            App Scam Awareness
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mobile app scams are one of the fastest-growing threats in the digital era. 
            Scammers exploit fake or malicious apps to steal money, data, and personal information. 
            Awareness is the first step to protection.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
            <BarChart className="w-6 h-6 text-indigo-600" /> The Impact of App Scams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scamStats.map((stat, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
                <p className="text-gray-700 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {["overview", "types", "prevention", "response"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium capitalize ${
                selectedTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          {selectedTab === "overview" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" /> 
                Understanding App Scams
              </h2>
              <p className="text-gray-700 mb-4">
                Fraudulent apps mimic legitimate applications to mislead users into downloading them. 
                These scams can drain bank accounts, steal sensitive data, or install malware on devices. 
                Many appear on unofficial app stores but can also slip past security checks on trusted platforms.
              </p>
              <div className="bg-amber-50 p-5 rounded-xl my-6">
                <h3 className="font-semibold text-amber-700 mb-3">How Scammers Operate</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Publishing fake versions of popular apps with slight name changes</li>
                  <li>Embedding malware to steal data or control devices remotely</li>
                  <li>Creating fraudulent apps with promises of rewards or loans</li>
                  <li>Exploiting app permissions to access contacts, SMS, and banking details</li>
                  <li>Using social media ads to spread malicious app links</li>
                </ul>
              </div>
            </div>
          )}

          {selectedTab === "types" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-indigo-500" /> 
                Types of App Scams
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scamTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-xl">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">{type.title}</h3>
                      <span className="bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
                        {type.percentage}
                      </span>
                    </div>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === "prevention" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-500" /> 
                Preventing App Scams
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">For Users</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>Download apps only from trusted stores like Google Play or App Store.</li>
                    <li>Check app reviews, ratings, and publisher details before downloading.</li>
                    <li>Be cautious of apps requesting unnecessary permissions.</li>
                    <li>Keep your phone OS and apps updated for security patches.</li>
                    <li>Install a reputable mobile security app for protection.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">For Businesses</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>Publish apps only through verified developer accounts.</li>
                    <li>Implement strong encryption and code obfuscation.</li>
                    <li>Regularly monitor app stores for fake versions of your app.</li>
                    <li>Educate users about official download sources.</li>
                    <li>Enable multi-factor authentication for app logins.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "response" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-red-500" /> 
                Responding to App Scams
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>Uninstall the suspicious app immediately.</li>
                <li>Change all passwords associated with accounts on your device.</li>
                <li>Report the app to the official store (Google/Apple).</li>
                <li>Contact your bank if financial data was compromised.</li>
                <li>Run a full scan using a mobile security/antivirus app.</li>
              </ol>
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Modern Scam Prevention Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-5 rounded-xl text-center">
              <Zap className="w-6 h-6 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-blue-700 mb-2">AI Detection</h3>
              <p className="text-sm text-gray-700">Analyzes app behavior to identify suspicious activity in real time.</p>
            </div>
            <div className="bg-green-50 p-5 rounded-xl text-center">
              <UserCheck className="w-6 h-6 text-green-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-green-700 mb-2">User Authentication</h3>
              <p className="text-sm text-gray-700">Multi-factor authentication prevents unauthorized account access.</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-xl text-center">
              <Lock className="w-6 h-6 text-purple-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-purple-700 mb-2">App Sandboxing</h3>
              <p className="text-sm text-gray-700">Isolates suspicious apps to prevent them from accessing device data.</p>
            </div>
            <div className="bg-amber-50 p-5 rounded-xl text-center">
              <BarChart className="w-6 h-6 text-amber-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-amber-700 mb-2">Behavioral Analytics</h3>
              <p className="text-sm text-gray-700">Detects unusual patterns that may indicate fraudulent intent.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border rounded-lg">
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
                onClick={() => toggleSection("faq1")}
              >
                <span className="font-medium text-gray-800">How do I spot a fake app?</span>
                {openSection === "faq1" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openSection === "faq1" && (
                <div className="p-4 bg-white border-t text-gray-700">
                  Look for misspellings in the app name, poor reviews, few downloads, and suspicious permissions. 
                  Always download from official app stores only.
                </div>
              )}
            </div>
            <div className="border rounded-lg">
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
                onClick={() => toggleSection("faq2")}
              >
                <span className="font-medium text-gray-800">Are free apps always risky?</span>
                {openSection === "faq2" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openSection === "faq2" && (
                <div className="p-4 bg-white border-t text-gray-700">
                  Not always, but scammers often use “free apps” to lure users. 
                  Verify the developer’s legitimacy before downloading.
                </div>
              )}
            </div>
            <div className="border rounded-lg">
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
                onClick={() => toggleSection("faq3")}
              >
                <span className="font-medium text-gray-800">What should I do if I installed a scam app?</span>
                {openSection === "faq3" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openSection === "faq3" && (
                <div className="p-4 bg-white border-t text-gray-700">
                  Uninstall it immediately, reset your passwords, scan your phone with antivirus software, 
                  and monitor bank accounts for suspicious activity.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Safe from App Scams</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our awareness program and get the latest updates on mobile app security, scam alerts, 
            and protection strategies to keep your data safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
              Join Awareness Program
            </button>
            <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition">
              Download Safety Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppScam;
