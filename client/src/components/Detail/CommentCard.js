import React from "react";
import { FaStar } from "react-icons/fa";

export default function CommentCard({ username, comment, rating, isEditable }) {
  return (
    <div className="w-full p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-black">{username}</h3>
        <div className="flex gap-2">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 text-sm" />
          ))}
        </div>
      </div>

      <p className="text-gray-800 text-sm mb-2">{comment}</p>

      {isEditable && (
        <div className="flex space-x-4 justify-end text-sm">
          <button className="text-blue-500 font-semibold">Edit</button>
          <button className="text-red-500 font-semibold">Delete</button>
        </div>
      )}
    </div>
  );
}
