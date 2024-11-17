import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TalentCard({
  id,
  profileImgUrl,
  username,
  role,
  rating,
  price,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/talent/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full p-6 border border-gray-200 rounded-lg text-left cursor-pointer"
    >
      <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 overflow-hidden">
        <img
          src={profileImgUrl}
          alt={`${username}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-black">{username}</h3>
        <p className="text-gray-500 text-base">{role}</p>
      </div>
      <div className="flex items-center text-gray-900 text-base mb-2">
        <FaStar className="mr-1 text-yellow-400" />
        <span>{rating ? rating.toFixed(2) : "No Rating"}</span>
      </div>
      <div className="text-xl font-bold text-black">${price}</div>
    </div>
  );
}
