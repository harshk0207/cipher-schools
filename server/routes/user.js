const express = require("express");
const router = express.Router();
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const {User} = require("../models/User");

router.post("/updateProfile", auth, async (req, res) => {
  const profile  = req.body;
  try {
    const user = await User.findById(req.user.id).select("-password");
    user.first_name = profile.first_name;
    user.last_name = profile.last_name;
    await user.save();
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

router.post("/updateAboutMe", auth, async (req, res) => {
  const { aboutMe } = req.body;
  // console.log(req.body,'wnnlwjesdbjw ekja')
  try {
    const user = await User.findById(req.user.id).select("-password");
    user.aboutMe = aboutMe;
    console.log(user);
    await user.save();
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

router.post("/updateSocials", auth, async (req, res) => {
  const socials  = req.body;
  try {
    const user = await User.findById(req.user.id).select("-password");
    user.socials = socials;
    await user.save();
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

router.post("/updateProfessionalInfo", auth, async (req, res) => {
  const professionalInfo = req.body;
  try {
    const user = await User.findById(req.user.id).select("-password");
    user.professionalInfo = professionalInfo;
    await user.save();
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

router.post("/updateInterests", auth, async (req, res) => {
  const interests = req.body;
  try {
    const user = await User.findById(req.user.id).select("-password");
    user.interests = interests;
    await user.save();
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

router.post("/updatePassword", auth, async (req, res) => {
  const { curPassword ,confirmPassword,newPassword} = req.body;
  if (
    (curPassword != undefined &&
      (newPassword === undefined || confirmPassword === undefined)) ||
    (newPassword != undefined && confirmPassword === undefined) ||
    (newPassword === undefined && confirmPassword != undefined)
  )
    return res.status(400).send("Password fields are not filled properly");

 if (newPassword != undefined && curPassword === newPassword)
    return res.status(400).send("New password and old password are same");
  if (confirmPassword != undefined && newPassword != confirmPassword)
    return res
      .status(400)
      .send("New password and confirm password are not same");
  try {
    const user = await User.findById(req.user.id);
    const isMatch = await bcrypt.compare(curPassword, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});
//create api to get all user details
router.get("/getProfile", auth, async (req, res) => {
  try {
    const user =await User.find().select("-password");
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

//create api to get details of all my followers 
router.get("/getFollowers", auth, async (req, res) => {
  const followerDetails = [];
  try {
    for(let i=0;i<req.user.followers.length;i++){
      const user =await User.findById(req.user.followers[i]).select("-password");
      followerDetails.push(user);
    }
    return res.send(followerDetails);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

router.post("/follow", auth, async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id).select("-password");
    user.followers.push(req.user.id);
    await user.save();
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

router.post("/unfollow", auth, async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id).select("-password");
    user.followers = user.followers.filter((item) => item != req.user.id);
    await user.save();
    return res.send(user);
  } catch (error) {
    // If there is an error, return it
    console.log(error.message);
    return res.status(500).send("Something went wrong");
  }
});

module.exports = router;
