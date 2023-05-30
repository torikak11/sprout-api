const express = require("express");
const router = express.Router();
const {
  getAllPlants,
  getPlant,
} = require("../controllers/plants");

router.route("/").get(getAllPlants);
router.route("/:plantId").get(getPlant);

module.exports = router;
