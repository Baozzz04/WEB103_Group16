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
