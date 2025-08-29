import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { ShieldAlert, AlertTriangle, Eye } from "lucide-react";

const images = [
  "https://financialcrimeacademy.org/wp-content/uploads/2023/05/1-17-1536x864.jpg",
  "https://www.niceactimize.com/blog/wp-content/uploads/2021/12/A-woman-finding-suspicious-activity-in-currency-transaction-report.png.webp",
  "https://res.cloudinary.com/youverifyhq/image/upload/v1740559357/Suspicious_Transaction_Reporting_3be3329701.jpg"
];

function ImgSlide() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full pb-5   mx-auto">
      {/* Slides */}
      <div className="overflow-hidden w-full  h-120 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`w-full transition-transform object-center h-120 duration-700 ${index === current ? "block" : "hidden"}`}
          />
        ))}
      </div>

      {/* Icons / Navigation */}
      <div className="flex justify-center mt-4 space-x-3">
        {images.map((_, index) => (
          <FaCircle
            key={index}
            className={`cursor-pointer ${index === current ? "text-blue-500" : "text-gray-400"}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

   </div>
  );
}

export default ImgSlide;
