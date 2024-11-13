import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../components/Home/NavigationBar";
import { SelectField, TextField } from "../components/TextField";
import { getAuth } from "firebase/auth";

export default function RequestForm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const username = state?.username || "Unknown User";
  const auth = getAuth();
  const user = auth.currentUser;

  const [videoType, setVideoType] = useState("");
  const [recipient, setRecipient] = useState("");
  const [requestDetail, setRequestDetail] = useState("");
  const [comments, setComments] = useState("");

  const [errors, setErrors] = useState({
    videoType: false,
    recipient: false,
    requestDetail: false,
    comments: false,
  });

  const videoTypeOptions = [
    { value: "comedy", label: "Comedy" },
    { value: "drama", label: "Drama" },
    { value: "action", label: "Action" },
    { value: "inspirational", label: "Inspirational" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      videoType: videoType === "",
      recipient: recipient === "",
      requestDetail: requestDetail === "",
      comments: comments === "",
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      console.log("Proceed to payment");
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
            <label className="block text-lg font-semibold mb-2">
              Select a video type
            </label>
            <SelectField
              value={videoType}
              onChange={(e) => setVideoType(e.target.value)}
              options={videoTypeOptions}
              error={errors.videoType}
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              Who is this video for?
            </label>
            <TextField
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              error={errors.recipient}
            />
          </div>

          <div>
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

          <div>
            <label className="block text-lg font-semibold mb-2">Comments</label>
            <TextField
              type="text"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              purpose={true}
              error={errors.comments}
            />
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
