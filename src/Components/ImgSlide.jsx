import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { ShieldAlert, AlertTriangle, Eye } from "lucide-react";

const images = [
  "https://i.pinimg.com/736x/ed/74/80/ed74807dccbf24fc90707ec64473fcf3.jpg",
  "https://i.pinimg.com/736x/09/b1/10/09b110561e7d21899f0ad2f779ef0f0f.jpg",
  "https://media.licdn.com/dms/image/v2/D4D12AQGodKLFhYvHJw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699185454929?e=2147483647&v=beta&t=HkaPQBH2cdxnCAugBQbczPDQSWH7Gr36vVl3lzgM_mU",
  "https://media.licdn.com/dms/image/v2/D4D12AQGodKLFhYvHJw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699185454929?e=2147483647&v=beta&t=HkaPQBH2cdxnCAugBQbczPDQSWH7Gr36vVl3lzgM_mU"
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
      <div className="overflow-hidden w-full  h-110 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`w-full transition-transform object-cover duration-700 ${index === current ? "block" : "hidden"}`}
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
