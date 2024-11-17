import { pool } from "./database.js";
import "./dotenv.js";
import userData from "../data/users.js";
import orderData from "../data/orders.js";

const createTables = async () => {
  const createTablesQuery = `
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS users;

    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL UNIQUE,
        role INTEGER NOT NULL,
        phone VARCHAR(20),
        description TEXT,
        profile_img_url TEXT,
        profile_video_url TEXT[] DEFAULT ARRAY[]::TEXT[], -- Array of strings with default empty array
        purchased_video_url TEXT[] DEFAULT ARRAY[]::TEXT[], -- Array of strings with default empty array
        purchased_by_emails TEXT[] DEFAULT ARRAY[]::TEXT[], -- Array of emails for users who purchased the content
        video_price INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        completed_orders INTEGER[],
        avg_rating FLOAT,
        comments JSONB[] DEFAULT ARRAY[]::JSONB[], -- Array of JSON objects for comments
        actor_role VARCHAR(255) -- New column for the actor role
    );

    CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        completed_date DATE,
        price INTEGER NOT NULL,
        requested_by INTEGER REFERENCES users(id),
        rating FLOAT,
        comments JSONB[] DEFAULT ARRAY[]::JSONB[] -- Array of JSON objects for comments
    );
  `;

  console.log("Executing SQL:\n", createTablesQuery);

  try {
    await pool.query(createTablesQuery);
    console.log("🎉 Tables created successfully");
  } catch (err) {
    console.error("⚠️ Error creating tables", err);
  }
};

const seedTables = async () => {
  await createTables();

  for (const user of userData) {
    const insertUserQuery = {
      text: `INSERT INTO users (
          email, password, username, role, phone, description, profile_img_url, 
          profile_video_url, purchased_video_url, purchased_by_emails, video_price, 
          created_at, completed_orders, avg_rating, comments, actor_role
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
      values: [
        user.email,
        user.password,
        user.username,
        user.role,
        user.phone,
        user.description,
        user.profile_img_url,
        user.profile_video_url || [],
        user.purchased_video_url || [],
        user.purchased_by_emails || [],
        user.video_price,
        user.created_at,
        user.completed_orders || [],
        user.avg_rating,
        user.comments
          ? user.comments.map(({ email, rating, comment }) => ({
              email,
              rating,
              comment,
            }))
          : [],
        user.actor_role || "Actor",
      ],
    };

    try {
      await pool.query(insertUserQuery);
      console.log(`✅ User ${user.username} added successfully`);
    } catch (err) {
      console.error("⚠️ Error inserting user:", err);
    }
  }

  for (const order of orderData) {
    const insertOrderQuery = {
      text: `INSERT INTO orders (
          completed_date, price, requested_by, rating, comments
        ) VALUES ($1, $2, $3, $4, $5)`,
      values: [
        order.completed_date,
        order.price,
        order.requested_by,
        order.rating,
        order.comments
          ? order.comments.map(({ email, rating, comment }) => ({
              email,
              rating,
              comment,
            }))
          : [],
      ],
    };

    try {
      await pool.query(insertOrderQuery);
      console.log(`✅ Order ID ${order.id} added successfully`);
    } catch (err) {
      console.error("⚠️ Error inserting order:", err);
    }
  }
};

seedTables()
  .then(() => console.log("✅ Seeding completed successfully"))
  .catch((err) => console.error("⚠️ Seeding failed:", err));
