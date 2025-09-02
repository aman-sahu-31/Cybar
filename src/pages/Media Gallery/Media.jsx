import React, { useState } from "react";
import {
  Shield,
  Eye,
  Users,
  Lock,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Globe,
  Phone,
  Mail,
  Activity,
  BarChart3,
  Zap,
  Bot
} from "lucide-react";

export default function FraudPrevention() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const topAccordions = [
    {
      title: "परिचालन साइलो को एकजुट करें",
      subtitle: "Unite Operational Silos",
      icon: <Users className="w-5 h-5" />,
      content:
        "हमारा सिस्टम ग्राहक का एक एकीकृत दृश्य बनाता है जिसका उपयोग कई व्यावसायिक इकाइयों द्वारा किया जा सकता है। नेटवर्क स्तर पर, सुरक्षा टीमें अधिक संदर्भ-जागरूक जोखिम निर्णय ले सकती हैं। धोखाधड़ी टीमों को प्रत्येक डिजिटल इंटरैक्शन में उपयोगकर्ता के इरादे की गहरी दृश्यता मिलती है।",
    },
    {
      title: "ग्राहक यात्रा व्यवस्थापन",
      subtitle: "Customer Journey Orchestration",
      icon: <Activity className="w-5 h-5" />,
      content:
        "कई सिस्टम में उपयोगकर्ता यात्राओं के व्यवस्थापन को सुव्यवस्थित करें। विश्वास से समझौता किए बिना ग्राहक इंटरैक्शन की बेहतर दृश्यता और नियंत्रण प्राप्त करें।",
    },
    {
      title: "भविष्य-प्रूफ, लचीला जोखिम प्रबंधन",
      subtitle: "Future-proofed, Resilient Risk Management",
      icon: <Shield className="w-5 h-5" />,
      content:
        "एक जोखिम प्रबंधन रणनीति बनाएं जो वैध उपयोगकर्ताओं के लिए घर्षण को कम करते हुए विकसित धोखाधड़ी खतरों के अनुकूल हो।",
    },
  ];

  const bottomAccordions = [
    {
      title: "निर्बाध खाता खोलना और ऑनबोर्डिंग",
      subtitle: "Frictionless Account Opening & Onboarding",
      icon: <CheckCircle className="w-5 h-5" />,
      content:
        "नए खाता आवेदन से पहले ब्राउज़िंग व्यवहार का उपयोग करके उच्च जोखिम/असामान्य व्यवहार का पता लगाएं। बॉट या धोखाधड़ी फार्म से खाता निर्माण की पहचान और ब्लॉक करें। वैध ग्राहकों के लिए सुव्यवस्थित ऑनबोर्डिंग सुनिश्चित करें।",
    },
    {
      title: "ATO और क्रेडेंशियल स्टफिंग रोकें",
      subtitle: "Stop ATOs and Credential Stuffing",
      icon: <Lock className="w-5 h-5" />,
      content:
        "व्यवहारिक विश्लेषण और विसंगति का पता लगाने के साथ खाता अधिग्रहण के प्रयासों और क्रेडेंशियल स्टफिंग हमलों को रोकें।",
    },
    {
      title: "सामाजिक इंजीनियरिंग का पता लगाएं",
      subtitle: "Detect & Deter Social Engineering",
      icon: <AlertTriangle className="w-5 h-5" />,
      content:
        "ग्राहकों को धोखाधड़ी से बचाने के लिए वास्तविक समय में सामाजिक इंजीनियरिंग पैटर्न की पहचान करें।",
    },
    {
      title: "लचीला, एज-आधारित आर्किटेक्चर",
      subtitle: "Flexible, Edge-Based Architecture",
      icon: <Globe className="w-5 h-5" />,
      content:
        "अनावश्यक विलंबता जोड़े बिना तेज़, अधिक विश्वसनीय सुरक्षा के लिए अपने उपयोगकर्ताओं के करीब धोखाधड़ी का पता लगाने की तैनाती करें।",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Government Badges */}
      <div className="flex justify-center gap-4 pt-6 mb-8">
        <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-bold text-gray-800">🇮🇳 Digital India</span>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-bold text-white">🛡️ Cyber Suraksha</span>
        </div>
      </div>

      {/* ---------------- TOP HEADING ---------------- */}
      <div className="py-6 px-6 max-w-6xl mx-auto text-center mb-8">
        <div className="mb-5">
          <span className="inline-block bg-gradient-to-r from-orange-100 to-green-100 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold border border-orange-200">
            बुद्धिमत्ता और विश्लेषण / Intelligence & Analytics
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
          संपूर्ण ग्राहक यात्रा की बेहतर सुरक्षा के लिए
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
          बुद्धिमत्ता और विश्लेषण को एकजुट करें
        </h3>
        <h4 className="text-xl font-medium mb-6 text-gray-600">
          Unify Intelligence and Analytics to Better Protect the Complete Customer Journey
        </h4>
        <p className="text-gray-700 text-md max-w-4xl mx-auto leading-relaxed mb-4">
          डिजिटल वॉलेट, क्रिप्टोकरेंसी और नव-बैंक धोखाधड़ी करने वालों के मुख्य लक्ष्य हैं जो व्यावसायिक प्रक्रियाओं में अंतराल का फायदा उठाना चाहते हैं। हमारा सिस्टम साइबर धोखाधड़ी रोकथाम को भविष्य-प्रूफ बनाने के लिए परिचालन साइलो और डिजिटल यात्राओं में अंतराल को एकजुट करता है।
        </p>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed italic">
          Digital wallets, cryptocurrencies and neo-banks are key targets for fraudsters. Our system unites operational silos and gaps in digital journeys to future-proof cyberfraud prevention.
        </p>
      </div>

      {/* ---------------- ACCORDION + IMAGE ---------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Accordions */}
        <div className="space-y-6">
          {topAccordions.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-2 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600 font-medium">{item.subtitle}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {openIndex === index ? "−" : "+"}
                </div>
              </div>
              {openIndex === index && (
                <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-xl border border-orange-200">
                  <p className="text-gray-700 text-base leading-relaxed">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-200 p-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 p-4 rounded-full w-fit mx-auto mb-6">
                  <BarChart3 className="text-white w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  भारतीय साइबर सुरक्षा डैशबोर्ड
                </h3>
                <p className="text-gray-600 mb-6">Indian Cyber Security Dashboard</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-lg">
                    <div className="font-bold text-green-700">99.7%</div>
                    <div className="text-gray-600">सुरक्षा दर</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 rounded-lg">
                    <div className="font-bold text-blue-700">24/7</div>
                    <div className="text-gray-600">निगरानी</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded-lg">
                    <div className="font-bold text-orange-700">1930</div>
                    <div className="text-gray-600">हेल्पलाइन</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-3 rounded-lg">
                    <div className="font-bold text-purple-700">AI</div>
                    <div className="text-gray-600">संचालित</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- BOTTOM SECTION ---------------- */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Text */}
        <div className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-2xl p-8 shadow-lg">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-green-600 rounded-xl flex items-center justify-center mb-6">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            व्यवहारिक बुद्धिमत्ता द्वारा संचालित
          </h2>
          <h3 className="text-xl font-semibold mb-6 text-gray-700">
            फिनटेक धोखाधड़ी रोकथाम
          </h3>
          <p className="text-gray-600 text-sm mb-4 italic">
            Fintech Fraud Prevention Powered by Behavioral Intelligence
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            हमारा एज-आधारित आर्किटेक्चर फिनटेक को उपयोगकर्ता व्यवहार का पूरा संदर्भ देखने में मदद करता है, वास्तविक समय में जबरदस्ती, समझौता किए गए खातों और धोखाधड़ी AI एजेंटों की पहचान करता है।
          </p>
        </div>

        {/* Right Accordions */}
        <div className="space-y-6">
          {bottomAccordions.map((item, index) => (
            <div
              key={index + 10}
              className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => toggleAccordion(index + 10)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600 font-medium">{item.subtitle}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {openIndex === index + 10 ? "−" : "+"}
                </div>
              </div>
              {openIndex === index + 10 && (
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <p className="text-gray-700 text-base leading-relaxed">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- GOVERNMENT RESOURCES SECTION ---------------- */}
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 rounded-2xl shadow-xl p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              सरकारी संसाधन और सहायता
            </h2>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Government Resources and Support
            </p>
            <p className="text-gray-600">भारतीय साइबर सुरक्षा और धोखाधड़ी रोकथाम</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-lg">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">साइबर हेल्पलाइन</h4>
                  <p className="text-gray-600 text-sm">Cyber Helpline</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                <strong className="text-red-600">1930</strong> - तत्काल सहायता
              </p>
              <p className="text-gray-600 text-sm">Immediate assistance available</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">CERT-In पोर्टल</h4>
                  <p className="text-gray-600 text-sm">CERT-In Portal</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                <strong className="text-blue-600">cert-in.org.in</strong>
              </p>
              <p className="text-gray-600 text-sm">Official cyber security portal</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">MeitY साइबर सुरक्षा</h4>
                  <p className="text-gray-600 text-sm">MeitY Cyber Security</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                <strong className="text-green-600">meity.gov.in</strong>
              </p>
              <p className="text-gray-600 text-sm">Ministry portal for cyber safety</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                तत्काल रिपोर्ट करें / Report Now
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                और जानें / Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
