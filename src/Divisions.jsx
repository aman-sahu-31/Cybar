// src/pages/Divisions.jsx
import { FaBuilding, FaUsers, FaChartPie, FaShieldAlt, FaRegLightbulb, FaFlag, FaHandshake, FaEye, FaRocket } from "react-icons/fa";

export default function Divisions() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 text-center py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-blue-900/90"></div>
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-4 mb-6">
            <FaFlag className="text-orange-400 text-4xl" />
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              सरकारी विभाग
            </h1>
            <FaFlag className="text-green-400 text-4xl" />
          </div>
          <p className="text-2xl font-semibold text-orange-200 mb-4">Government Divisions</p>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            हमारा संगठन प्रभावी शासन, पारदर्शिता और नागरिक-केंद्रित सेवा वितरण सुनिश्चित करने के लिए विशेष विभागों में संरचित है।
          </p>
          <p className="text-blue-200 max-w-4xl mx-auto leading-relaxed mt-2">
            Our organization is structured into specialized divisions to ensure effective governance, transparency, and citizen-centric service delivery.
          </p>
        </div>
      </div>

      {/* Divisions Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "प्रशासनिक विभाग",
              english: "Administrative Division",
              desc: "नीति निर्माण, मानव संसाधन, मंत्रालयों के बीच समन्वय और सरकारी कार्यालयों के सुचारू संचालन को संभालता है।",
              englishDesc: "Handles policy making, human resources, coordination among ministries, and ensures smooth functioning of government offices.",
              icon: <FaBuilding />,
              gradient: "from-blue-500 to-indigo-600",
              bgGradient: "from-blue-50 to-indigo-50"
            },
            {
              title: "नागरिक सेवा विभाग",
              english: "Citizen Services Division",
              desc: "नागरिकों के साथ प्रत्यक्ष बातचीत पर केंद्रित, जिसमें शिकायत निवारण, RTI, डिजिटल सेवाएं और जन जागरूकता कार्यक्रम शामिल हैं।",
              englishDesc: "Focuses on direct interaction with citizens, including grievance redressal, RTI, digital services, and public awareness programs.",
              icon: <FaUsers />,
              gradient: "from-green-500 to-emerald-600",
              bgGradient: "from-green-50 to-emerald-50"
            },
            {
              title: "डेटा और सांख्यिकी विभाग",
              english: "Data & Statistics Division",
              desc: "साक्ष्य-आधारित नीति निर्माण और पारदर्शी शासन के लिए डेटा एकत्र करने, विश्लेषण और प्रकाशन के लिए जिम्मेदार।",
              englishDesc: "Responsible for collecting, analyzing, and publishing data for evidence-based policy making and transparent governance.",
              icon: <FaChartPie />,
              gradient: "from-purple-500 to-pink-600",
              bgGradient: "from-purple-50 to-pink-50"
            },
            {
              title: "सतर्कता और अनुपालन विभाग",
              english: "Vigilance & Compliance Division",
              desc: "कानूनों के अनुपालन को सुनिश्चित करता है, संदिग्ध लेनदेन की निगरानी करता है, भ्रष्टाचार को रोकता है और जवाबदेही को मजबूत करता है।",
              englishDesc: "Ensures compliance with laws, monitors suspicious transactions, prevents corruption, and strengthens accountability.",
              icon: <FaShieldAlt />,
              gradient: "from-red-500 to-orange-600",
              bgGradient: "from-red-50 to-orange-50"
            },
            {
              title: "नवाचार और अनुसंधान विभाग",
              english: "Innovation & Research Division",
              desc: "शासन दक्षता में सुधार के लिए आधुनिक प्रौद्योगिकियों, डिजिटल प्लेटफॉर्म और नवाचार समाधानों को अपनाने को प्रोत्साहित करता है।",
              englishDesc: "Encourages adoption of modern technologies, digital platforms, and innovative solutions to improve governance efficiency.",
              icon: <FaRegLightbulb />,
              gradient: "from-yellow-500 to-amber-600",
              bgGradient: "from-yellow-50 to-amber-50"
            },
            {
              title: "साइबर सुरक्षा विभाग",
              english: "Cyber Security Division",
              desc: "डिजिटल खतरों से सुरक्षा, साइबर अपराध की रोकथाम और राष्ट्रीय साइबर सुरक्षा नीतियों का कार्यान्वयन सुनिश्चित करता है।",
              englishDesc: "Ensures protection from digital threats, prevention of cyber crimes and implementation of national cyber security policies.",
              icon: <FaEye />,
              gradient: "from-teal-500 to-cyan-600",
              bgGradient: "from-teal-50 to-cyan-50"
            }
          ].map((division, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${division.bgGradient} p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200`}
            >
              <div className={`p-4 bg-gradient-to-r ${division.gradient} rounded-xl w-fit mx-auto mb-6 shadow-lg`}>
                <div className="text-white text-3xl">{division.icon}</div>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {division.title}
              </h2>
              <p className="text-lg font-semibold text-gray-600 mb-4 text-center">{division.english}</p>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {division.desc}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm italic border-t pt-3">
                  {division.englishDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">सरकारी विभाग प्रणाली</h3>
            <p className="text-blue-200 text-sm">Government Division System</p>
          </div>
          <div className="border-t border-blue-700 pt-4">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} साइबर सुरक्षा विभाग | Cyber Security Department | 
              सरकारी विभाग प्रबंधन प्रणाली | Government Division Management System
            </p>
            <p className="text-xs text-blue-300 mt-2">
              भारत सरकार के तहत विकसित | Developed under Government of India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
