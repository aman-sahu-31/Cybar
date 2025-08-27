import React, { useState } from "react";

export default function System() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    "How does Darwinium help Fintechs prevent fraud?",
    "Can Darwinium detect subtle automation or scripted attacks on our platform?",
    "How does Darwinium support regulatory compliance and data privacy in financial services?",
    "What types of financial fraud can Darwinium detect and mitigate?",
    "How quickly can we integrate Darwinium into our existing Fintech stack?",
    "Does Darwinium slow down transaction processing or impact customer experience?",
    "How does Darwinium differentiate between risky and legitimate users?",
    "Can Darwinium trigger custom actions for flagged transactions?",
    "What insights does Darwinium provide for fraud investigation and reporting?",
  ];

  return (
    <div className="bg-[#5a5e8f] pt-20 text-white">
      {/* ---------------- Case Study Form Section ---------------- */}
      <div className="max-w-6xl   mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 rounded-xl p-10 ">
        {/* Left */}
        <div  >
          <span className="text-purple-400 uppercase tracking-wide text-sm font-medium">
            Case Study
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-4">
            Fintech Case Study: Reducing Friction For Good Customers
          </h2>
          <p className="text-gray-300">
            Axxes, a Brazilian fintech specializing in business banking, was
            struggling to verify its online service authentically. Discover how
            Darwinium’s improved customer trust and 35% cost of recurring user
            remediation is possible. Trust access using Darwinium models.
          </p>
        </div>

        {/* Right Form */}
        <div>
          <span className="text-purple-400 uppercase tracking-wide text-sm font-medium">
            Download the Case Study
          </span>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Company Email*"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none"
            />

            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-purple-500" />
              <label>I agree to receive other communications from Darwinium.</label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold"
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>

      {/* ---------------- FAQ Section ---------------- */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-3 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{faq}</p>
                <span>{openFAQ === index ? "−" : "+"}</span>
              </div>
              {openFAQ === index && (
                <p className="text-gray-400 mt-2 text-sm">
                  This is a sample answer for “{faq}”. Replace this text with the
                  actual content for the FAQ section.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Footer ---------------- */}
      <footer className="bg-black/30 py-10 px-6 text-gray-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Copyright */}
          <div>
            <h3 className="text-white font-semibold mb-3">Darwinium</h3>
            <p className="text-sm">2025 Darwinium. All rights reserved.</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-white">🔗</a>
              <a href="#" className="hover:text-white">🔗</a>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-white font-medium mb-3">Use Cases</h4>
            <ul className="space-y-2 text-sm">
              <li>Account Security</li>
              <li>Account Takeover</li>
              <li>Fraud Prevention</li>
              <li>Scam Detection</li>
              <li>Abuse Prevention</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Platform</li>
              <li>Documentation</li>
              <li>Adversarial AI</li>
              <li>Darwinium on the Edge</li>
              <li>Book a Demo</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Resources</li>
              <li>Security</li>
              <li>Trust Center</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
