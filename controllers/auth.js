const { BadRequestError, UnauthenticatedError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    throw new BadRequestError(
      "Please enter an name, email, and password of at least 6 characters"
    );
  }
  const user = await User.create({ name, email, password });
  const token = user.getToken();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please enter an email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const passwordsMatch = await user.comparePasswords(password);
  if (!passwordsMatch) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const token = user.getToken();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
