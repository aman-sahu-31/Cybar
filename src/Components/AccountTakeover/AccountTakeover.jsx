import React, { useState } from "react";
import { Shield, AlertTriangle, Lock, Key, UserCheck, Phone, Mail, ChevronDown, ChevronUp, BarChart, Clock, Globe, CreditCard, TrendingUp } from "lucide-react";

function AccountTakeover() {
  const [openSection, setOpenSection] = useState(null);
  const [selectedTab, setSelectedTab] = useState('warning-signs');

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-1 rounded-3xl mb-8">
            <div className="bg-white rounded-3xl p-8">
              <div className="flex items-center py-5 justify-center mb-4">
                <Shield className="w-12 h-12 text-orange-500 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r py-2 from-orange-600 to-green-600 bg-clip-text text-transparent">
                  संदिग्ध खाता अधिग्रहण सुरक्षा
                </h1>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-4">
                Suspicious Account Takeover Detection & Protection
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                संदिग्ध खाता अधिग्रहण एक गंभीर साइबर अपराध है जहां अपराधी आपके वित्तीय खातों तक अनधिकृत पहुंच प्राप्त करते हैं। 
                हमारी उन्नत निष्क्रियता प्रणाली संदिग्ध लेनदेन की पहचान करती है और आपकी सुरक्षा सुनिश्चित करती है।
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="bg-orange-100 px-4 py-2 rounded-full">
                  <span className="text-orange-700 font-semibold text-sm">🔒 Cyber Suraksha</span>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-full">
                  <span className="text-green-700 font-semibold text-sm">🇮🇳 Digital India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 mb-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              भारतीय खाता अधिग्रहण आंकड़े
            </span>
            <br />
            <span className="text-xl text-slate-700 mt-2 block">Indian ATO Statistics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-red-700 mb-2">+125%</p>
              <p className="text-slate-700 font-medium">ATO हमलों में वृद्धि</p>
              <p className="text-sm text-slate-600 mt-1">Increase in ATO attacks (2023)</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <CreditCard className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-orange-700 mb-2">₹8.5L</p>
              <p className="text-slate-700 font-medium">औसत नुकसान प्रति घटना</p>
              <p className="text-sm text-slate-600 mt-1">Average loss per ATO incident</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Lock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-blue-700 mb-2">73%</p>
              <p className="text-slate-700 font-medium">पासवर्ड पुन: उपयोग</p>
              <p className="text-sm text-slate-600 mt-1">Of Indians reuse passwords</p>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-slate-100 to-slate-200 p-4 rounded-xl">
            <p className="text-sm text-slate-600 text-center font-medium">
              स्रोत: भारतीय साइबर अपराध समन्वय केंद्र (I4C) | Source: Indian Cyber Crime Coordination Centre
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedTab === 'warning-signs' ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105' : 'bg-white text-red-600 border-2 border-red-200 hover:bg-red-50'}`}
            onClick={() => setSelectedTab('warning-signs')}
          >
            चेतावनी संकेत | Warning Signs
          </button>
          <button
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedTab === 'prevention' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105' : 'bg-white text-green-600 border-2 border-green-200 hover:bg-green-50'}`}
            onClick={() => setSelectedTab('prevention')}
          >
            रोकथाम | Prevention
          </button>
          <button
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedTab === 'response' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105' : 'bg-white text-orange-600 border-2 border-orange-200 hover:bg-orange-50'}`}
            onClick={() => setSelectedTab('response')}
          >
            प्रतिक्रिया योजना | Response Plan
          </button>
          <button
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedTab === 'resources' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' : 'bg-white text-blue-600 border-2 border-blue-200 hover:bg-blue-50'}`}
            onClick={() => setSelectedTab('resources')}
          >
            संसाधन | Resources
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          {selectedTab === 'warning-signs' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  खाता अधिग्रहण के चेतावनी संकेत
                </span>
                <br />
                <span className="text-xl text-slate-700 mt-2 block">Warning Signs of Account Takeover</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl shadow-lg border border-amber-200">
                  <h3 className="font-bold text-amber-700 mb-4 flex items-center gap-2 text-lg">
                    <Mail className="w-6 h-6" />
                    ईमेल संकेतक | Email Indicators
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>पासवर्ड रीसेट ईमेल जो आपने नहीं मांगे</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>अज्ञात डिवाइस से लॉगिन प्रयासों की सूचनाएं</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>अपरिचित सेवाओं से "स्वागत" ईमेल</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>ऐसे बदलावों की पुष्टि ईमेल जो आपने नहीं किए</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl shadow-lg border border-red-200">
                  <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2 text-lg">
                    <CreditCard className="w-6 h-6" />
                    वित्तीय संकेतक | Financial Indicators
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>अनधिकृत लेनदेन या खरीदारी</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>भुगतान विधियों या बिलिंग जानकारी में बदलाव</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>नए खाते या क्रेडिट लाइन जो आपने नहीं खोले</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>भुगतान इतिहास में अपरिचित प्राप्तकर्ता</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200">
                  <h3 className="font-bold text-blue-700 mb-4 flex items-center gap-2 text-lg">
                    <Globe className="w-6 h-6" />
                    खाता गतिविधि संकेतक | Account Activity
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>अपनी साख के साथ लॉगिन करने में असमर्थता</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>सुरक्षा सेटिंग्स में नए डिवाइस</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>सुरक्षा प्रश्नों या रिकवरी विकल्पों में बदलाव</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>आपके खातों से भेजे गए अपरिचित पोस्ट या संदेश</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg border border-purple-200">
                  <h3 className="font-bold text-purple-700 mb-4 flex items-center gap-2 text-lg">
                    <Phone className="w-6 h-6" />
                    फोन और SMS संकेतक | Phone & SMS
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>अप्रत्याशित द्विकारक प्रमाणीकरण कोड</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>खाता परिवर्तन के बारे में कंपनियों से कॉल</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>ऐसे बदलावों की पुष्टि SMS जो आपने नहीं किए</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>मोबाइल कैरियर से SIM स्वैप चेतावनी</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'prevention' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-500" />
                Preventing Account Takeover
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Essential Protections</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full mt-1">
                        <Key className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Strong, Unique Passwords</h4>
                        <p className="text-gray-600">Use a password manager to create and store complex passwords for each account.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full mt-1">
                        <UserCheck className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Multi-Factor Authentication</h4>
                        <p className="text-gray-600">Enable MFA on all accounts, using authenticator apps instead of SMS when possible.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-full mt-1">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Email Security</h4>
                        <p className="text-gray-600">Use unique email addresses for important accounts and enable security alerts.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Advanced Protections</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-full mt-1">
                        <Lock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Credit Freezes & Alerts</h4>
                        <p className="text-gray-600">Place freezes on your credit reports and set up fraud alerts with major bureaus.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-2 rounded-full mt-1">
                        <Phone className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">SIM Lock Protection</h4>
                        <p className="text-gray-600">Contact your mobile provider to add extra security to prevent SIM swapping.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-full mt-1">
                        <Shield className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Account Monitoring</h4>
                        <p className="text-gray-600">Use account monitoring services and regularly check your account activity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'response' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-red-500" />
                Immediate Response Checklist
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">If you suspect account takeover:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Secure Your Email Account First</h4>
                      <p className="text-gray-600">Change password and enable MFA. Check forwarding rules and recovery options.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Contact Financial Institutions</h4>
                      <p className="text-gray-600">Immediately call banks and credit card companies to freeze accounts and report fraud.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Check Other Important Accounts</h4>
                      <p className="text-gray-600">Review social media, shopping, and cloud storage accounts for unauthorized changes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Place Credit Freezes</h4>
                      <p className="text-gray-600">Contact Equifax, Experian, and TransUnion to freeze your credit reports.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">File Reports</h4>
                      <p className="text-gray-600">File a report with the FTC at IdentityTheft.gov and with local law enforcement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'resources' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-indigo-500" />
                Protection Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-blue-700 mb-3">Password Managers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Bitwarden (Free & Open Source)</li>
                    <li>• 1Password (User-Friendly)</li>
                    <li>• LastPass (Freemium Option)</li>
                    <li>• KeePass (Local Storage)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-green-700 mb-3">Authentication Apps</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Google Authenticator</li>
                    <li>• Authy (Multi-Device Sync)</li>
                    <li>• Microsoft Authenticator</li>
                    <li>• Duo Mobile</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-amber-700 mb-3">Credit Freeze Contacts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Equifax: 1-800-349-9960</li>
                    <li>• Experian: 1-888-397-3742</li>
                    <li>• TransUnion: 1-888-909-8872</li>
                    <li>• Innovis: 1-800-540-2505</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-purple-700 mb-3">Reporting Resources</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• FTC IdentityTheft.gov</li>
                    <li>• Internet Crime Complaint Center (IC3)</li>
                    <li>• Consumer Financial Protection Bureau</li>
                    <li>• Your State Attorney General</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
                onClick={() => toggleSection('faq1')}
              >
                <span className="font-medium text-gray-800">How do hackers typically gain access to accounts?</span>
                {openSection === 'faq1' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openSection === 'faq1' && (
                <div className="p-4 bg-white border-t">
                  <p className="text-gray-700">
                    Hackers use various methods including phishing attacks, credential stuffing (using passwords 
                    from previous breaches), data breaches, malware, SIM swapping, and social engineering. 
                    They often target email accounts first since they can be used to reset passwords on other services.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
                onClick={() => toggleSection('faq2')}
              >
                <span className="font-medium text-gray-800">What's the difference between ATO and identity theft?</span>
                {openSection === 'faq2' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openSection === 'faq2' && (
                <div className="p-4 bg-white border-t">
                  <p className="text-gray-700">
                    Account Takeover (ATO) specifically refers to unauthorized access to your existing accounts, 
                    while identity theft is broader and involves using your personal information to open new 
                    accounts or commit fraud in your name. ATO can lead to identity theft if the attacker gains 
                    enough personal information from your accounts.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
                onClick={() => toggleSection('faq3')}
              >
                <span className="font-medium text-gray-800">How can I check if my information has been compromised in a data breach?</span>
                {openSection === 'faq3' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openSection === 'faq3' && (
                <div className="p-4 bg-white border-t">
                  <p className="text-gray-700">
                    You can use services like HaveIBeenPwned.com to check if your email appears in known data breaches. 
                    Many password managers also include breach monitoring features. Additionally, consider using your 
                    browser's built-in password checking tools or credit monitoring services that include dark web monitoring.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Stay Protected Against ATO</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Take action today to secure your accounts. Our free security checklist helps you 
            identify vulnerabilities and strengthen your defenses against account takeover.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
              Download Security Checklist
            </button>
            <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition">
              Sign Up for Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountTakeover;