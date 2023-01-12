const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../model/User.model.js");
const jwt = require("jsonwebtoken");
const jwtKey = "@420";

const userController = express.Router();

//for Signup
userController.post("/reg", (req, res) => {
  const payload = req.body;
  const { email, password } = payload;

  bcrypt.hash(password, 8, async function (error, hashed_pass) {
    if (error) {
      console.log("Something went wrong, Please try again");
    } else {
      const user = new UserModel({
        email,
        password: hashed_pass,
    
      });
      await user.save();
      res.send("Register Successful");
    }
  });
});

module.exports = userController;