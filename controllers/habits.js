const Habit = require("../models/Habit");
const CustomAPIError = require("../errors/custom-error");

const getAllHabits = async (req, res) => {
  const habits = await Habit.find();
  res.status(200).send({ status: "SUCCESS", data: habits });
};

const getHabit = async (req, res) => {
  const habit = await Habit.findOne({ _id: req.params.habitId });
  if (!habit) {
    throw new CustomAPIError("Habit not found", 404);
  }
  res.status(200).send({ status: "SUCCESS", data: habit });
};

const createHabit = async (req, res) => {
  const habit = await Habit.create(req.body);
  res.status(201).send({ status: "SUCCESS", data: habit });
};

const updateHabit = async (req, res) => {
  const habit = await Habit.findOneAndUpdate(
    { _id: req.params.habitId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).send({ status: "SUCCESS", data: habit });
};

const deleteHabit = async (req, res) => {
  const habit = await Habit.findOneAndDelete({ _id: req.params.habitId });
  res.status(200).send({ status: "SUCCESS", data: habit });
};

module.exports = {
  getAllHabits,
  getHabit,
  createHabit,
  updateHabit,
  deleteHabit,
};
