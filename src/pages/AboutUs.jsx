import React from "react";
import { FaShieldAlt, FaUsers, FaGlobe, FaAward, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/10 rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-20 px-10 text-center shadow-2xl relative z-10">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
          संदिग्ध लेन-देन पहचान प्रणाली
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-blue-200">
          Suspicious Transaction Detection System
        </h2>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed text-blue-100">
          वित्तीय पारिस्थितिकी तंत्र की सुरक्षा के लिए एक पहल | An initiative to safeguard the financial ecosystem under{" "}
          <span className="font-semibold bg-yellow-400 text-gray-900 px-2 py-1 rounded">PMLA 2002</span>, ensuring transparency,
          accountability, and integrity in economic activities.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">हमारा मिशन</h2>
                <p className="text-lg text-gray-600">Our Mission</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              एक विश्वसनीय पहचान प्रणाली बनाना जो असामान्य लेनदेन की पहचान करे, धन शोधन को रोके, और भारत की वित्तीय स्थिरता को मजबूत बनाने में कानून प्रवर्तन का समर्थन करे।
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              To build a reliable detection system that identifies unusual
              transactions, prevents money laundering, and supports law enforcement
              in strengthening India's financial stability.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-xl border border-orange-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                <FaLightbulb className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">हमारा दृष्टिकोण</h2>
                <p className="text-lg text-gray-600">Our Vision</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              वित्तीय संस्थानों को संदिग्ध गतिविधियों का पता लगाने, नागरिकों की सुरक्षा और एक धोखाधड़ी मुक्त अर्थव्यवस्था बनाने के लिए उपकरणों के साथ सशक्त बनाना।
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              Empower financial institutions with tools to detect suspicious
              activities, protect citizens, and create a fraud-free economy.
            </p>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-xl text-center border border-green-100">
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
              <FaUsers className="text-white text-3xl" />
            </div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">50,000+</h3>
            <p className="text-gray-700 font-semibold">संरक्षित उपयोगकर्ता</p>
            <p className="text-gray-600 text-sm">Protected Users</p>
          </div>
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-xl text-center border border-blue-100">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
              <FaShieldAlt className="text-white text-3xl" />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">99.8%</h3>
            <p className="text-gray-700 font-semibold">सुरक्षा दर</p>
            <p className="text-gray-600 text-sm">Security Rate</p>
          </div>
          <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-xl text-center border border-purple-100">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full w-fit mx-auto mb-4">
              <FaGlobe className="text-white text-3xl" />
            </div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">24/7</h3>
            <p className="text-gray-700 font-semibold">निगरानी सेवा</p>
            <p className="text-gray-600 text-sm">Monitoring Service</p>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              मुख्य उद्देश्य
            </h2>
            <p className="text-2xl font-semibold text-gray-700 mb-4">Key Objectives</p>
            <p className="text-gray-600 max-w-2xl mx-auto">राष्ट्रीय साइबर सुरक्षा लक्ष्य | National Cyber Security Goals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "PMLA 2002 अनुपालन",
                english: "PMLA 2002 Compliance",
                desc: "Ensure compliance with Prevention of Money Laundering Act (PMLA), 2002.",
                icon: <FaAward />,
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                title: "बैंक सहायता",
                english: "Banking Assistance",
                desc: "Assist banks and NBFCs in monitoring unusual transaction patterns.",
                icon: <FaHandshake />,
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "जोखिम कमी",
                english: "Risk Reduction",
                desc: "Reduce risks of fraud, terrorist financing, and illegal activities.",
                icon: <FaShieldAlt />,
                gradient: "from-red-500 to-pink-500"
              },
              {
                title: "वित्तीय पारदर्शिता",
                english: "Financial Transparency",
                desc: "Promote financial transparency & strengthen citizen trust.",
                icon: <FaLightbulb />,
                gradient: "from-yellow-500 to-orange-500"
              },
            ].map((objective, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className={`p-3 bg-gradient-to-r ${objective.gradient} rounded-xl w-fit mx-auto mb-4 shadow-lg`}>
                  <div className="text-white text-2xl">{objective.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {objective.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-3">{objective.english}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {objective.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Definition Section */}
      <div className="bg-gradient-to-r from-slate-100 to-blue-100 py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              संदिग्ध लेनदेन क्या है?
            </h2>
            <p className="text-2xl font-semibold text-gray-700">What is a Suspicious Transaction?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                संदिग्ध लेनदेन कोई भी वित्तीय गतिविधि है जो अपनी वैधता, जटिलता या आर्थिक उद्देश्य के बारे में संदेह पैदा करती है।
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                A suspicious transaction is any financial activity that raises doubts
                about its legitimacy, complexity, or economic purpose.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">पहचान के संकेत | Identification Signs:</h3>
                {[
                  { hindi: "अपराध की आय या अवैध स्रोत शामिल", english: "Involve proceeds of crime or illegal sources" },
                  { hindi: "असामान्य रूप से जटिल या अनुचित", english: "Appear unusually complex or unjustified" },
                  { hindi: "स्पष्ट आर्थिक तर्क का अभाव", english: "Lack clear economic rationale or purpose" },
                  { hindi: "संभावित धन शोधन या धोखाधड़ी", english: "Indicate potential money laundering or fraud" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800">{item.hindi}</p>
                      <p className="text-sm text-gray-600 italic">{item.english}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-2xl shadow-xl border border-indigo-100">
              <img
                src="https://img.freepik.com/free-vector/financial-analytics-concept-illustration_114360-7966.jpg"
                alt="Suspicious transaction analytics"
                className="rounded-2xl shadow-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">विश्लेषण और पहचान</h3>
                <p className="text-gray-600">Advanced Analytics & Detection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2 text-orange-400">संपर्क जानकारी</h3>
              <p className="text-blue-200 text-sm">Contact Information</p>
              <p className="text-sm text-blue-100 mt-2">cyber.security@gov.in</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2 text-green-400">आपातकालीन हॉटलाइन</h3>
              <p className="text-blue-200 text-sm">Emergency Hotline</p>
              <p className="text-sm text-blue-100 mt-2">1930 (Cyber Crime)</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">कार्यालय समय</h3>
              <p className="text-blue-200 text-sm">Office Hours</p>
              <p className="text-sm text-blue-100 mt-2">24/7 Monitoring</p>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-6 text-center">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} साइबर सुरक्षा विभाग | Cyber Security Department | 
              संदिग्ध लेन-देन पहचान प्रणाली | Suspicious Transaction Detection System
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
