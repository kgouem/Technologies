const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to StudentConnect API!");
});
app.get("/api/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Student One",
      city: "New York"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`StudentConnect API is running on port ${PORT}`);
});
