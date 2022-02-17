const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "get message from controller" });
});

const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please add text");
	}
	res.status(200).json({ message: "create message from controller" });
});

const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "update message from controller" });
});

const deleteGoal = asyncHandler((req, res) => {
	res.status(200).json({ message: "delete message from controller" });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
