import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/Home/NavigationBar";
import CommentCard from "../components/Detail/CommentCard";
import { getUserById } from "../services/UsersAPI";
import { FaStar, FaPlay } from "react-icons/fa";

export default function DetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <NavigationBar />
      <div className="w-full max-w-3xl mx-auto p-10 bg-[#D9D9D9] rounded-3xl shadow-md mt-6">
        <div className="flex items-center mb-6">
          <img
            src={user.profile_img_url}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{user.username}</h2>
            <p className="text-gray-500 font-semibold">{user.description}</p>
          </div>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {user.profile_video_url && user.profile_video_url.length > 0
            ? user.profile_video_url.map((videoUrl, index) => (
                <div
                  key={index}
                  className="w-full h-48 bg-[#FFFFFF] rounded-lg flex items-center justify-center"
                >
                  <video
                    src={videoUrl}
                    className="w-full h-full object-cover rounded-lg"
                    controls
                  />
                </div>
              ))
            : [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-full h-48 bg-[#FFFFFF] rounded-lg flex items-center justify-center"
                >
                  <FaPlay className="text-gray-400 text-2xl" />
                </div>
              ))}
        </div>

        {/* Price and Rating */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Get a custom video</h3>
          <div className="flex items-center justify-between mt-2 mb-4">
            <div>
              <p className="text-gray-500 text-md">Price</p>
              <p className="text-lg font-semibold">${user.video_price}</p>
            </div>
            <div className="border-l-2 border-gray-300 h-full mx-4"></div>
            <div>
              <p className="text-gray-500 text-md">Rating</p>
              <div className="flex items-center text-md">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold">
                  {user.avg_rating ? user.avg_rating.toFixed(2) : "No Rating"}
                </span>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#EE4B61] text-white font-semibold py-3 rounded-3xl transform transition-transform duration-200 ease-in-out active:scale-95">
            Reserve a personal video for ${user.video_price}
          </button>
        </div>

        {/* Recent Comments */}
        <h3 className="text-lg font-semibold mb-4">Recent comments</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Sample comments */}
          <CommentCard
            username="Anonymous"
            comment="Awesome. Looking forward for more videos"
            rating={4}
          />
          <CommentCard
            username="Your comment"
            comment="Awesome. Looking forward for more videos"
            rating={4}
            isEditable={true}
          />
        </div>
      </div>
    </div>
  );
}
