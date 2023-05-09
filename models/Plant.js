const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  images: {
    small: {
        type: String,
        required: true,
    },
    medium: {
        type: String,
        required: true,
    },
    large: {
        type: String,
        required: true,
    },
  },
});

module.exports = mongoose.model("Plant", plantSchema);
