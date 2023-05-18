const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please provide a valid user"],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      maxlength: 60,
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
            required: [true, "Please provide a name"],
            trim: true,
            maxlength: 60,
          },
          complete: {
            type: Boolean,
            default: true,
          },
        },
      ],
      required: [true, "Please provide at least one step"],
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
