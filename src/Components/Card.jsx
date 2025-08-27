import React from "react";

const Card = () => {
  return (
<section className="min-h-screen bg-gradient-to-br from-[#9185a1] via-[#453778] to-[#65719a] text-white px-6 md:px-16 flex items-center justify-center">
  <div className="max-w-4xl">
    <p className="uppercase text-sm font-semibold text-purple-300 mb-4">Tech Ninja</p>
    <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
      Protect Every Digital Interaction in Fintech.  From Onboarding to Account Security
    </h1>
    <p className="text-lg w-130 text-justify text-gray-300 mb-8">
      Stop fraud before it starts. Darwinium empowers digital‑first fintechs with adaptive,
      real‑time fraud and risk decisioning across the entire customer lifecycle,
      without slowing down good users.
    </p>
    <button className="inline-flex items-center px-6 py-3 border border-gray-500  rounded-md 
                       hover:bg-white/10 hover:border-purple-400 transition">
      Book a demo <span className="ml-2">→</span>
    </button>
  </div>
</section>

  );
};

export default Card;
