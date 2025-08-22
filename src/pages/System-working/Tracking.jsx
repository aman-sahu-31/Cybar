import React from 'react'
import  {FaDatabase,FaMobileAlt, FaDesktop}  from 'react-icons/fa';

function Tracking() {
  return (
    <>
       <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Tracking Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 text-4xl mb-4">
                    <FaDatabase />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Digital Forensics</h3>
                  <p className="text-gray-600">
                    Advanced analysis of digital footprints to trace the origin of hoax threats across multiple platforms.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 text-4xl mb-4">
                    <FaMobileAlt />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Social Media Monitoring</h3>
                  <p className="text-gray-600">
                    Real-time tracking of bomb threat hoaxes across social media platforms and messaging apps.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 text-4xl mb-4">
                    <FaDesktop />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Pattern Recognition</h3>
                  <p className="text-gray-600">
                    AI-powered detection of threat patterns and predictive analysis to prevent future incidents.
                  </p>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Tracking