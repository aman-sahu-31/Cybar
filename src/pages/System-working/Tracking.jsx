import React from "react";
import { Shield, UserPlus, Route, Users, Phone, Mail, Globe } from "lucide-react";

export default function Tracking() {
  const features = [
    {
      title: "व्यावसायिक प्रक्रियाओं में कमजोरियों की सुरक्षा",
      subtitle: "Protect Vulnerabilities in Business Processes",
      description:
        "जबकि फिनटेक डिजिटल-फर्स्ट बड़े हुए हैं, उन्होंने नए ऑनबोर्डिंग अनुभव और भुगतान प्लेटफॉर्म भी विकसित किए हैं जिनका धोखाधड़ी करने वाले फायदा उठाते हैं। बिना जटिल इंस्टॉलेशन के डिजिटल यात्रा में हर टचपॉइंट की सुरक्षा करें।",
      icon: <Shield className="w-6 h-6 text-white" />,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "समझौता किए बिना ऑनबोर्डिंग को सुव्यवस्थित करें",
      subtitle: "Streamline Onboarding Without Compromise",
      description:
        "नकली खाते बनाने से दुर्भावनापूर्ण स्वचालित बॉट और मानव क्लिक फार्म को अलग और ब्लॉक करें। एक चिकने ऑनबोर्डिंग अनुभव के लिए तृतीय-पक्ष प्रमाणीकरण और KYC जांच के एकीकरण को सुव्यवस्थित करें।",
      icon: <UserPlus className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "संपूर्ण ग्राहक यात्रा को सुरक्षित करें",
      subtitle: "Secure the Entire Customer Journey",
      description:
        "लॉगिन से लेकर विवरण बदलने, नए लाभार्थी जोड़ने, भुगतान करने और प्राप्त करने तक विश्वसनीय उपयोगकर्ता व्यवहार को समझें। असामान्य व्यवहार का पता लगाने के लिए समय के क्षणों के बजाय यात्रा-स्तर पर इंटरैक्शन की निगरानी करें।",
      icon: <Route className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "अनूठे ग्राहक अनुभव तैयार करें",
      subtitle: "Tailor Unique Customer Experiences",
      description:
        "डिजिटल-फर्स्ट ग्राहक ऐसे अनुकूलित उपयोगकर्ता अनुभव की तलाश में हैं जो अपमान के बजाय प्रसन्न करें। अपने सर्वोत्तम ग्राहकों को अनावश्यक प्रमाणीकरण बाधाओं से गुजरने से रोकें। जीवनकाल मूल्य की सुरक्षा के लिए वफादारी को पहचानें।",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-violet-500"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-5 px-6 min-h-screen">
      {/* Government Badges */}

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="mb-5">
          <span className="inline-block bg-gradient-to-r from-orange-100 to-green-100 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold border border-orange-200">
            उन्नत धोखाधड़ी रोकथाम / Advanced Fraud Prevention
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
          धोखाधड़ी का पता लगाने और रोकने के तरीके को बदलें
        </h2>
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">
          Transform the Way You Detect and Prevent Fraud
        </h3>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
          बुद्धिमान धोखाधड़ी का पता लगाने और रोकथाम प्रणालियों के साथ अपने व्यवसाय की सुरक्षा के लिए अत्याधुनिक तकनीक का लाभ उठाएं।
        </p>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto italic">
          Leverage cutting-edge technology to protect your business with intelligent fraud detection and prevention systems.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
          >
            {/* Icon Container */}
            <div className="mb-6">
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                {React.cloneElement(feature.icon, { className: "w-7 h-7 text-white" })}
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-gray-600 mb-4">{feature.subtitle}</p>
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Government Resources Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
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
        </div>
      </div>
    </div>
  );
}
