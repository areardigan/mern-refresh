const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getSelf } = require("../controllers/userController.js");
const { protectUser } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/self", protectUser, getSelf);

module.exports = router;
