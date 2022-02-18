const mongoose = require("mongoose");
const chalk = require("chalk");

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI);
		console.log(chalk.blue.bold(`MongoDB connected: ${connect.connection.host}`));
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = { connectDB };
