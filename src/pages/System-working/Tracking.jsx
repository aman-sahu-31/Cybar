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
    <div className="bg-[#5a5e8f] text-white py-16 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Transform the Way You Detect and Prevent Fraud
        </h2>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" bg-black/30 bg-opacity-30 p-6 rounded-lg shadow-lg 
               transform transition-all duration-300 
               hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
