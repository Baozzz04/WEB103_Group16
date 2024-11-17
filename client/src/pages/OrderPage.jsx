import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../components/Home/NavigationBar";
import { TextField } from "../components/TextField";

export default function RequestForm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const username = state?.username || "Unknown User";
  const userId = state?.userId; // Get userId from state

  const [videoType, setVideoType] = useState("");
  const [recipient, setRecipient] = useState("");
  const [requestDetail, setRequestDetail] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({
    requestDetail: false,
    comments: false,
    ratingInvalid: false, // New error for invalid rating
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      requestDetail: requestDetail === "",
      comments: comments === "",
      ratingInvalid:
        recipient && (isNaN(recipient) || recipient < 1 || recipient > 5),
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      navigate("/payment", {
        state: {
          userId,
          comment: comments,
          rating: recipient, // Pass rating as well
        },
      });
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <NavigationBar />
      <div className="max-w-3xl mx-auto p-6 mt-6">
        <h1 className="text-3xl font-bold mb-8">Request form</h1>
        <p className="text-lg font-semibold mb-4">Order to: {username}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="mb-2">
              <label className="block text-lg font-semibold mb-2">
                Request detail
              </label>
              <TextField
                type="text"
                value={requestDetail}
                onChange={(e) => setRequestDetail(e.target.value)}
                purpose={true}
                error={errors.requestDetail}
              />
            </div>

            <div className="mb-2">
              <label className="block text-lg font-semibold mb-2">
                Comments
              </label>
              <TextField
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                purpose={true}
                error={errors.comments}
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-lg font-semibold mb-2">
              Rating (1-5)
            </label>
            <TextField
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              error={errors.recipient || errors.ratingInvalid}
            />
            {errors.ratingInvalid && (
              <p className="text-red-500 text-sm mt-1">
                Rating must be a number between 1 and 5.
              </p>
            )}
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              type="button"
              className="flex-1 py-3 bg-gray-100 text-gray-500 font-semibold rounded-lg border border-gray-200"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors"
            >
              Continue to payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
