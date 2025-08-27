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
    <div className="bg-slate-50 pt-20 text-slate-800 min-h-screen">
      {/* ---------------- Case Study Form Section ---------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border border-slate-200 rounded-2xl p-10 shadow-lg">
        {/* Left */}
        <div>
          <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
            Case Study
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-4 text-slate-900">
            Fintech Case Study: Reducing Friction For Good Customers
          </h2>
          <p className="text-slate-600">
            Axxes, a Brazilian fintech specializing in business banking, was
            struggling to verify its online service authentically. Discover how
            Darwinium's improved customer trust and 35% cost of recurring user
            remediation is possible. Trust access using Darwinium models.
          </p>
        </div>

        {/* Right Form */}
        <div>
          <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
            Download the Case Study
          </span>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full p-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full p-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full p-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Company Email*"
              className="w-full p-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 focus:outline-none focus:border-blue-500"
            />

            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-blue-600" />
              <label className="text-slate-600">I agree to receive other communications from Darwinium.</label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>

      {/* ---------------- FAQ Section ---------------- */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-slate-900">{faq}</p>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {openFAQ === index ? "−" : "+"}
                </div>
              </div>
              {openFAQ === index && (
                <p className="text-slate-600 mt-4 text-base leading-relaxed">
                  This is a sample answer for "{faq}". Replace this text with the
                  actual content for the FAQ section.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Footer ---------------- */}
      <footer className="bg-slate-800 py-10 px-6 text-slate-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Copyright */}
          <div>
            <h3 className="text-white font-bold mb-3">Tech Ninja</h3>
            <p className="text-sm">2025 Tech Ninja. All rights reserved.</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-white transition-colors">🔗</a>
              <a href="#" className="hover:text-white transition-colors">🔗</a>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-white font-semibold mb-3">Use Cases</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Account Security</li>
              <li className="hover:text-white transition-colors cursor-pointer">Account Takeover</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fraud Prevention</li>
              <li className="hover:text-white transition-colors cursor-pointer">Scam Detection</li>
              <li className="hover:text-white transition-colors cursor-pointer">Abuse Prevention</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Platform</li>
              <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Adversarial AI</li>
              <li className="hover:text-white transition-colors cursor-pointer">Darwinium on the Edge</li>
              <li className="hover:text-white transition-colors cursor-pointer">Book a Demo</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Resources</li>
              <li className="hover:text-white transition-colors cursor-pointer">Security</li>
              <li className="hover:text-white transition-colors cursor-pointer">Trust Center</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
