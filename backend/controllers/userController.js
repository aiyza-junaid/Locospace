const User = require('../models/userModel');
const bcrypt = require("bcrypt") ;



exports.signUp = async (req, res) => {
    const { username, password , name ,email,community, address, profilePicture, contact , lat ,longi } = req.body;
   
    try {
      // HASH THE PASSWORD
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // CREATE A NEW USER AND SAVE TO DB
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
        contact,
        address,
        community,
        profilePicture,
        name,
        lat,    
        longi   
      });
  
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to create user!" });
    }
}