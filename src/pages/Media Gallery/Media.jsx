import React, { useState } from "react";

export default function FraudPrevention() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const topAccordions = [
    {
      title: "Unite Operational Silos",
      content:
        "Darwinium creates a single view of the customer that can be used by multiple business units. At the network level, security teams can make more context-aware risk decisions. Fraud teams gain deeper visibility into user intent across each digital interaction. CRM and marketing teams can use behavioral insights to tailor experiences on a per customer basis to build loyalty and trust.",
    },
    {
      title: "Customer Journey Orchestration",
      content:
        "Streamline orchestration of user journeys across multiple systems. Gain better visibility and control of customer interactions without compromising trust.",
    },
    {
      title: "Future-proofed, Resilient Risk Management",
      content:
        "Build a risk management strategy that adapts to evolving fraud threats while minimizing friction for legitimate users.",
    },
  ];

  const bottomAccordions = [
    {
      title: "Frictionless Account Opening & Onboarding",
      content:
        "Harness browsing behaviors prior to new account application to detect high-risk / anomalous behaviors. Identify and block account creations from bots or fraud farms to ensure streamlined onboarding for legitimate customers. Integrate additional intelligence from plug-and-play third-party services, or any bespoke services via the API.",
    },
    {
      title: "Stop ATOs and Credential Stuffing",
      content:
        "Prevent account takeover attempts and credential stuffing attacks with behavioral analysis and anomaly detection.",
    },
    {
      title: "Detect & Deter Social Engineering",
      content:
        "Identify social engineering patterns in real-time to protect customers from fraudulent manipulation.",
    },
    {
      title: "Flexible, Edge-Based Architecture",
      content:
        "Deploy fraud detection closer to your users for faster, more reliable protection without adding unnecessary latency.",
    },
  ];

  return (
    <div className="bg-gray-200 pb-10 text-slate-800 min-h-screen">
      {/* ---------------- TOP HEADING ---------------- */}
      <div className="py-6 px-6 max-w-6xl mx-auto text-center mb-8">
        <div className="mb-5">
          <span className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold">
            Intelligence & Analytics
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Unify Intelligence and Analytics to Better Protect the Complete
          Customer Journey
        </h2>
        <p className="text-slate-600 text-md max-w-4xl mx-auto leading-relaxed">
          Digital wallets, cryptocurrencies and neo-banks are key targets for
          fraudsters looking to exploit gaps in business processes, putting
          digital-first strategies to the test. Darwinium unites operational
          siloes and gaps in digital journeys to future-proof cyberfraud
          prevention.
        </p>
      </div>

      {/* ---------------- ACCORDION + IMAGE ---------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Accordions */}
        <div className="space-y-6">
          {topAccordions.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {openIndex === index ? "−" : "+"}
                </div>
              </div>
              {openIndex === index && (
                <p className="text-slate-600 mt-4 text-base leading-relaxed">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://www.darwinium.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbjdg9lcf%2Fstaging%2F391b8d211ea12936ef8f78f24346eb99d848159c-1175x982.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75"
            alt="Analytics demo"
            className="rounded-2xl shadow-lg border border-slate-200"
          />
        </div>
      </div>

      {/* ---------------- BOTTOM SECTION ---------------- */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Text */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Fintech Fraud Prevention Powered by Behavioral Intelligence
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Darwinium's edge-based architecture helps fintechs see the full
            context of user behavior, identifying coercion, compromised
            accounts, and fraudulent AI agents in real-time, empowering
            businesses to act instantly without compromising customer
            experience.
          </p>
        </div>

        {/* Right Accordions */}
        <div className="space-y-6   ">
          {bottomAccordions.map((item, index) => (
            <div
              key={index + 10}
              className="bg-white border  border-slate-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => toggleAccordion(index + 10)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {openIndex === index + 10 ? "−" : "+"}
                </div>
              </div>
              {openIndex === index + 10 && (
                <p className="text-slate-600 mt-4 text-base leading-relaxed">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- TESTIMONIAL SECTION ---------------- */}
     
    </div>
  );
}
