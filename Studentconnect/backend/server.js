require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to StudentConnect API!");
});
app.get("/api/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});
app.post("/api/students", async (req, res) => {
  try {
    const { name, city } = req.body;

    const result = await pool.query(
      "INSERT INTO students (name, city) VALUES ($1, $2) RETURNING *",
      [name, city]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});
app.listen(PORT, () => {
  console.log(`StudentConnect API is running on port ${PORT}`);
});
