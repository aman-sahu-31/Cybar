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
    <div className="bg-[#5a5e8f] text-white">
      {/* ---------------- TOP HEADING ---------------- */}
      <div className="py-16 px-6 max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Unify Intelligence and Analytics to Better Protect the Complete
          Customer Journey
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Digital wallets, cryptocurrencies and neo-banks are key targets for
          fraudsters looking to exploit gaps in business processes, putting
          digital-first strategies to the test. Darwinium unites operational
          siloes and gaps in digital journeys to future-proof cyberfraud
          prevention.
        </p>
      </div>

      {/* ---------------- ACCORDION + IMAGE ---------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Accordions */}
        <div className="space-y-4">
          {topAccordions.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-2 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="text-gray-400 mt-2 text-sm">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://www.darwinium.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbjdg9lcf%2Fstaging%2F391b8d211ea12936ef8f78f24346eb99d848159c-1175x982.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75"
            alt="Analytics demo"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* ---------------- BOTTOM SECTION ---------------- */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Fintech Fraud Prevention Powered by Behavioral Intelligence
          </h2>
          <p className="text-gray-300">
            Darwinium’s edge-based architecture helps fintechs see the full
            context of user behavior, identifying coercion, compromised
            accounts, and fraudulent AI agents in real-time, empowering
            businesses to act instantly without compromising customer
            experience.
          </p>
        </div>

        {/* Right Accordions */}
        <div className="space-y-4">
          {bottomAccordions.map((item, index) => (
            <div
              key={index + 10}
              className="border-b border-gray-700 pb-2 cursor-pointer"
              onClick={() => toggleAccordion(index + 10)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <span>{openIndex === index + 10 ? "−" : "+"}</span>
              </div>
              {openIndex === index + 10 && (
                <p className="text-gray-400 mt-2 text-sm">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- TESTIMONIAL SECTION ---------------- */}
      <div
        className="relative mt-20 py-16 px-6 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1673822212845-9d41e60891df?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl bg-[#5a5e8f] rounded-2xl shadow-lg p-8 text-white">
          <p className="text-lg leading-relaxed mb-6">
            “Since implementing Darwinium, we’ve seen a significant improvement
            in our ability to detect and respond to suspicious activities –
            particularly around account takeover, mule detection and payment
            fraud scenarios. The real-time alerts, device intelligence, and
            behavioral analysis have proven to be extremely effective in helping
            us safeguard our customer accounts.”
          </p>

          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium">Dfirama Pandiyan</p>
              <p className="text-sm text-gray-300">
                Fraud Operations Lead at Boost
              </p>
              <img
                src="https://seeklogo.com/images/B/boost-logo-7E64DA9ECF-seeklogo.com.png"
                alt="Boost Logo"
                className="h-6 mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
