import React from "react";
import { 
  FaLink, FaDesktop, FaStar, FaShieldAlt, 
  FaFingerprint, FaRobot, FaChartLine, FaUserSecret 
} from "react-icons/fa";

const useCases = [
  {
    icon: <FaLink size={20} />,
    title: "New Account Fraud",
    desc: "Detect and block fraudulent account creations from bots, identify behaviors indicative of synthetic identities and mule accounts. Harness browsing behaviors prior to account application to detect high-risk behaviors.",
  },
  {
    icon: <FaDesktop size={20} />,
    title: "Account Takeover (ATO)",
    desc: "Continuously monitor user accounts for signs of compromised credentials, unusual behavior patterns, and changes in device or network context to prevent unauthorized account access in real-time.",
  },
  {
    icon: <FaStar size={20} />,
    title: "Payment Fraud",
    desc: "Evaluate each transaction against behavioral and contextual baselines to identify anomalies, intercept fraudulent – or potential scam – transfers, and prevent downstream losses.",
  },
  {
    icon: <FaDesktop size={20} />,
    title: "APP Scams",
    desc: "Detect authorized push payment (APP) fraud, even when initiated by the legitimate user, by identifying signs of coercion, social engineering, remote access, and anomalous payment behaviors.",
  },
  {
    icon: <FaChartLine size={20} />,
    title: "Transaction Risk Analysis",
    desc: "Support compliance with PSD2 by assessing the risk of every transaction based on behavior, device, identity and network signals. Make precise, automated decisions on payments, transfers and account actions.",
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: "Ongoing Session Monitoring",
    desc: "Move beyond point-in-time checks with continuous session intelligence that flags mid-session threats, session hijacking, or behavioral drift throughout a user’s journey.",
  },
  {
    icon: <FaFingerprint size={20} />,
    title: "Behavioral Risk Analytics",
    desc: "Leverage deep behavioral analytics to distinguish between trusted customers and fraudsters by recognizing how users type, swipe, navigate, and interact with their device over time.",
  },
  {
    icon: <FaRobot size={20} />,
    title: "Bot and Automation Detection",
    desc: "Identify and block automated attacks, including credential stuffing, fake account creation, and scripted transactions, by analyzing patterns that deviate from genuine human behavior across channels.",
  },
];

const Learning = () => {
  return (
    <section className="w-full text-gray-900 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/15 rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
      
      <div className="w-full max-w-6xl mx-auto text-center mb-12 relative z-10">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Use Cases We Solve for Fintech
          </h2>
          <p className="text-base md:text-lg text-slate-600 w-full max-w-4xl mx-auto leading-relaxed">
            Our comprehensive cyberfraud prevention platform helps fintechs evaluate risk continuously across the entire customer lifecycle, from login to logout. By analyzing user behavior and customer intent signals, we help you make smarter, real-time decisions that protect your customers and their accounts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {useCases.map(({ icon, title, desc }, i) => (
  <div
    key={i}
    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200
               transform transition-all duration-300 
               hover:scale-105 hover:shadow-xl hover:bg-white cursor-pointer group"
  >
    <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 w-fit shadow-md">
      <div className="text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors">
      {title}
    </h3>
    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
      {desc}
    </p>
  </div>
))}

      </div>
    </section>
  );
};

export default Learning;
