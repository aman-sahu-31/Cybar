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
  Bot,
  HelpCircle,
  Download,
  Star
} from "lucide-react";

export default function System() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "हमारा सिस्टम फिनटेक को धोखाधड़ी रोकने में कैसे मदद करता है?",
      subtitle: "How does our system help Fintechs prevent fraud?",
      answer: "हमारा AI-संचालित सिस्टम वास्तविक समय में संदिग्ध गतिविधियों का पता लगाता है और भारतीय बैंकिंग नियमों के अनुसार सुरक्षा प्रदान करता है। यह व्यवहारिक विश्लेषण और मशीन लर्निंग का उपयोग करके 99.7% सटीकता के साथ धोखाधड़ी की पहचान करता है।"
    },
    {
      question: "क्या यह सूक्ष्म स्वचालन या स्क्रिप्टेड हमलों का पता लगा सकता है?",
      subtitle: "Can it detect subtle automation or scripted attacks?",
      answer: "हां, हमारा सिस्टम उन्नत बॉट डिटेक्शन तकनीकों का उपयोग करता है जो मानवीय और स्वचालित व्यवहार के बीच अंतर कर सकती है। यह CAPTCHA, व्यवहारिक विश्लेषण और AI मॉडल का उपयोग करके सबसे परिष्कृत बॉट हमलों का भी पता लगाता है।"
    },
    {
      question: "नियामक अनुपालन और डेटा गोपनीयता कैसे सुनिश्चित की जाती है?",
      subtitle: "How is regulatory compliance and data privacy ensured?",
      answer: "हमारा सिस्टम RBI दिशानिर्देशों, IT अधिनियम 2000, और GDPR के अनुसार डिज़ाइन किया गया है। सभी डेटा भारत में संग्रहीत किया जाता है और उच्चतम सुरक्षा मानकों का पालन करता है।"
    },
    {
      question: "किस प्रकार की वित्तीय धोखाधड़ी का पता लगाया जा सकता है?",
      subtitle: "What types of financial fraud can be detected?",
      answer: "हमारा सिस्टम UPI धोखाधड़ी, क्रेडिट कार्ड धोखाधड़ी, खाता अधिग्रहण, फिशिंग, सामाजिक इंजीनियरिंग, और डिजिटल पेमेंट धोखाधड़ी का पता लगाता है। यह भारतीय बैंकिंग पारिस्थितिकी तंत्र के लिए विशेष रूप से अनुकूलित है।"
    },
    {
      question: "मौजूदा फिनटेक स्टैक में एकीकरण कितनी जल्दी हो सकता है?",
      subtitle: "How quickly can integration happen with existing Fintech stack?",
      answer: "हमारा API-आधारित समाधान 24-48 घंटों में एकीकृत हो सकता है। हमारी तकनीकी टीम पूर्ण सहायता प्रदान करती है और भारतीय बैंकिंग सिस्टम के साथ seamless integration सुनिश्चित करती है।"
    },
    {
      question: "क्या यह लेनदेन प्रसंस्करण को धीमा करता है?",
      subtitle: "Does it slow down transaction processing?",
      answer: "नहीं, हमारा edge-based architecture 50ms से कम में निर्णय लेता है। यह ग्राहक अनुभव को प्रभावित किए बिना real-time सुरक्षा प्रदान करता है और UPI की तरह तत्काल भुगतान का समर्थन करता है।"
    },
    {
      question: "जोखिम भरे और वैध उपयोगकर्ताओं के बीच अंतर कैसे करता है?",
      subtitle: "How does it differentiate between risky and legitimate users?",
      answer: "हमारा AI सिस्टम 200+ व्यवहारिक संकेतकों का विश्लेषण करता है जैसे डिवाइस पैटर्न, लेनदेन इतिहास, भौगोलिक स्थान, और समय पैटर्न। यह भारतीय उपयोगकर्ता व्यवहार के आधार पर प्रशिक्षित है।"
    },
    {
      question: "संदिग्ध लेनदेन के लिए कस्टम एक्शन ट्रिगर कर सकता है?",
      subtitle: "Can it trigger custom actions for flagged transactions?",
      answer: "हां, सिस्टम तत्काल अलर्ट, लेनदेन रोकना, अतिरिक्त सत्यापन, या कस्टम वर्कफ़्लो ट्रिगर कर सकता है। यह SMS, email, और mobile app notifications के माध्यम से तुरंत सूचना देता है।"
    },
    {
      question: "धोखाधड़ी जांच और रिपोर्टिंग के लिए क्या insights मिलती हैं?",
      subtitle: "What insights are provided for fraud investigation and reporting?",
      answer: "विस्तृत analytics dashboard, real-time रिपोर्ट्स, trend analysis, और regulatory compliance रिपोर्ट्स प्रदान की जाती हैं। सभी डेटा RBI और CERT-In आवश्यकताओं के अनुसार formatted होता है।"
    }
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

      {/* ---------------- Case Study Form Section ---------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-2xl p-10 shadow-xl">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-green-500 p-2 rounded-lg">
              <BarChart3 className="text-white w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent uppercase tracking-wide text-sm font-bold">
              केस स्टडी / Case Study
            </span>
          </div>
          <h2 className="text-3xl font-bold mt-3 mb-2 text-gray-800">
            भारतीय फिनटेक केस स्टडी:
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            अच्छे ग्राहकों के लिए घर्षण कम करना
          </h3>
          <p className="text-gray-600 text-sm mb-4 italic">
            Indian Fintech Case Study: Reducing Friction For Good Customers
          </p>
          <p className="text-gray-700 leading-relaxed">
            भारतीय डिजिटल बैंकिंग क्षेत्र में एक प्रमुख फिनटेक कंपनी अपनी ऑनलाइन सेवा की प्रामाणिकता सत्यापित करने में संघर्ष कर रही थी। जानें कि कैसे हमारे AI-संचालित समाधान ने ग्राहक विश्वास में 35% सुधार और धोखाधड़ी में 90% कमी लाई।
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 w-5 h-5" />
              <span className="text-sm font-semibold text-gray-700">99.7% सटीकता</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-500 w-5 h-5" />
              <span className="text-sm font-semibold text-gray-700">35% सुधार</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
              <Download className="text-white w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wide text-sm font-bold">
              केस स्टडी डाउनलोड करें / Download Case Study
            </span>
          </div>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="पहला नाम / First Name*"
              className="w-full p-3 rounded-lg bg-gradient-to-r from-orange-50 to-green-50 border border-orange-200 text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
            <input
              type="text"
              placeholder="अंतिम नाम / Last Name*"
              className="w-full p-3 rounded-lg bg-gradient-to-r from-orange-50 to-green-50 border border-orange-200 text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
            <input
              type="text"
              placeholder="कंपनी का नाम / Company Name*"
              className="w-full p-3 rounded-lg bg-gradient-to-r from-orange-50 to-green-50 border border-orange-200 text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
            <input
              type="email"
              placeholder="कंपनी ईमेल / Company Email*"
              className="w-full p-3 rounded-lg bg-gradient-to-r from-orange-50 to-green-50 border border-orange-200 text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />

            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-orange-600" />
              <label className="text-gray-700">मैं संचार प्राप्त करने के लिए सहमत हूं / I agree to receive communications</label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              संपर्क करें / Get in Touch
            </button>
          </form>
        </div>
      </div>

      {/* ---------------- FAQ Section ---------------- */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Frequently Asked Questions (FAQs)
          </h3>
          <p className="text-gray-600">भारतीय साइबर सुरक्षा और धोखाधड़ी रोकथाम के बारे में</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-2 rounded-lg">
                    <HelpCircle className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{faq.question}</p>
                    <p className="text-gray-600 text-sm font-medium">{faq.subtitle}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {openFAQ === index ? "−" : "+"}
                </div>
              </div>
              {openFAQ === index && (
                <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-xl border border-orange-200">
                  <p className="text-gray-700 text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Footer ---------------- */}
      <footer className="bg-slate-800 py-10 px-6 text-slate-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Copyright */}
          <div>
            <h3 className="text-white font-bold mb-3">Tech Ninja</h3>
            <p className="text-sm">2025 Tech Ninja. All rights reserved.</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-white transition-colors">🔗</a>
              <a href="#" className="hover:text-white transition-colors">🔗</a>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-white font-semibold mb-3">Use Cases</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Account Security</li>
              <li className="hover:text-white transition-colors cursor-pointer">Account Takeover</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fraud Prevention</li>
              <li className="hover:text-white transition-colors cursor-pointer">Scam Detection</li>
              <li className="hover:text-white transition-colors cursor-pointer">Abuse Prevention</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Platform</li>
              <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Adversarial AI</li>
              <li className="hover:text-white transition-colors cursor-pointer">Darwinium on the Edge</li>
              <li className="hover:text-white transition-colors cursor-pointer">Book a Demo</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Resources</li>
              <li className="hover:text-white transition-colors cursor-pointer">Security</li>
              <li className="hover:text-white transition-colors cursor-pointer">Trust Center</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
