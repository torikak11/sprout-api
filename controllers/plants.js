const Plant = require("../models/Plant");

const getAllPlants = async (req, res) => {
  const plants = await Plant.find();
  res.status(201).json({ plants });
};

const getPlant = async (req, res) => {
  const plant = await Plant.findOne({ _id: req.params.plantId });
  res.status(201).json({ plant });
};

const createPlant = async (req, res) => {
  const plant = await Plant.create(req.body);
  res.status(201).json({ plant });
};

module.exports = { getAllPlants, getPlant, createPlant };
