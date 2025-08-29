import React, { useState } from "react";
import { Shield, AlertTriangle, Lock, Key, UserCheck, Phone, Mail, ChevronDown, ChevronUp, BarChart, Clock, Globe, CreditCard } from "lucide-react";

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Account Takeover (ATO) Protection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Account Takeover occurs when cybercriminals gain unauthorized access to your accounts. 
            Learn how to protect yourself and respond if you become a victim.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
            <BarChart className="w-6 h-6 text-indigo-600" />
            ATO By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-blue-700">+90%</p>
              <p className="text-gray-700 mt-2">Increase in ATO attacks in the past year</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-red-700">$12K</p>
              <p className="text-gray-700 mt-2">Average loss per ATO incident</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-amber-700">58%</p>
              <p className="text-gray-700 mt-2">Of people reuse passwords across accounts</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            className={`px-4 py-2 rounded-lg font-medium ${selectedTab === 'warning-signs' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedTab('warning-signs')}
          >
            Warning Signs
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium ${selectedTab === 'prevention' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedTab('prevention')}
          >
            Prevention
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium ${selectedTab === 'response' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedTab('response')}
          >
            Response Plan
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium ${selectedTab === 'resources' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedTab('resources')}
          >
            Resources
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          {selectedTab === 'warning-signs' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Warning Signs of Account Takeover
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Indicators
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Password reset emails you didn't request</li>
                    <li>Notifications of login attempts from unknown devices</li>
                    <li>Unfamiliar "welcome" emails from services</li>
                    <li>Confirmation emails for changes you didn't make</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Financial Indicators
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Unauthorized transactions or purchases</li>
                    <li>Changes to payment methods or billing info</li>
                    <li>New accounts or lines of credit you didn't open</li>
                    <li>Unfamiliar recipients in your payment history</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Account Activity Indicators
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Unable to login with your credentials</li>
                    <li>New devices in your account security settings</li>
                    <li>Changes to security questions or recovery options</li>
                    <li>Unfamiliar posts or messages sent from your accounts</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Phone & SMS Indicators
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Unexpected two-factor authentication codes</li>
                    <li>Calls from companies about account changes</li>
                    <li>Text messages confirming changes you didn't make</li>
                    <li>SIM swap warnings from your mobile carrier</li>
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