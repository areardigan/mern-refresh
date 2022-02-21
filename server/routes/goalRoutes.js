const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");

const { protectUser } = require("../middleware/authMiddleware");

router.route("/").get(protectUser, getGoals).post(protectUser, setGoal);
router.route("/:id").delete(protectUser, deleteGoal).put(protectUser, updateGoal);

module.exports = router;
