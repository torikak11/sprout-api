const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
