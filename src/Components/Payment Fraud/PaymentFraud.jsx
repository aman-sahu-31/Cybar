import React, { useState } from "react";
import { CreditCard, Shield, AlertTriangle, Lock, BarChart, Phone, Mail, ChevronDown, ChevronUp, Zap, Clock, UserCheck, FileText } from "lucide-react";

function PaymentFraud() {
  const [openSection, setOpenSection] = useState(null);
  const [selectedTab, setSelectedTab] = useState('overview');

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  // Fraud statistics data
  const fraudStats = [
    { value: '$32B', label: 'Annual global payment fraud losses', icon: CreditCard },
    { value: '56%', label: 'Increase in payment fraud since 2020', icon: BarChart },
    { value: '73%', label:  'businesses affected by payment fraud', icon: AlertTriangle }
  ];

  // Common fraud types
  const fraudTypes = [
    {
      title: "Card-Not-Present (CNP) Fraud",
      description: "Fraudulent transactions where the physical card is not presented, typically online or over the phone.",
      percentage: "70%",
      icon: CreditCard
    },
    {
      title: "Friendly Fraud",
      description: "When a customer makes a purchase and then disputes the charge despite receiving the goods or services.",
      percentage: "42%",
      icon: UserCheck
    },
    {
      title: "Triangulation Fraud",
      description: "Scammers offer discounted products, use stolen cards to fulfill orders, and disappear with customer data.",
      percentage: "18%",
      icon: Zap
    },
    {
      title: "Identity Theft",
      description: "Using stolen personal information to make unauthorized purchases or open new accounts.",
      percentage: "33%",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Payment Fraud Protection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Payment fraud continues to evolve with new technologies. Understanding how to protect yourself 
            and your business is essential in today's digital economy.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
            <BarChart className="w-6 h-6 text-indigo-600" />
            Payment Fraud By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fraudStats.map((stat, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
                <p className="text-gray-700 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {['overview', 'types', 'prevention', 'response'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium capitalize ${selectedTab === tab ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          {selectedTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Understanding Payment Fraud
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Payment fraud involves unauthorized transactions using stolen payment information or 
                  deceptive practices to obtain goods or services without payment. With the growth of e-commerce 
                  and digital payments, fraudsters have developed increasingly sophisticated methods to exploit 
                  vulnerabilities in payment systems.
                </p>
                <p className="mb-4">
                  Both consumers and businesses are targets. Consumers risk having their payment credentials 
                  stolen and used for unauthorized purchases, while businesses face financial losses, chargeback 
                  fees, and damage to their reputation.
                </p>
                <div className="bg-amber-50 p-5 rounded-xl my-6">
                  <h3 className="font-semibold text-amber-700 mb-3">How Payment Fraud Happens</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Data breaches exposing customer payment information</li>
                    <li>Phishing attacks tricking users into revealing sensitive data</li>
                    <li>Skimming devices capturing card data at physical terminals</li>
                    <li>Malware infecting point-of-sale systems</li>
                    <li>Social engineering manipulating individuals into making payments</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'types' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-indigo-500" />
                Common Types of Payment Fraud
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fraudTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-xl">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">{type.title}</h3>
                      <span className="bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
                        {type.percentage}
                      </span>
                    </div>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'prevention' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-500" />
                Preventing Payment Fraud
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">For Consumers</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full mt-1">
                        <Lock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Secure Online Shopping</h4>
                        <p className="text-gray-600">Only shop on secure websites (look for HTTPS and padlock icon).</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full mt-1">
                        <CreditCard className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Payment Monitoring</h4>
                        <p className="text-gray-600">Regularly review bank and credit card statements for unauthorized charges.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-full mt-1">
                        <Shield className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Use Secure Payment Methods</h4>
                        <p className="text-gray-600">Consider using credit cards or payment services with buyer protection.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">For Businesses</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-full mt-1">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Fraud Detection Systems</h4>
                        <p className="text-gray-600">Implement AI-powered tools to identify suspicious transactions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-2 rounded-full mt-1">
                        <UserCheck className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Strong Authentication</h4>
                        <p className="text-gray-600">Require CVV codes and implement 3D Secure for online transactions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-full mt-1">
                        <BarChart className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Transaction Monitoring</h4>
                        <p className="text-gray-600">Set up alerts for unusual patterns or high-value transactions.</p>
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
                Responding to Payment Fraud
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">If you're a victim of payment fraud:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Contact Your Financial Institution</h4>
                      <p className="text-gray-600">Immediately report unauthorized transactions to your bank or card issuer.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Freeze or Cancel Cards</h4>
                      <p className="text-gray-600">Prevent further unauthorized use of compromised payment methods.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Change Online Passwords</h4>
                      <p className="text-gray-600">Update credentials for any accounts that used the compromised payment method.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Monitor Your Accounts</h4>
                      <p className="text-gray-600">Watch for additional suspicious activity across all financial accounts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">File Reports</h4>
                      <p className="text-gray-600">Report to appropriate authorities like the FTC or local law enforcement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Protection Technologies Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Modern Fraud Prevention Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-5 rounded-xl text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-700 mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-700">Analyzes patterns to detect anomalies and predict fraudulent activity.</p>
            </div>
            
            <div className="bg-green-50 p-5 rounded-xl text-center">
              <div className="bg-green-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-700 mb-2">Biometric Verification</h3>
              <p className="text-sm text-gray-700">Uses fingerprints, facial recognition, or voice patterns to verify identity.</p>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-xl text-center">
              <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-purple-700 mb-2">Tokenization</h3>
              <p className="text-sm text-gray-700">Replaces sensitive data with unique tokens that have no value if intercepted.</p>
            </div>
            
            <div className="bg-amber-50 p-5 rounded-xl text-center">
              <div className="bg-amber-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-amber-700 mb-2">Behavioral Analytics</h3>
              <p className="text-sm text-gray-700">Monitors user behavior patterns to detect deviations that may indicate fraud.</p>
            </div>
          </div>
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
                <span className="font-medium text-gray-800">What should I do if I notice an unauthorized charge?</span>
                {openSection === 'faq1' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openSection === 'faq1' && (
                <div className="p-4 bg-white border-t">
                  <p className="text-gray-700">
                    Contact your bank or card issuer immediately to report the unauthorized charge. 
                    Federal law limits your liability to $50 if reported within 2 days, and most issuers 
                    have zero liability policies. They will typically cancel your current card and issue 
                    a new one with a different number.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
                onClick={() => toggleSection('faq2')}
              >
                <span className="font-medium text-gray-800">Are digital wallets like Apple Pay safer than physical cards?</span>
                {openSection === 'faq2' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openSection === 'faq2' && (
                <div className="p-4 bg-white border-t">
                  <p className="text-gray-700">
                    Yes, digital wallets provide additional security through tokenization and biometric 
                    authentication. Instead of sharing your actual card details, they generate a unique 
                    token for each transaction. This means merchants never receive your real card number, 
                    reducing the risk of your information being compromised in data breaches.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
                onClick={() => toggleSection('faq3')}
              >
                <span className="font-medium text-gray-800">How can businesses reduce payment fraud?</span>
                {openSection === 'faq3' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openSection === 'faq3' && (
                <div className="p-4 bg-white border-t">
                  <p className="text-gray-700">
                    Businesses can implement several strategies: use address verification systems (AVS), 
                    require CVV codes for card-not-present transactions, implement 3D Secure authentication, 
                    use machine learning fraud detection tools, monitor for unusual patterns, and maintain 
                    PCI DSS compliance. Employee training on recognizing suspicious orders is also crucial.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Stay Protected Against Payment Fraud</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Sign up for our fraud prevention newsletter to receive the latest updates on security threats 
            and protection strategies for both consumers and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
              Subscribe to Alerts
            </button>
            <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition">
              Download Prevention Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentFraud;