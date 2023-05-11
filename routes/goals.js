const express = require("express");
const router = express.Router();
const {
  getAllGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goals");

router.route("/").get(getAllGoals);
router.route("/:goalId").get(getGoal);
router.route("/").post(createGoal);
router.route("/:goalId").patch(updateGoal);
router.route("/:goalId").delete(deleteGoal);

module.exports = router;
