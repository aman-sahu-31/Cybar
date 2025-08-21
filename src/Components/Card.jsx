import React from "react";
import image1 from "../assets/satya.png"; // Replace with your actual local image path

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
    image: "https://example.com/image2.jpg", // Replace with actual URL or import image2 locally
    title: "Cyber Fraud",
    description:
      "Register complaints related to online frauds and cyber scams.",
  },
  {
    id: 3,
    image: "https://example.com/image3.jpg", // Replace with actual URL or import image3 locally
    title: "Public Safety Issues",
    description:
      "Report suspicious activities or safety concerns in your area.",
  },
  {
    id: 4,
    image: "https://example.com/image4.jpg", // Replace with actual URL or import image4 locally
    title: "General Complaints",
    description: "File any other type of complaint for quick resolution.",
  },
];

export default function Card() {
  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-gray-50 ">
      {complaints.map(({ id, image, title, description }) => (
        <div
          key={id}
          className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img src={image} alt={title} className="h-48 w-full object-center" />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-700 flex-grow">{description}</p>
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
              onClick={() => alert(`Register complaint for: ${title}`)}
            >
              Register Complaint
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
