const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  plant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Plant",
  },
  color: {
    type: String,
    default: "#7C826B",
  },
  streak: {
    type: Number,
    default: 0,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Habit", habitSchema);
