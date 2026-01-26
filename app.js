const express = require("express");
const cors = require("cors");
const connectDB = require("../Backend/config/db");
const foodRoutes = require("../Backend/routes/foodRoute");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* DB */
connectDB();

/* Routes */
app.use("/api/foods", foodRoutes);

/* Test route */
app.get("/", (req, res) => {
  res.send("Restaurant API Running...");
});

/* Server */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
