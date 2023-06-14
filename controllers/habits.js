const Habit = require("../models/Habit");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllHabits = async (req, res) => {
  const habits = await Habit.find({ user: req.user.userId })
    .populate("plant")
    .sort("createdAt");
  res.status(StatusCodes.OK).send({ habits });
};

const getHabit = async (req, res) => {
  const {
    user: { userId },
    params: { habitId },
  } = req;
  const habit = await Habit.findOne({ _id: habitId, user: userId }).populate(
    "plant"
  );
  if (!habit) {
    throw new NotFoundError("Habit not found");
  }
  res.status(StatusCodes.OK).json({ habit });
};

const createHabit = async (req, res) => {
  req.body.user = req.user.userId;
  const habit = await Habit.create(req.body);
  res.status(StatusCodes.CREATED).json({ habit });
};

const updateHabit = async (req, res) => {
  const {
    body: { name },
    user: { userId },
    params: { habitId },
  } = req;

  if (!name) {
    throw new BadRequestError("Name cannot be empty");
  }

  const habit = await Habit.findOneAndUpdate(
    { _id: habitId, user: userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ habit });
};

const deleteHabit = async (req, res) => {
  const {
    user: { userId },
    params: { habitId },
  } = req;
  const habit = await Habit.findOneAndDelete({ _id: habitId, user: userId });
  if (!habit) {
    throw new NotFoundError("Habit not found");
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllHabits,
  getHabit,
  createHabit,
  updateHabit,
  deleteHabit,
};
