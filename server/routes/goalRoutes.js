const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
	res.status(200).json({ message: "get" });
});

router.post("/", (req, res) => {
	res.status(200).json({ message: "create" });
});

router.patch("/", (req, res) => {
	res.status(200).json({ message: "fix" });
});

router.delete("/", (req, res) => {
	res.status(200).json({ message: "remove" });
});

module.exports = router