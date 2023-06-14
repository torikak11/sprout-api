const { UnauthenticatedError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const getUserName = async (req, res) => {
  const {
    user: { userId },
  } = req;
  const user = await User.findOne({ _id: userId });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  res.status(StatusCodes.OK).json({ user: { name: user.name } });
};

module.exports = { getUserName };
