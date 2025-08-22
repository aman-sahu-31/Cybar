import React from "react";
import image1 from "../assets/Register/Boam.jpg"; // Local image
import image2 from "../assets/Register/cyber.jpg"; // Replace with your actual local images
import image3 from "../assets/Register/safty.jpg";
import image4 from "../assets/Register/genral.jpg";

const complaints = [
  {
    id: 1,
    image: image1,
    title: "Hoax Bomb Threats",
    description:
      "Report fake bomb threat calls or messages to help maintain safety.",
  },
  {
    id: 2,
    image: image2,
    title: "Cyber Fraud",
    description:
      "Register complaints related to online frauds and cyber scams.",
  },
  {
    id: 3,
    image: image3,
    title: "Public Safety Issues",
    description:
      "Report suspicious activities or safety concerns in your area.",
  },
  {
    id: 4,
    image: image4,
    title: "General Complaints",
    description: "File any other type of complaint for quick resolution.",
  },
];

export default function Card() {
  return (
    <div className="bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">
        Register a Complaint
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {complaints.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="bg-gray-100 border-2 border-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <img
              src={image}
              alt={title}
              className="h-48 w-full object-cover"
            />
            <div className="px-2 py-2 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-700 flex-grow">{description}</p>
              <button
                onClick={() => alert(`Register complaint for: ${title}`)}
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors duration-300"
              >
                Register Complaint
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
