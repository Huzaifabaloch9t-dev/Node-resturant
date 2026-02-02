const express = require("express");
const cors = require("cors");
const connectDB = require("../Backend/config/db");
const foodRoutes = require("../Backend/routes/foodRoute");

const app = express();


app.use(cors());
app.use(express.json());


connectDB();

app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => {
  res.send("Restaurant API Running...");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
