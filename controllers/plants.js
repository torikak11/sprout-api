const Plant = require("../models/Plant");
const CustomAPIError = require("../errors/custom-error");

const getAllPlants = async (req, res) => {
  const plants = await Plant.find();
  res.status(201).json({ plants });
};

const getPlant = async (req, res) => {
  const plant = await Plant.findOne({ _id: req.params.plantId });
  if (!plant) {
    throw new CustomAPIError("Plant not found", 404);
  }
  res.status(201).json({ plant });
};

module.exports = { getAllPlants, getPlant };
