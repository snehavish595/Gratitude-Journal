const mongoose = require("mongoose");

const GratitudeSchema = new mongoose.Schema({
  gratitude1: { type: String, required: true },
  gratitude2: { type: String, required: true },
  gratitude3: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Gratitude", GratitudeSchema);
