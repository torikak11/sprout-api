const Plant = require("../models/Plant");
const CustomAPIError = require("../errors/custom-error");
const { NotFoundError } = require("../errors");

const getAllPlants = async (req, res) => {
  const plants = await Plant.find();
  res.status(201).json({ plants });
};

const getPlant = async (req, res) => {
  const plant = await Plant.findOne({ _id: req.params.plantId });
  if (!plant) {
    throw new NotFoundError("Plant not found");
  }
  res.status(201).json({ plant });
};

module.exports = { getAllPlants, getPlant };
