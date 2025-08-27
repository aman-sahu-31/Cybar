import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modalType, setModalType] = useState(null); // "login" | "signup" | "demo"
  const navRef = useRef(null);

  const dropdownMenus = ["Solutions", "Platform", "Resources"];
  const simpleMenus = ["Documentation", "Partners", "Contact"];

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
         className="bg-gradient-to-r from-blue-900 to-blue-800/60 px-6 py-4 flex items-center justify-between relative z-50 shadow-xl"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400">
            <span className="text-white font-bold">TN</span>
          </div>
          <span className="text-white text-lg font-semibold">TECH NINJA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          {dropdownMenus.map((menu, idx) => (
            <div className="relative" key={idx}>
              <button
                onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
                className="hover:text-purple-300 transform transition-all duration-200 hover:scale-105 flex items-center"
              >
                {menu} <span className="ml-1">▾</span>
              </button>

              {/* Mega Dropdown */}
              <div
                className={`absolute top-full left-0 mt-3 w-[700px] bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg rounded-xl p-6 grid grid-cols-3 gap-6 transform transition-all duration-300 origin-top ${
                  openMenu === menu
                    ? "scale-100 opacity-100 visible"
                    : "scale-95 opacity-0 invisible"
                }`}
              >
                {/* Solutions */}
                <div className="p-4 rounded-lg bg-blue-800/50 hover:bg-blue-700/70 transition">
                  <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">
                    Solutions
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Account Security",
                      "Fraud Prevention",
                      "Scam Detection",
                      "Abuse Prevention",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="hover:text-purple-300 cursor-pointer transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Platform */}
                <div className="p-4 rounded-lg bg-blue-800/50 hover:bg-blue-700/70 transition">
                  <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">
                    Platform
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "API & SDKs",
                      "Real-time Decisioning",
                      "Integrations",
                      "Analytics",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="hover:text-purple-300 cursor-pointer transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div className="p-4 rounded-lg bg-blue-800/50 hover:bg-blue-700/70 transition">
                  <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">
                    Resources
                  </h3>
                  <ul className="space-y-2">
                    {["Case Studies", "Documentation", "Blog", "Webinars"].map(
                      (item, i) => (
                        <li
                          key={i}
                          className="hover:text-purple-300 cursor-pointer transition-colors"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Simple Links */}
          {simpleMenus.map((item, i) => (
            <button
              key={i}
              className="hover:text-blue-600 transform transition-all duration-200 hover:scale-105"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Side CTA */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => setModalType("login")}
            className="px-4 py-2 text-white border border-purple-400 rounded-lg hover:bg-purple-500 hover:text-black transform transition-all duration-200 hover:scale-105"
          >
            Sign In
          </button>
          <button
            onClick={() => setModalType("demo")}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transform transition-all duration-200 hover:scale-105"
          >
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-blue-800 text-white flex flex-col items-start px-6 py-4 space-y-4 md:hidden transition-all duration-300 ${
            mobileMenu
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {[...dropdownMenus, ...simpleMenus].map((item, i) => (
            <button
              key={i}
              className="w-full text-left py-2 hover:text-purple-300 transform transition-all duration-200 hover:scale-105"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => setModalType("login")}
            className="w-full text-left py-2 hover:text-purple-300"
          >
            Sign In
          </button>
          <button
            onClick={() => setModalType("demo")}
            className="w-full text-left py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transform transition-all duration-200 hover:scale-105"
          >
            Book Demo
          </button>
        </div>
      </nav>

      {/* ✅ Transparent Modal (Login / Signup / Demo) */}
      {modalType && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-blue-900 text-white p-8 rounded-2xl w-[400px] shadow-lg relative">
            {/* Close Btn */}
            <button
              onClick={() => setModalType(null)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              <X />
            </button>

            {/* Switch between modal types */}
            {modalType === "login" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mb-3 p-2 rounded bg-[#0a0f1c] border border-gray-600"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mb-3 p-2 rounded bg-[#0a0f1c] border border-gray-600"
                />
                <button className="w-full bg-purple-500 py-2 rounded-lg hover:bg-purple-600">
                  Login
                </button>
                <p className="text-sm mt-3">
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setModalType("signup")}
                    className="text-purple-300 hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </>
            )}

            {modalType === "signup" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full mb-3 p-2 rounded bg-[#0a0f1c] border border-gray-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mb-3 p-2 rounded bg-[#0a0f1c] border border-gray-600"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mb-3 p-2 rounded bg-[#0a0f1c] border border-gray-600"
                />
                <button className="w-full bg-purple-500 py-2 rounded-lg hover:bg-purple-600">
                  Create Account
                </button>
                <p className="text-sm mt-3">
                  Already have an account?{" "}
                  <button
                    onClick={() => setModalType("login")}
                    className="text-purple-300 hover:underline"
                  >
                    Login
                  </button>
                </p>
              </>
            )}

            {modalType === "demo" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Book a Demo</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mb-3 p-2 rounded bg-[#0a0f1c] border border-gray-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mb-3 p-2 rounded bg-[#0a0f1c] border border-gray-600"
                />
                <textarea
                  placeholder="Message"
                  className="w-full mb-3 p-2 rounded bg-[#0a0f1c] border border-gray-600"
                ></textarea>
                <button className="w-full bg-purple-500 py-2 rounded-lg hover:bg-purple-600">
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
