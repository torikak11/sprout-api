const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: [true, "Email already in use"],
  },
  password: {
    type: String,
    required: [true, "Please provide password of at least 6 characters"],
    minlength: 6,
  },
  name: {
    type: String,
    required: [true, "Please provide name"],
    trim: true,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next()
});

module.exports = mongoose.model("User", userSchema);
