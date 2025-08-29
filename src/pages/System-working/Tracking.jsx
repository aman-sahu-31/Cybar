import React from "react";
import { Shield, UserPlus, Route, Users } from "lucide-react";

export default function Tracking() {
  const features = [
    {
      title: "Protect Vulnerabilities in Business Processes",
      description:
        "While fintechs grew up digital-first, they have also developed new onboarding experiences and payment platforms that fraudsters exploit. Protect every touchpoint in the digital journey without the forklift install.",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      title: "Streamline Onboarding Without Compromise",
      description:
        "Isolate and block malicious automated bots and human click farms from developing fake accounts. Streamline the integration of third–party authentication and KYC checks for a slick onboarding experience.",
      icon: <UserPlus className="w-6 h-6 text-white" />,
    },
    {
      title: "Secure the Entire Customer Journey",
      description:
        "Understand trusted user behavior from login, through change of details, adding new beneficiaries, making and receiving payments. Monitor interactions on a journey–level rather than at moments in time to detect unusual behaviors.",
      icon: <Route className="w-6 h-6 text-white" />,
    },
    {
      title: "Tailor Unique Customer Experiences",
      description:
        "Digital-first customers are looking for tailored user experiences that delight rather than insult. Prevent your best customers from jumping through unnecessary authentication hoops. Recognize loyalty to protect lifetime value.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 py-5 px-6 min-h-screen">
      {/* Heading */}
      <div className="max-w-5xl  mx-auto text-center mb-16">
        <div className="mb-5">
          <span className="inline-block  bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold">
            Advanced Fraud Prevention
          </span>
        </div>
        <h2 className="text-4xl md:text-4xl font-bold mb-3 text-slate-900">
          Transform the Way You Detect and Prevent Fraud
        </h2>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Leverage cutting-edge technology to protect your business with intelligent fraud detection and prevention systems.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Icon Container */}
            <div className="mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                {React.cloneElement(feature.icon, { className: "w-7 h-7 text-white" })}
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
