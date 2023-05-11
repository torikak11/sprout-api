const Goal = require("../models/Goal");

const getAllGoals = async (req, res) => {
  const goals = await Goal.find();
  res.status(200).send({ status: "SUCCESS", data: goals });
};

const getGoal = async (req, res) => {
  const goal = await Goal.findOne({ _id: req.params.goalId });
  res.status(200).send({ status: "SUCCESS", data: goal });
};

const createGoal = async (req, res) => {
  const goal = await Goal.create(req.body);
  res.status(201).send({ status: "SUCCESS", data: goal });
};

const updateGoal = async (req, res) => {
  const goal = await Goal.findOneAndUpdate(
    { _id: req.params.goalId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).send({ status: "SUCCESS", data: goal });
};

const deleteGoal = async (req, res) => {
  const goal = await Goal.findOneAndDelete({ _id: req.params.goalId });
  res.status(201).send({ status: "SUCCESS", data: goal });
};

module.exports = {
  getAllGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
