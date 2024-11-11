import React from "react";
import { FaStar } from "react-icons/fa";

export default function TalentCard() {
  return (
    <div className="w-full p-6 border border-gray-200 rounded-lg text-left">
      {" "}
      {/* Changed width to full */}
      {/* Image Placeholder */}
      <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
      {/* Actor Name and Role */}
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-black">Actor 1</h3>
        <p className="text-gray-500 text-base">Role</p>
      </div>
      {/* Rating */}
      <div className="flex items-center text-gray-900 text-base mb-2">
        <FaStar className="mr-1 text-yellow-400" />
        <span>4.99 (1022)</span>
      </div>
      {/* Price */}
      <div className="text-xl font-bold text-black">$1</div>
    </div>
  );
}
