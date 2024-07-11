const User = require('../models/userModel');
const express = require('express');
const jwt = require('jsonwebtoken'); 
const router = express.Router();

router.post('/login', async (req, res) => {

    const {email, password} = req.body;

try {
      const user = await User.findOne({email});

      //not found 
      if(!user){
        res.status(404).json('User not found!');
      }
      if(user){

        if(password == user.password){

            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        }
      }
    
    } catch (error) {
      console.error('error: not logging in', error);
      res.status(500).json({ error: 'failed to login' });
    }
});

module.exports = router;