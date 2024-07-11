const User = require('../models/userModel');
const express = require('express');
const router = express.Router();
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
    const { username, password , fname ,lname ,email,phoneno , lat ,longi } = req.body;
    try {
      // HASH THE PASSWORD
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      console.log(hashedPassword);
  
      // CREATE A NEW USER AND SAVE TO DB
      const newUser = await User.create({
        data: {
          username,
          password: hashedPassword,
          email,
          name: {
            first: fname,
            last: lname,
          },
          phone: phoneno,
          location: {
            lat,
            long: longi,
          },
        },
      });
  
      console.log(newUser);
  
      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to create user!" });
    }
  };
module.exports = router;