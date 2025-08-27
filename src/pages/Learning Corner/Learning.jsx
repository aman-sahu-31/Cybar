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
    <section className=" text-white bg-[#5a5e8f] py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Use Cases Darwinium Solves for Fintech</h2>
        <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
          Darwinium is a cyberfraud prevention platform that helps fintechs to evaluate risk continuously across the entire customer lifecycle, from login to logout. By analyzing user behavior and customer intent signals, we help you make smarter, real-time decisions that protect your customers, and their accounts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {useCases.map(({ icon, title, desc }, i) => (
  <div
    key={i}
    className="bg-black/30 bg-opacity-30 p-6 rounded-lg shadow-lg 
               transform transition-all duration-300 
               hover:scale-105 hover:shadow-xl cursor-pointer"
  >
    <div className="mb-4 text-purple-400">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
  </div>
))}

      </div>
    </section>
  );
};

export default Learning;
