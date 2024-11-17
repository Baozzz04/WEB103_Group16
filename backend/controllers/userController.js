import { pool } from "../config/database.js";

export const getAllActors = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE role = 1");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("⚠️ Error retrieving actors", err);
    res.status(500).json({ error: "Failed to retrieve actors" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("⚠️ Error retrieving user by ID", err);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};

export const addNewOrder = async (req, res) => {
  const { completed_date, price, requested_by, rating, comments } = req.body;

  try {
    const query = `
      INSERT INTO orders (completed_date, price, requested_by, rating, comments)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const result = await pool.query(query, [
      completed_date,
      price,
      requested_by,
      rating,
      comments || [],
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("⚠️ Error adding new order", err);
    res.status(500).json({ error: "Failed to add new order" });
  }
};

export const updateUserFields = async (req, res) => {
  const { id } = req.params;
  const { purchased_by_emails, comments, avg_rating } = req.body;

  try {
    // Retrieve the existing user
    const userResult = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = userResult.rows[0];

    // Handle purchased_by_emails as a PostgreSQL array
    const currentPurchasedByEmails = user.purchased_by_emails || [];
    const newPurchasedByEmails = purchased_by_emails
      ? Array.isArray(purchased_by_emails)
        ? purchased_by_emails
        : [purchased_by_emails]
      : [];
    const updatedPurchasedByEmails = [
      ...new Set([...currentPurchasedByEmails, ...newPurchasedByEmails]),
    ];

    // Handle comments
    const currentComments = user.comments || [];
    const newComments = comments
      ? comments.map(({ email, rating, comment }) => ({
          email,
          rating,
          comment,
        }))
      : [];
    const updatedComments = [...currentComments, ...newComments];

    // Prevent duplicate comments based on `email` and `comment`
    const deduplicatedComments = updatedComments.reduce((acc, newComment) => {
      if (
        !acc.some(
          (c) =>
            c.email === newComment.email && c.comment === newComment.comment
        )
      ) {
        acc.push(newComment);
      }
      return acc;
    }, []);

    // Calculate updated avg_rating
    const totalRatings = deduplicatedComments.reduce(
      (sum, c) => sum + c.rating,
      0
    );
    const updatedAvgRating =
      deduplicatedComments.length > 0
        ? totalRatings / deduplicatedComments.length
        : 0;

    // Update the database
    const query = `
      UPDATE users
      SET purchased_by_emails = $1, comments = $2, avg_rating = $3
      WHERE id = $4
      RETURNING *;
    `;
    const result = await pool.query(query, [
      updatedPurchasedByEmails,
      deduplicatedComments,
      updatedAvgRating,
      id,
    ]);

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("⚠️ Error updating user fields", err);
    res.status(500).json({ error: "Failed to update user fields" });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params; // User ID
  const { email, comment } = req.body; // Email and comment to identify which comment to delete

  try {
    // Retrieve the existing user
    const userResult = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = userResult.rows[0];

    // Check if comments exist
    const currentComments = user.comments || [];
    const updatedComments = currentComments.filter(
      (c) => c.email !== email || c.comment !== comment
    );

    // Calculate updated avg_rating
    const totalRatings = updatedComments.reduce((sum, c) => sum + c.rating, 0);
    const updatedAvgRating =
      updatedComments.length > 0 ? totalRatings / updatedComments.length : 0;

    // Update the database
    const query = `
      UPDATE users
      SET comments = $1, avg_rating = $2
      WHERE id = $3
      RETURNING *;
    `;
    const result = await pool.query(query, [
      updatedComments,
      updatedAvgRating,
      id,
    ]);

    res.status(200).json({
      message: "Comment deleted successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error("⚠️ Error deleting comment", err);
    res.status(500).json({ error: "Failed to delete comment" });
  }
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { email, oldComment, newComment, newRating } = req.body; // Email, old comment text, new comment text, and new rating

  try {
    const userResult = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = userResult.rows[0];

    const currentComments = user.comments || [];
    const updatedComments = currentComments.map((c) => {
      if (c.email === email && c.comment === oldComment) {
        return {
          email: c.email,
          comment: newComment || c.comment,
          rating: newRating !== undefined ? newRating : c.rating,
        };
      }
      return c;
    });

    const totalRatings = updatedComments.reduce((sum, c) => sum + c.rating, 0);
    const updatedAvgRating =
      updatedComments.length > 0 ? totalRatings / updatedComments.length : 0;

    const query = `
      UPDATE users
      SET comments = $1, avg_rating = $2
      WHERE id = $3
      RETURNING *;
    `;
    const result = await pool.query(query, [
      updatedComments,
      updatedAvgRating,
      id,
    ]);

    res.status(200).json({
      message: "Comment updated successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error("⚠️ Error updating comment", err);
    res.status(500).json({ error: "Failed to update comment" });
  }
};
