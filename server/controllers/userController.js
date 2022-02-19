const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const registerUser = asyncHandler( async(req, res) => {
	const { name, email, password } = req.body;
	if (!email || !name || !password) {
		res.status(400);
		throw new Error("Required fields.");
	}
	const userExist = await User.findOne({ email });

	if (userExist) {
		res.status(400);
		throw new Error(" Email already exists.");
	}

	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		name,
		email,
		password: hashPassword,
	});

	if(user){
		res.status(201).json({
			_id: user.id,
			name: new.name,
			email: user.email
		})
	}else{
		res.status(400)
		throw new Error('invalid user data')
	}

})

const loginUser = asyncHandler(async (req, res) => {
	res.json({ message: "logged in" });
})

const getSelf = (req, res) => {
	res.json({ message: "myself in" });
};

module.exports = { registerUser, loginUser, getSelf };
