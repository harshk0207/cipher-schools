const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User, validateUser } = require("../models/User");

// @route   POST api/register
// @desc    Register a patient
// @access  Public
router.post("/", async (req, res) => {
  const {
    email,
    first_name,
    last_name,
    password,
    cnf_password,
  } = req.body;

  // Validation of request body
  const form = {
    email,
    first_name,
    last_name,
    password,
  };
  const { error } = validateUser(form);

  if (error) return res.status(400).send(error.details[0].message);

  if (cnf_password != password)
    return res.status(400).send("Passwords do no match");

  try {
    // Check if user with same credentials already exist
    if ((await User.findOne({ email })) !== null)
      return res.status(401).send("Email already exist");

    // Hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // Create a new user and save it to the database
    let user = new User({
      first_name,
      last_name,
      email,
      password: hashedPass,
    });
    await user.save();

    // Create a JWT token and send it to the client as a cookie
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 60 * 60 * 24 * 14,
    });

    res.cookie("token", token);
    res.status(200).send("Registered");

  } catch (err) {
    // logs the error message to the console
    console.log(err.message);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
