const express = require("express");
const router = express.Router();
const {
  getAllHabits,
  getHabit,
  createHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habits");

router.route("/").get(getAllHabits);
router.route("/:habitId").get(getHabit);
router.route("/").post(createHabit);
router.route("/:habitId").patch(updateHabit);
router.route("/:habitId").delete(deleteHabit);

module.exports = router;
