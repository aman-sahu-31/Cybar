import React from "react";
import { 
  FaLink, FaDesktop, FaStar, FaShieldAlt, 
  FaFingerprint, FaRobot, FaChartLine, FaUserSecret 
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const useCases = [
  {
    icon: <FaLink size={20} />,
    title: "नया खाता धोखाधड़ी",
    subtitle: "New Account Fraud",
    desc: "बॉट्स से धोखाधड़ी खाता निर्माण का पता लगाएं और ब्लॉक करें, सिंथेटिक पहचान और खच्चर खातों के संकेतक व्यवहार की पहचान करें। उच्च जोखिम व्यवहार का पता लगाने के लिए खाता आवेदन से पहले ब्राउज़िंग व्यवहार का उपयोग करें।",
    path: "/AccountFraud",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: <FaDesktop size={20} />,
    title: "खाता अधिग्रहण (ATO)",
    subtitle: "Account Takeover (ATO)",
    desc: "समझौता किए गए क्रेडेंशियल, असामान्य व्यवहार पैटर्न, और डिवाइस या नेटवर्क संदर्भ में परिवर्तन के संकेतों के लिए उपयोगकर्ता खातों की निरंतर निगरानी करें। वास्तविक समय में अनधिकृत खाता पहुंच को रोकें।",
    path: "/AccountTakeover",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: <FaStar size={20} />,
    title: "भुगतान धोखाधड़ी",
    subtitle: "Payment Fraud",
    desc: "विसंगतियों की पहचान करने, धोखाधड़ी या संभावित घोटाले के स्थानान्तरण को रोकने, और डाउनस्ट्रीम नुकसान को रोकने के लिए व्यवहारिक और संदर्भात्मक आधारभूत के विरुद्ध प्रत्येक लेनदेन का मूल्यांकन करें।",
    path: "/PaymentFraud",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: <FaUserSecret size={20} />,
    title: "APP घोटाले",
    subtitle: "APP Scams",
    desc: "अधिकृत पुश भुगतान (APP) धोखाधड़ी का पता लगाएं, भले ही वह वैध उपयोगकर्ता द्वारा शुरू की गई हो, जबरदस्ती, सामाजिक इंजीनियरिंग, रिमोट एक्सेस, और असामान्य भुगतान व्यवहार के संकेतों की पहचान करके।",
    path: "/AppScam",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: <FaChartLine size={20} />,
    title: "लेनदेन जोखिम विश्लेषण",
    subtitle: "Transaction Risk Analysis",
    desc: "व्यवहार, डिवाइस, पहचान और नेटवर्क संकेतों के आधार पर प्रत्येक लेनदेन के जोखिम का आकलन करके RBI अनुपालन का समर्थन करें। भुगतान, स्थानान्तरण और खाता कार्यों पर सटीक, स्वचालित निर्णय लें।",
    path: "/TransactionRiskDashboard",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: "चालू सत्र निगरानी",
    subtitle: "Ongoing Session Monitoring",
    desc: "निरंतर सत्र बुद्धिमत्ता के साथ पॉइंट-इन-टाइम जांच से आगे बढ़ें जो मध्य-सत्र खतरों, सत्र हाइजैकिंग, या उपयोगकर्ता की यात्रा के दौरान व्यवहारिक बहाव को फ्लैग करती है।",
    path: "/OngoingSessionMonitoring",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: <FaFingerprint size={20} />,
    title: "व्यवहारिक जोखिम विश्लेषण",
    subtitle: "Behavioral Risk Analytics",
    desc: "समय के साथ उपयोगकर्ता कैसे टाइप करते हैं, स्वाइप करते हैं, नेवीगेट करते हैं, और अपने डिवाइस के साथ इंटरैक्ट करते हैं, यह पहचानकर विश्वसनीय ग्राहकों और धोखाधड़ी करने वालों के बीच अंतर करने के लिए गहन व्यवहारिक विश्लेषण का लाभ उठाएं।",
    path: "/BehavioralRiskAnalytics",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: <FaRobot size={20} />,
    title: "बॉट और स्वचालन का पता लगाना",
    subtitle: "Bot and Automation Detection",
    desc: "चैनलों में वास्तविक मानव व्यवहार से विचलित पैटर्न का विश्लेषण करके क्रेडेंशियल स्टफिंग, नकली खाता निर्माण, और स्क्रिप्टेड लेनदेन सहित स्वचालित हमलों की पहचान और ब्लॉक करें।",
    path: "/BotAutomationDetection",
    gradient: "from-indigo-500 to-purple-500"
  },
];

const Feature = () => {
  return (
    <section className="w-full text-gray-900 bg-gradient-to-br py-3 from-orange-50 via-white to-green-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Government Badges */}
     

      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/15 rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>

      <div className="w-full max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h1 className="font-bold py-2 text-5xl mb-4 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
          विशेषताएं
        </h1>
        <h2 className="font-semibold text-3xl text-gray-700 mb-4">Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">भारतीय साइबर सुरक्षा और धोखाधड़ी रोकथाम समाधान</p>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {useCases.map(({ icon, title, subtitle, desc, path, gradient }, i) => (
  <div
    key={i}
    className="bg-gradient-to-br  from-white to-blue-50 backdrop-blur-sm p-6 mb-10 rounded-2xl shadow-lg border border-blue-200
               transform transition-all duration-300 
               hover:scale-105 hover:shadow-xl cursor-pointer group"
  >
    <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${gradient} w-fit shadow-lg`}>
      <div className="text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
      {title}
    </h3>
    <p className="text-sm font-medium text-gray-600 mb-3">{subtitle}</p>
    <p className="text-sm text-gray-700 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors">
      {desc}
    </p>
    <NavLink 
      to={path} 
      className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      और जानें / Learn More
    </NavLink>
  </div>
))}

      </div>
    </section>
  );
};

export default Feature;
