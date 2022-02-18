const express = require("express");
const chalk = require("chalk");

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandling");
const { connectDB } = require("./config/db");

connectDB();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
