const express = require("express");
const router = express.Router();
const Gratitude = require("../models/gratitude");

// POST: Create a new gratitude entry
router.post("/entries", async (req, res) => {
  const { gratitude1, gratitude2, gratitude3 } = req.body;

  try {
    const newEntry = new Gratitude({
      gratitude1,
      gratitude2,
      gratitude3,
      date: new Date(), // Optional: Add a date field
    });

    const savedEntry = await newEntry.save();
    res.json(savedEntry);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET: Retrieve all gratitude entries
router.get("/entries", async (req, res) => {
  try {
    const entries = await Gratitude.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT: Update a specific gratitude entry
router.put("/:id", async (req, res) => {
  try {
    const updatedEntry = await Gratitude.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE: Delete a specific gratitude entry
router.delete("/:id", async (req, res) => {
  try {
    await Gratitude.findByIdAndDelete(req.params.id);
    res.json({ message: "Entry deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
