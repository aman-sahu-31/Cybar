import React from "react";
import {
  Bot,
  Shield,
  AlertTriangle,
  Eye,
  Lock,
  Activity,
  Zap,
  Users,
  Phone,
  Mail,
  CheckCircle,
  Globe
} from "lucide-react";

function BotAutomationDetection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Digital India
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Cyber Suraksha
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent mb-2">
          बॉट और स्वचालन का पता लगाना
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
          Bot and Automation Detection
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
          डिजिटल युग में, धोखेबाज सिस्टम में हेरफेर करने, कमजोरियों का फायदा उठाने और बड़े पैमाने पर धोखाधड़ी करने के लिए बॉट्स और स्वचालित स्क्रिप्ट का तेजी से उपयोग कर रहे हैं।
          <br />
          <span className="text-indigo-600 font-medium">
            Critical technology for detecting and preventing automated fraud attacks that manipulate systems and exploit vulnerabilities at scale.
          </span>
        </p>
      </div>

      {/* Section: What are Bots */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl shadow-lg p-8 border border-red-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg">
              <Bot className="text-white w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              बॉट्स और स्वचालित हमले क्या हैं?
            </h2>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            What Are Bots and Automated Attacks?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            बॉट्स सॉफ्टवेयर प्रोग्राम हैं जो दोहराए जाने वाले कार्यों को स्वचालित करते हैं। जबकि कुछ बॉट्स वैध उद्देश्यों की सेवा करते हैं, दुर्भावनापूर्ण बॉट्स का उपयोग बड़े पैमाने पर हानिकारक गतिविधियों के लिए किया जाता है।
          </p>
          <p className="text-gray-600 text-sm italic mb-6">
            Bots are software programs that automate tasks. While some serve legitimate purposes, malicious bots perform harmful activities at scale.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>क्रेडेंशियल स्टफिंग:</strong> चुराए गए यूजरनेम और पासवर्ड का उपयोग</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>नकली खाता निर्माण:</strong> धोखाधड़ी के लिए कई खाते खोलना</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>वेब स्क्रैपिंग:</strong> संवेदनशील जानकारी निकालना</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>स्वचालित लेनदेन:</strong> नकली ऑर्डर या मूल्य हेरफेर</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section: Why Detection Matters */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl shadow-lg p-8 border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-green-500 p-3 rounded-lg">
              <Shield className="text-white w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              बॉट का पता लगाना क्यों महत्वपूर्ण है?
            </h2>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Why Is Bot Detection Important?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            यदि बॉट्स और स्वचालित गतिविधियों का पता नहीं चलता है, तो संगठनों को वित्तीय नुकसान, प्रतिष्ठा की हानि और परिचालन व्यवधान जैसे महत्वपूर्ण जोखिमों का सामना करना पड़ता है।
          </p>
          <p className="text-gray-600 text-sm italic mb-6">
            Undetected bots pose significant risks including financial loss, reputational damage, and operational disruption.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>बड़े पैमाने पर खाता धोखाधड़ी रोकना</strong> / Preventing large-scale account fraud</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>ग्राहक डेटा की सुरक्षा</strong> / Securing customer data from attacks</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>मूल्य हेरफेर से सुरक्षा</strong> / Protecting from price manipulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>स्पैम और गलत जानकारी कम करना</strong> / Reducing spam and misinformation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section: Real World Examples */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-center mb-2">
          बॉट हमलों के वास्तविक उदाहरण
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">
          Real-World Examples of Bot Attacks
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-6 border border-blue-200">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg w-fit mb-4">
              <CheckCircle className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-3">ई-कॉमर्स और बैंकिंग</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>ई-कॉमर्स:</strong> सीमित संस्करण उत्पादों की खरीदारी</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>बैंकिंग:</strong> चुराए गए क्रेडिट कार्ड नंबरों का परीक्षण</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl shadow-lg p-6 border border-purple-200">
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-3 rounded-lg w-fit mb-4">
              <Globe className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-3">सोशल मीडिया और गेमिंग</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>सोशल मीडिया:</strong> नकली समाचार और स्पैम टिप्पणियां</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>गेमिंग:</strong> अनुचित लाभ और लीडरबोर्ड हैकिंग</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section: Detection Techniques */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-center mb-2">
          बॉट का पता लगाने की मुख्य तकनीकें
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">
          Key Techniques to Detect Bots
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl shadow-lg p-6 border border-cyan-200">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg w-fit mb-4">
              <Eye className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">व्यवहार विश्लेषण</h4>
            <p className="text-gray-600 text-sm mb-2 font-medium">Behavioral Analysis</p>
            <p className="text-gray-700 text-sm">माउस मूवमेंट, टाइपिंग गति और नेवीगेशन पैटर्न ट्रैकिंग</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-6 border border-green-200">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg w-fit mb-4">
              <Activity className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">डिवाइस फिंगरप्रिंटिंग</h4>
            <p className="text-gray-600 text-sm mb-2 font-medium">Device Fingerprinting</p>
            <p className="text-gray-700 text-sm">अनूठे डिवाइस/ब्राउज़र हस्ताक्षर की पहचान</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl shadow-lg p-6 border border-amber-200">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-lg w-fit mb-4">
              <Zap className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">दर सीमा</h4>
            <p className="text-gray-600 text-sm mb-2 font-medium">Rate Limiting</p>
            <p className="text-gray-700 text-sm">मानवीय गति से अधिक अनुरोधों को ब्लॉक करना</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl shadow-lg p-6 border border-purple-200">
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-3 rounded-lg w-fit mb-4">
              <Lock className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">CAPTCHA चुनौतियां</h4>
            <p className="text-gray-600 text-sm mb-2 font-medium">CAPTCHA Challenges</p>
            <p className="text-gray-700 text-sm">मानवीय इंटरैक्शन परीक्षण आवश्यक बनाना</p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl shadow-lg p-6 border border-teal-200">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-lg w-fit mb-4">
              <Bot className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">AI मॉडल</h4>
            <p className="text-gray-600 text-sm mb-2 font-medium">AI & ML Models</p>
            <p className="text-gray-700 text-sm">विकसित बॉट पैटर्न का निरंतर विश्लेषण</p>
          </div>
        </div>
      </div>

      {/* Section: Prevention Strategies */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-center mb-2">
          बॉट हमलों को रोकने की रणनीतियां
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">
          Strategies to Prevent Bot Attacks
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                <Users className="text-white w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">संगठनात्मक रणनीतियां</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3 font-medium">Organizational Strategies</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>बहु-कारक प्रमाणीकरण (MFA) लागू करना</strong> / Implementing multi-factor authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>वेब एप्लिकेशन फ़ायरवॉल तैनाती</strong> / Deploying Web Application Firewalls</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>ट्रैफिक लॉग की नियमित निगरानी</strong> / Regular traffic log monitoring</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                <Shield className="text-white w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">उपयोगकर्ता सुरक्षा</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3 font-medium">User Security</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>AI-संचालित धोखाधड़ी रोकथाम प्लेटफॉर्म</strong> / AI-powered fraud prevention platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>ग्राहकों और कर्मचारियों की शिक्षा</strong> / Customer and employee education</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>संदिग्ध गतिविधि की तत्काल रिपोर्टिंग</strong> / Immediate suspicious activity reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section: Conclusion & Government Resources */}
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 text-gray-800 p-10 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">निष्कर्ष</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Conclusion</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            बॉट्स और स्वचालन शक्तिशाली उपकरण हैं - अच्छे और बुरे दोनों के लिए। जबकि वे दक्षता बढ़ा सकते हैं, दुर्भावनापूर्ण अभिनेता उनका उपयोग धोखाधड़ी और व्यवधान के लिए करते हैं।
          </p>
          <p className="text-gray-600 text-sm italic mb-6">
            Bots are powerful tools for both good and bad. Strong detection and prevention mechanisms protect platforms, customers, and brand reputation against automated threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              और जानें / Learn More
            </button>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              सुरक्षा शुरू करें / Start Protection
            </button>
          </div>
        </div>

        {/* Government Resources */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-red-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              सरकारी संसाधन / Government Resources
            </h3>
            <p className="text-gray-600">भारतीय साइबर सुरक्षा और बॉट सुरक्षा</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <h4 className="font-semibold text-gray-800">साइबर सुरक्षा हेल्पलाइन</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>1930</strong> - राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल
              </p>
              <p className="text-gray-600 text-sm">National Cyber Crime Reporting Portal</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <h4 className="font-semibold text-gray-800">MeitY साइबर सुरक्षा</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>meity.gov.in</strong> - इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय
              </p>
              <p className="text-gray-600 text-sm">Ministry of Electronics & Information Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotAutomationDetection;
