import React, { useState } from "react";
import { Smartphone, Shield, AlertTriangle, Lock, BarChart, Zap, Clock, UserCheck, FileText, ChevronDown, ChevronUp, Globe, Eye, Phone, Mail } from "lucide-react";

function AppScam() {
  const [openSection, setOpenSection] = useState(null);
  const [selectedTab, setSelectedTab] = useState("overview");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Indian app scam statistics
  const scamStats = [
    { value: "2.8L+", label: "ऐप्स से होने वाले साइबर अपराध / App-based cyber crimes reported", icon: Smartphone },
    { value: "₹4,200Cr", label: "वार्षिक नुकसान / Annual losses from app scams", icon: BarChart },
    { value: "65%", label: "उपयोगकर्ता जो नकली ऐप्स की पहचान नहीं कर सकते / Users unable to identify fake apps", icon: AlertTriangle }
  ];

  // Types of scams with Indian context
  const scamTypes = [
    {
      title: "नकली बैंकिंग ऐप्स / Fake Banking Apps",
      description: "आधिकारिक बैंक ऐप्स के रूप में छुपे हुए ऐप्स जो लॉगिन क्रेडेंशियल और वित्तीय डेटा चुराते हैं।",
      englishDesc: "Apps disguised as official bank apps to steal login credentials and financial data.",
      percentage: "42%",
      icon: Lock
    },
    {
      title: "लोन ऐप स्कैम / Loan App Scams",
      description: "त्वरित लोन के नाम पर व्यक्तिगत जानकारी चुराने वाले ऐप्स।",
      englishDesc: "Apps promising quick loans but stealing personal information and harassing users.",
      percentage: "28%",
      icon: FileText
    },
    {
      title: "स्पाइवेयर ऐप्स / Spyware Apps",
      description: "गुप्त रूप से उपयोगकर्ता की गतिविधियों, कॉल और संदेशों को ट्रैक करने वाले ऐप्स।",
      englishDesc: "Malicious apps that secretly track user activities, calls, and messages.",
      percentage: "18%",
      icon: Eye
    },
    {
      title: "फिशिंग ऐप्स / Phishing Apps",
      description: "लोकप्रिय ब्रांडों की नकल करके संवेदनशील विवरण चुराने वाले ऐप्स।",
      englishDesc: "Applications mimicking popular brands to trick users into entering sensitive details.",
      percentage: "12%",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Digital India
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Cyber Suraksha
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent mb-2">
            ऐप स्कैम जागरूकता
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            App Scam Awareness & Prevention
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            मोबाइल ऐप स्कैम डिजिटल युग में सबसे तेजी से बढ़ते खतरों में से एक हैं। स्कैमर नकली या दुर्भावनापूर्ण ऐप्स का उपयोग करके पैसे, डेटा और व्यक्तिगत जानकारी चुराते हैं।
            <br />
            <span className="text-indigo-600 font-medium">Mobile app scams are among the fastest-growing threats in the digital era. Awareness and vigilance are your first line of defense.</span>
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
            <BarChart className="w-6 h-6 text-indigo-600" /> 
            ऐप स्कैम का प्रभाव / Impact of App Scams in India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scamStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-green-50 p-6 rounded-xl text-center border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 p-3 rounded-full inline-flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { key: "overview", label: "अवलोकन / Overview" },
            { key: "types", label: "प्रकार / Types" },
            { key: "prevention", label: "बचाव / Prevention" },
            { key: "response", label: "प्रतिक्रिया / Response" }
          ].map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedTab === tab.key
                  ? "bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-orange-300 hover:shadow-md"
              }`}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          {selectedTab === "overview" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" /> 
                ऐप स्कैम को समझना / Understanding App Scams
              </h2>
              <p className="text-gray-700 mb-4">
                <span className="font-medium text-indigo-600">धोखाधड़ी वाले ऐप्स</span> वैध एप्लिकेशन की नकल करके उपयोगकर्ताओं को डाउनलोड करने के लिए गुमराह करते हैं। 
                ये स्कैम बैंक खाते खाली कर सकते हैं, संवेदनशील डेटा चुरा सकते हैं, या डिवाइस पर मैलवेयर इंस्टॉल कर सकते हैं।
              </p>
              <p className="text-gray-600 mb-6 italic">
                Fraudulent apps mimic legitimate applications to mislead users. These scams can drain bank accounts, 
                steal sensitive data, or install malware on devices.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                <h3 className="font-semibold text-amber-700 mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  स्कैमर कैसे काम करते हैं / How Scammers Operate
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>नकली ऐप्स प्रकाशित करना:</strong> लोकप्रिय ऐप्स के नाम में थोड़ा बदलाव करके नकली संस्करण बनाना</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>मैलवेयर एम्बेड करना:</strong> डेटा चुराने या डिवाइस को दूर से नियंत्रित करने के लिए</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>लोन ऐप्स:</strong> त्वरित लोन और पुरस्कार के वादे के साथ धोखाधड़ी वाले ऐप्स बनाना</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>अनुमतियों का दुरुपयोग:</strong> संपर्क, SMS और बैंकिंग विवरण तक पहुंच प्राप्त करना</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>सोशल मीडिया विज्ञापन:</strong> दुर्भावनापूर्ण ऐप लिंक फैलाने के लिए</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {selectedTab === "types" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-indigo-500" /> 
                ऐप स्कैम के प्रकार / Types of App Scams
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scamTypes.map((type, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-orange-500 to-green-500 p-2 rounded-lg">
                          <type.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800 text-lg">{type.title}</h3>
                      </div>
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                        {type.percentage}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">{type.description}</p>
                    <p className="text-gray-600 text-sm italic">{type.englishDesc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === "prevention" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-500" /> 
                ऐप स्कैम से बचाव / Preventing App Scams
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-medium text-green-700 mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5" />
                    उपयोगकर्ताओं के लिए / For Users
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>केवल विश्वसनीय स्टोर से डाउनलोड करें:</strong> Google Play Store या Apple App Store से ही ऐप्स डाउनलोड करें</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>समीक्षा और रेटिंग जांचें:</strong> डाउनलोड से पहले ऐप की समीक्षा, रेटिंग और प्रकाशक विवरण देखें</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>अनुमतियों से सावधान रहें:</strong> अनावश्यक अनुमतियां मांगने वाले ऐप्स से बचें</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>अपडेट रखें:</strong> सुरक्षा पैच के लिए अपने फोन OS और ऐप्स को अपडेट रखें</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>सुरक्षा ऐप इंस्टॉल करें:</strong> प्रतिष्ठित मोबाइल सुरक्षा ऐप का उपयोग करें</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-medium text-blue-700 mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    व्यवसायों के लिए / For Businesses
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>सत्यापित डेवलपर खाते:</strong> केवल सत्यापित डेवलपर खातों के माध्यम से ऐप्स प्रकाशित करें</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>मजबूत एन्क्रिप्शन:</strong> कोड एन्क्रिप्शन और obfuscation लागू करें</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>नियमित निगरानी:</strong> अपने ऐप के नकली संस्करणों के लिए ऐप स्टोर की निगरानी करें</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>उपयोगकर्ता शिक्षा:</strong> आधिकारिक डाउनलोड स्रोतों के बारे में उपयोगकर्ताओं को शिक्षित करें</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>बहु-कारक प्रमाणीकरण:</strong> ऐप लॉगिन के लिए MFA सक्षम करें</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "response" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-red-500" /> 
                ऐप स्कैम की स्थिति में प्रतिक्रिया / Responding to App Scams
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 mb-6">
                <h3 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  तत्काल कार्रवाई / Immediate Actions
                </h3>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full min-w-[24px] text-center">1</span>
                    <div>
                      <strong>संदिग्ध ऐप को तुरंत अनइंस्टॉल करें</strong>
                      <p className="text-sm text-gray-600 mt-1">Uninstall the suspicious app immediately</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded-full min-w-[24px] text-center">2</span>
                    <div>
                      <strong>सभी पासवर्ड बदलें</strong>
                      <p className="text-sm text-gray-600 mt-1">Change all passwords associated with accounts on your device</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full min-w-[24px] text-center">3</span>
                    <div>
                      <strong>ऐप स्टोर में रिपोर्ट करें</strong>
                      <p className="text-sm text-gray-600 mt-1">Report the app to Google Play Store/Apple App Store</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded-full min-w-[24px] text-center">4</span>
                    <div>
                      <strong>बैंक से संपर्क करें</strong>
                      <p className="text-sm text-gray-600 mt-1">Contact your bank if financial data was compromised</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white text-sm font-bold px-2 py-1 rounded-full min-w-[24px] text-center">5</span>
                    <div>
                      <strong>सुरक्षा स्कैन चलाएं</strong>
                      <p className="text-sm text-gray-600 mt-1">Run a full scan using mobile security/antivirus app</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-blue-700 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  आपातकालीन संपर्क / Emergency Contacts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <p className="font-medium text-gray-800">साइबर क्राइम हेल्पलाइन</p>
                    <p className="text-blue-600 font-bold">1930</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <p className="font-medium text-gray-800">I4C Portal</p>
                    <p className="text-blue-600 font-bold">cybercrime.gov.in</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            आधुनिक स्कैम रोकथाम तकनीकें / Modern Scam Prevention Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-blue-700 mb-2">AI Detection</h3>
              <p className="text-sm text-gray-700">संदिग्ध गतिविधि की पहचान के लिए AI-आधारित विश्लेषण</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-green-700 mb-2">User Authentication</h3>
              <p className="text-sm text-gray-700">बहु-कारक प्रमाणीकरण सुरक्षा</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-purple-700 mb-2">App Sandboxing</h3>
              <p className="text-sm text-gray-700">संदिग्ध ऐप्स को अलग करना</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl text-center border border-amber-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-amber-700 mb-2">Behavioral Analytics</h3>
              <p className="text-sm text-gray-700">व्यवहारिक पैटर्न विश्लेषण</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            अक्सर पूछे जाने वाले प्रश्न / Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border border-orange-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gradient-to-r from-orange-50 to-green-50 hover:from-orange-100 hover:to-green-100 transition-all duration-300"
                onClick={() => toggleSection("faq1")}
              >
                <span className="font-medium text-gray-800">नकली ऐप की पहचान कैसे करें? / How do I spot a fake app?</span>
                {openSection === "faq1" ? <ChevronUp className="text-orange-600" /> : <ChevronDown className="text-orange-600" />}
              </button>
              {openSection === "faq1" && (
                <div className="p-4 bg-white border-t border-orange-200 text-gray-700">
                  <p className="mb-2"><strong>हिंदी:</strong> ऐप के नाम में गलत वर्तनी, खराब समीक्षा, कम डाउनलोड और संदिग्ध अनुमतियों को देखें। हमेशा आधिकारिक ऐप स्टोर से ही डाउनलोड करें।</p>
                  <p><strong>English:</strong> Look for misspellings in the app name, poor reviews, few downloads, and suspicious permissions. Always download from official app stores only.</p>
                </div>
              )}
            </div>
            <div className="border border-blue-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                onClick={() => toggleSection("faq2")}
              >
                <span className="font-medium text-gray-800">क्या मुफ्त ऐप्स हमेशा जोखिम भरे होते हैं? / Are free apps always risky?</span>
                {openSection === "faq2" ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
              </button>
              {openSection === "faq2" && (
                <div className="p-4 bg-white border-t border-blue-200 text-gray-700">
                  <p className="mb-2"><strong>हिंदी:</strong> हमेशा नहीं, लेकिन स्कैमर अक्सर "मुफ्त ऐप्स" का उपयोग करके उपयोगकर्ताओं को लुभाते हैं। डाउनलोड से पहले डेवलपर की वैधता सत्यापित करें।</p>
                  <p><strong>English:</strong> Not always, but scammers often use "free apps" to lure users. Verify the developer's legitimacy before downloading.</p>
                </div>
              )}
            </div>
            <div className="border border-red-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 transition-all duration-300"
                onClick={() => toggleSection("faq3")}
              >
                <span className="font-medium text-gray-800">अगर मैंने स्कैम ऐप इंस्टॉल किया है तो क्या करूं? / What if I installed a scam app?</span>
                {openSection === "faq3" ? <ChevronUp className="text-red-600" /> : <ChevronDown className="text-red-600" />}
              </button>
              {openSection === "faq3" && (
                <div className="p-4 bg-white border-t border-red-200 text-gray-700">
                  <p className="mb-2"><strong>हिंदी:</strong> इसे तुरंत अनइंस्टॉल करें, अपने पासवर्ड रीसेट करें, एंटीवायरस सॉफ्टवेयर से फोन स्कैन करें, और संदिग्ध गतिविधि के लिए बैंक खातों की निगरानी करें।</p>
                  <p><strong>English:</strong> Uninstall it immediately, reset your passwords, scan your phone with antivirus software, and monitor bank accounts for suspicious activity.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 text-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            ऐप स्कैम से सुरक्षित रहें
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Stay Safe from App Scams</h3>
          <p className="mb-6 max-w-2xl mx-auto text-gray-700">
            हमारे जागरूकता कार्यक्रम में शामिल हों और मोबाइल ऐप सुरक्षा, स्कैम अलर्ट और सुरक्षा रणनीतियों के नवीनतम अपडेट प्राप्त करें।
            <br />
            <span className="text-indigo-600 font-medium">Join our awareness program for the latest mobile app security updates and protection strategies.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              जागरूकता कार्यक्रम में शामिल हों / Join Program
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              सुरक्षा गाइड डाउनलोड करें / Download Guide
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-gray-600">हेल्पलाइन: <strong className="text-blue-600">1930</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">Portal: <strong className="text-green-600">cybercrime.gov.in</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppScam;
