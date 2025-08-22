import React, { useState } from 'react';
import { 
 
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaShieldAlt,
  FaEnvelope,
  FaPhone,FaInfoCircle,
 
} from 'react-icons/fa';

function Footer() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Security?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of security agencies and organizations using our system to combat digital bomb threats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
              Request a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-2xl mr-2" />
                <h3 className="text-xl font-bold">ThreatTracker</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Advanced digital threat detection and analysis for public safety.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">White Papers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <FaEnvelope className="mr-2" />
                  info@threattracker.gov
                </li>
                <li className="flex items-center text-gray-400">
                  <FaPhone className="mr-2" />
                  +1 (800) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <FaInfoCircle className="mr-2" />
                  24/7 Emergency Hotline
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 ThreatTracker. All rights reserved. | Privacy Policy | Terms of Service</p>
            <p className="mt-2">A public safety initiative in collaboration with law enforcement agencies.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;