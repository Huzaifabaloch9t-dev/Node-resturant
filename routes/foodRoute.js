const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

/* GET all foods */
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* POST add food */
router.post("/", async (req, res) => {
  try {
    const { name, price, image } = req.body;

    const food = new Food({
      name,
      price,
      image,
    });

    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
