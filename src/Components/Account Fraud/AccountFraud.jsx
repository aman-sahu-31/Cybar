import React, { useState } from "react";
import { ShieldAlert, AlertTriangle, Bot, Lock, Eye, Users, ChevronDown, ChevronUp, BarChart3, BookOpen, Download, Mail } from "lucide-react";

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
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
          National Account Fraud Awareness Initiative
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Account fraud is one of the fastest-growing financial crimes affecting citizens nationwide. 
          This initiative aims to educate individuals, businesses, and organizations about prevention 
          strategies to create a safer financial environment for everyone.
        </p>
      </div>

      {/* Statistics Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 flex items-center justify-center gap-2">
            <BarChart3 className="w-6 h-6 text-indigo-500" /> National Fraud Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <p className="text-4xl font-bold text-indigo-700">$8.8B</p>
              <p className="text-slate-700 mt-2">Lost to fraud in 2022 nationwide</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl text-center">
              <p className="text-4xl font-bold text-amber-700">2.4M</p>
              <p className="text-slate-700 mt-2">Fraud reports filed by consumers</p>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl text-center">
              <p className="text-4xl font-bold text-rose-700">46%</p>
              <p className="text-slate-700 mt-2">Increase in account takeover attempts</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 text-center mt-4">
            Source: Federal Trade Commission Consumer Sentinel Network
          </p>
        </div>
      </section>

      {/* Why It Happens */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 mb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-indigo-500" /> Why Does Account Fraud Happen?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Fraudsters exploit weak identity verification, poor security controls, and stolen data to commit fraud. Major reasons include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Easy access to leaked or stolen personal information through data breaches</li>
            <li>Weak customer verification at sign-up (no proper KYC procedures)</li>
            <li>Use of sophisticated bots to mass-create fake accounts</li>
            <li>Exploitation of referral bonuses, free trials, and promotional offers</li>
            <li>Poor monitoring of unusual account activity and transactions</li>
            <li>Increased digitalization during and after the pandemic</li>
            <li>Lack of consumer awareness about security best practices</li>
          </ul>
        </div>

        {/* Types of Account Fraud */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            <Bot className="w-6 h-6 text-indigo-500" /> Common Types of Account Fraud
          </h2>
          <ul className="space-y-4 text-slate-700">
            <li>
              <b>New Account Fraud:</b> Fake accounts created using stolen or false details to gain benefits or perform scams.
            </li>
            <li>
              <b>Account Takeover (ATO):</b> When fraudsters steal credentials to hijack a genuine user's account.
            </li>
            <li>
              <b>Synthetic Identity Fraud:</b> Mixing real and fake information to create a "new" identity that can bypass verification.
            </li>
            <li>
              <b>Mule Accounts:</b> Accounts used as channels for money laundering or illegal transfers, often without the account holder's knowledge.
            </li>
            <li>
              <b>Payment Fraud:</b> Unauthorized transactions using compromised payment information.
            </li>
            <li>
              <b>Loan Stacking:</b> Applying for multiple loans simultaneously using falsified information.
            </li>
          </ul>
        </div>
      </section>

      {/* Warning Signs + Impact */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 mb-16">
        {/* Warning Signs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-indigo-500" /> Warning Signs of Account Fraud
          </h2>
          <p className="text-slate-700 mb-3">
            Organizations and individuals should monitor these red flags:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Multiple accounts from the same IP address or device</li>
            <li>High-volume transactions immediately after account sign-up</li>
            <li>Frequent password reset attempts or failed login attempts</li>
            <li>Accounts that remain inactive until suddenly used for suspicious activity</li>
            <li>Suspicious logins from unusual locations or countries</li>
            <li>Mismatch between account information and user behavior patterns</li>
            <li>Use of disposable email addresses or virtual phone numbers</li>
            <li>Unusual changes to account details (email, phone, address)</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-500" /> Impact of Account Fraud
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
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <ShieldAlert className="w-7 h-7" /> How to Prevent Account Fraud
          </h2>
          <p className="text-blue-100 mb-5">
            Preventing account fraud requires strong security controls, intelligent monitoring, and user education. Key strategies include:
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
            <span className="text-xl font-semibold text-indigo-700">How to Report Suspected Fraud</span>
            {openSection === 'reporting' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {openSection === 'reporting' && (
            <div className="px-6 pb-6">
              <p className="text-slate-700 mb-4">If you suspect you've been a victim of account fraud:</p>
              <ol className="list-decimal pl-6 space-y-2 text-slate-700">
                <li>Immediately contact your financial institution</li>
                <li>File a report with your local law enforcement agency</li>
                <li>Report to the Federal Trade Commission at ReportFraud.ftc.gov</li>
                <li>Contact the three major credit bureaus to place a fraud alert
                  <ul className="list-disc pl-6 mt-2">
                    <li>Equifax: 1-800-525-6285</li>
                    <li>Experian: 1-888-397-3742</li>
                    <li>TransUnion: 1-800-680-7289</li>
                  </ul>
                </li>
                <li>Report to the Internet Crime Complaint Center (IC3) if online</li>
              </ol>
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
            <span className="text-xl font-semibold text-indigo-700">National Initiatives & Legislation</span>
            {openSection === 'legislation' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {openSection === 'legislation' && (
            <div className="px-6 pb-6">
              <p className="text-slate-700 mb-4">Key national efforts to combat account fraud:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><b>Identity Theft and Assumption Deterrence Act:</b> Makes identity theft a federal crime</li>
                <li><b>FACT Act:</b> Allows consumers to place fraud alerts and freezes on credit files</li>
                <li><b>FFIEC Guidance:</b> Sets authentication standards for online banking</li>
                <li><b>National Strategy to Combat Identity Theft:</b> Coordinated government approach</li>
                <li><b>FTC's IdentityTheft.gov:</b> Centralized resource for identity theft victims</li>
                <li><b>Financial Services Information Sharing and Analysis Center (FS-ISAC):</b> Industry collaboration</li>
              </ul>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-indigo-700 mb-2">Fraud Prevention Guide</h3>
              <p className="text-sm text-slate-700">Download our comprehensive guide to protecting yourself from account fraud</p>
              <button className="mt-4 text-indigo-600 text-sm font-medium">Download PDF</button>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl text-center">
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

      {/* Call-to-Action */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h3 className="text-2xl font-bold text-indigo-700 mb-3">
            Join the National Fight Against Account Fraud
          </h3>
          <p className="text-slate-600 mb-6">
            As fraud techniques evolve, we must combine technology, regulations, and awareness to stay ahead. 
            Proactive security is not just protection—it's building trust in our financial systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition">
              Report Fraud
            </button>
            <button className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-indigo-50 transition">
              Request a Speaker
            </button>
            <button className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-indigo-50 transition">
              Partner With Us
            </button>
          </div>
        </div>
      </div>

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