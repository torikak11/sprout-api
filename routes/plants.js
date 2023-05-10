const express = require("express");
const router = express.Router();
const {
  getAllPlants,
  getPlant,
  createPlant,
} = require("../controllers/plants");

router.route("/").get(getAllPlants);
router.route("/:plantId").get(getPlant);
router.route("/").post(createPlant);

module.exports = router;
