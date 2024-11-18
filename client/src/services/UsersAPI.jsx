const API_URL = "https://web-103-group16-dudh.vercel.app/api/users";
const ORDERS_API_URL = "https://web-103-group16-dudh.vercel.app/api/orders";

export const getAllUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

export const addNewOrder = async (orderData) => {
  try {
    const response = await fetch(ORDERS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) {
      throw new Error("Failed to add new order");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding new order:", error);
    throw error;
  }
};

export const updateUserFields = async (id, updateData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      throw new Error("Failed to update user fields");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating user fields:", error);
    throw error;
  }
};

export const deleteComment = async (userId, commentData) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/comments`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (!response.ok) {
      throw new Error("Failed to delete comment");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
};

export const updateComment = async (userId, commentData) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/update-comment`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (!response.ok) {
      throw new Error("Failed to update comment");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};
