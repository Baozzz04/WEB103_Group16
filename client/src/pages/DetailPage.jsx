import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../components/Home/NavigationBar";
import CommentCard from "../components/Detail/CommentCard";
import {
  getUserById,
  deleteComment,
  updateComment,
} from "../services/UsersAPI";
import { FaStar, FaPlay } from "react-icons/fa";
import { getAuth } from "firebase/auth";

export default function DetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // For comments
  const [currentVideoPage, setCurrentVideoPage] = useState(0); // For profile videos
  const [currentPurchasedPage, setCurrentPurchasedPage] = useState(0); // For purchased videos
  const [editData, setEditData] = useState(null); // Data for the comment being edited
  const [showEditModal, setShowEditModal] = useState(false);
  const [oldComment, setOldComment] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();
  const userAuth = auth.currentUser;

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

  const isPurchased =
    userAuth &&
    user.purchased_by_emails &&
    user.purchased_by_emails.includes(userAuth.email);

  const videosPerPage = 4;
  const totalProfileVideoPages = Math.ceil(
    (user.profile_video_url || []).length / videosPerPage
  );
  const totalPurchasedVideoPages = Math.ceil(
    (user.purchased_video_url || []).length / videosPerPage
  );

  const handleVideoPrevious = () => {
    setCurrentVideoPage((prev) =>
      prev === 0 ? totalProfileVideoPages - 1 : prev - 1
    );
  };

  const handleVideoNext = () => {
    setCurrentVideoPage((prev) =>
      prev === totalProfileVideoPages - 1 ? 0 : prev + 1
    );
  };

  const handlePurchasedPrevious = () => {
    setCurrentPurchasedPage((prev) =>
      prev === 0 ? totalPurchasedVideoPages - 1 : prev - 1
    );
  };

  const handlePurchasedNext = () => {
    setCurrentPurchasedPage((prev) =>
      prev === totalPurchasedVideoPages - 1 ? 0 : prev + 1
    );
  };

  const commentsPerPage = 2;
  const totalSlides = Math.ceil((user.comments || []).length / commentsPerPage);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleReserveClick = () => {
    navigate("/order", { state: { username: user.username, userId: user.id } });
  };

  const handleEditComment = (email, comment, rating) => {
    console.log(comment);
    setEditData({ email, comment, rating });
    setOldComment(comment);
    setShowEditModal(true);
  };

  const handleEditConfirm = async (newComment, newRating) => {
    console.log(editData.comment);
    try {
      await updateComment(id, {
        email: editData.email,
        oldComment: oldComment,
        newComment,
        newRating,
      });

      setUser((prevUser) => ({
        ...prevUser,
        comments: prevUser.comments.map((c) =>
          c.email === editData.email && c.comment === oldComment
            ? { ...c, comment: newComment, rating: newRating }
            : c
        ),
      }));

      setShowEditModal(false);
    } catch (error) {
      console.error("Failed to update comment:", error);
    }
  };

  const handleDeleteComment = async (email, comment) => {
    try {
      await deleteComment(id, { email, comment });
      setUser((prevUser) => ({
        ...prevUser,
        comments: prevUser.comments.filter(
          (c) => c.email !== email || c.comment !== comment
        ),
      }));
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="w-full max-w-3xl mx-auto p-10 bg-[#D9D9D9] rounded-3xl shadow-md my-6">
        {/* Profile Header */}
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

        {/* Profile Videos */}
        <h3 className="text-lg font-semibold mb-4">Profile Videos</h3>
        <div className="relative mb-6">
          <div className="grid grid-cols-4 gap-4">
            {user.profile_video_url && user.profile_video_url.length > 0
              ? user.profile_video_url
                  .slice(
                    currentVideoPage * videosPerPage,
                    (currentVideoPage + 1) * videosPerPage
                  )
                  .map((videoUrl, index) => (
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

          {/* Profile Video Navigation */}
          {user.profile_video_url &&
            user.profile_video_url.length > videosPerPage && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleVideoPrevious}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  &lt; Previous
                </button>
                <button
                  onClick={handleVideoNext}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Next &gt;
                </button>
              </div>
            )}
        </div>

        {/* Purchased Videos */}
        {isPurchased && (
          <>
            <h3 className="text-lg font-semibold mb-4">Purchased Videos</h3>
            <div className="relative mb-6">
              <div className="grid grid-cols-4 gap-4">
                {user.purchased_video_url && user.purchased_video_url.length > 0
                  ? user.purchased_video_url
                      .slice(
                        currentPurchasedPage * videosPerPage,
                        (currentPurchasedPage + 1) * videosPerPage
                      )
                      .map((videoUrl, index) => (
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

              {/* Purchased Video Navigation */}
              {user.purchased_video_url &&
                user.purchased_video_url.length > videosPerPage && (
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handlePurchasedPrevious}
                      className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      &lt; Previous
                    </button>
                    <button
                      onClick={handlePurchasedNext}
                      className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      Next &gt;
                    </button>
                  </div>
                )}
            </div>
          </>
        )}

        {/* Reserve Button */}
        {!isPurchased && (
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
            <button
              className="w-full bg-[#EE4B61] text-white font-semibold py-3 rounded-3xl transform transition-transform duration-200 ease-in-out active:scale-95"
              onClick={handleReserveClick}
            >
              Reserve a personal video for ${user.video_price}
            </button>
          </div>
        )}

        {/* Recent Comments Slider */}
        <h3 className="text-lg font-semibold mb-4">Recent comments</h3>
        <div className="relative w-full">
          <div className="flex space-x-4">
            {user.comments && user.comments.length > 0 ? (
              user.comments
                .slice(
                  currentSlide * commentsPerPage,
                  (currentSlide + 1) * commentsPerPage
                )
                .map((comment, index) => (
                  <CommentCard
                    key={index}
                    username={comment.email.split("@")[0] || "Anonymous"}
                    comment={comment.comment}
                    rating={comment.rating}
                    isEditable={
                      userAuth && comment.email === userAuth.email // Editable if logged-in user's email matches
                    }
                    onDelete={() =>
                      handleDeleteComment(comment.email, comment.comment)
                    }
                    onEdit={() =>
                      handleEditComment(
                        comment.email,
                        comment.comment,
                        comment.rating
                      )
                    }
                  />
                ))
            ) : (
              <p>No comments available.</p>
            )}
          </div>

          {/* Comment Navigation Buttons */}
          {user.comments && user.comments.length > commentsPerPage && (
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Next &gt;
              </button>
            </div>
          )}
        </div>

        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Edit Comment</h2>
              <textarea
                className="w-full p-2 border rounded mb-4"
                defaultValue={editData.comment}
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, comment: e.target.value }))
                }
              ></textarea>
              <input
                type="number"
                max={5}
                min={1}
                className="w-full p-2 border rounded mb-4"
                defaultValue={editData.rating}
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    rating: parseFloat(e.target.value),
                  }))
                }
              />
              <div className="flex justify-end space-x-4">
                <button
                  className="text-red-500 font-semibold"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-blue-500 font-semibold"
                  onClick={() =>
                    handleEditConfirm(editData.comment, editData.rating)
                  }
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
