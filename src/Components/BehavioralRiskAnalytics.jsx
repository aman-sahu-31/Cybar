import React from "react";
import {
  Brain,
  TrendingUp,
  Shield,
  AlertTriangle,
  Eye,
  Users,
  Activity,
  BarChart3,
  Phone,
  Mail,
  CheckCircle,
  Lock
} from "lucide-react";

function BehavioralRiskAnalytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Digital India
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Cyber Suraksha
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent mb-2">
          व्यवहारिक जोखिम विश्लेषण
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
          Behavioral Risk Analytics
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          व्यवहारिक जोखिम विश्लेषण (BRA) उन्नत AI और मशीन लर्निंग का उपयोग करके असामान्य उपयोगकर्ता व्यवहार की निगरानी, विश्लेषण और पहचान करता है।
          <br />
          <span className="text-indigo-600 font-medium">
            Advanced AI-powered system that monitors and analyzes unusual user behaviors to detect fraudulent activity and cybersecurity risks in real-time.
          </span>
        </p>
      </div>

      {/* Key Features Section */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-green-500 p-2 rounded-lg">
              <Brain className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              BRA क्यों महत्वपूर्ण है?
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-3 font-medium">Why Behavioral Risk Analytics?</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>वास्तविक समय में खतरों का पता लगाना</strong> / Detects threats in real-time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>पासवर्ड से आगे की सुरक्षा</strong> / Goes beyond passwords and device checks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>अनूठी व्यवहारिक प्रोफाइल</strong> / Builds unique behavioral profiles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>गतिशील अनुकूलन</strong> / Adapts to emerging fraud techniques</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              मुख्य व्यवहारिक संकेतक
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-3 font-medium">Core Behavioral Indicators</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>टाइपिंग गति और माउस मूवमेंट</strong> / Typing speed & mouse patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>लॉगिन आवृत्ति और स्थान</strong> / Login frequency & location</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>लेनदेन प्रवाह और नेवीगेशन</strong> / Transaction flow & navigation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>सुरक्षा चुनौतियों की प्रतिक्रिया</strong> / Response to security challenges</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-center mb-2">
          वास्तविक उपयोग के मामले
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">
          Real-World Use Cases
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-red-200">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg w-fit mb-4">
              <Shield className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              धोखाधड़ी का पता लगाना
            </h3>
            <p className="text-gray-600 text-sm mb-2 font-medium">Fraud Detection</p>
            <p className="text-gray-700 text-sm">
              असामान्य लॉगिन प्रयासों, जोखिम भरे लेनदेन और बॉट गतिविधियों की पहचान करता है।
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-amber-200">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-lg w-fit mb-4">
              <Eye className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              आंतरिक खतरा निगरानी
            </h3>
            <p className="text-gray-600 text-sm mb-2 font-medium">Insider Threat Monitoring</p>
            <p className="text-gray-700 text-sm">
              कर्मचारियों द्वारा संवेदनशील डेटा तक असामान्य पहुंच का पता लगाता है।
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-green-200">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg w-fit mb-4">
              <CheckCircle className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              अनुपालन और जोखिम प्रबंधन
            </h3>
            <p className="text-gray-600 text-sm mb-2 font-medium">Compliance & Risk Management</p>
            <p className="text-gray-700 text-sm">
              RBI नियमों का अनुपालन और जोखिम भरी गतिविधियों की सक्रिय निगरानी।
            </p>
          </div>
        </div>
      </div>

      {/* Warning Signs Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-center mb-2">
          चेतावनी संकेत
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">
          Warning Signs Detected by BRA
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-2xl shadow-lg p-8 border border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                <AlertTriangle className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">संदिग्ध गतिविधि संकेत</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>असामान्य भूगोल या डिवाइस से लॉगिन</strong> / Unusual geography or device logins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>टाइपिंग या क्लिक गति में भारी बदलाव</strong> / Drastic typing/click speed changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>कई असफल प्रमाणीकरण प्रयास</strong> / Multiple failed authentication attempts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>अजीब समय पर उच्च-मूल्य लेनदेन</strong> / High-value transactions at odd times</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl shadow-lg p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-2 rounded-lg">
                <Activity className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">व्यवहारिक विसंगतियां</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>प्रतिबंधित डेटा तक बार-बार पहुंच</strong> / Repeated restricted data access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>ऐप्स में असामान्य नेवीगेशन</strong> / Abnormal app navigation behavior</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>खरीदारी आदतों में अचानक बदलाव</strong> / Sudden purchasing habit changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>संदिग्ध VPN या एनोनिमाइज़र का उपयोग</strong> / Suspicious VPN or anonymizer use</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prevention Strategies */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-center mb-2">
          रोकथाम और शमन रणनीतियां
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">
          Prevention & Mitigation Strategies
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Users className="text-white w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                संगठनों के लिए
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-3 font-medium">For Organizations</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>AI-संचालित व्यवहारिक निगरानी उपकरण</strong> / Deploy AI-driven monitoring tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>धोखाधड़ी प्रबंधन सिस्टम के साथ एकीकरण</strong> / Integrate with fraud management systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>निरंतर जोखिम स्कोरिंग</strong> / Continuous risk scoring of users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>व्यवहार-आधारित अनुकूली प्रमाणीकरण</strong> / Adaptive authentication based on behavior</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                <Lock className="text-white w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                उपयोगकर्ताओं के लिए
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-3 font-medium">For Users</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>बहु-कारक प्रमाणीकरण का उपयोग</strong> / Use multi-factor authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>खाता लॉगिन सूचनाओं पर ध्यान</strong> / Stay alert to login notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>जोखिम भरे क्लिक और फिशिंग से बचें</strong> / Avoid risky clicks and phishing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>संदिग्ध गतिविधि तुरंत रिपोर्ट करें</strong> / Report suspicious activity immediately</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Future of BRA */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl shadow-lg p-10 border border-purple-200">
          <div className="text-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg w-fit mx-auto mb-4">
              <TrendingUp className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              BRA का भविष्य
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Future of Behavioral Risk Analytics
            </h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
            AI, मशीन लर्निंग और गहन व्यवहारिक मॉडलिंग के साथ, BRA साइबर सुरक्षा और धोखाधड़ी रोकथाम की एक मानक परत में विकसित होगा।
          </p>
          <p className="text-gray-600 text-center italic">
            With AI and machine learning, BRA will evolve into a standard cybersecurity layer with IoT monitoring, biometric authentication, and real-time adaptive trust scoring.
          </p>
        </div>
      </div>

      {/* Call to Action & Government Resources */}
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 text-gray-800 p-10 rounded-2xl shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">BRA के साथ आगे रहें</h3>
          <p className="text-xl font-semibold text-gray-700 mb-4">Stay Ahead with BRA</p>
          <p className="mb-6 text-gray-700 max-w-3xl mx-auto">
            उन्नत व्यवहारिक जोखिम विश्लेषण के साथ अपने सिस्टम की सक्रिय रूप से रक्षा करें, उपयोगकर्ता विश्वास की रक्षा करें और जोखिम कम करें।
          </p>
          <p className="mb-6 text-gray-600 text-sm italic max-w-3xl mx-auto">
            Proactively defend your systems, protect user trust, and reduce risk with advanced Behavioral Risk Analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              और जानें / Explore More
            </button>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              विश्लेषण शुरू करें / Start Analysis
            </button>
          </div>
        </div>

        {/* Government Resources */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-red-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              सरकारी संसाधन / Government Resources
            </h3>
            <p className="text-gray-600">भारतीय साइबर सुरक्षा और धोखाधड़ी रोकथाम</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <h4 className="font-semibold text-gray-800">साइबर हेल्पलाइन</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>1930</strong> - राष्ट्रीय साइबर क्राइम रिपोर्टिंग
              </p>
              <p className="text-gray-600 text-sm">National Cyber Crime Reporting</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <h4 className="font-semibold text-gray-800">CERT-In पोर्टल</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>cert-in.org.in</strong> - भारतीय कंप्यूटर आपातकालीन प्रतिक्रिया टीम
              </p>
              <p className="text-gray-600 text-sm">Indian Computer Emergency Response Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BehavioralRiskAnalytics;
