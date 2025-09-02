import React from "react";
import {
  ShieldCheck,
  Activity,
  Lock,
  Eye,
  AlertTriangle,
  Cpu,
  Globe,
  Users,
  Fingerprint,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

function OngoingSessionMonitoring() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Digital India
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Cyber Suraksha
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent mb-2">
          चालू सत्र निगरानी
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
          Ongoing Session Monitoring
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          चालू सत्र निगरानी का मतलब है एक सक्रिय सत्र के दौरान उपयोगकर्ता गतिविधि का निरंतर अवलोकन, विश्लेषण और सत्यापन।
          <br />
          <span className="text-indigo-600 font-medium">
            Continuous observation and validation of user activity during active sessions to prevent fraud and enhance security in real-time.
          </span>
        </p>
      </div>

      {/* Why It Matters & Benefits */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-green-500 p-2 rounded-lg">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              यह क्यों महत्वपूर्ण है / Why It Matters
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            पारंपरिक लॉगिन जांच को धोखेबाज चुराए गए क्रेडेंशियल, सत्र हाइजैकिंग या मैलवेयर का उपयोग करके बायपास कर सकते हैं। निरंतर निगरानी असामान्य व्यवहार का पता लगाने में मदद करती है।
          </p>
          <p className="text-gray-600 text-sm italic">
            Traditional login checks can be bypassed by fraudsters. Continuous monitoring helps detect abnormal behaviors and ensures instant threat response.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
              <Activity className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              मुख्य लाभ / Key Benefits
            </h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>वास्तविक समय में धोखाधड़ी का पता लगाना</strong> / Detects fraudulent activities in real-time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>खाता अधिग्रहण से सुरक्षा</strong> / Protects from account takeover attacks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>RBI और PCI DSS अनुपालन</strong> / Strengthens regulatory compliance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>उपयोगकर्ता विश्वास बढ़ाना</strong> / Enhances user confidence</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Monitoring Techniques */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-center mb-2">
          सत्र निगरानी तकनीकें
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">
          Techniques Used in Session Monitoring
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                <Eye className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                व्यवहार विश्लेषण
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-2 font-medium">Behavioral Analytics</p>
            <p className="text-gray-700 text-sm">
              टाइपिंग गति, माउस मूवमेंट और ब्राउज़िंग आदतों की निगरानी करके बॉट पैटर्न का पता लगाता है।
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                <Lock className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                डिवाइस और IP विश्लेषण
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-2 font-medium">Device & IP Analysis</p>
            <p className="text-gray-700 text-sm">
              डिवाइस फिंगरप्रिंटिंग, IP प्रतिष्ठा और भू-स्थान ट्रैक करके विभिन्न देशों से लॉगिन जैसी असामान्यताओं को रोकता है।
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                <AlertTriangle className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">जोखिम स्कोरिंग</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2 font-medium">Risk Scoring</p>
            <p className="text-gray-700 text-sm">
              AI प्रत्येक कार्य को जोखिम स्कोर असाइन करता है। उच्च जोखिम व्यवहार स्टेप-अप प्रमाणीकरण या सत्र समाप्ति ट्रिगर करता है।
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-2 rounded-lg">
                <Fingerprint className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                बायोमेट्रिक पुन: सत्यापन
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-2 font-medium">Biometric Re-Verification</p>
            <p className="text-gray-700 text-sm">
              संवेदनशील लेनदेन के दौरान मजबूत आश्वासन के लिए फिंगरप्रिंट, फेस ID या वॉयस रिकग्निशन का उपयोग करता है।
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-cyan-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                AI और मशीन लर्निंग
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-2 font-medium">AI & Machine Learning</p>
            <p className="text-gray-700 text-sm">
              पिछले हमलों से सीखकर और गतिशील रूप से अनुकूलन करके लाखों सत्रों में धोखाधड़ी पैटर्न का पता लगाता है।
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-teal-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-lg">
                <Globe className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                नेटवर्क निगरानी
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-2 font-medium">Network Monitoring</p>
            <p className="text-gray-700 text-sm">
              संदिग्ध प्रॉक्सी, VPN या TOR नेटवर्क उपयोग की पहचान करता है जो धोखाधड़ी या पहचान छुपाने का संकेत हो सकता है।
            </p>
          </div>
        </div>
      </div>

      {/* Real-World Use Cases */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-center mb-2">
          वास्तविक उपयोग के मामले
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">
          Real-World Use Cases
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-blue-200">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg w-fit mb-4">
              <Users className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">बैंकिंग और भुगतान / Banking & Payments</h3>
            <p className="text-gray-700 mb-2">
              नेट बैंकिंग सत्र के दौरान अनधिकृत धन हस्तांतरण, नकली KYC सत्र या बॉट हमलों का पता लगाता है।
            </p>
            <p className="text-gray-600 text-sm italic">
              Detects unauthorized money transfers and bot attacks during banking sessions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-green-200">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg w-fit mb-4">
              <CheckCircle className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">ई-कॉमर्स प्लेटफॉर्म / E-commerce Platforms</h3>
            <p className="text-gray-700 mb-2">
              नकली खरीदारी, कूपन दुरुपयोग और चेकआउट के दौरान चुराए गए क्रेडिट कार्ड परीक्षण को रोकता है।
            </p>
            <p className="text-gray-600 text-sm italic">
              Prevents fake purchases and stolen credit card testing during checkout.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-200">
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-3 rounded-lg w-fit mb-4">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">स्वास्थ्य सेवा प्रणाली / Healthcare Systems</h3>
            <p className="text-gray-700 mb-2">
              यह सुनिश्चित करता है कि रोगी रिकॉर्ड केवल अधिकृत कर्मचारियों द्वारा एक्सेस किए जाएं और चिकित्सा पहचान चोरी को रोकता है।
            </p>
            <p className="text-gray-600 text-sm italic">
              Ensures authorized access to patient records and prevents medical identity theft.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-amber-200">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-lg w-fit mb-4">
              <Globe className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              सरकार और शिक्षा / Government & Education
            </h3>
            <p className="text-gray-700 mb-2">
              डिजिटल कक्षाओं, ई-गवर्नेंस पोर्टल को सुरक्षित करता है और नकली परीक्षा प्रयासों या सरकारी योजनाओं के दुरुपयोग को रोकता है।
            </p>
            <p className="text-gray-600 text-sm italic">
              Secures e-governance portals and prevents misuse of government schemes.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion & Government Resources */}
      <div className="max-w-6xl mx-auto mt-16 space-y-8">
        <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 text-gray-800 p-10 rounded-2xl shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">निष्कर्ष / Conclusion</h3>
          <p className="mb-4 text-gray-700 max-w-3xl mx-auto">
            चालू सत्र निगरानी आज की डिजिटल दुनिया में एक आवश्यकता है। निरंतर उपयोगकर्ता गतिविधि का अवलोकन करके, AI-संचालित विश्लेषण का लाभ उठाकर, व्यवसाय धोखेबाजों से एक कदम आगे रह सकते हैं।
          </p>
          <p className="mb-6 text-gray-600 text-sm italic max-w-3xl mx-auto">
            Ongoing Session Monitoring is essential in today's digital world. By continuously observing user activity and leveraging AI-driven analytics, businesses can stay ahead of fraudsters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              और जानें / Learn More
            </button>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              सुरक्षा गाइड / Security Guide
            </button>
          </div>
        </div>

        {/* Government Resources */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-red-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              सरकारी संसाधन / Government Resources
            </h3>
            <p className="text-gray-600">भारतीय साइबर सुरक्षा संसाधन और सहायता</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <h4 className="font-semibold text-gray-800">साइबर क्राइम हेल्पलाइन</h4>
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
                <h4 className="font-semibold text-gray-800">I4C पोर्टल</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>cybercrime.gov.in</strong> - भारतीय साइबर क्राइम समन्वय केंद्र
              </p>
              <p className="text-gray-600 text-sm">Indian Cyber Crime Coordination Centre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OngoingSessionMonitoring;
