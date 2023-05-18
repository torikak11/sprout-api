const Goal = require("../models/Goal");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).send({ goals });
};

const getGoal = async (req, res) => {
  const {
    user: { userId },
    params: { goalId },
  } = req;
  const goal = await Goal.findOne({ _id: goalId, user: userId });
  if (!goal) {
    throw new NotFoundError("Goal not found");
  }
  res.status(StatusCodes.OK).json({ goal });
};

const createGoal = async (req, res) => {
  req.body.user = req.user.userId;
  const goal = await Goal.create(req.body);
  res.status(StatusCodes.CREATED).json({ goal });
};

const updateGoal = async (req, res) => {
  const {
    body: { name },
    user: { userId },
    params: { goalId },
  } = req;

  if (!name) {
    throw new BadRequestError("Name cannot be empty");
  }

  const goal = await Goal.findOneAndUpdate(
    { _id: goalId, user: userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ goal });
};

const deleteGoal = async (req, res) => {
  const {
    user: { userId },
    params: { goalId },
  } = req;
  const goal = await Goal.findOneAndDelete({ _id: goalId, user: userId });
  if (!goal) {
    throw new NotFoundError("Goal not found");
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
