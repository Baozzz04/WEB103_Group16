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
        video_price INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        completed_orders INTEGER[],
        avg_rating FLOAT,
        comments JSONB[] DEFAULT ARRAY[]::JSONB[], -- Array of JSON objects for comments
        actor_role VARCHAR(255) -- New column for the actor role
    );

    CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        created_date DATE NOT NULL,
        completed_date DATE,
        price INTEGER NOT NULL,
        requested_by INTEGER REFERENCES users(id),
        filmed_by INTEGER REFERENCES users(id),
        order_status INT NOT NULL,
        video_url TEXT,
        review TEXT,
        rating INT,
        public BOOLEAN DEFAULT FALSE,
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

  userData.forEach((user) => {
    const insertUserQuery = {
      text: "INSERT INTO users (email, password, username, role, phone, description, profile_img_url, profile_video_url, purchased_video_url, video_price, created_at, completed_orders, avg_rating, comments, actor_role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
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
        user.video_price,
        user.created_at,
        user.completed_orders,
        user.avg_rating,
        user.comments
          ? user.comments.map(([rating, comment]) => ({ rating, comment }))
          : [], // Convert each [rating, comment] to a JSON object
        user.actor_role || "Actor", // Default role if not provided
      ],
    };
    pool.query(insertUserQuery, (err, res) => {
      if (err) {
        console.error("⚠️ Error inserting user", err);
        return;
      }
      console.log(`✅ User ${user.username} added successfully`);
    });
  });

  orderData.forEach((order) => {
    const insertOrderQuery = {
      text: "INSERT INTO orders (created_date, completed_date, price, requested_by, filmed_by, order_status, video_url, review, rating, public, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
      values: [
        order.created_date,
        order.completed_date,
        order.price,
        order.requested_by,
        order.filmed_by,
        order.order_status,
        order.video_url,
        order.review,
        order.rating,
        order.public,
        order.comments
          ? order.comments.map(({ rating, comment }) => ({ rating, comment }))
          : [],
      ],
    };
    pool.query(insertOrderQuery, (err, res) => {
      if (err) {
        console.error("⚠️ Error inserting order", err);
        return;
      }
      console.log(`✅ Order ID ${order.id} added successfully`);
    });
  });
};

seedTables();
