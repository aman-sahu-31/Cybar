import React from "react";
import { 
  FaLink, FaDesktop, FaStar, FaShieldAlt, 
  FaFingerprint, FaRobot, FaChartLine, FaUserSecret 
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const useCases = [
  {
    icon: <FaLink size={20} />,
    title: "New Account Fraud",
    desc: "Detect and block fraudulent account creations from bots, identify behaviors indicative of synthetic identities and mule accounts. Harness browsing behaviors prior to account application to detect high-risk behaviors.",
    path: "/AccountFraud"
  },
  {
    icon: <FaDesktop size={20} />,
    title: "Account Takeover (ATO)",
    desc: "Continuously monitor user accounts for signs of compromised credentials, unusual behavior patterns, and changes in device or network context to prevent unauthorized account access in real-time.",
    path: "/AccountTakeover"
  },
  {
    icon: <FaStar size={20} />,
    title: "Payment Fraud",
    desc: "Evaluate each transaction against behavioral and contextual baselines to identify anomalies, intercept fraudulent – or potential scam – transfers, and prevent downstream losses.",
    path: "/PaymentFraud" 
  },
  {
    icon: <FaDesktop size={20} />,
    title: "APP Scams",
    desc: "Detect authorized push payment (APP) fraud, even when initiated by the legitimate user, by identifying signs of coercion, social engineering, remote access, and anomalous payment behaviors.",
    path: "/AppScam"
  },
  {
    icon: <FaChartLine size={20} />,
    title: "Transaction Risk Analysis",
    desc: "Support compliance with PSD2 by assessing the risk of every transaction based on behavior, device, identity and network signals. Make precise, automated decisions on payments, transfers and account actions.",
    path: "/TransactionRiskDashboard"
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: "Ongoing Session Monitoring",
    desc: "Move beyond point-in-time checks with continuous session intelligence that flags mid-session threats, session hijacking, or behavioral drift throughout a user’s journey.",
    path: "/OngoingSessionMonitoring"
  },
  {
    icon: <FaFingerprint size={20} />,
    title: "Behavioral Risk Analytics",
    desc: "Leverage deep behavioral analytics to distinguish between trusted customers and fraudsters by recognizing how users type, swipe, navigate, and interact with their device over time.",
    path: "/BehavioralRiskAnalytics"
  },
  {
    icon: <FaRobot size={20} />,
    title: "Bot and Automation Detection",
    desc: "Identify and block automated attacks, including credential stuffing, fake account creation, and scripted transactions, by analyzing patterns that deviate from genuine human behavior across channels.",
    path: "/BotAutomationDetection"
  },
];

const Feature = () => {
  return (
    <section className="w-full text-gray-900 bg-gradient-to-br py-3 from-blue-50 via-slate-50 to-indigo-100    px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/15 rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>

      <div className="w-full text-blue-600 max-w-6xl mx-auto text-center mb-7 relative z-10">
       <h1 className="font-bold text-5xl ">Features</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {useCases.map(({ icon, title, desc,path }, i) => (
  <div
    key={i}
    className="bg-white/80 backdrop-blur-sm p-6 mb-10 rounded-xl shadow-lg border border-slate-200
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
    <NavLink to={path} className="text-blue-600 hover:underline">
      Learn More
    </NavLink>
  </div>
))}

      </div>
    </section>
  );
};

export default Feature;
