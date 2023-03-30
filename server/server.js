/**
 * Imports
 */
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");

/**
 * Database
 */
const connectDB = require("./config/db");
connectDB();

/**
 * Set Port
 */
const port = process.env.PORT || 4000;

/**
 * Initialize Express
 */
const app = express();

/**
 * Middlewares
 */
app.use(express.json({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(compression({ level: 5 }));

/**
 * Routes
 */
app.use("/api/register", require("./routes/register"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));


/**
 * Listen to port
 */
app.listen(port, () => console.log(`Listening on port ${port}`));
