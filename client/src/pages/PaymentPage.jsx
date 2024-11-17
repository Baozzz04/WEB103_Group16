import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addNewOrder, updateUserFields } from "../services/UsersAPI.jsx";
import { getAuth } from "firebase/auth";

export default function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const userId = state?.userId; // Retrieve userId from state
  const amount = state?.amount;
  const comment = state?.comment;
  const rating = state?.rating;

  const auth = getAuth();
  const userAuth = auth.currentUser;

  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    amount: amount || "",
  });
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { cardNumber, expirationDate, cvv, amount } = formData;

    if (!cardNumber || !expirationDate || !cvv || !amount) {
      setPaymentStatus("Please fill in all fields.");
      return;
    }

    setPaymentStatus("Processing payment...");

    try {
      // Add a new order using the API function
      await addNewOrder({
        completed_date: new Date().toISOString(),
        price: amount,
        requested_by: userId,
        rating,
        comments: [
          {
            email: userAuth.email, // Add email to the comment
            rating,
            comment,
          },
        ],
      });

      // Update the user fields using the API function
      await updateUserFields(userId, {
        purchased_by_emails: userAuth.email, // Add email of the current user
        comments: [
          {
            email: userAuth.email, // Add email to the comment
            rating,
            comment,
          },
        ],
        avg_rating: rating, // Update average rating
      });

      setPaymentStatus(`Payment of $${amount} was successful!`);
    } catch (error) {
      console.error("Error during payment:", error);
      setPaymentStatus("Payment failed. Please try again.");
    }
  };

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>
      {paymentStatus.includes("successful") ? (
        <>
          <p className="text-center text-lg font-medium text-green-700 mb-4">
            {paymentStatus}
          </p>
          <button
            onClick={handleBackToHome}
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Back to Home
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9101 1121"
              maxLength={16}
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Expiration Date
              </label>
              <input
                type="text"
                name="expirationDate"
                placeholder="MM/YY"
                maxLength={5}
                value={formData.expirationDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                maxLength={3}
                value={formData.cvv}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Pay Now
          </button>
        </form>
      )}
      {paymentStatus && !paymentStatus.includes("successful") && (
        <div className="mt-4 p-4 rounded-lg text-center bg-red-100 text-red-700">
          {paymentStatus}
        </div>
      )}
    </div>
  );
}
