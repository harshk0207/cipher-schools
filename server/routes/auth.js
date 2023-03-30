const express = require("express");
const router = express.Router();
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { User, validateUser } = require("../models/User");

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Validate request body
  //   const { error } = Joi.object({
  //     email: Joi.string().email().required(),
  //     password: Joi.string().min(6).max(30).required(),
  //   }).validate(req.body);

  //   if (error) return res.status(400).send(error.details[0].message);

  try {
    // Check if user exists
    const curr = await User.findOne({ email });

    // If user doesn't exist, return error
    if (!curr || !(await bcrypt.compare(password, curr.password)))
      return res.status(400).send("Invalid user name or password");

    // If user exists, create the payload and token
    const payload = {
      id: curr.id,
    };

    const token = jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 60 * 60 * 24 * 14,
    });

    // Send the token as a cookie
    res.cookie("token", token);
    res.send("Logged in");
  } catch (err) {
    // If there is an error, log it and return error
    console.log(err.message);
    res.status(500).send("Something went wrong");
  }
});

// @route   DELETE api/auth
// @desc    Logout user
// @access  Private
router.delete("/", auth, async (req, res) => {
  // Clear the cookie
  res.clearCookie("token");
  res.send("Logout");
});

module.exports = router;
