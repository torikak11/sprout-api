const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.getToken();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = (req, res) => {
  res.send("Login user");
};

module.exports = {
  register,
  login,
};
