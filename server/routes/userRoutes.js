const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getSelf } = require("../controllers/userController.js");

console.log("route");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/self", getSelf);

module.exports = router;
