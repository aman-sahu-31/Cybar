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
} from "lucide-react";

function OngoingSessionMonitoring() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-100 px-6 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
          Ongoing Session Monitoring
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Ongoing Session Monitoring refers to the continuous observation,
          analysis, and validation of user activity during an active session.
          Unlike static authentication, which only checks identity at login,
          this technique ensures that every click, transaction, and interaction
          is evaluated in real time to prevent fraud and enhance security.
        </p>
      </div>

      {/* Why It Matters & Benefits */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-indigo-600 w-7 h-7" />
            <h2 className="text-2xl font-semibold text-indigo-700">
              Why It Matters
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Traditional login checks can be bypassed by fraudsters using stolen
            credentials, session hijacking, or malware. Continuous monitoring
            helps detect abnormal behaviors such as sudden location changes,
            impossible travel, automated clicks, or risky device activities.
            This ensures that organizations can respond to threats instantly,
            minimizing losses and protecting user trust.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-indigo-600 w-7 h-7" />
            <h2 className="text-2xl font-semibold text-indigo-700">
              Key Benefits
            </h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Detects fraudulent activities in real-time.</li>
            <li>Protects users from account takeover and phishing attacks.</li>
            <li>
              Strengthens compliance with regulations like GDPR, RBI, PCI DSS.
            </li>
            <li>Enhances user confidence with proactive security.</li>
            <li>Reduces financial and reputational risk for businesses.</li>
          </ul>
        </div>
      </div>

      {/* Monitoring Techniques */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
          Techniques Used in Session Monitoring
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-blue-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-800">
                Behavioral Analytics
              </h3>
            </div>
            <p className="text-slate-600 text-sm">
              Monitors typing speed, mouse movement, and browsing habits to
              detect bot-like patterns and unusual behavior.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-blue-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-800">
                Device & IP Analysis
              </h3>
            </div>
            <p className="text-slate-600 text-sm">
              Tracks device fingerprinting, IP reputation, and geo-location to
              prevent anomalies like multiple logins from different countries.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-blue-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-800">Risk Scoring</h3>
            </div>
            <p className="text-slate-600 text-sm">
              AI assigns a risk score to each action. High-risk behaviors trigger
              step-up authentication or session termination.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <Fingerprint className="text-blue-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-800">
                Biometric Re-Verification
              </h3>
            </div>
            <p className="text-slate-600 text-sm">
              Uses fingerprint, face ID, or voice recognition during sensitive
              transactions for stronger assurance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="text-blue-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-800">
                AI & Machine Learning
              </h3>
            </div>
            <p className="text-slate-600 text-sm">
              Detects fraud patterns across millions of sessions by learning from
              past attacks and adapting dynamically.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="text-blue-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-800">
                Network Monitoring
              </h3>
            </div>
            <p className="text-slate-600 text-sm">
              Identifies suspicious proxy, VPN, or TOR network usage that may
              indicate fraud or identity masking.
            </p>
          </div>
        </div>
      </div>

      {/* Real-World Use Cases */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
          Real-World Use Cases
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <Users className="text-indigo-600 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Banking & Payments</h3>
            <p className="text-slate-600">
              Detects unauthorized money transfers, fake KYC sessions, or bot
              attacks during net banking sessions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <CheckCircle className="text-indigo-600 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">E-commerce Platforms</h3>
            <p className="text-slate-600">
              Prevents fake purchases, coupon abuse, and fraudsters testing
              stolen credit cards during checkout.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <ShieldCheck className="text-indigo-600 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Healthcare Systems</h3>
            <p className="text-slate-600">
              Ensures patient records are accessed only by authorized personnel
              and prevents medical identity theft.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <Globe className="text-indigo-600 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Government & Education
            </h3>
            <p className="text-slate-600">
              Secures digital classrooms, e-governance portals, and prevents
              fake exam attempts or misuse of government schemes.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-5xl mx-auto mt-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-10 rounded-2xl shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-3">Conclusion</h3>
        <p className="mb-5 text-blue-100 max-w-3xl mx-auto">
          Ongoing Session Monitoring is no longer optional but a necessity in
          today’s digital-first world. By continuously observing user activity,
          leveraging AI-driven analytics, and implementing adaptive security
          measures, businesses can stay one step ahead of fraudsters. It
          safeguards revenue, builds customer trust, and ensures compliance with
          global security standards.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-slate-100 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default OngoingSessionMonitoring;
