const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  steps: {
    type: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        complete: {
          type: Boolean,
          default: true,
        },
      },
    ],
    required: true,
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
  percentage: {
    type: Number,
    default: 0,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Goal", goalSchema);
