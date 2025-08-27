import React from "react";

const Card = () => {
  return (
<section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 w-full px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-32 translate-y-32 blur-3xl"></div>
  <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-200/25 rounded-full blur-2xl"></div>
  
  <div className="w-full max-w-6xl mx-auto relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-white font-bold text-sm">TN</span>
      </div>
      <p className="uppercase text-sm font-bold text-blue-600 tracking-wider">Tech Ninja</p>
    </div>
    
    <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent">
    Protect Every Digital Interaction in Fintech. From Onboarding to Account Security
    </h1>
    
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
        From Onboarding to Account Security
      </h2>
      <p className="text-lg leading-relaxed text-gray-600 ml-0 w-full max-w-4xl mx-auto">
        Stop fraud before it starts. Our platform empowers digital‑first fintechs with adaptive,
        real‑time fraud and risk decisioning across the entire customer lifecycle,
        without slowing down good users.
      </p>
    </div>
    
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
        Book a Demo 
        <span className="ml-2 text-lg">→</span>
      </button>
      <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
        Learn More
      </button>
    </div>
    
    {/* Feature highlights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-blue-100">
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <span className="text-blue-600 font-bold text-xl">🛡️</span>
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Real-time Protection</h3>
        <p className="text-sm text-gray-600">Instant fraud detection and prevention</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <span className="text-purple-600 font-bold text-xl">⚡</span>
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Lightning Fast</h3>
        <p className="text-sm text-gray-600">Sub-second response times</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <span className="text-indigo-600 font-bold text-xl">🎯</span>
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Precision Targeting</h3>
        <p className="text-sm text-gray-600">Advanced ML algorithms</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Card;
