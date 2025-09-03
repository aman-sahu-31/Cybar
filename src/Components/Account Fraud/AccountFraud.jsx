import React, { useState } from "react";
import { ShieldAlert, AlertTriangle, Bot, Lock, Eye, Users, ChevronDown, ChevronUp, BarChart3, BookOpen, Download, Mail, Shield, TrendingUp, Phone, ExternalLink, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";
import { generateFraudPreventionPDF, openFraudGuideForPrint } from "../../utils/pdfGenerator";

function AccountFraud() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 px-6 py-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-1 rounded-3xl mb-8">
          <div className="bg-white rounded-3xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-orange-500 mr-4" />
              <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                भारतीय खाता धोखाधड़ी जागरूकता
              </h1>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-4">
              Indian Account Fraud Awareness Initiative
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              डिजिटल इंडिया के युग में खाता धोखाधड़ी एक तेजी से बढ़ता हुआ साइबर अपराध है। यह पहल नागरिकों, व्यवसायों और संगठनों को 
              रोकथाम रणनीतियों के बारे में शिक्षित करने और सभी के लिए एक सुरक्षित वित्तीय वातावरण बनाने का लक्ष्य रखती है।
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-orange-700 font-semibold text-sm">🇮🇳 Digital India Initiative</span>
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-full">
                <span className="text-green-700 font-semibold text-sm">🛡️ Cyber Suraksha</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              भारतीय साइबर अपराध आंकड़े
            </span>
            <br />
            <span className="text-xl text-slate-700 mt-2 block">Indian Cyber Crime Statistics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-orange-700 mb-2">₹1.25L Cr</p>
              <p className="text-slate-700 font-medium">साइबर अपराध से नुकसान</p>
              <p className="text-sm text-slate-600 mt-1">Cyber crime losses in India (2023)</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <AlertTriangle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-blue-700 mb-2">15.6L</p>
              <p className="text-slate-700 font-medium">साइबर अपराध की शिकायतें</p>
              <p className="text-sm text-slate-600 mt-1">Cyber crime complaints registered</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-green-700 mb-2">78%</p>
              <p className="text-slate-700 font-medium">बैंकिंग धोखाधड़ी वृद्धि</p>
              <p className="text-sm text-slate-600 mt-1">Increase in banking fraud cases</p>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-slate-100 to-slate-200 p-4 rounded-xl">
            <p className="text-sm text-slate-600 text-center font-medium">
              स्रोत: भारतीय साइबर अपराध समन्वय केंद्र (I4C) | Source: Indian Cyber Crime Coordination Centre
            </p>
          </div>
        </div>
      </section>

      {/* Why It Happens */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 mb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> भारत में खाता धोखाधड़ी क्यों होती है?
          </h2>
          <h3 className="text-lg font-medium text-slate-600 mb-4">Why Does Account Fraud Happen in India?</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            धोखेबाज कमजोर पहचान सत्यापन, खराब सुरक्षा नियंत्रण और चोरी हुए डेटा का दुरुपयोग करके धोखाधड़ी करते हैं। मुख्य कारण हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>डेटा उल्लंघन के माध्यम से व्यक्तिगत जानकारी तक आसान पहुंच</li>
            <li>साइन-अप के समय कमजोर ग्राहक सत्यापन (उचित KYC प्रक्रिया नहीं)</li>
            <li>नकली खाते बनाने के लिए परिष्कृत बॉट्स का उपयोग</li>
            <li>रेफरल बोनस, मुफ्त ट्रायल और प्रचार ऑफर का दुरुपयोग</li>
            <li>असामान्य खाता गतिविधि और लेनदेन की खराब निगरानी</li>
            <li>महामारी के दौरान और बाद में बढ़ा हुआ डिजिटलीकरण</li>
            <li>सुरक्षा सर्वोत्तम प्रथाओं के बारे में उपभोक्ता जागरूकता की कमी</li>
          </ul>
        </div>

        {/* Types of Account Fraud */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center gap-2">
            <Bot className="w-6 h-6 text-orange-500" /> खाता धोखाधड़ी के प्रकार
          </h2>
          <h3 className="text-lg font-medium text-slate-600 mb-4">Common Types of Account Fraud</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border-l-4 border-red-400">
              <h4 className="font-bold text-red-700 mb-2">नया खाता धोखाधड़ी (New Account Fraud)</h4>
              <p className="text-sm text-slate-700">चोरी या झूठे विवरण का उपयोग करके बनाए गए नकली खाते</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border-l-4 border-orange-400">
              <h4 className="font-bold text-orange-700 mb-2">खाता अधिग्रहण (Account Takeover)</h4>
              <p className="text-sm text-slate-700">जब धोखेबाज वास्तविक उपयोगकर्ता के खाते को हाइजैक करते हैं</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border-l-4 border-yellow-400">
              <h4 className="font-bold text-yellow-700 mb-2">सिंथेटिक पहचान धोखाधड़ी</h4>
              <p className="text-sm text-slate-700">वास्तविक और नकली जानकारी मिलाकर नई पहचान बनाना</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border-l-4 border-purple-400">
              <h4 className="font-bold text-purple-700 mb-2">मनी म्यूल खाते (Mule Accounts)</h4>
              <p className="text-sm text-slate-700">मनी लॉन्ड्रिंग के लिए इस्तेमाल होने वाले खाते</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border-l-4 border-blue-400">
              <h4 className="font-bold text-blue-700 mb-2">भुगतान धोखाधड़ी (Payment Fraud)</h4>
              <p className="text-sm text-slate-700">समझौता किए गए भुगतान जानकारी का उपयोग</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border-l-4 border-green-400">
              <h4 className="font-bold text-green-700 mb-2">लोन स्टैकिंग (Loan Stacking)</h4>
              <p className="text-sm text-slate-700">झूठी जानकारी के साथ एकसाथ कई लोन के लिए आवेदन</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs + Impact */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 mb-16">
        {/* Warning Signs */}
        <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-xl p-8 border border-red-100">
          <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-red-500" /> चेतावनी संकेत | Warning Signs
          </h2>
          <p className="text-slate-700 mb-3 font-medium">
            संगठनों और व्यक्तियों को इन खतरे के संकेतों पर नजर रखनी चाहिए:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>एक ही IP पता या डिवाइस से कई खाते</li>
            <li>खाता खोलने के तुरंत बाद बड़ी मात्रा में लेनदेन</li>
            <li>बार-बार पासवर्ड रीसेट या असफल लॉगिन प्रयास</li>
            <li>निष्क्रिय खाते जो अचानक संदिग्ध गतिविधि के लिए उपयोग होते हैं</li>
            <li>असामान्य स्थानों या देशों से संदिग्ध लॉगिन</li>
            <li>खाता जानकारी और उपयोगकर्ता व्यवहार पैटर्न में बेमेल</li>
            <li>डिस्पोजेबल ईमेल पते या वर्चुअल फोन नंबर का उपयोग</li>
            <li>खाता विवरण में असामान्य परिवर्तन (ईमेल, फोन, पता)</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl p-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-orange-500" /> धोखाधड़ी का प्रभाव | Impact of Fraud
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <b>Financial Loss:</b> Banks, companies, and consumers lose billions annually to fraudulent activities.
            </li>
            <li>
              <b>Reputation Damage:</b> Loss of customer trust and brand image that can take years to rebuild.
            </li>
            <li>
              <b>Operational Costs:</b> Increased costs of investigations, chargebacks, and legal actions.
            </li>
            <li>
              <b>Compliance Risks:</b> Violations of KYC/AML regulations may lead to heavy fines and sanctions.
            </li>
            <li>
              <b>Emotional Distress:</b> Victims often experience significant stress and anxiety.
            </li>
            <li>
              <b>Reduced Financial Inclusion:</b> Tighter security measures may exclude legitimate users.
            </li>
          </ul>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-orange-600 via-red-500 to-green-600 text-white p-10 rounded-3xl shadow-2xl border-2 border-white/20">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <ShieldAlert className="w-10 h-10" /> 
            <span>धोखाधड़ी से कैसे बचें</span>
          </h2>
          <h3 className="text-2xl font-semibold text-center mb-6 text-orange-100">How to Prevent Account Fraud</h3>
          <p className="text-white/90 mb-8 text-center text-lg leading-relaxed max-w-4xl mx-auto">
            खाता धोखाधड़ी को रोकने के लिए मजबूत सुरक्षा नियंत्रण, बुद्धिमान निगरानी और उपयोगकर्ता शिक्षा की आवश्यकता होती है। मुख्य रणनीतियां:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 space-y-2">
              <li>Robust KYC & identity verification at onboarding</li>
              <li>Multi-factor authentication (OTP, biometrics, security keys)</li>
              <li>AI/ML-driven fraud detection and anomaly monitoring</li>
              <li>Device fingerprinting and behavioral biometrics</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time transaction monitoring & alerts</li>
              <li>User awareness programs on phishing & social engineering</li>
              <li>Regular security audits and penetration testing</li>
              <li>Collaboration with industry partners and law enforcement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expandable Sections */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Additional Resources</h2>
        
        {/* Expandable Section 1 */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <button 
            className="w-full p-6 text-left flex justify-between items-center"
            onClick={() => toggleSection('reporting')}
          >
            <span className="text-xl font-semibold text-red-700">संदिग्ध धोखाधड़ी की रिपोर्ट कैसे करें | How to Report Fraud</span>
            {openSection === 'reporting' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {openSection === 'reporting' && (
            <div className="px-6 pb-6">
              <p className="text-slate-700 mb-4 font-medium">यदि आपको लगता है कि आप खाता धोखाधड़ी के शिकार हैं:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-xl">
                  <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> तत्काल संपर्क करें
                  </h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• अपने बैंक से तुरंत संपर्क करें</li>
                    <li>• साइबर क्राइम हेल्पलाइन: 1930</li>
                    <li>• स्थानीय पुलिस में रिपोर्ट दर्ज करें</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-700 mb-3">ऑनलाइन रिपोर्ट करें</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• cybercrime.gov.in पर शिकायत दर्ज करें</li>
                    <li>• RBI की वेबसाइट पर रिपोर्ट करें</li>
                    <li>• I4C (Indian Cyber Crime Coordination Centre) को सूचित करें</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Expandable Section 2 */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <button 
            className="w-full p-6 text-left flex justify-between items-center"
            onClick={() => toggleSection('protection')}
          >
            <span className="text-xl font-semibold text-indigo-700">Personal Protection Strategies</span>
            {openSection === 'protection' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {openSection === 'protection' && (
            <div className="px-6 pb-6">
              <p className="text-slate-700 mb-4">Individuals can protect themselves by:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Using strong, unique passwords for each online account</li>
                <li>Enabling multi-factor authentication wherever available</li>
                <li>Regularly monitoring financial statements for unauthorized transactions</li>
                <li>Being cautious of phishing attempts via email, text, or phone</li>
                <li>Shredding documents containing personal information before disposal</li>
                <li>Freezing credit reports when not seeking new credit</li>
                <li>Being wary of public Wi-Fi for sensitive transactions</li>
                <li>Keeping software and antivirus programs updated</li>
              </ul>
            </div>
          )}
        </div>

        {/* Expandable Section 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <button 
            className="w-full p-6 text-left flex justify-between items-center"
            onClick={() => toggleSection('legislation')}
          >
            <span className="text-xl font-semibold text-green-700">भारतीय पहल और कानून | Indian Initiatives & Laws</span>
            {openSection === 'legislation' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {openSection === 'legislation' && (
            <div className="px-6 pb-6">
              <p className="text-slate-700 mb-4 font-medium">खाता धोखाधड़ी से निपटने के लिए प्रमुख राष्ट्रीय प्रयास:</p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border-l-4 border-orange-400">
                  <h4 className="font-bold text-orange-700 mb-2">IT Act 2000 & Amendments</h4>
                  <p className="text-sm text-slate-700">साइबर अपराधों के लिए कानूनी ढांचा और दंड का प्रावधान</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border-l-4 border-blue-400">
                  <h4 className="font-bold text-blue-700 mb-2">RBI Guidelines on Digital Payments</h4>
                  <p className="text-sm text-slate-700">डिजिटल भुगतान सुरक्षा के लिए आरबीआई दिशानिर्देश</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border-l-4 border-green-400">
                  <h4 className="font-bold text-green-700 mb-2">National Cyber Security Strategy 2020</h4>
                  <p className="text-sm text-slate-700">साइबर सुरक्षा के लिए राष्ट्रीय रणनीति और नीति</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border-l-4 border-purple-400">
                  <h4 className="font-bold text-purple-700 mb-2">CERT-In (Indian Computer Emergency Response Team)</h4>
                  <p className="text-sm text-slate-700">साइबर सुरक्षा घटनाओं के लिए राष्ट्रीय नोडल एजेंसी</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-500" /> Educational Resources
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          
            
            <div className="bg-amber-50 p-6  rounded-xl text-center">
              <div className="bg-amber-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-amber-700 mb-2">Newsletter Subscription</h3>
              <p className="text-sm text-slate-700">Stay updated on the latest fraud trends and prevention strategies</p>
              <button className="mt-4 text-amber-600 text-sm font-medium">Subscribe Now</button>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-xl text-center">
              <div className="bg-emerald-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-700 mb-2">Community Workshops</h3>
              <p className="text-sm text-slate-700">Join our free workshops to learn about fraud prevention firsthand</p>
              <button className="mt-4 text-emerald-600 text-sm font-medium">View Schedule</button>
            </div>
          </div>
        </div>
      </section>

    

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-16 text-center text-slate-600 text-sm">
        <p>This initiative is supported by the National Cyber Security Alliance and financial industry partners.</p>
        <p className="mt-2">For immediate assistance with suspected fraud, contact your financial institution directly.</p>
        <p className="mt-6">© {new Date().getFullYear()} National Account Fraud Awareness Initiative. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AccountFraud;